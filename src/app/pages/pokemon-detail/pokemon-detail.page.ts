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
  stats: any[] = []; // Variable to hold Pokémon stats

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  isLoading: boolean = true; // Variable to track loading state

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;
    if (id !== null && !isNaN(id)) {
      this.pokemonService.getPokemonById(id).subscribe((poke: any) => {
        this.pokemon = poke;
        this.stats = poke.stats.map((s: any) => ({
          name: s.stat.name,
          value: s.base_stat
        }));
      });
    } else {
      // Handle invalid id (optional)
      this.router.navigate(['/']);
    }
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

