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
const POKEMON_SHOP_LAST_SEARCH_DATA = 'pokemon_shop_last_search_data';

const pokemonManager = new PokemonManager();


interface PokemonShopState {
  pokemonList: { pokemon: Pokemon; slot: number }[]; // Lista total dos pokémons do determinado tipo 
  pokemonShow: PokemonShopInfo[]; // Lista de pokemons que irá ser mostrado na tela
  pokemonInfo: PokemonShopInfo[]; // Cache de informações que armazena os pokémons e seus determinados preços
  lastSearch: string; // Variável que guarda a ultima busca;
}

const INITIAL_STATE: PokemonShopState = {
  pokemonList: [],
  pokemonShow: [],
  pokemonInfo: [],
  lastSearch: '',
};

export default (state = INITIAL_STATE, action: AnyAction): PokemonShopState => {
  switch (action.type) {
    case POKEMON_SHOP_LIST_DATA:
      return { ...state, pokemonList: action.payload };
    case POKEMON_SHOP_INFO_DATA:
      return { ...state, pokemonInfo: action.payload };
    case POKEMON_SHOP_SHOW_DATA:
      return { ...state, pokemonShow: action.payload };
    case POKEMON_SHOP_LAST_SEARCH_DATA:
      return { ...state, lastSearch: action.payload}
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

/**
 *  Este Action creator é utilizado para buscar as informações dos pokemons que irá ser mostrado.
 * @param pokemons array de pokemons que irá ser buscado
 */
export const loadPokemonShow = (pokemons: Pokemon[]) => {
  return async (dispatch: any, getState: () => RootStateType) => {
    const { pokemonInfo } = getState().pokemonShop;

    // informações dos pokemons já armazenados
    const cachedPokemons = pokemonInfo.filter((pokemon) =>
      pokemons.find((p) => p.name == pokemon.name)
    );

    // array de pokemons que irá buscar novas informações
    const newPokemons = pokemons.filter(
      (pokemon) => !pokemonInfo.find((p) => p.name == pokemon.name)
    );

    // fazendo requisições para buscar os novos pokemons
    const pokemonRequests = newPokemons.map((pokemon) => {
      const pokemonPromise = Axios.get<PokemonResponse>(pokemon.url);
      return pokemonPromise;
    });
    const response = await Promise.all(pokemonRequests);

    // adicionando preço aleatório aos novos pokemons
    const newPokemonsPayload = response.map((resp) => ({
      ...resp.data,
      price: generateRandomPrice(10, 1000),
    }));

    // pokemons a serem mostrados serão os antigos mais os novos
    const payload = [...cachedPokemons, ...newPokemonsPayload];

    // colocando informações no array de cache
    dispatch({
      type: POKEMON_SHOP_INFO_DATA,
      payload: [...pokemonInfo, ...newPokemonsPayload],
    });

    // mostrando informações que os novos pokemons irão aparecer
    return dispatch({ type: POKEMON_SHOP_SHOW_DATA, payload });
  };
};

/**
 *  Esta função procura os pokémon de acordo com a string de entrada e mostra os pokemons em seguida
 * @param search string que irá ser buscada
 */
export const searchPokemon = (search: string) => {
  return async (dispatch: any, getState: () => RootStateType) => {
    const { pokemonList } = getState().pokemonShop;
    const pokemonFiltered = pokemonList.filter((pokemon) =>
      pokemon.pokemon.name.includes(search)
    );
    const pokemonFilteredUrls = pokemonFiltered.map(
      (pokemon) => pokemon.pokemon
    );
    dispatch({type: POKEMON_SHOP_LAST_SEARCH_DATA, payload: search});
    await loadPokemonShow(pokemonFilteredUrls)(dispatch, getState);
  };
};

export const loadMorePokemon = () => {
  return async (dispatch: any, getState: () => RootStateType) => {
    const { pokemonShow, pokemonList } = getState().pokemonShop;
    const size = pokemonShow.length + 20;
      const pokemonUrl = pokemonList
        .slice(0, size)
        .map((pokemon) => pokemon.pokemon);
    await loadPokemonShow(pokemonUrl)(dispatch, getState);
  }
}