import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store/ducks';

export const CartList = () => {
    const cart = useSelector((state: RootStateType) => state.cart.cart)

    return cart.map(item => <p>{item.name}</p>)
}