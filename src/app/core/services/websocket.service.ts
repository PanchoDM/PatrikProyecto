import { Injectable, OnDestroy, signal } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FlightState } from '../models/flight.model';

/**
 * Cliente STOMP sobre SockJS. Mantiene sincronizados al segundo los
 * cronometros de todas las pantallas conectadas (Torre de Control y
 * detalle de vuelo), y entrega los mensajes de Push web en tiempo real.
 */
@Injectable({ providedIn: 'root' })
export class WebSocketService implements OnDestroy {
  private client: Client | null = null;
  readonly connected = signal(false);

  private readonly dashboardSubject = new Subject<FlightState>();
  readonly dashboard$ = this.dashboardSubject.asObservable();

  connect(): void {
    if (this.client) {
      return;
    }

    this.client = new Client({
      webSocketFactory: () => new SockJS(environment.wsUrl) as unknown as WebSocket,
      reconnectDelay: 3000,
      onConnect: () => {
        this.connected.set(true);
        this.client?.subscribe('/topic/torre-control', (message: IMessage) => {
          this.dashboardSubject.next(JSON.parse(message.body) as FlightState);
        });
      },
      onDisconnect: () => this.connected.set(false),
      onWebSocketClose: () => this.connected.set(false),
    });

    this.client.activate();
  }

  /** Estado en tiempo real de un vuelo puntual. */
  watchFlight(flightId: string): Observable<FlightState> {
    return new Observable<FlightState>((subscriber) => {
      if (!this.client) {
        this.connect();
      }
      const trySubscribe = () => {
        if (!this.client?.connected) {
          setTimeout(trySubscribe, 200);
          return;
        }
        const sub = this.client.subscribe(`/topic/flights/${flightId}`, (message: IMessage) => {
          subscriber.next(JSON.parse(message.body) as FlightState);
        });
        subscriber.add(() => sub.unsubscribe());
      };
      trySubscribe();
    });
  }

  /** Alertas Push web dirigidas a un usuario (operador/supervisor). */
  watchPush(userId: string): Observable<Record<string, unknown>> {
    return new Observable((subscriber) => {
      if (!this.client) {
        this.connect();
      }
      const trySubscribe = () => {
        if (!this.client?.connected) {
          setTimeout(trySubscribe, 200);
          return;
        }
        const sub = this.client.subscribe(`/topic/push/${userId}`, (message: IMessage) => {
          subscriber.next(JSON.parse(message.body));
        });
        subscriber.add(() => sub.unsubscribe());
      };
      trySubscribe();
    });
  }

  ngOnDestroy(): void {
    this.client?.deactivate();
  }
}
