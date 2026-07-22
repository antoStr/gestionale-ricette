import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleCasePipe } from '@angular/common';

// Importazioni esatte secondo la tua struttura di cartelle
import { ChefService } from '../../../services/chef';
import { Chef } from '../../../models/interfaces';

@Component({
  selector: 'app-chef-detail',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './chef-detail.html',
  styleUrl: './chef-detail.css'
})
export class ChefDetail {
  private route = inject(ActivatedRoute);
  private chefSvc = inject(ChefService);

  // Convertiamo paramMap dell'URL in un Signal reattivo
  private paramMap = toSignal(this.route.paramMap);

  // TIPIZZAZIONE ESPLICITA <Chef | undefined>: forza TypeScript a riconoscere l'interfaccia Chef
  chef = computed<Chef | undefined>(() => {
    const params = this.paramMap();
    if (!params) return undefined;

    const id = Number(params.get('id'));
    return this.chefSvc.getChefById(id);
  });
}