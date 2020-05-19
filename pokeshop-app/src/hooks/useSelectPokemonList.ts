import { RootStateType } from '../store/ducks';
import { useSelector } from 'react-redux';

export const useSelectPokemonList = () => {
  return useSelector((state: RootStateType) => state.pokemonShop.pokemonList);
};
