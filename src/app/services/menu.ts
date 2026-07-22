import { Injectable, signal } from '@angular/core';
import { Ricetta, MenuGiorno } from '../models/interfaces';

@Injectable({ providedIn: 'root' })
export class MenuService {
  menu = signal<MenuGiorno[]>([
    { giorno: 'Lunedì' },
    { giorno: 'Martedì' },
    { giorno: 'Mercoledì' },
    { giorno: 'Giovedì' },
    { giorno: 'Venerdì' },
    { giorno: 'Sabato' },
    { giorno: 'Domenica' },
  ]);

  assegna(giorno: string, ricetta: Ricetta): void {
    this.menu.update((giorni) => giorni.map((g) => (g.giorno === giorno ? { ...g, ricetta } : g)));
  }

  rimuovi(giorno: string): void {
    this.menu.update((giorni) =>
      giorni.map((g) => (g.giorno === giorno ? { giorno: g.giorno } : g)),
    );
  }
}
