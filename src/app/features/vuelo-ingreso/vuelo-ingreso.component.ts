import { Component, computed, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError, concatMap, from, map, of, switchMap } from 'rxjs';
import readXlsxFile from 'read-excel-file/browser';
import type { Row } from 'read-excel-file/browser';
import { FlightService } from '../../core/services/flight.service';
import { FLIGHT_NUMBER_PATTERN } from '../../core/models/flight.model';
import { FlatpickrDatetimeDirective } from '../../shared/directives/flatpickr-datetime.directive';

interface ImportedFlightRow {
  flightNumber: string;
  eta: Date;
}

interface ImportRowResult {
  flightNumber: string;
  status: 'pending' | 'ok' | 'error';
  message?: string;
}

const FLIGHT_COLUMN_ALIASES = ['numerodevuelo', 'nvuelo', 'nrovuelo', 'vuelo', 'flightnumber', 'numero'];
const ETA_COLUMN_ALIASES = [
  'eta',
  'horaestimadadellegada',
  'horaestimada',
  'fechaeta',
  'fechayhoraeta',
  'fechahoraeta',
];

function normalizeHeader(value: unknown): string {
  // NFD splits accented letters into base + combining mark; the final
  // strip drops the combining mark along with spaces/punctuation.
  return String(value ?? '')
    .normalize('NFD')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

@Component({
  selector: 'app-vuelo-ingreso',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, FlatpickrDatetimeDirective],
  templateUrl: './vuelo-ingreso.component.html',
  styleUrl: './vuelo-ingreso.component.css',
})
export class VueloIngresoComponent {
  private readonly flightService = inject(FlightService);
  private readonly router = inject(Router);

  readonly form = new FormGroup({
    flightNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(FLIGHT_NUMBER_PATTERN)],
    }),
    conCarga: new FormControl<boolean>(true, { nonNullable: true }),
    eta: new FormControl<Date | null>(null, { validators: [Validators.required] }),
  });

  readonly submitting = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly importing = signal(false);
  readonly importError = signal<string | null>(null);
  readonly importResults = signal<ImportRowResult[] | null>(null);

  readonly prefixValid = computed(() => {
    const raw = this.form.controls.flightNumber.value ?? '';
    return FLIGHT_NUMBER_PATTERN.test(raw.trim().toUpperCase());
  });

  constructor() {
    this.form.controls.eta.disable();
    this.form.controls.conCarga.disable();
    this.form.controls.flightNumber.valueChanges.subscribe((value) => {
      const upper = (value ?? '').toUpperCase();
      if (upper !== value) {
        this.form.controls.flightNumber.setValue(upper, { emitEvent: false });
      }
      if (FLIGHT_NUMBER_PATTERN.test(upper.trim())) {
        this.form.controls.eta.enable({ emitEvent: false });
        this.form.controls.conCarga.enable({ emitEvent: false });
      } else {
        this.form.controls.eta.disable({ emitEvent: false });
        this.form.controls.conCarga.disable({ emitEvent: false });
      }
    });
  }

  cancel(): void {
    this.router.navigateByUrl('/torre-control');
  }

  submit(): void {
    if (this.form.invalid || this.submitting()) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.errorMessage.set(null);

    const { flightNumber, conCarga, eta } = this.form.getRawValue();
    const etaIso = eta!.toISOString();

    this.flightService
      .createFlight(flightNumber, conCarga)
      .pipe(switchMap((created) => this.flightService.setEta(created.id, etaIso)))
      .subscribe({
        next: () => this.router.navigateByUrl('/torre-control'),
        error: (err) => {
          this.submitting.set(false);
          console.error('Error al registrar vuelo:', err);
          this.errorMessage.set(this.extractErrorMessage(err));
        },
      });
  }

  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    input.value = '';
    if (!file) {
      return;
    }

    this.importing.set(true);
    this.importError.set(null);
    this.importResults.set(null);

    let rows: Row[];
    try {
      const sheets = await readXlsxFile(file);
      rows = sheets[0]?.data ?? [];
    } catch (err) {
      console.error('Error al leer el archivo Excel:', err);
      this.importError.set('No se pudo leer el archivo. Verifique que sea un Excel (.xlsx) valido.');
      this.importing.set(false);
      return;
    }

    const parsedRows = this.parseImportRows(rows);
    if (parsedRows === null) {
      this.importError.set(
        'No se encontraron las columnas "Numero de vuelo" y "ETA" en la primera fila del archivo.',
      );
      this.importing.set(false);
      return;
    }
    if (parsedRows.length === 0) {
      this.importError.set('El archivo no tiene filas validas para importar.');
      this.importing.set(false);
      return;
    }

    this.processImportRows(parsedRows);
  }

  private parseImportRows(rows: Row[]): ImportedFlightRow[] | null {
    if (rows.length < 2) {
      return [];
    }

    const header = rows[0].map((cell) => normalizeHeader(cell));
    const flightIdx = header.findIndex((h) => FLIGHT_COLUMN_ALIASES.includes(h));
    const etaIdx = header.findIndex((h) => ETA_COLUMN_ALIASES.includes(h));
    if (flightIdx === -1 || etaIdx === -1) {
      return null;
    }

    const parsed: ImportedFlightRow[] = [];
    for (const row of rows.slice(1)) {
      const rawFlight = row[flightIdx];
      const rawEta = row[etaIdx];
      if (rawFlight == null || rawEta == null) {
        continue;
      }

      const flightNumber = String(rawFlight).trim().toUpperCase();
      if (!FLIGHT_NUMBER_PATTERN.test(flightNumber)) {
        continue;
      }

      const eta = rawEta instanceof Date ? rawEta : new Date(String(rawEta));
      if (Number.isNaN(eta.getTime())) {
        continue;
      }

      parsed.push({ flightNumber, eta });
    }
    return parsed;
  }

  private processImportRows(rows: ImportedFlightRow[]): void {
    this.importResults.set(rows.map((row) => ({ flightNumber: row.flightNumber, status: 'pending' })));

    from(rows)
      .pipe(
        concatMap((row, index) =>
          this.flightService.createFlight(row.flightNumber).pipe(
            switchMap((created) => this.flightService.setEta(created.id, row.eta.toISOString())),
            map(() => ({ index, ok: true as const, message: undefined as string | undefined })),
            catchError((err) => of({ index, ok: false as const, message: this.extractErrorMessage(err) })),
          ),
        ),
      )
      .subscribe({
        next: ({ index, ok, message }) => {
          const updated = [...(this.importResults() ?? [])];
          updated[index] = {
            flightNumber: rows[index].flightNumber,
            status: ok ? 'ok' : 'error',
            message,
          };
          this.importResults.set(updated);
        },
        complete: () => this.importing.set(false),
      });
  }

  private extractErrorMessage(err: unknown): string {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 0) {
        return 'No se pudo conectar con el servidor. Verifique que el backend este activo y accesible.';
      }
      if (typeof err.error?.message === 'string') {
        return err.error.message;
      }
      if (typeof err.error === 'string' && err.error.trim()) {
        return err.error;
      }
      if (err.status === 409) {
        return 'Ese numero de vuelo ya esta registrado.';
      }
      return `No se pudo registrar el vuelo (error ${err.status}).`;
    }
    return 'No se pudo registrar el vuelo';
  }
}
