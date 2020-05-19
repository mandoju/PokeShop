import React from 'react';
import { PokemonShopInfo } from '../../../model/PokemonShopInfo';

export const CartItem = ({pokemon} : {pokemon: PokemonShopInfo}) => {
    return (<div className="cart-item">
        <div className="cart-item-image-container">
            <img src={pokemon.sprites.front_default} className="cart-item-image" />
        </div>
        <div className="cart-item-name-container">
            <p className="cart-item-name">{pokemon.name}</p>
        </div>

        <div className="cart-item-price-container">
            <p className="cart-item-price">{pokemon.price}</p>
        </div>
    </div>
    );
}