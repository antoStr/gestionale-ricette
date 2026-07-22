import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe, DecimalPipe } from '@angular/common';
import { PreferitiService } from '../../services/preferiti.service';

@Component({
  selector: 'app-preferiti',
  standalone: true,
  imports: [RouterLink, TitleCasePipe, DecimalPipe],
  templateUrl: './preferiti.html',
  styleUrl: './preferiti.css'
})
export class Preferiti {
  svc = inject(PreferitiService);
}