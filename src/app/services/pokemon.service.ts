import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  
  constructor(private http: HttpClient) { }

  getPokemon(nomeOuId: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
  }

  getPokemons(limit: number = 20, offset: number = 0) {
    return this.http.get<any>(`${this.apiUrl}&limit=${limit}&offset=${offset}`);
  }

  getPokemonById(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getPokemonByName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name.toLocaleLowerCase()}`);
  }

  getPokemonByUrl(url: string) {
    return this.http.get<any>(url);
  }

  getPokemonList(offset: number = 0, limit: number = 20): Observable<any> {
    return this.http.get(`${this.apiUrl}?offset=${offset}&limit=${limit}`);
  }
}
