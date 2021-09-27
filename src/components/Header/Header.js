import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header p-3 my-4">
            <h1 className="fw-bold text-success">Welcome to Writer's Club</h1>
            <h3>Select your writer for the club</h3>
            <h1>Total Budget :10000$</h1>
        </div>
    );
};

export default Header;