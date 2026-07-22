import { Routes } from '@angular/router';

export const routes: Routes = [

  // ── HOME ──────────────────────────────────────
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home')
        .then(m => m.Home)
  },

  // ── RICETTE (catalogo + dettaglio dinamico) ────
  {
    path: 'ricette',
    loadComponent: () =>
      import('./components/ricette/ricette')
        .then(m => m.Ricette)
  },
  {
    path: 'ricette/:id',
    loadComponent: () =>
      import('./components/ricetta-detail/ricetta-detail')
        .then(m => m.RicettaDetail)
  },

  // ── PREFERITI (il tuo blocco) ──────────────────
  {
    path: 'preferite',
    loadComponent: () =>
      import('./components/preferiti/preferiti')
        .then(m => m.Preferiti)
  },

  // ── AGGIUNGI (il tuo blocco) ────────────────────
  {
    path: 'aggiungi',
    loadComponent: () =>
      import('./components/aggiungi/aggiungi')
        .then(m => m.Aggiungi)
  },

  // ── CHEF (rotta padre con children) ────────────
  {
    path: 'chef',
    loadComponent: () =>
      import('./components/chef/chef')
        .then(m => m.Chef),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./components/chef/chef-detail/chef-detail')
            .then(m => m.ChefDetail)
      }
    ]
  },

  // ── MENU SETTIMANALE ────────────────────────────
  {
    path: 'menu-settimanale',
    loadComponent: () =>
      import('./components/menu/menu')
        .then(m => m.Menu)
  },

  // ── CATCH-ALL 404 — deve essere SEMPRE l'ultima ─
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found')
        .then(m => m.NotFound)
  }
];