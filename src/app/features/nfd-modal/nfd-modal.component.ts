import { AfterViewInit, Component, ElementRef, input, output, signal, viewChild } from '@angular/core';

declare const bootstrap: {
  Modal: new (el: Element, opts?: Record<string, unknown>) => { show(): void; hide(): void };
};

export interface NfdAnswers {
  anticipado: boolean;
  correos: boolean;
}

/** Cuestionario NFD obligatorio, disparado apenas se confirma el termino de descarga. */
@Component({
  selector: 'app-nfd-modal',
  standalone: true,
  templateUrl: './nfd-modal.component.html',
})
export class NfdModalComponent implements AfterViewInit {
  readonly flightNumber = input.required<string>();
  readonly answered = output<NfdAnswers>();

  private readonly modalRoot = viewChild.required<ElementRef<HTMLElement>>('modalRoot');
  private bsModal?: { show(): void; hide(): void };

  readonly anticipado = signal<boolean | null>(null);
  readonly correos = signal<boolean | null>(null);
  readonly incomplete = signal(false);

  ngAfterViewInit(): void {
    this.bsModal = new bootstrap.Modal(this.modalRoot().nativeElement, {
      backdrop: 'static',
      keyboard: false,
    });
  }

  show(): void {
    this.anticipado.set(null);
    this.correos.set(null);
    this.incomplete.set(false);
    this.bsModal?.show();
  }

  setAnticipado(value: boolean): void {
    this.anticipado.set(value);
  }

  setCorreos(value: boolean): void {
    this.correos.set(value);
  }

  confirm(): void {
    const a = this.anticipado();
    const c = this.correos();
    if (a === null || c === null) {
      this.incomplete.set(true);
      return;
    }
    this.answered.emit({ anticipado: a, correos: c });
    this.bsModal?.hide();
  }
}
