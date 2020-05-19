import React from 'react';
import { POKEMON_LIST_LOAD_MORE_TITLE } from '../../../constants/dictionary';

export const PokemonListLoadMore = () => {
  return (
    <div className="pokemon-shop-list-load-more-container">
      <p className="pokemon-shop-list-load-more-text">{POKEMON_LIST_LOAD_MORE_TITLE}</p>
    </div>
  );
};
