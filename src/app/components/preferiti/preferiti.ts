import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe, DecimalPipe } from '@angular/common';
import { PreferitiService } from '../../services/preferiti.service';
import { RicetteService } from '../../services/ricette.service';

@Component({
  selector: 'app-preferiti',
  standalone: true,
  imports: [RouterLink, TitleCasePipe, DecimalPipe],
  templateUrl: './preferiti.html'
})
export class PreferitiComponent implements OnInit {
  svc = inject(PreferitiService);
  private ricetteSvc = inject(RicetteService);

  ngOnInit(): void {
    // assicuriamoci che le ricette siano caricate
    // (se un altro componente le ha già caricate, va bene comunque)
    this.ricetteSvc.carica();
  }
}