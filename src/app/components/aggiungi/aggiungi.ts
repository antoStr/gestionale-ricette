import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RicetteService } from '../../services/ricette.service';

@Component({
  selector: 'app-aggiungi',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './aggiungi.html'
})
export class AggiungiComponent {
  private fb = inject(FormBuilder);
  private ricetteSvc = inject(RicetteService);
  private router = inject(Router);

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    categoria: ['', Validators.required],
    difficolta: ['media', Validators.required],
    tempoMin: [30, [Validators.required, Validators.min(1)]],
    porzioni: [4, [Validators.required, Validators.min(1)]],
    ingredienti: ['', Validators.required],
    procedimento: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // mostra gli errori sui campi
      return;
    }

    // qui potresti chiamare un metodo del RicetteService per "salvare"
    // la nuova ricetta (anche solo in memoria, dato che è mock)
    console.log('Nuova ricetta:', this.form.value);

    this.router.navigate(['/ricette']);
  }
}