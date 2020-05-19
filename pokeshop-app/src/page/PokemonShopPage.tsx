import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPokemonList, loadPokemonShow } from '../store/ducks/pokemonShop';
import { NavBar } from '../components/Navbar/NavBar';
import { useSelectPokemonList } from '../hooks/useSelectPokemonList';
import { PokemonList } from '../components/PokemonList/PokemonList';
import { CartList } from '../components/Cart/CartList';

/**
 * Página do shop do pokemon. Esta página mostra a vitrine, carrinho de compras e busca
 */
export const PokemonPage = () => {
  
  
  const dispatch = useDispatch();
  
  // recebendo valor da lista de pokemons do determinado tipo
  const pokemonList = useSelectPokemonList();


  // Quando carregar a página, pegar a lista de pokemons de um determinado tipo
  useEffect(() => {
    dispatch(loadPokemonList());
  }, [dispatch]);

  // Carregando a informação dos 40 pokemons iniciais (para evitar a página carregar todos de uma vez só)
  useEffect(() => {
    if (pokemonList.length > 0) {
      const size = 40;
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
