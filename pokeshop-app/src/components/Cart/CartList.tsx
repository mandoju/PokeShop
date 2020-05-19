import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateType } from '../../store/ducks';
import { CartItem } from './components/CartItem';
import { ModalMessage } from '../Modal/ModalMessage';
import { CardListBuyModal } from './components/CartListBuyModal';
import { getPriceString } from '../../utils/getPriceString';
import { resetCart } from '../../store/ducks/cart';
import {
  CART_HEADER_TITLE,
  CART_TOTAL_LABEL,
  CART_BUY_BUTTON_TITLE,
} from '../../constants/dictionary';

export const CartList = () => {
  const cart = useSelector((state: RootStateType) => state.cart.cart);
  const dispatch = useDispatch();

  const [modalState, setModalState] = useState(false);

  const totalPrice =
    cart.reduce((a, b) => a + Math.floor(b.price * 100), 0) / 100;

  return (
    <>
      <div className="pokemon-cart-container">
        <div className="pokemon-cart-inner-container">
          <div className="pokemon-cart-title-container">
            <p className="pokemon-cart-title">{CART_HEADER_TITLE}</p>
          </div>
          <div className="pokemon-cart-list-container">
            {cart.map((item, idx) => (
              <CartItem key={idx} pokemon={item} index={idx} />
            ))}
          </div>
          <div className="pokemon-cart-total-container">
            <div className="pokemon-cart-total-label-container ">
              <p className="pokemon-cart-total-label-text">
                {CART_TOTAL_LABEL}
              </p>
            </div>
            <div className="pokemon-cart-total-price-container">
              <p className="pokemon-cart-total-price-text">
                {getPriceString(totalPrice, true)}
              </p>
            </div>
          </div>
          <div
            className="pokemon-cart-button-container"
            onClick={() => setModalState(true)}
          >
            <p className="pokemon-cart-button-text">{CART_BUY_BUTTON_TITLE}</p>
          </div>
        </div>
      </div>
      <ModalMessage
        showModal={modalState}
        closeFunction={() => {
          dispatch(resetCart());
          setModalState(false);
        }}
      >
        <CardListBuyModal total={cart.length} price={totalPrice} />
      </ModalMessage>
    </>
  );
};
