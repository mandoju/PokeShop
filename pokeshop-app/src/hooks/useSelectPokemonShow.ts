import { RootStateType } from "../store/ducks";
import { useSelector } from "react-redux";


export const useSelectPokemonShow = () => {
   return useSelector((state: RootStateType)  => state.pokemonShop.pokemonShow );
}