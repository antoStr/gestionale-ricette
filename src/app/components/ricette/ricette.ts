import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { RicetteService } from '../../services/Ricette.service';
import { PreferitiService } from '../../services/preferiti.service';
import { Ricetta, Categoria } from '../../models/interfaces';

@Component({
  selector: 'app-ricette',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './ricette.html',
  styleUrl: './ricette.css',
})
export class Ricette {
  private ricetteSvc = inject(RicetteService);
  preferiti = inject(PreferitiService);

  ricette = toSignal(this.ricetteSvc.getRicette(), { initialValue: [] as Ricetta[] });
  categorie = toSignal(this.ricetteSvc.getCategorie(), { initialValue: [] as Categoria[] });

  private queryParams = toSignal(inject(ActivatedRoute).queryParamMap);
  private scelta = signal<string | null>(null);
  categoria = computed(() => this.scelta() ?? this.queryParams()?.get('categoria') ?? 'tutte');

  difficolta = signal('tutte');
  ricerca = signal('');

  filtrate = computed(() => {
    const cat = this.categoria();
    const diff = this.difficolta();
    const q = this.ricerca().trim().toLowerCase();
    return this.ricette().filter(
      (r) =>
        (cat === 'tutte' || r.categoria === cat) &&
        (diff === 'tutte' || r.difficolta === diff) &&
        (!q || r.nome.toLowerCase().includes(q)),
    );
  });

  setCategoria(slug: string): void {
    this.scelta.set(slug);
  }
}
