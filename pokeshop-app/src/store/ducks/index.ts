import { AnyAction, combineReducers } from 'redux';
import pokemonShop from './pokemonShop';
import cart from './cart';

// Reducer principal do aplicativo
const appReducer = combineReducers({
  pokemonShop,
  cart,
});

const rootReducer = (state: any, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;

// Tipo do estado do redux do aplicativo
export type RootStateType = ReturnType<typeof rootReducer>;
