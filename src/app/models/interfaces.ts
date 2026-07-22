export interface Ricetta {
  id: number;
  nome: string;
  categoria: string;
  difficolta: 'facile' | 'media' | 'difficile';
  tempoMin: number;
  porzioni: number;
  chefId: number;
  emoji: string;
  vegetariana: boolean;
  descrizione?: string;
  pubblicata: string;
  ingredienti: string[];
  procedimento: string;
}