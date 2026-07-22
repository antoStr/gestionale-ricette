import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chef } from '../models/interfaces';

@Injectable({ providedIn: 'root' })
export class ChefService {
    private readonly http = inject(HttpClient);

    chefs = signal<Chef[]>([]);
    loading = signal<boolean>(false);

    caricaChef(): void {
        if (this.chefs().length > 0) return;

        this.loading.set(true);
        this.http.get<Chef[]>('assets/data/chef.json').subscribe({
            next: (dati) => {
                this.chefs.set(dati);
                this.loading.set(false);
            },
            error: () => this.loading.set(false)
        });
    }

    getChefById(id: number): Chef | undefined {
        return this.chefs().find(c => c.id === id);
    }
}