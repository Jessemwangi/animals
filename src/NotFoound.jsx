import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoound = () => {
    return (
        <div>
            <h1>Seems we lost our way....</h1>

            <h2>WHAT NEXT ....</h2>
            <div>
                <NavLink to='/'>Go Home</NavLink>
                <NavLink to='/'>Go Previous Page</NavLink>
            </div>

        </div>
    );
};

export default NotFoound;