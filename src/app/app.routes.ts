import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },

  {
    path: 'menu-settimanale',
    loadComponent: () =>
      import('./components/menu-settimanale/menu-settimanale').then((m) => m.MenuSettimanale),
  },
  { path: 'menu', redirectTo: 'menu-settimanale', pathMatch: 'full' },

  {
    path: 'ricette',
    loadComponent: () => import('./components/ricette/ricette').then((m) => m.Ricette),
  },
  {
    path: 'ricette/:id',
    loadComponent: () =>
      import('./components/ricette-detail/ricette-detail').then((m) => m.RicetteDetail),
  },

  {
    path: 'preferite',
    loadComponent: () => import('./components/preferiti/preferiti').then((m) => m.Preferiti),
  },

  {
    path: 'aggiungi',
    loadComponent: () => import('./components/aggiungi/aggiungi').then((m) => m.Aggiungi),
  },

  {
    path: 'chef',
    loadComponent: () => import('./components/chef/chef').then((m) => m.Chef),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./components/chef/chef-detail/chef-detail').then((m) => m.ChefDetail),
      },
    ],
  },

  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then((m) => m.NotFound),
  },
];
