import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LlistaTasquesComponent } from './components/llista-tasques/llista-tasques.component';
import { FiltresTasquesComponent } from './components/filtres-tasques/filtres-tasques.component';
import type { FiltresTasques } from './components/filtres-tasques/filtres-tasques.component';
import { TASQUES_MOCK } from './mocks/tasques.mock';
import type { Tasca } from './models/tasca.model';
import { DatePipe } from '@angular/common';

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
  public readonly nomAplicacio = 'Gestor de Reformes';
  public readonly tasques = TASQUES_MOCK;

  public tasquesVisibles: Tasca[] = this.tasques;
  public tascaSeleccionada: Tasca | null = null;

  public seleccionarTasca(tasca: Tasca): void {
    this.tascaSeleccionada = tasca;
  }

  public aplicarFiltres(filtres: FiltresTasques): void {
    const text = filtres.text.trim().toLowerCase();

    this.tasquesVisibles = this.tasques.filter((tasca) => {
      const contingut = (
        tasca.titol + ' ' + tasca.descripcio
      ).toLowerCase();

      const coincideixText = contingut.includes(text);

      const coincideixCategoria =
        filtres.categoria === ''
        || tasca.categoria === filtres.categoria;

      return coincideixText && coincideixCategoria;
    });

    const idSeleccionat = this.tascaSeleccionada?.id;

    if (!this.tasquesVisibles.some(
      (tasca) => tasca.id === idSeleccionat
    )) {
      this.tascaSeleccionada = null;
    }
  }

  public restablirFiltres(): void {
    this.tasquesVisibles = this.tasques;
    this.tascaSeleccionada = null;
  }
}