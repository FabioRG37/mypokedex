import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule] // Import necessary modules
})
export class FavoritesPage implements OnInit {
  favorites: any[] = []; // Array to hold favorite Pokémon IDs
  
  constructor(private router: Router) { }

  ngOnInit() {
    const stored = localStorage.getItem('favorites');
    const favoriteIds = stored ? JSON.parse(stored) : [];

    this.favorites = favoriteIds.map((id: number) => ({
      id,
      name: '',
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    }));
  }

  goToDetail(id: number) {
    this.router.navigate(['/pokemon-detail', id]);
  }
}
