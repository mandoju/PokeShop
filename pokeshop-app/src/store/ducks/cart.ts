import { AnyAction } from 'redux';
import { RootStateType } from '.';
import { PokemonShopInfo } from '../../model/PokemonShopInfo';

const CART_DATA = 'cart_data';

export interface CartDuck {
  cart: PokemonShopInfo[]; // Lista de pokémon dentro do carrinho
}

const CART_INITIAL_STATE: CartDuck = {
  cart: [],
};

/**
 * Reducer que representa o carrinho
 */
export default (state = CART_INITIAL_STATE, action: AnyAction): CartDuck => {
  switch (action.type) {
    case CART_DATA:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

/**
 * Action creator que adiciona um pokemon ao carrinho
 * @param pokemon Pokémon que irá ser adicioando ao carrinho
 */
export const addToCart = (pokemon: PokemonShopInfo) => {
  return (dispatch: any, getState: () => RootStateType) => {
    const { cart } = getState().cart;
    const payload = [...cart, pokemon];
    return dispatch({ type: CART_DATA, payload });
  };
};

/**
 * Action creator  que reseta o carrinho (utilizado pós compra)
 */
export const resetCart = () => {
  return (dispatch: any) => {
    const payload: PokemonShopInfo[] = [];
    return dispatch({ type: CART_DATA, payload });
  };
};

/**
 * Action creator que remove um pokémon do carrinho
 * @param index índice que irá ser removido
 */
export const removeFromCart = (index: number) => {
  return (dispatch: any, getState: () => RootStateType) => {
    const { cart } = getState().cart;
    const payload = [...cart];
    payload.splice(index, 1);
    return dispatch({ type: CART_DATA, payload });
  };
};
