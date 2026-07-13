import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'torre-control' },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'torre-control',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/torre-control/torre-control.component').then((m) => m.TorreControlComponent),
  },
  {
    path: 'nuevo-vuelo',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/vuelo-ingreso/vuelo-ingreso.component').then((m) => m.VueloIngresoComponent),
  },
  {
    path: 'calendario',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/calendario/calendario.component').then((m) => m.CalendarioComponent),
  },
  { path: '**', redirectTo: 'torre-control' },
];
