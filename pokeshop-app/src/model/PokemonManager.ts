import axios from 'axios';
import { POKEMON_API_URL } from '../constants/API';
import { PokemonTypeResponse } from './API/PokemonTypeResponse';
import { PokemonAPIResource } from './API/PokemonAPIResource';
import { PokemonResponse } from './API/PokemonResponse';

export class PokemonManager {
  public type: String;
  public pokemonShop: PokemonAPIResource[] = [];
  public pokemonInfo: PokemonResponse[] = []

  constructor() {
    if(process.env.REACT_APP_POKEMON_TYPE) {
      this.type = process.env.REACT_APP_POKEMON_TYPE; //type;
    } else {
      throw new Error('Tipo não declarado')
    }
  }

  async getPokemons() {
    const typePokemon = await axios.get<PokemonTypeResponse>(
      `${POKEMON_API_URL}/type/${this.type}`
    );
    this.pokemonShop = typePokemon.data.pokemon;
    return typePokemon.data.pokemon;
  }

  async getPokemonInfo(url: string) {
    const pokemonInfo = await axios.get<PokemonResponse>(url);
    this.pokemonInfo.push(pokemonInfo.data)
    return pokemonInfo.data
  }
}
