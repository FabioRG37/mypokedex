import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterModule] // Import necessary modules
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  allPokemonNames: any[] = [];
  favorites: number[] = []; // Array to hold favorite Pokémon IDs
  // Pagination variables
  offset: number = 0;
  limit: number = 20;
  isLoading: boolean = false;
  searchTerm: string = '';
  filteredPokemons: any[] = []; // Variable to hold filtered Pokémon list
  showFavoritesOnly = false; // Flag to toggle favorite view

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    const stored = localStorage.getItem('favorites');
    this.favorites = stored ? JSON.parse(stored) : [];
    // Load all Pokémon names for search functionality
    this.pokemonService.getAllPokemonNames().subscribe((data: any) => {
      this.allPokemonNames = data.results;
    });
    // Load initial Pokémon data
    this.loadPokemons();
  }

  loadPokemons() {
    this.isLoading = true;
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe((data) => {
      const results = data.results;
      console.log("Resultados:", results);

      results.forEach((p: any) => {
        const id = this.extractIdFromUrl(p.url);
        this.pokemons.push({
          name: p.name,
          id: id,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });
      });
      this.filteredPokemons = [...this.pokemons]; // Update filtered list
      this.isLoading = false;
    });
  }

  loadMore() {
    this.offset += this.limit;
    this.loadPokemons();
  }
  
  extractIdFromUrl(url: string): number {
    const parts = url.split('/');
    return Number(parts[parts.length - 2]);
  }

  goToDetail(id: number) {
    // Navigate to the Pokémon detail page with the Pokémon name
    this.router.navigate(['/pokemon-detail', id]);
  }

  filterPokemons() {
    const term = this.searchTerm.toLowerCase().trim();

    if (term === '') {
      this.filteredPokemons = [...this.pokemons];
      return;
    } 

    const matched = this.allPokemonNames.filter((p) =>
      p.name.toLowerCase().includes(term)
    );

    // Limita quantidade de sugestões para evitar sobrecarga
    const topMatches = matched.slice(0, 20);

    this.isLoading = true;
    this.filteredPokemons = topMatches.map(p => {
    const id = this.extractIdFromUrl(p.url);
    return {
      id,
      name: p.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    };
  });
  }

  toggleFavorite(id: number) {
    if (this.isFavorite(id)) {
      this.favorites = this.favorites.filter(fav => fav !== id);
    } else {
      this.favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id);
  }

  get displayedPokemons() {
    if (this.showFavoritesOnly) {
      return this.filteredPokemons.filter(p => this.isFavorite(p.id));
    }
    return this.filteredPokemons;
  }
}
