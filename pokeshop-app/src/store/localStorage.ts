import { POKEMON_SHOP_INITIAL_STATE } from './ducks/pokemonShop';
import { PokemonShopInfo } from '../model/PokemonShopInfo';
import { RootStateType } from './ducks';
import { distincPokemon } from '../utils/distincPokemon';

/**
 * função que carrega o estado do carrinho do store para o redux
 */
export const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

/**
 *
 * @param state estado que irá ser salvo no redux
 */
export const saveCartState = (cardInfo: PokemonShopInfo[]) => {
  try {
    // realizando um distinct para não colocar pokemons repetidos no info
    const pokemonInfo = distincPokemon(cardInfo);

    // estado do redux que irá ser salvo no local storage
    const state: RootStateType = {
      cart: { cart: cardInfo },
      pokemonShop: {
        ...POKEMON_SHOP_INITIAL_STATE,
        pokemonInfo,
      },
    };

    // Salvando o estado no localStorage
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch {
    // ignorar errors de escrita
  }
};
