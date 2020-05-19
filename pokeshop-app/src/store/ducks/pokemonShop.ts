import { AnyAction } from 'redux';
import { PokemonManager } from '../../model/PokemonManager';
import Axios from 'axios';
import { PokemonResponse } from '../../model/API/PokemonResponse';
import { PokemonShopInfo } from '../../model/PokemonShopInfo';
import { Pokemon } from '../../model/Pokemon';
import { generateRandomPrice } from '../../utils/generateRandomPrice';
import { RootStateType } from '.';

const POKEMON_SHOP_LIST_DATA = 'pokemon_shop_list_data';
const POKEMON_SHOP_INFO_DATA = 'pokemon_shop_info_data';
const POKEMON_SHOP_SHOW_DATA = 'pokemon_shop_show_data';

const pokemonManager = new PokemonManager();

interface PokemonShopState {
  pokemonList: {pokemon: Pokemon, slot: number}[];
  pokemonShow: any[];
  pokemonInfo: PokemonShopInfo[];
}

const INITIAL_STATE: PokemonShopState = {
  pokemonList: [],
  pokemonShow: [],
  pokemonInfo: [],
};

export default (state = INITIAL_STATE, action: AnyAction): PokemonShopState => {
  switch (action.type) {
    case POKEMON_SHOP_LIST_DATA:
      return { ...state, pokemonList: action.payload };
    case POKEMON_SHOP_INFO_DATA:
      return { ...state, pokemonInfo: action.payload };
    case POKEMON_SHOP_SHOW_DATA:
      return { ...state, pokemonShow: action.payload };
    default:
      return state;
  }
};

export const loadPokemonList = () => {
  return async (dispatch: any) => {
    const pokemonList = await pokemonManager.getPokemons();
    dispatch({ type: POKEMON_SHOP_LIST_DATA, payload: pokemonList });
  };
};

export const loadPokemonShow = (pokemons: string[]) => {
  return async (dispatch: any) => {
    const pokemonRequests = pokemons.map((pokemon) => {
      const pokemonInfo = Axios.get<PokemonResponse>(pokemon);
      return pokemonInfo;
    });
    const response = await Promise.all(pokemonRequests);

    const payload = response.map((resp) => ({...resp.data , price: generateRandomPrice(10,1000)}));

    return dispatch({ type: POKEMON_SHOP_SHOW_DATA, payload });
  };
};

export const searchPokemon = (search: string) => {
  return async (dispatch: any, getState: () => RootStateType) => {
    const { pokemonList } = getState().pokemonShop;
    const pokemonFiltered = pokemonList.filter(pokemon => pokemon.pokemon.name.includes(search))
    const pokemonFilteredUrls = pokemonFiltered.map(pokemon => pokemon.pokemon.url)

    await loadPokemonShow(pokemonFilteredUrls)(dispatch)
  }
}
