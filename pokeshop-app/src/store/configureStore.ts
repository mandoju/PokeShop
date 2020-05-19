import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './ducks';
import { loadCartState, saveCartState } from './localStorage';
import { throttle } from '../utils/throttle';

/**
 * Função que configura o estado do store do redux;
 *
 */
export default function configureStore() {
  
  // resgatando o carrinho salvo localmente
  const persistedState = loadCartState();

  // criando store do redux
  const store = createStore(reducer, persistedState, applyMiddleware(ReduxThunk));

  // salvando estado do carrinho a cada 1 segundo
  store.subscribe(
    throttle(() => { 
      saveCartState(store.getState().cart.cart)
    } , 1000) 
  )

  return store;
}