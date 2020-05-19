import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../store/ducks/pokemonShop';

export const NavBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('')
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setInputValue(event.target.value);
    dispatch(searchPokemon(event.target.value));
  },[dispatch,searchPokemon])

  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <div className="navbar-logo" />
      </div>
      <input className="navbar-input" value={inputValue} onChange={handleChange} />
      <div className="navbar-right-element-container"></div>
    </div>
  );
};
