import { AnyAction } from 'redux';
import { RootStateType } from '.';
import { PokemonShopInfo } from '../../model/PokemonShopInfo';

const CART_DATA = 'cart_data';

interface CartDuck {
  cart: PokemonShopInfo[];
}

const INITIAL_STATE: CartDuck = {
  cart: [],
};

export default (state = INITIAL_STATE, action: AnyAction): CartDuck => {
  switch (action.type) {
    case CART_DATA:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export const addToCart = (pokemon: any) => {
  return (dispatch: any, getState: () => RootStateType) => {
    const { cart } = getState().cart;
    const payload = [...cart, pokemon];
    return dispatch({ type: CART_DATA, payload });
  };
};

export const resetCart = () => {
  return (dispatch: any) => {
    const payload: PokemonShopInfo[] = [];
    return dispatch({ type: CART_DATA, payload });
  };
};

export const removeFromCart = (index: number) => {
  return (dispatch: any, getState: () => RootStateType) => {
    const { cart } = getState().cart;
    const payload = [...cart];
    payload.splice(index, 1);
    return dispatch({ type: CART_DATA, payload });
  };
};
