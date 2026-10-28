import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Tasca } from '../../models/tasca.model';
import { TargetaTascaComponent } from '../targeta-tasca/targeta-tasca.component';

@Component({
  selector: 'app-llista-tasques',
  standalone: true,
  imports: [TargetaTascaComponent],
  templateUrl: './llista-tasques.component.html',
  styleUrl: './llista-tasques.component.scss',
})
export class LlistaTasquesComponent {
  @Input({ required: true }) public tasques: Tasca[] = [];
  @Input() public idSeleccionat: number | null = null;

  @Output() public readonly seleccionar = new EventEmitter<Tasca>();
}