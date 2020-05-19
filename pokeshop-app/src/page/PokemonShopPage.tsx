import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPokemonList, loadPokemonShow } from '../store/ducks/pokemonShop';
import { NavBar } from '../components/Navbar/NavBar';
import { useSelectPokemonList } from '../hooks/useSelectPokemonList';
import { PokemonList } from '../components/PokemonList/PokemonList';
import { CartList } from '../components/Cart/CartList';

export const PokemonPage = () => {
  const pokemonList = useSelectPokemonList();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPokemonList());
  }, [dispatch]);

  useEffect(() => {
    if (pokemonList.length > 0) {
      const size = 20;
      const pokemonUrl = pokemonList
        .slice(0, size)
        .map((pokemon) => pokemon.pokemon);
      dispatch(loadPokemonShow(pokemonUrl));
    }
  }, [dispatch, pokemonList]);

  return (
    <div className="page-container">
      <NavBar />
      <div className="page-list-cart-container">
        <div className="pokemon-list-container">
          <PokemonList />
        </div>
        <CartList />
      </div>
    </div>
  );
};
