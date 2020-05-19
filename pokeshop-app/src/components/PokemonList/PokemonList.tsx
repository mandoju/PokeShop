import React from 'react';
import { useSelectPokemonShow } from '../../hooks/useSelectPokemonShow';
import { PokemonListCard } from './components/PokemonListCard';

export const PokemonList = () => {
  const pokemonShow = useSelectPokemonShow();

  return (
    <div className={'pokemon-shop-list-container'}>
      <div className={'pokemon-shop-list-inner-container'}>
        {pokemonShow.map((pokemon, idx) => (
          <PokemonListCard key={idx} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
