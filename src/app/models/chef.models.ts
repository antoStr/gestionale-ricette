export interface Chef {
    id: number;
    nome: string;
    bio: string;
    stelle: number;
    cucina?: string;     // es. "siciliana" (opzionale)
    ristorante?: string; // es. "Osteria della Vucciria" (opzionale)
    citta?: string;      // es. "Palermo" (opzionale)
}