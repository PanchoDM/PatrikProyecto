import { Injectable, signal } from '@angular/core';
import { FlightState, URGENT_THRESHOLD_SECONDS } from '../models/flight.model';

// La API Document Picture-in-Picture aun no esta en los typings estandar
// de TypeScript/lib.dom. Se declara el contrato minimo que se usa.
declare global {
  interface Window {
    documentPictureInPicture?: {
      requestWindow(options?: { width?: number; height?: number }): Promise<Window>;
    };
  }
}

/**
 * Ventana flotante (Document Picture-in-Picture) con el resumen en vivo de
 * los cronometros activos, para dejarla siempre visible por encima de otras
 * aplicaciones mientras el operador trabaja en otra pantalla.
 */
@Injectable({ providedIn: 'root' })
export class PipTimersService {
  readonly supported = typeof window !== 'undefined' && 'documentPictureInPicture' in window;
  readonly isOpen = signal(false);

  private pipWindow: Window | null = null;
  private rowsContainer: HTMLDivElement | null = null;

  async open(): Promise<void> {
    if (!this.supported || this.isOpen()) {
      return;
    }

    const pipWindow = await window.documentPictureInPicture!.requestWindow({ width: 300, height: 360 });
    this.pipWindow = pipWindow;

    this.injectStyles(pipWindow.document);

    const container = pipWindow.document.createElement('div');
    container.className = 'pip-root';
    pipWindow.document.body.append(container);
    this.rowsContainer = container;

    pipWindow.addEventListener('pagehide', () => {
      this.pipWindow = null;
      this.rowsContainer = null;
      this.isOpen.set(false);
    });

    this.isOpen.set(true);
  }

  close(): void {
    this.pipWindow?.close();
  }

  /** Redibuja la ventana flotante con el estado en vivo. No hace nada si esta cerrada. */
  update(flights: FlightState[]): void {
    if (!this.pipWindow || !this.rowsContainer) {
      return;
    }

    const doc = this.pipWindow.document;
    this.rowsContainer.replaceChildren();
    let anyUrgent = false;

    for (const flight of flights) {
      for (const timer of flight.timers) {
        if (!timer.active) {
          continue;
        }
        const urgent = timer.remainingSeconds <= URGENT_THRESHOLD_SECONDS;
        anyUrgent = anyUrgent || urgent;

        const row = doc.createElement('div');
        row.className = urgent ? 'pip-row pip-row-urgent' : 'pip-row';

        const flightEl = doc.createElement('span');
        flightEl.className = 'pip-flight';
        flightEl.textContent = flight.flightNumber;

        const labelEl = doc.createElement('span');
        labelEl.className = 'pip-label';
        labelEl.textContent = timer.label;

        const timeEl = doc.createElement('span');
        timeEl.className = 'pip-time';
        timeEl.textContent = this.formatSeconds(timer.remainingSeconds);

        row.append(flightEl, labelEl, timeEl);
        this.rowsContainer.append(row);
      }
    }

    if (this.rowsContainer.childElementCount === 0) {
      const empty = doc.createElement('div');
      empty.className = 'pip-empty';
      empty.textContent = 'Sin cronometros activos';
      this.rowsContainer.append(empty);
    }

    doc.body.classList.toggle('pip-alert', anyUrgent);
  }

  private formatSeconds(totalSeconds: number): string {
    const overtime = totalSeconds < 0;
    const s = Math.abs(totalSeconds);
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;
    const base = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return overtime ? `+${base}` : base;
  }

  private injectStyles(doc: Document): void {
    const style = doc.createElement('style');
    style.textContent = `
      :root, body {
        margin: 0;
        height: 100%;
      }
      body {
        font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
        background: #16181d;
        color: #f4f4f5;
        transition: background-color 0.3s ease;
      }
      .pip-root {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.75rem;
      }
      .pip-row {
        display: grid;
        grid-template-columns: 4.5rem 1fr auto;
        align-items: center;
        gap: 0.5rem;
        padding: 0.4rem 0.6rem;
        border-radius: 0.5rem;
        background: #23262e;
        font-size: 0.8rem;
      }
      .pip-flight {
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .pip-label {
        color: #a1a1aa;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.02em;
      }
      .pip-time {
        font-variant-numeric: tabular-nums;
        font-weight: 700;
        font-size: 1rem;
      }
      .pip-row-urgent {
        background: #3f1d1d;
        box-shadow: 0 0 0 1px #ef4444;
      }
      .pip-row-urgent .pip-time {
        color: #ef4444;
      }
      .pip-empty {
        text-align: center;
        color: #a1a1aa;
        font-size: 0.8rem;
        padding: 1rem 0;
      }
      body.pip-alert {
        animation: pip-pulse 1s ease-in-out infinite;
      }
      @keyframes pip-pulse {
        0%, 100% { background-color: #16181d; }
        50% { background-color: #4c1414; }
      }
    `;
    doc.head.append(style);
  }
}
