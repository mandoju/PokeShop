import { RootStateType } from '../store/ducks';
import { useSelector } from 'react-redux';

/**
 * Hook utilizado para pegar o estado da lista de pokemon que são mostrados na loja no redux
 * @returns lista de pokemons que são mostrados na loja no redux
 */

export const useSelectPokemonShow = () => {
  return useSelector((state: RootStateType) => state.pokemonShop.pokemonShow);
};
