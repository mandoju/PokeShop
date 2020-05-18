import { AnyAction } from 'redux';
import { RootStateType } from '.';

const CART_DATA = 'cart_data';

const INITIAL_STATE = {
  cart: [],
};

export default (state = INITIAL_STATE, action: AnyAction) => {
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
    const payload = [...cart, pokemon]
    return dispatch({type: CART_DATA, payload})
  }
}