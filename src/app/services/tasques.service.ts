import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import type { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import type { TascaApi } from '../models/tasca-api.model';
import type { Tasca } from '../models/tasca.model';
import { adaptarTascaApi } from '../adaptadors/tasca.adaptador';

@Injectable({
  providedIn: 'root',
})
export class TasquesService {
  private readonly http = inject(HttpClient);

  public obtenirTasquesApi(): Observable<TascaApi[]> {
    return this.http.get<TascaApi[]>(
      `${environment.apiUrl}/tasques`
    );
  }

  public obtenirTasques(): Observable<Tasca[]> {
    return this.obtenirTasquesApi().pipe(
      map((tasques) => tasques.map(adaptarTascaApi))
    );
  }
}