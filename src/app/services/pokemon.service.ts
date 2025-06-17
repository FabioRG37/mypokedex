import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
  
  constructor(private http: HttpClient) { }

  getPokemon(nomeOuId: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
  }
}
