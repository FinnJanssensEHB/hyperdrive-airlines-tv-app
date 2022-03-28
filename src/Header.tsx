import React from "react";
import "./Header.css";
import logo from "./logo.svg";

function Header() {
  return (
    <header className="main-header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-search">
        <input type="text" placeholder="search" />
      </div>
      <nav className="header-nav">
        <p>Home</p>
        <p>Favorites</p>
        <p>About</p>
      </nav>
    </header>
  );
}

export default Header;
