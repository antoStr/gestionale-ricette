import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RicetteService } from '../../services/ricette.service';

/** Scarta i valori fatti di soli spazi e conta i caratteri sul testo ripulito. */
function testo(minLen: number): ValidatorFn {
  return (c: AbstractControl) => {
    const v = (c.value ?? '').toString().trim();
    if (!v) return { required: true };
    return v.length < minLen ? { minlength: { requiredLength: minLen } } : null;
  };
}

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
    nome: ['', testo(3)],
    categoria: ['', Validators.required],
    difficolta: ['media', Validators.required],
    tempoMin: [30, [Validators.required, Validators.min(1)]],
    porzioni: [4, [Validators.required, Validators.min(1)]],
    ingredienti: ['', testo(3)],
    procedimento: ['', testo(3)],
  });

  erroreIn(campo: string): boolean {
    const c = this.form.get(campo);
    return !!c && c.invalid && c.touched;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.value;
    const ricetta = {
      ...v,
      nome: v.nome!.trim(),
      ingredienti: v.ingredienti!.trim(),
      procedimento: v.procedimento!.trim(),
    };

    // ponytail: nessuna persistenza, RicetteService legge solo assets/data/*.json
    console.log('Nuova ricetta:', ricetta);

    this.router.navigate(['/ricette']);
  }
}
