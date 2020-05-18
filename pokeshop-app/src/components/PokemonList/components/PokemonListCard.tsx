import React from 'react';
import styles from './PokemonListCard.module.scss';
import { CARD_BUY_BUTTON_TITLE } from '../../../constants/dictionary';

export const PokemonListCard = ({pokemon}: {pokemon: any}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.pokemonInfo}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>{pokemon.name}</p>
          <p>{pokemon.price}</p>
        </div>

        <div className={styles['button-container']}>
          <button>{CARD_BUY_BUTTON_TITLE}</button>
        </div>
      </div>
    </div>
  );
};
