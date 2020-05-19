import React from 'react';
import { CARD_ADD_BUTTON_TITLE } from '../../../constants/dictionary';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/ducks/cart';
import { getPriceString } from '../../../utils/getPriceString';
import { NO_IMAGE_PATH } from '../../../constants/image';
import { PokemonShopInfo } from '../../../model/PokemonShopInfo';

/**
 * Componente que renderiza o cartão de um pokemon
 * @param pokemon pokemon que irá ser representado no cartão
 */
export const PokemonListCard = ({ pokemon }: { pokemon: PokemonShopInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className={'pokemon-shop-list-card-container'}>
      <div className={'pokemon-shop-list-card'}>
        <div className={'pokemon-shop-list-card-info'}>
          <img
            src={pokemon.sprites.front_default || NO_IMAGE_PATH}
            alt={pokemon.name}
            className={'pokemon-shop-list-card-image'}
          />
          <div style={{ display: 'flexbox' }}>
            <p className="pokemon-shop-list-card-name">{pokemon.name}</p>
            <p className="pokemon-shop-list-card-price">
              {getPriceString(pokemon.price, true)}
            </p>
          </div>
        </div>

        <div
          className={'pokemon-shop-list-card-button-container'}
          onClick={() => dispatch(addToCart(pokemon))}
        >
          <p className={'pokemon-shop-list-card-button-title'}>
            {CARD_ADD_BUTTON_TITLE}
          </p>
        </div>
      </div>
    </div>
  );
};
