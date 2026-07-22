import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu';
import { Ricetta } from '../models/interfaces';

const ricetta = {
  id: 1,
  nome: 'test',
  categoria: 'primo',
  difficolta: 'facile',
  tempoMin: 10,
  porzioni: 2,
  chefId: 1,
  ingredienti: [],
  procedimento: [],
  pubblicata: '2026-01-01',
} as Ricetta;

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('parte con 7 giorni vuoti', () => {
    expect(service.menu().length).toBe(7);
    expect(service.menu().every((g) => !g.ricetta)).toBe(true);
  });

  it('assegna e rimuove una ricetta solo sul giorno indicato', () => {
    service.assegna('Lunedì', ricetta);
    expect(service.menu().find((g) => g.giorno === 'Lunedì')?.ricetta).toBe(ricetta);
    expect(service.menu().filter((g) => g.ricetta).length).toBe(1);

    service.rimuovi('Lunedì');
    expect(service.menu().every((g) => !g.ricetta)).toBe(true);
  });
});
