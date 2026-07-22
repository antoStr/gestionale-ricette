export interface Ricetta {
  id: number;
  nome: string;
  categoria: string;
  difficolta: 'facile' | 'media' | 'difficile';
  tempoMin: number;
  porzioni: number;
  chefId: number;
  ingredienti: string[];
  procedimento: string;
  dataPubblicazione: string;
  descrizione?: string;
  immagine?: string;
  calorie?: number;
}
