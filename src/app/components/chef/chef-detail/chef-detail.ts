import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleCasePipe } from '@angular/common';

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

  private paramMap = toSignal(this.route.paramMap);

  chef = computed<Chef | undefined>(() => {
    const params = this.paramMap();
    if (!params) return undefined;

    const id = Number(params.get('id'));
    return this.chefSvc.getChefById(id);
  });
}
