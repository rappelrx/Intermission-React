import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

/**
 * Navbar component that goes at the top of all pages.
 * 
 */
const CommonHeader = () => {
    return (
        <div id="header">
            <h1><Link to="/" id="logo"><img src={require('./TIO_banner2-white.png')} alt="TIO Banner" id='banner' /></Link></h1>
        </div>
    );
};

export default CommonHeader;