import { Injectable } from '@angular/core';
import { FlightState, TimerSnapshot, URGENT_THRESHOLD_SECONDS } from '../models/flight.model';

/**
 * Notificaciones nativas del sistema operativo cuando un cronometro cruza
 * el umbral critico (5 minutos), para que el operador se entere aunque
 * este en otra pestana o con el navegador minimizado.
 */
@Injectable({ providedIn: 'root' })
export class CriticalAlertService {
  /** Claves `${flightId}:${timerType}` ya notificadas, para no repetir cada segundo mientras siga urgente. */
  private readonly alerted = new Set<string>();

  get supported(): boolean {
    return typeof window !== 'undefined' && 'Notification' in window;
  }

  async requestPermission(): Promise<void> {
    if (!this.supported || Notification.permission !== 'default') {
      return;
    }
    await Notification.requestPermission();
  }

  /** Revisar el estado en vivo de los vuelos y disparar una notificacion la primera vez que cada cronometro cruza el umbral. */
  checkFlights(flights: FlightState[]): void {
    if (!this.supported || Notification.permission !== 'granted') {
      return;
    }

    const liveKeys = new Set<string>();

    for (const flight of flights) {
      for (const timer of flight.timers) {
        if (!timer.active || timer.remainingSeconds > URGENT_THRESHOLD_SECONDS) {
          continue;
        }
        const key = `${flight.id}:${timer.type}`;
        liveKeys.add(key);
        if (!this.alerted.has(key)) {
          this.alerted.add(key);
          this.fire(flight, timer);
        }
      }
    }

    // Libera las marcas de cronometros que ya no estan en zona critica
    // (se completaron o el vuelo salio de la lista activa), para que un
    // futuro cronometro con la misma clave pueda volver a alertar.
    for (const key of this.alerted) {
      if (!liveKeys.has(key)) {
        this.alerted.delete(key);
      }
    }
  }

  private fire(flight: FlightState, timer: TimerSnapshot): void {
    const notification = new Notification(`🚨 ¡Alerta Critica! Vuelo ${flight.flightNumber} a 5 minutos`, {
      body: `${timer.label}: quedan 5 minutos o menos.`,
      icon: '/favicon.ico',
      tag: `${flight.id}:${timer.type}`,
    });
    notification.onclick = () => {
      window.focus();
      notification.close();
    };
  }
}
