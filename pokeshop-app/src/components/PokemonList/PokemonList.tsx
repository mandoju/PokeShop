import React from 'react';
import { useSelectPokemonShow } from '../../hooks/useSelectPokemonShow';
import { PokemonListCard } from './components/PokemonListCard';
import styles from './PokemonList.module.scss'

export  const PokemonList = () => {
    const pokemonShow = useSelectPokemonShow();

    return (<div className={"pokemon-shop-list-container"}>
        <div className={styles.list}>
            {pokemonShow.map((pokemon, idx) => <PokemonListCard key={idx} pokemon={pokemon} />)}
        </div>
    </div>)
}