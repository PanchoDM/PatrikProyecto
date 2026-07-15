import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FlightState, FlightStats, SyncResult } from '../models/flight.model';

@Injectable({ providedIn: 'root' })
export class FlightService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/flights`;

  listActive(): Observable<FlightState[]> {
    return this.http.get<FlightState[]>(this.baseUrl);
  }

  getStats(): Observable<FlightStats> {
    return this.http.get<FlightStats>(`${this.baseUrl}/stats`);
  }

  /** Vuelos con ETA en [from, to). Incluye completados: es una vista historica por fecha. */
  getByRange(from: Date, to: Date): Observable<FlightState[]> {
    const params = { from: from.toISOString(), to: to.toISOString() };
    return this.http.get<FlightState[]>(`${this.baseUrl}/by-range`, { params });
  }

  syncFromSheet(csvUrl: string): Observable<SyncResult> {
    return this.http.post<SyncResult>(`${this.baseUrl}/sync`, { csvUrl });
  }

  getState(id: string): Observable<FlightState> {
    return this.http.get<FlightState>(`${this.baseUrl}/${id}`);
  }

  createFlight(flightNumber: string, conCarga: boolean = true): Observable<FlightState> {
    return this.http.post<FlightState>(this.baseUrl, { flightNumber, conCarga });
  }

  setEta(id: string, eta: string): Observable<FlightState> {
    return this.http.post<FlightState>(`${this.baseUrl}/${id}/eta`, { eta });
  }

  /** @param ata Hora real de arribo (ISO), no necesariamente el momento del clic. */
  registerAta(id: string, ata: string): Observable<FlightState> {
    return this.http.post<FlightState>(`${this.baseUrl}/${id}/ata`, { ata });
  }

  confirmDescarga(id: string): Observable<FlightState> {
    return this.http.post<FlightState>(`${this.baseUrl}/${id}/descarga`, {});
  }

  submitNfd(id: string, anticipado: boolean, correos: boolean): Observable<FlightState> {
    return this.http.post<FlightState>(`${this.baseUrl}/${id}/nfd`, { anticipado, correos });
  }

  completeTarja(id: string): Observable<FlightState> {
    return this.http.post<FlightState>(`${this.baseUrl}/${id}/tarja`, {});
  }
}
