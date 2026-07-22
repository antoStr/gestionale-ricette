import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { MenuService } from '../../services/menu';
import { RicetteService } from '../../services/ricette.service';
import { Ricetta } from '../../models/interfaces';

@Component({
  selector: 'app-menu-settimanale',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './menu-settimanale.html',
  styleUrl: './menu-settimanale.css'
})
export class MenuSettimanale {
  private menuService = inject(MenuService);

  menu = this.menuService.menu;

  ricetteDisponibili = toSignal(inject(RicetteService).getRicette(), { initialValue: [] as Ricetta[] });

  pianificati = computed(() => this.menu().filter((g) => g.ricetta).length);

  tempoTotale = computed(() =>
    this.menu().reduce((somma, g) => somma + (g.ricetta?.tempoMin ?? 0), 0),
  );

  spesa = computed(() => {
    const nomi = this.menu().flatMap((g) => g.ricetta?.ingredienti.map((i) => i.nome) ?? []);
    return [...new Set(nomi)].sort();
  });

  assegnaDaId(giorno: string, id: string): void {
    const ricetta = this.ricetteDisponibili().find((r) => r.id === Number(id));
    if (ricetta) this.menuService.assegna(giorno, ricetta);
  }

  rimuovi(giorno: string): void {
    this.menuService.rimuovi(giorno);
  }
}
