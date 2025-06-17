import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  pokemon: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon('bulbasaur').subscribe(
      (data) => {
        console.log('Pokémon data:', data);
        this.pokemon = data;
      },
      (error) => {
        console.error('Error fetching Pokémon data:', error);
      }
    );
  }

}
