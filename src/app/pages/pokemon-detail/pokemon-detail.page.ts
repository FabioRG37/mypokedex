import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] // Import necessary modules
})
export class PokemonDetailPage implements OnInit {
  pokemon: any; // Variable to hold Pokémon details

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name'); // Get Pokémon name from route parameters
    if (name) {
      this.pokemonService.getPokemonByName(name).subscribe(
        (data) => {
          this.pokemon = data; // Assign the fetched Pokémon data to the variable
        },
        (error) => {
          console.error('Error fetching Pokémon details:', error);
        }
      );
    } else {
      console.error('No Pokémon name provided in route parameters.');
    }
  }

}
