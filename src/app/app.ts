import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestionale-ricette');

  protected readonly navigazione = [
    { path: '/ricette', label: 'Ricette' },
    { path: '/menu-settimanale', label: 'Menù' },
    { path: '/preferite', label: 'Preferite' },
    { path: '/chef', label: 'Chef' },
    { path: '/aggiungi', label: 'Aggiungi' },
  ];
}
