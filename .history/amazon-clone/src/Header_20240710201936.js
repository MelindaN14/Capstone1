import React from "react";
import "./Header.css";


function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <img className= "" src = ""
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
    //   I used <react.Fragment> instead of wrapping the multiple parent div in a JSX fragment
  );
}

export default Header;
