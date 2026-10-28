import { Component, Input } from '@angular/core';
import type { CategoriaTasca } from '../../models/tasca.model';

@Component({
  selector: 'app-etiqueta-categoria',
  standalone: true,
  imports: [],
  templateUrl: './etiqueta-categoria.component.html',
  styleUrl: './etiqueta-categoria.component.scss',
})
export class EtiquetaCategoriaComponent {
  @Input({ required: true }) public categoria!: CategoriaTasca;
}