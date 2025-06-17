import { Component, OnInit } from '@angular/core';
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
  imports: [IonicModule, CommonModule, RouterModule] // Import necessary modules
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset: number = 0;
  isLoading: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  async loadPokemons() {
    this.isLoading = true;

    try {
      const response = await lastValueFrom(this.pokemonService.getPokemons(20, this.offset));
      const results = response.results;

      const detailedPokemons = await Promise.all(
        results.map((p: { url: string; }) => lastValueFrom(this.pokemonService.getPokemonByUrl(p.url)))
      );

      this.pokemons = [...this.pokemons, ...detailedPokemons];
      this.offset += 20;
    } catch (error) {
      console.error('Erro ao carregar Pokémons:', error);
    }

    this.isLoading = false;
  }
}
