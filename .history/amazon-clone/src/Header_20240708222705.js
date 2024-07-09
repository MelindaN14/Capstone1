import React from "react";
import "./Header.css";
function Header() {
  return (
    <React.fragment>
      <div className="header">
        <img
          className="header__logo"
          src="https://www.amazon.com/ref=nav_logo"
          alt="amazon.com"
        />

        <div className="header__search">
          <input className="header__searchInput" type="text" />
        </div>

        <div className="header__searchInput" type="text" />
      </div>
      <div className="header__option" type="text" />
    </>
  );
}

export default Header;
