import React from 'react';
import { useDispatch } from 'react-redux';

export const NavBar = () => {
    const dispatch = useDispatch()
    return (<div className="navbar">
        <input onChange={() => dispatch} />
    </div>)
}