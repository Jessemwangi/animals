import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Narbar = () => {
    return (
        <header>
            <NavLink className='link' to={'/'}>Home</NavLink>
            <NavLink className='link' to={'/animals'}>Animals</NavLink>
            <NavLink className='link' to={'/birds'}>Birds</NavLink>
            <NavLink className='link' to={'/about'}>About</NavLink>
        </header>
    );
};

export default Narbar;