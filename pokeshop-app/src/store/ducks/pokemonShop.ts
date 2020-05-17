import { AnyAction } from 'redux';
import { PokemonManager } from '../../model/PokemonManager';

const POKEMON_SHOP_LIST_DATA = 'pokemon_shop_list_data';
const POKEMON_SHOP_INFO_DATA = 'pokemon_shop_info_data';

const pokemonManager = new PokemonManager();

const INITIAL_STATE = {
  pokemonList: [],
  pokemonInfo: [],
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case POKEMON_SHOP_LIST_DATA:
      return { ...state, pokemonList: action.payload };
    case POKEMON_SHOP_INFO_DATA:
      return { ...state, pokemonInfo: action.payload };
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