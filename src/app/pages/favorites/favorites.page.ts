import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class FavoritesPage implements OnInit {
  favoriteIds: number[] = []; // Somente os IDs armazenados
  favorites: any[] = [];      // Dados completos dos pokémons
  isLoading = true;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const stored = localStorage.getItem('favorites');
    this.favoriteIds = stored ? JSON.parse(stored) : [];
    this.favorites = [];
    this.isLoading = true;

    console.log('IDs de favoritos encontrados:', this.favoriteIds);

    if (this.favoriteIds.length === 0) {
      this.isLoading = false;
      return;
    }

    let loaded = 0;

    this.favoriteIds.forEach((id: number) => {
      this.pokemonService.getPokemon(String(id)).subscribe({
        next: (data: any) => {
          this.favorites.push({
            id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map((t: any) => t.type.name)
          });

          loaded++;
          if (loaded === this.favoriteIds.length) {
            this.isLoading = false;
            console.log('Todos os dados dos favoritos carregados:', this.favorites);
          }
        },
        error: (err) => {
          console.error(`Erro ao carregar Pokémon ID ${id}:`, err);
          loaded++;
          if (loaded === this.favoriteIds.length) {
            this.isLoading = false;
          }
        }
      });
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/pokemon-detail', id]);
  }
}
