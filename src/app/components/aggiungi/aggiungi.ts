import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RicetteService } from '../../services/ricette.service';

@Component({
  selector: 'app-aggiungi',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './aggiungi.html',
  styleUrl: './aggiungi.css',
})
export class Aggiungi {
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
    procedimento: ['', Validators.required],
  });

  /** Mostra l'errore solo dopo che l'utente ha toccato il campo. */
  erroreIn(campo: string): boolean {
    const c = this.form.get(campo);
    return !!c && c.invalid && c.touched;
  }

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
