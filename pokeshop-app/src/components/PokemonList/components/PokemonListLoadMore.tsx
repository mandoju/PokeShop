import React from 'react';
import { POKEMON_LIST_LOAD_MORE_TITLE } from '../../../constants/dictionary';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../../store/ducks';
import { loadMorePokemon } from '../../../store/ducks/pokemonShop';

export const PokemonListLoadMore = () => {

  const  lastSearch  = useSelector( (state: RootStateType) => state.pokemonShop.lastSearch )
  const  pokemonListSameSize = useSelector( (state: RootStateType) => state.pokemonShop.pokemonList.length == state.pokemonShop.pokemonShow.length )
  const dispatch = useDispatch();
  if(lastSearch || pokemonListSameSize ) {
    return null
  }
  
  return (
    <div className="pokemon-shop-list-load-more-container" onClick={() => dispatch(loadMorePokemon())}>
      <p className="pokemon-shop-list-load-more-text">{POKEMON_LIST_LOAD_MORE_TITLE}</p>
    </div>
  );
};
