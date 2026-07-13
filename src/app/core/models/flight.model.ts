export type FlightPrefix = 'LA' | 'UC';

export type FlightStatus =
  | 'ESPERANDO_ETA'
  | 'ESPERANDO_ATA'
  | 'EN_DESCARGA'
  | 'ESPERANDO_NFD'
  | 'EN_TARJA'
  | 'COMPLETADO'
  | 'VENCIDO';

export type TimerType =
  | 'T1_REGISTRO_ATA'
  | 'T2_ALERTA_RCF'
  | 'T3_TERMINO_DESCARGA'
  | 'T5_TARJA';

export type TimerLevel = 'A_TIEMPO' | 'PROXIMO' | 'CRITICO' | 'VENCIDO';

export interface TimerSnapshot {
  type: TimerType;
  label: string;
  deadline: string | null;
  totalSeconds: number;
  remainingSeconds: number;
  level: TimerLevel;
  active: boolean;
}

export interface FlightState {
  id: string;
  flightNumber: string;
  origen: string | null;
  conCarga: boolean;
  prefix: FlightPrefix;
  status: FlightStatus;
  eta: string | null;
  ata: string | null;
  descargaConfirmedAt: string | null;
  nfdAnticipado: boolean | null;
  nfdCorreos: boolean | null;
  tarjaCompletedAt: string | null;
  timers: TimerSnapshot[];
}

export interface FlightStats {
  flightsHoy: number;
}

export type SyncRowStatus = 'CREADO' | 'ACTUALIZADO' | 'OMITIDO' | 'ERROR';

export interface SyncRowResult {
  fila: number;
  flightNumber: string;
  status: SyncRowStatus;
  mensaje: string | null;
}

export interface SyncResult {
  totalFilas: number;
  creados: number;
  actualizados: number;
  omitidos: number;
  errores: number;
  detalle: SyncRowResult[];
}

export const FLIGHT_NUMBER_PATTERN = /^(LA|UC)\d{2,4}$/;

/** Umbral (en segundos) a partir del cual un cronometro se considera urgente. */
export const URGENT_THRESHOLD_SECONDS = 5 * 60;

/** True si el vuelo tiene algun cronometro activo a 5 minutos o menos (incluye vencidos). */
export function isFlightUrgent(flight: FlightState): boolean {
  return flight.timers.some((t) => t.active && t.remainingSeconds <= URGENT_THRESHOLD_SECONDS);
}

export const STATUS_LABELS: Record<FlightStatus, string> = {
  ESPERANDO_ETA: 'Esperando ETA',
  ESPERANDO_ATA: 'Esperando ATA',
  EN_DESCARGA: 'En descarga',
  ESPERANDO_NFD: 'Esperando NFD',
  EN_TARJA: 'En tarja',
  COMPLETADO: 'Completado',
  VENCIDO: 'Vencido',
};
