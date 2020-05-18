import React from 'react';
import styles from './PokemonListCard.module.scss';
import { CARD_BUY_BUTTON_TITLE } from '../../../constants/dictionary';

export const PokemonListCard = (pokemon: any) => {
  console.log(pokemon.pokemon);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.pokemonInfo}>
          <img src={pokemon.pokemon.sprites.front_default} />
          <p>{pokemon.pokemon.name}</p>
        </div>

        <div className={styles['button-container']}>
          <button>{CARD_BUY_BUTTON_TITLE}</button>
        </div>
      </div>
    </div>
  );
};
