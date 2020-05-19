import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../store/ducks/pokemonShop';

/**
 * Componente que renderiza a navbar
 */
export const NavBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      dispatch(searchPokemon(event.target.value));
    },
    [dispatch]
  );

  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <div className="navbar-logo" />
      </div>
      <div className="navbar-input-container">
        <i className="fa fa-search fa-lg icon" />
        <input
          className="navbar-input"
          value={inputValue}
          onChange={handleChange}
          placeholder="Pesquisar..."
        />
      </div>
      <div className="navbar-right-element-container"></div>
    </div>
  );
};
