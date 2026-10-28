import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import type { Tasca } from '../../models/tasca.model';
import { EtiquetaCategoriaComponent } from '../etiqueta-categoria/etiqueta-categoria.component';

@Component({
  selector: 'app-targeta-tasca',
  standalone: true,
  imports: [DatePipe, EtiquetaCategoriaComponent],
  templateUrl: './targeta-tasca.component.html',
  styleUrl: './targeta-tasca.component.scss',
})
export class TargetaTascaComponent {
  @Input({ required: true }) public tasca!: Tasca;
  @Input() public seleccionada = false;

  @Output() public readonly seleccionar = new EventEmitter<Tasca>();
}