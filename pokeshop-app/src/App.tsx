import React from 'react';
import './App.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { PokemonPage } from './page/PokemonShopPage';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PokemonPage />
    </Provider>
  );
};

export default App;
