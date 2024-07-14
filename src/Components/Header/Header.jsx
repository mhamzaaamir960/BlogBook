// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "./Logo.png";
import menuIcon from "./Create.png";

const Header = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/Create");
  };
  const handleLogo = () => {
    Navigate("/");
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" onClick={handleLogo} />
      </div>
      <div className="menu-icon-container">
        <div className="create-btn-box">
          <img
            src={menuIcon}
            alt="Menu"
            className="Create-Blog-btn"
            onClick={handleClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
