// src/components/BottomTabs.js
import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './home.png';
import categoriesIcon from './Category.png';
import accountIcon from './Account.png';
import './BottomTabs.css';

const BottomTabs = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/">
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>
      <Link to="/Categories">
        <img src={categoriesIcon} alt="Categories" />
        <span>Categories</span>
      </Link>
      <Link to="/Account">
        <img src={accountIcon} alt="Account" />
        <span>Account</span>
      </Link>
    </nav>
  );
};

export default BottomTabs;


