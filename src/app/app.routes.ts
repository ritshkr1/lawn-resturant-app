import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'sign-in', loadComponent: () => import('../app/pages/sign-in/sign-in').then(m => m.SignIn)},
  {path:'sign-up', loadComponent: () => import('../app/pages/sign-up/sign-up').then(m => m.SignUp)},
  {path:'dashboard', loadComponent: () => import('../app/pages/dashboard/dashboard').then(m => m.Dashboard)},
  {path:'', redirectTo: '/sign-in', pathMatch: 'full'},
  {path:'**', redirectTo: '/sign-in'}
];
