import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getPokemon();
    this.pokemonAbilities();
  }

  getPokemon(){
    return this._http.get("https://pokeapi.co/api/v2/pokemon/6/");

  };

  getBadPokemon(){
    let random = Math.floor(Math.random() * (150 - 1)) + 1;
    return this._http.get(`https://pokeapi.co/api/v2/pokemon/${random}/`);

  };

  pokemonAbilities(){
    return this._http.get("https://pokeapi.co/api/v2/pokemon/1/");

  };

  catchWildPokemon(newPokemon){
    return this._http.post("/api/pokemon/create", newPokemon);
  };

  getAllPokemonNum(){
    return this._http.get('/api/pokemon');
  };

  // getAllPokemonStats(x){
  //   return this._http.get(`https://pokeapi.co/api/v2/pokemon/${x}/`);
  // }
  
  
}
