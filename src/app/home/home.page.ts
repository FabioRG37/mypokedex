import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterModule] // Import necessary modules
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset: number = 0;
  limit: number = 20;
  isLoading: boolean = false;
  searchTerm: string = '';
  router: any;
  filteredPokemons: any[] = []; // Variable to hold filtered Pokémon list

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
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

  goToDetail(pokemon: any) {
    // Navigate to the Pokémon detail page with the Pokémon name
    this.router.navigate(['/pokemon-detail', pokemon.id]);
  }

  filterPokemons() {
    const term = this.searchTerm.toLowerCase().trim();
    if (term === '') {
      this.filteredPokemons = [...this.pokemons];
      return;
    } else {
      this.filteredPokemons = this.pokemons.filter((poke) =>
        poke.name.toLowerCase().includes(term)
      );
    }

    this.isLoading = true;
    this.pokemonService.getPokemonByName(term).subscribe(
      (poke: any) => {
        const pokemon = {
          name: poke.name,
          id: poke.id,
          image: poke.sprites.front_default
        };
        this.filteredPokemons = [pokemon];
        this.isLoading = false;
      },
      (error) => {
        console.error('Pokémon não encontrado:', error);
        this.filteredPokemons = []; // limpa lista se erro
        this.isLoading = false;
      }
    );
  }
}
