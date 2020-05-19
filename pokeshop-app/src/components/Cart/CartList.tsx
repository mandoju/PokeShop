import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store/ducks';
import { CartItem } from './components/CartItem';

export const CartList = () => {
  const cart = useSelector((state: RootStateType) => state.cart.cart);

  return (
    <div className="pokemon-cart-container">
      <div className="pokemon-cart-inner-container">
        <div className="pokemon-cart-title-container">
          <p className="pokemon-cart-title">Carrinho</p>
        </div>
        <div className="pokemon-cart-list-container">
          {cart.map((item) => (
            <CartItem pokemon={item} />
          ))}
        </div>
        <div className="pokemon-cart-button-container">
          <button className="pokemon-cart-button">COMPRE</button>
        </div>
      </div>
    </div>
  );
};
