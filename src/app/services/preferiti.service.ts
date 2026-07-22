import { Injectable, signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RicetteService } from './Ricette.service';
import { Ricetta } from '../models/interfaces';

@Injectable({ providedIn: 'root' })
export class PreferitiService {
  private ricetteSvc = inject(RicetteService);

  private ricette = toSignal(this.ricetteSvc.getRicette(), { initialValue: [] as Ricetta[] });

  private preferitiIds = signal<number[]>([]);

  ricettePreferite = computed(() =>
    this.ricette().filter((r) => this.preferitiIds().includes(r.id)),
  );

  isPreferito(id: number): boolean {
    return this.preferitiIds().includes(id);
  }

  toggle(id: number): void {
    if (this.isPreferito(id)) {
      this.preferitiIds.update((ids) => ids.filter((x) => x !== id));
    } else {
      this.preferitiIds.update((ids) => [...ids, id]);
    }
  }

  aggiungi(id: number): void {
    if (!this.isPreferito(id)) {
      this.preferitiIds.update((ids) => [...ids, id]);
    }
  }

  rimuovi(id: number): void {
    this.preferitiIds.update((ids) => ids.filter((x) => x !== id));
  }
}
