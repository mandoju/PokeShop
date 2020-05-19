import React from 'react';
import { useDispatch } from 'react-redux';

export const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <div className="navbar-logo" />
      </div>
      <input className="navbar-input" onChange={() => dispatch} />
      <div className="navbar-right-element-container"></div>
    </div>
  );
};
