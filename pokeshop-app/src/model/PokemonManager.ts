import axios from 'axios';
import { POKEMON_API_URL } from '../constants/API';
import { PokemonTypeResponse } from './API/PokemonTypeResponse';
import { PokemonAPIResource } from './API/PokemonAPIResource';

export class PokemonManager {
  public type: String;
  public pokemonShop: PokemonAPIResource[] = [];

  constructor(type: String) {
    this.type = type;
  }

  async getPokemons() {
    const typePokemon = await axios.get<PokemonTypeResponse>(
      `${POKEMON_API_URL}/type/${this.type}`
    );
    this.pokemonShop = typePokemon.data.pokemon;
  }
}
