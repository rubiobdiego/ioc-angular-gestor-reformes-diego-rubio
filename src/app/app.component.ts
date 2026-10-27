import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TASQUES_MOCK } from './mocks/tasques.mock';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  public readonly nomAplicacio = 'Gestor de Reformes';
  public readonly tasques = TASQUES_MOCK;
}