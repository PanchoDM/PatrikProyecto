import {
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-A7NZCF3Z.js";

// src/app/core/services/flight.service.ts
var FlightService = class _FlightService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/flights`;
  listActive() {
    return this.http.get(this.baseUrl);
  }
  getStats() {
    return this.http.get(`${this.baseUrl}/stats`);
  }
  /** Vuelos con ETA en [from, to). Incluye completados: es una vista historica por fecha. */
  getByRange(from, to) {
    const params = { from: from.toISOString(), to: to.toISOString() };
    return this.http.get(`${this.baseUrl}/by-range`, { params });
  }
  syncFromSheet(csvUrl) {
    return this.http.post(`${this.baseUrl}/sync`, { csvUrl });
  }
  getState(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createFlight(flightNumber) {
    return this.http.post(this.baseUrl, { flightNumber });
  }
  setEta(id, eta) {
    return this.http.post(`${this.baseUrl}/${id}/eta`, { eta });
  }
  /** @param ata Hora real de arribo (ISO), no necesariamente el momento del clic. */
  registerAta(id, ata) {
    return this.http.post(`${this.baseUrl}/${id}/ata`, { ata });
  }
  confirmDescarga(id) {
    return this.http.post(`${this.baseUrl}/${id}/descarga`, {});
  }
  submitNfd(id, anticipado, correos) {
    return this.http.post(`${this.baseUrl}/${id}/nfd`, { anticipado, correos });
  }
  completeTarja(id) {
    return this.http.post(`${this.baseUrl}/${id}/tarja`, {});
  }
  static \u0275fac = function FlightService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlightService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FlightService, factory: _FlightService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlightService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/models/flight.model.ts
var FLIGHT_NUMBER_PATTERN = /^(LA|UC)\d{2,4}$/;
var URGENT_THRESHOLD_SECONDS = 5 * 60;
function isFlightUrgent(flight) {
  return flight.timers.some((t) => t.active && t.remainingSeconds <= URGENT_THRESHOLD_SECONDS);
}
var STATUS_LABELS = {
  ESPERANDO_ETA: "Esperando ETA",
  ESPERANDO_ATA: "Esperando ATA",
  EN_DESCARGA: "En descarga",
  ESPERANDO_NFD: "Esperando NFD",
  EN_TARJA: "En tarja",
  COMPLETADO: "Completado",
  VENCIDO: "Vencido"
};

export {
  FlightService,
  FLIGHT_NUMBER_PATTERN,
  isFlightUrgent,
  STATUS_LABELS
};
//# sourceMappingURL=chunk-E3RH3F2K.js.map
