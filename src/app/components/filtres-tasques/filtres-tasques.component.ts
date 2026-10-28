import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { NgForm } from '@angular/forms';
import type { CategoriaTasca } from '../../models/tasca.model';

export interface FiltresTasques {
  text: string;
  categoria: CategoriaTasca | '';
}

@Component({
  selector: 'app-filtres-tasques',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filtres-tasques.component.html',
  styleUrl: './filtres-tasques.component.scss',
})
export class FiltresTasquesComponent {
  public text = '';
  public categoria: CategoriaTasca | '' = '';

  public readonly categories: CategoriaTasca[] = [
    'Preparació',
    'Instal·lacions',
    'Acabats',
  ];

  @Output()
  public readonly aplicarFiltres = new EventEmitter<FiltresTasques>();

  @Output()
  public readonly restablirFiltres = new EventEmitter<void>();

  public get cercaValida(): boolean {
    return this.text.trim().length >= 3;
  }

  public aplicar(formulari: NgForm): void {
    if (formulari.invalid || !this.cercaValida) {
      return;
    }

    this.aplicarFiltres.emit({
      text: this.text.trim(),
      categoria: this.categoria,
    });
  }

  public restablir(formulari: NgForm): void {
    this.text = '';
    this.categoria = '';
    formulari.resetForm({ text: '', categoria: '' });
    this.restablirFiltres.emit();
  }
}