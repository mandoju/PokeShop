import React from 'react';
import styles from './PokemonListCard.module.scss';
import { CARD_BUY_BUTTON_TITLE } from '../../../constants/dictionary';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/ducks/cart';
import { getPriceString } from '../../../utils/getPriceString';

export const PokemonListCard = ({ pokemon }: { pokemon: any }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.pokemonInfo}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>{pokemon.name}</p>
          <p>{getPriceString(pokemon.price, true)}</p>
        </div>

        <div className={styles['button-container']}>
          <button onClick={() => dispatch(addToCart(pokemon))}>
            {CARD_BUY_BUTTON_TITLE}
          </button>
        </div>
      </div>
    </div>
  );
};
