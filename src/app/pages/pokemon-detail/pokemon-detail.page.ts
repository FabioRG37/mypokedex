import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  isLoading: boolean = true; // Variable to track loading state

 ngOnInit() {
  this.route.paramMap.subscribe((params) => {
    const name = params.get('name');
    if (name) {
      this.pokemonService.getPokemon(name).subscribe(
        (data) => {
          this.pokemon = data;
          this.isLoading = false;
        },
        (error) => {
          console.error('Erro ao buscar detalhes do Pokémon:', error);
          this.isLoading = false;
        }
      );
    }
  });
  }

  goToPrevious() {
    const id = this.pokemon.id;
    if (id > 1) {
      this.router.navigate(['/pokemon-detail', id - 1]);
    }
  }

  goToNext() {
    const id = this.pokemon.id;
    this.router.navigate(['/pokemon-detail', id + 1]);
  }
}

