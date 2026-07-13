import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlightService } from '../../core/services/flight.service';
import { WebSocketService } from '../../core/services/websocket.service';
import { PushNotificationService } from '../../core/services/push-notification.service';
import { AuthService } from '../../core/services/auth.service';
import { FlightState } from '../../core/models/flight.model';
import { FlightCardComponent } from '../flight-card/flight-card.component';

interface ToastMessage {
  type: 'success' | 'error';
  message: string;
}

@Component({
  selector: 'app-torre-control',
  standalone: true,
  imports: [RouterLink, FormsModule, FlightCardComponent],
  templateUrl: './torre-control.component.html',
  styleUrl: './torre-control.component.css',
})
export class TorreControlComponent implements OnInit, OnDestroy {
  private readonly flightService = inject(FlightService);
  private readonly ws = inject(WebSocketService);
  private readonly push = inject(PushNotificationService);
  private readonly auth = inject(AuthService);

  private readonly flightsMap = signal<Map<string, FlightState>>(new Map());
  readonly flights = computed(() =>
    Array.from(this.flightsMap().values()).sort((a, b) => a.flightNumber.localeCompare(b.flightNumber)),
  );

  readonly loading = signal(true);
  readonly connected = this.ws.connected;

  // --- Top Metrics -----------------------------------------------------
  readonly flightsHoy = signal(0);
  readonly liveStats = computed(() => {
    const list = this.flights();
    const enProceso = list.filter((f) => f.status !== 'ESPERANDO_ETA').length;
    const criticos = list.filter((f) => f.timers.some((t) => t.level === 'CRITICO' || t.level === 'VENCIDO')).length;
    const eficiencia = enProceso === 0 ? 100 : Math.round(((enProceso - criticos) / enProceso) * 1000) / 10;
    return { enProceso, criticos, eficiencia };
  });

  // --- Sincronizacion desde Google Sheets (CSV) -------------------------
  readonly syncUrl = signal('');
  readonly syncing = signal(false);
  readonly toast = signal<ToastMessage | null>(null);
  private toastTimeoutId?: ReturnType<typeof setTimeout>;

  private dashboardSub?: Subscription;

  ngOnInit(): void {
    this.reloadFlights();
    this.refreshStats();

    this.ws.connect();
    this.dashboardSub = this.ws.dashboard$.subscribe((flight) => this.upsert(flight));

    const userId = this.auth.userId;
    if (userId) {
      void this.push.start(userId);
    }
  }

  ngOnDestroy(): void {
    this.dashboardSub?.unsubscribe();
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }
  }

  syncFromSheet(): void {
    const url = this.syncUrl().trim();
    if (!url || this.syncing()) {
      return;
    }

    this.syncing.set(true);
    this.flightService.syncFromSheet(url).subscribe({
      next: (result) => {
        this.syncing.set(false);
        const parts = [`${result.creados} creados`, `${result.actualizados} actualizados`];
        if (result.omitidos > 0) parts.push(`${result.omitidos} omitidos`);
        if (result.errores > 0) parts.push(`${result.errores} con error`);
        this.showToast(result.errores > 0 ? 'error' : 'success', `Sincronizacion completa: ${parts.join(', ')}.`);
        this.reloadFlights();
        this.refreshStats();
      },
      error: (err) => {
        this.syncing.set(false);
        this.showToast('error', this.extractErrorMessage(err));
      },
    });
  }

  dismissToast(): void {
    this.toast.set(null);
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }
  }

  private reloadFlights(): void {
    this.loading.set(true);
    this.flightService.listActive().subscribe({
      next: (flights) => {
        this.flightsMap.set(new Map(flights.map((f) => [f.id, f])));
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  private refreshStats(): void {
    this.flightService.getStats().subscribe({
      next: (stats) => this.flightsHoy.set(stats.flightsHoy),
      error: () => undefined,
    });
  }

  private upsert(flight: FlightState): void {
    const next = new Map(this.flightsMap());
    if (flight.status === 'COMPLETADO') {
      next.delete(flight.id);
    } else {
      next.set(flight.id, flight);
    }
    this.flightsMap.set(next);
  }

  private showToast(type: 'success' | 'error', message: string): void {
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }
    this.toast.set({ type, message });
    this.toastTimeoutId = setTimeout(() => this.toast.set(null), 6000);
  }

  private extractErrorMessage(err: unknown): string {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 0) {
        return 'No se pudo conectar con el servidor.';
      }
      if (typeof err.error?.message === 'string') {
        return err.error.message;
      }
      if (typeof err.error === 'string' && err.error.trim()) {
        return err.error;
      }
    }
    return 'No se pudo sincronizar. Verifique la URL del CSV.';
  }
}
