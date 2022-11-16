import React from 'react';
import { Link } from 'react-router-dom';

const Narbar = () => {
    return (
        <header>
            <Link to={'/'}>Home</Link>
            <Link to={'/animals'}>Animals</Link>
            <Link to={'/birds'}>Birds</Link>
            <Link to={'/about'}>About</Link>
        </header>
    );
};

export default Narbar;