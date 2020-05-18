import { AnyAction } from 'redux';

const CART_DATA = 'cart_data';

const INITIAL_STATE = {
  chart: [],
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CART_DATA:
      return { ...state, pokemonList: action.payload };
    default:
      return state;
  }
};
