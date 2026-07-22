import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TitleCasePipe, DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { RicetteService } from '../../services/Ricette.service';
import { PreferitiService } from '../../services/preferiti.service';
import { MenuService } from '../../services/menu';
import { Ricetta, Chef } from '../../models/interfaces';

@Component({
  selector: 'app-ricette-detail',
  standalone: true,
  imports: [RouterLink, TitleCasePipe, DatePipe],
  templateUrl: './ricette-detail.html',
  styleUrl: './ricette-detail.css',
})
export class RicetteDetail {
  private route = inject(ActivatedRoute);
  private ricetteSvc = inject(RicetteService);
  private menuSvc = inject(MenuService);
  preferiti = inject(PreferitiService);

  private paramMap = toSignal(this.route.paramMap);
  private ricette = toSignal(this.ricetteSvc.getRicette(), { initialValue: [] as Ricetta[] });
  private chefs = toSignal(this.ricetteSvc.getChef(), { initialValue: [] as Chef[] });

  ricetta = computed<Ricetta | undefined>(() => {
    const id = Number(this.paramMap()?.get('id'));
    return this.ricette().find((r) => r.id === id);
  });

  chef = computed<Chef | undefined>(() => {
    const r = this.ricetta();
    return r && this.chefs().find((c) => c.id === r.chefId);
  });

  caricata = computed(() => this.ricette().length > 0);

  giorni = computed(() => this.menuSvc.menu().map((g) => g.giorno));

  aggiungiAlMenu(giorno: string): void {
    const r = this.ricetta();
    if (r) this.menuSvc.assegna(giorno, r);
  }
}
