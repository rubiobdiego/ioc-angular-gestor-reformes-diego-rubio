import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasquesService {
  private readonly http = inject(HttpClient);

  public obtenirTasquesApi(): Observable<unknown[]> {
    return this.http.get<unknown[]>(
      `${environment.apiUrl}/tasques`
    );
  }
}