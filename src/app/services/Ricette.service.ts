import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'; 
import { Ricetta, Categoria, Chef } from '../models/interfaces';

//struttura servizio e risorse base
@Injectable({ providedIn: 'root'}) //creazione di una singola istanza, pattern singleton
export class RicetteService {

    private http = inject(HttpClient); //inject di http dentro http per le chiamate

    private readonly BASE = 'assets/data'; //salvataggio percorso base


    getRicette(): Observable<Ricetta[]> {
        return this.http.get<Ricetta[]>(`${this.BASE}/ricette.json`);
    }

    getRicetteByCategoria(categoria: string): Observable<Ricetta[]> {
    return this.getRicette().pipe(
      map(ricette => ricette.filter(r => r.categoria === categoria))
    );
  }
 
  getRicetteByChef(chefId: number): Observable<Ricetta[]> {
    return this.getRicette().pipe(
      map(ricette => ricette.filter(r => r.chefId === chefId))
    );
  }
 
  filtraRicette(categoria?: string, difficolta?: string): Observable<Ricetta[]> {
    return this.getRicette().pipe(
      map(ricette => ricette.filter(r => {
        const matchCategoria = !categoria || categoria === 'tutte' || r.categoria === categoria;
        const matchDifficolta = !difficolta || difficolta === 'tutte' || r.difficolta === difficolta;
        return matchCategoria && matchDifficolta;
      }))
    );
  }
 
  getCategorie(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.BASE}/categorie.json`);
  }
 
  getChef(): Observable<Chef[]> {
    return this.http.get<Chef[]>(`${this.BASE}/chef.json`);
  }
 
  getChefById(id: number): Observable<Chef | undefined> {
    return this.getChef().pipe(
      map(chef => chef.find(c => c.id === id))
    );
  }
}
