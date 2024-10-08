import React from "react";
import "./Header.css";

function Header() {
  return (
    // <React.Fragment>
    <div className="header">
      <img className="header__logo" img src="/Users/melindananjad/Downloads/Attachment-1.png" alt="amazon.com" />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* {Logo} */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest </span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="optionLineOne"> Returns</span>

          <span className="header__optionLineTwo">Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
