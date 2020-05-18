import React from 'react';

export const CartItem = ({pokemon} : {pokemon: any}) => {
    return (<div className="cart-item">
        <p>{pokemon.name}</p>
        <p>{pokemon.price}</p>
    </div>
    );
}