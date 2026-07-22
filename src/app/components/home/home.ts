import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { RicetteService } from '../../services/ricette.service';
import { MenuService } from '../../services/menu';
import { PreferitiService } from '../../services/preferiti.service';
import { Ricetta, Categoria } from '../../models/interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private ricetteSvc = inject(RicetteService);
  private menuSvc = inject(MenuService);
  preferiti = inject(PreferitiService);

  ricette = toSignal(this.ricetteSvc.getRicette(), { initialValue: [] as Ricetta[] });
  categorie = toSignal(this.ricetteSvc.getCategorie(), { initialValue: [] as Categoria[] });

  // le 3 ricette pubblicate più di recente
  ultime = computed(() =>
    [...this.ricette()].sort((a, b) => b.pubblicata.localeCompare(a.pubblicata)).slice(0, 3),
  );

  giorniPianificati = computed(() => this.menuSvc.menu().filter((g) => g.ricetta).length);
}
