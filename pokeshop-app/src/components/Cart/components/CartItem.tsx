import React from 'react';
import { PokemonShopInfo } from '../../../model/PokemonShopInfo';
import { getPriceString } from '../../../utils/getPriceString';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../store/ducks/cart';

export const CartItem = ({
  pokemon,
  index,
}: {
  pokemon: PokemonShopInfo;
  index: number;
}) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img src={pokemon.sprites.front_default} className="cart-item-image" alt={pokemon.name} />
      </div>
      <div className="cart-item-name-container">
        <div className="cart-item-space-container" />
        <div className="cart-item-content-container">
          <p className="cart-item-name">{pokemon.name}</p>
        </div>
      </div>

      <div className="cart-item-price-container">
        <div className="cart-item-space-container" />
        <div className="cart-item-content-container">
          <p className="cart-item-price">
            {getPriceString(pokemon.price, true)}
          </p>
          <a
            href={"#remove"}
            className="cart-item-remove"
            onClick={() => {
              dispatch(removeFromCart(index));
            }}
          >
            Remover
          </a>
        </div>
      </div>
    </div>
  );
};
