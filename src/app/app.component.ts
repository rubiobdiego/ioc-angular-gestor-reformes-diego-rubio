import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LlistaTasquesComponent } from './components/llista-tasques/llista-tasques.component';
import { FiltresTasquesComponent } from './components/filtres-tasques/filtres-tasques.component';
import type { FiltresTasques } from './components/filtres-tasques/filtres-tasques.component';
import { TasquesService } from './services/tasques.service';
import type { Tasca } from './models/tasca.model';

@Component({
  imports: [
    RouterOutlet,
    DatePipe,
    LlistaTasquesComponent,
    FiltresTasquesComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  public readonly serveiTasques = inject(TasquesService);
  public readonly nomAplicacio = 'Gestor de Reformes';

  private readonly dades = signal<Tasca[]>([]);

  private readonly criteris = signal<FiltresTasques>({
    text: '',
    categoria: '',
  });

  private readonly visibles = computed(() => {
    const filtres = this.criteris();
    const text = filtres.text.trim().toLowerCase();

    return this.dades().filter((tasca) => {
      const contingut = (
        tasca.titol + ' ' + tasca.descripcio
      ).toLowerCase();

      const coincideixText = contingut.includes(text);

      const coincideixCategoria =
        filtres.categoria === ''
        || tasca.categoria === filtres.categoria;

      return coincideixText && coincideixCategoria;
    });
  });

  public tascaSeleccionada: Tasca | null = null;

  public get tasques(): Tasca[] {
    return this.dades();
  }

  public get tasquesVisibles(): Tasca[] {
    return this.visibles();
  }

  constructor() {
    this.serveiTasques.obtenirTasques()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (tasques) => {
          this.dades.set(tasques);
        },
        error: (error: unknown) => {
          console.error(
            "No s'han pogut carregar les tasques.",
            error
          );
        },
      });
  }

  public seleccionarTasca(tasca: Tasca): void {
    this.tascaSeleccionada = tasca;
  }

  public aplicarFiltres(filtres: FiltresTasques): void {
    this.criteris.set(filtres);

    const idSeleccionat = this.tascaSeleccionada?.id;

    if (!this.tasquesVisibles.some(
      (tasca) => tasca.id === idSeleccionat
    )) {
      this.tascaSeleccionada = null;
    }
  }

  public restablirFiltres(): void {
    this.criteris.set({
      text: '',
      categoria: '',
    });

    this.tascaSeleccionada = null;
  }
}