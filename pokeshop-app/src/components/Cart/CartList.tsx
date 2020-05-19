import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store/ducks';
import { CartItem } from './components/CartItem';
import { ModalMessage } from '../Modal/ModalMessage';
import { CardListBuyModal } from './components/CartListBuyModal';

export const CartList = () => {
  const cart = useSelector((state: RootStateType) => state.cart.cart);

  const [modalState, setModalState] = useState(false);

  const totalPrice = cart.reduce((a, b) => a + b.price, 0)

  return (
    <>
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
          <div className="pokemon-cart-total-container">
            <div className="pokemon-cart-total-label-container ">
              <p>Total:</p>
            </div>
            <div className="pokemon-cart-total-price-container">
              <p>{totalPrice}</p>
            </div>
          </div>
          <div className="pokemon-cart-button-container">
            <button
              className="pokemon-cart-button"
              onClick={() => setModalState(true)}
            >
              COMPRE
            </button>
          </div>
        </div>
      </div>
      <ModalMessage
        showModal={modalState}
        closeFunction={() => setModalState(false)}
      >
        <CardListBuyModal total={cart.length} price={totalPrice} />
      </ModalMessage>
    </>
  );
};
