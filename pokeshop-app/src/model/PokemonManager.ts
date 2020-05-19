import axios from 'axios';
import { POKEMON_API_URL } from '../constants/API';
import { PokemonTypeResponse } from './API/PokemonTypeResponse';
import { PokemonResponse } from './API/PokemonResponse';

/**
 * Manager utilizado para realizar os requests dos pokemons. 
 * 
 * Ele utiliza a variável de ambiente "REACT_APP_POKEMON_TYPE" para determinar que tipo de pokémon será buscado
 */
export class PokemonManager {
  public type: String; //Tipo do pokémon que ele está buscando

  constructor() {
    if (process.env.REACT_APP_POKEMON_TYPE) {
      this.type = process.env.REACT_APP_POKEMON_TYPE;
    } else {
      throw new Error('Tipo não declarado');
    }
  }

  /**
   * Função que retorna a lista geral dos pokemons de um determinado tipo
   */
  async getPokemons() {
    const typePokemon = await axios.get<PokemonTypeResponse>(
      `${POKEMON_API_URL}/type/${this.type}`
    );
    return typePokemon.data.pokemon;
  }

  /**
   * Esta função busca as informações do pokemon recebendo a url dele como entrada
   * @param url url de entrada para busca infnormação do pokemon
   */
  async getPokemonInfo(url: string) {
    const pokemonInfo = await axios.get<PokemonResponse>(url);
    return pokemonInfo.data;
  }
}
