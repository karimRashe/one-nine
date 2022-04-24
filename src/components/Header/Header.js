import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">Main</Link>
            <Link to="/Volunteers">Volunteers</Link>
        </nav>
    );
};

export default Header;