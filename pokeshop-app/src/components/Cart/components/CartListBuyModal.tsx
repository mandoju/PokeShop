import React from 'react';
import { getPriceString } from '../../../utils/getPriceString';

export const CardListBuyModal = ({
  price,
  total,
}: {
  price: number;
  total: number;
}) => {
  return (
    <div className="cart-buy-modal-container">
      <h1>Obrigado!</h1>
      <h3 className="cart-buy-modal-text">Você comprou</h3>
      <h2 className="cart-buy-modal-text"><b>{total}</b> pokémon por <b>{getPriceString(price,true)}</b></h2>
    </div>
  );
};
