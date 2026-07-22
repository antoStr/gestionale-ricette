export type Difficolta = 'facile' | 'media' | 'difficile';

export type Pasto = 'pranzo' | 'cena';

export interface Ingrediente {
  nome: string;
  qta?: number;
  unita?: string;
}

export interface Ricetta {
  id: number;
  nome: string;
  categoria: string;
  difficolta: Difficolta;
  tempoMin: number;
  porzioni: number;
  chefId: number;
  ingredienti: Ingrediente[];
  procedimento: string[];
  pubblicata: string;
  descrizione?: string;
  emoji?: string;
  vegetariana?: boolean;
}

export interface Categoria {
  id: number;
  slug: string;
  nome: string;
  emoji: string;
  descrizione?: string;
}

export interface Chef {
  id: number;
  nome: string;
  bio: string;
  stelle: number;
  cucina: string;
  ristorante?: string;
  citta?: string;
}

export interface MenuGiorno {
  giorno: string;
  ricetta?: Ricetta;
  pranzoId?: number;
  cenaId?: number;
  nota?: string;
}
