import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { MenuSettimanale } from './menu-settimanale';
import { MenuService } from '../../services/menu';
import { Ricetta } from '../../models/interfaces';

const ricetta = {
  id: 1,
  nome: 'test',
  categoria: 'primo',
  difficolta: 'facile',
  tempoMin: 25,
  porzioni: 2,
  chefId: 1,
  ingredienti: [{ nome: 'aglio' }, { nome: 'olio' }, { nome: 'aglio' }],
  procedimento: [],
  pubblicata: '2026-01-01',
} as Ricetta;

describe('MenuSettimanale', () => {
  let component: MenuSettimanale;
  let fixture: ComponentFixture<MenuSettimanale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSettimanale],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSettimanale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('conta i giorni pianificati e il tempo totale', () => {
    TestBed.inject(MenuService).assegna('Lunedì', ricetta);
    expect(component.pianificati()).toBe(1);
    expect(component.tempoTotale()).toBe(25);
  });

  it('la lista della spesa non ripete gli ingredienti', () => {
    TestBed.inject(MenuService).assegna('Lunedì', ricetta);
    TestBed.inject(MenuService).assegna('Martedì', ricetta);
    expect(component.spesa()).toEqual(['aglio', 'olio']);
  });
});
