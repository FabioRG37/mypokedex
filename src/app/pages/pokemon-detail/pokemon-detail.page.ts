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
  imports: [CommonModule, IonicModule]
})
export class PokemonDetailPage implements OnInit {
  pokemon: any = null;
  stats: any[] = [];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null && !isNaN(id)) {
      this.isLoading = true;
      this.pokemonService.getPokemonById(id).subscribe({
        next: (poke: any) => {
          this.pokemon = {
            id: poke.id,
            name: poke.name,
            image: poke.sprites.front_default,
            types: poke.types.map((t: any) => t.type.name),
            height: poke.height,
            weight: poke.weight
          };

          this.stats = poke.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat
          }));

          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
          this.router.navigate(['/']);
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  goToPrevious() {
    const id = this.pokemon?.id;
    if (id > 1) {
      this.router.navigate(['/pokemon-detail', id - 1]);
    }
  }

  goToNext() {
    const id = this.pokemon?.id;
    this.router.navigate(['/pokemon-detail', id + 1]);
  }
}
