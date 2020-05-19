import { RootStateType } from '../store/ducks';
import { useSelector } from 'react-redux';

/**
 * Hook utilizado para pegar o estado da lista de pokemon no redux
 * @returns lista de pokemons no redux
 */

export const useSelectPokemonList = () => {
  return useSelector((state: RootStateType) => state.pokemonShop.pokemonList);
};
