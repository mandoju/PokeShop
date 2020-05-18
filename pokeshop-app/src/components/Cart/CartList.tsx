import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store/ducks';
import { CartItem } from './components/CartItem';

export const CartList = () => {
  const cart = useSelector((state: RootStateType) => state.cart.cart);

  return (
    <div className={'pokemon-cart-container'}>
      <div className="pokemon-cart-title-container">
        <p className="pokemon-cart-title">Carrinho</p>
      </div>
      {cart.map((item) => (
        <CartItem pokemon={item} />
      ))}
      <button>COMPRE</button>
    </div>
  );
};
