import React from "react";
import "./Header.css";
function Header() {
  return (
    <React.Fragment>
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
      </React.Fragment>
    //   used react.Fragment instead of wrapping in a jsx fragment
  );
}

export default Header;
