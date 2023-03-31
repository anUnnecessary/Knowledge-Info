import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
           <h2>Knowledge Master</h2>
           <div>
            <a href="/login">Login</a>
            <a href="/order">Read</a>
            <a href="/e-book">E-Book</a>
            <a href="/best-sells">Best-Sells</a>
            <hr />
            </div>
        </nav>
    );
};

export default Header;