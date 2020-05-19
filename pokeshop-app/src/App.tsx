import React from 'react';
import './styles/App.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { PokemonPage } from './page/PokemonShopPage';
require(`./styles/types/${process.env.REACT_APP_POKEMON_TYPE}.scss`)

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PokemonPage />
    </Provider>
  );
};

export default App;
