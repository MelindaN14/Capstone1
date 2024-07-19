import React from "react";
import "./Header.css";
import header__logo from "./Alogo._TTD_.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import from "./pexels-photo-281260.jpeg";
function Header() {
  return (
    // <React.Fragment>
    <div className="header">
      <img
        className="header__logo"
        src="amazon-clone/src/Alogo._TTD_.png"
        // fix image its not on the header?!
        alt="amazon-clone/src/Alogo._TTD_.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* {Logo} */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest </span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="optionLineOne"> Returns </span>

          <span className="header__optionLineTwo"> & Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
        <
      </div>
    </div>
  );
}

export default Header;
