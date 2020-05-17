import { AnyAction, combineReducers } from 'redux';
import pokemonShop from './pokemonShop';
import cart from './cart';

const appReducer = combineReducers({
  pokemonShop,
  cart,
});

const rootReducer = (state: any, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
