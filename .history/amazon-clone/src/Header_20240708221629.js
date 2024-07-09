import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header__logo">
      <img src="https://www.amazon.com/ref=nav_logo" alt="amazon.com" />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>

      <div className="header__searchInput" type="text"/>
      </div>
      
       <div className='header__option' type="text"/>
    </div>
  );
}

export default Header;
