import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { Ricette } from './ricette';
import { Ricetta } from '../../models/interfaces';

const base = {
  porzioni: 2,
  chefId: 1,
  ingredienti: [],
  procedimento: [],
  pubblicata: '2026-01-01',
};

const ricette = [
  { ...base, id: 1, nome: 'carbonara', categoria: 'primo', difficolta: 'media', tempoMin: 20 },
  { ...base, id: 2, nome: 'tiramisu', categoria: 'dolce', difficolta: 'facile', tempoMin: 30 },
  { ...base, id: 3, nome: 'cacio e pepe', categoria: 'primo', difficolta: 'facile', tempoMin: 15 },
] as Ricetta[];

describe('Ricette', () => {
  let component: Ricette;
  let fixture: ComponentFixture<Ricette>;
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ricette],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Ricette);
    component = fixture.componentInstance;
    http = TestBed.inject(HttpTestingController);

    http.match('assets/data/ricette.json').forEach((r) => r.flush(ricette));
    http.match('assets/data/categorie.json').forEach((r) => r.flush([]));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('senza filtri mostra tutte le ricette', () => {
    expect(component.filtrate().length).toBe(3);
  });

  it('filtra per categoria e difficoltà insieme', () => {
    component.setCategoria('primo');
    expect(component.filtrate().map((r) => r.id)).toEqual([1, 3]);

    component.difficolta.set('facile');
    expect(component.filtrate().map((r) => r.id)).toEqual([3]);
  });

  it('la ricerca è case-insensitive sul nome', () => {
    component.ricerca.set('CARBO');
    expect(component.filtrate().map((r) => r.id)).toEqual([1]);
  });
});
