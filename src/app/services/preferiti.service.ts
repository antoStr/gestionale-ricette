import { Injectable, signal, computed, inject } from '@angular/core';
import { RicetteService } from './ricette.service';
import { Ricetta } from '../models/interfaces';

@Injectable({ providedIn: 'root' })
export class PreferitiService {
  private ricetteSvc = inject(RicetteService);

  // salviamo solo gli id — più leggero e semplice da gestire
  private preferitiIds = signal<number[]>([]);

  // computed: deriva la lista di ricette complete a partire dagli id
  ricettePreferite = computed(() =>
    this.ricetteSvc.ricette().filter(r => this.preferitiIds().includes(r.id))
  );

  isPreferito(id: number): boolean {
    return this.preferitiIds().includes(id);
  }

  toggle(id: number): void {
    if (this.isPreferito(id)) {
      this.preferitiIds.update(ids => ids.filter(x => x !== id));
    } else {
      this.preferitiIds.update(ids => [...ids, id]);
    }
  }

  aggiungi(id: number): void {
    if (!this.isPreferito(id)) {
      this.preferitiIds.update(ids => [...ids, id]);
    }
  }

  rimuovi(id: number): void {
    this.preferitiIds.update(ids => ids.filter(x => x !== id));
  }
}