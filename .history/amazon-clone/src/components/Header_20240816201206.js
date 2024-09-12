import React from "react";
import "./Header.css";
import header__logo from "../images/Alogo._TTD_.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import Sign fron ""

function Header() {
  return (
    // <React.Fragment>
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={header__logo} alt="" />
      </Link>
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
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">1</span>
          </div>
        </Link>
      </div>
      <div>
        <Link to="../routes/Sign.js">
          <div className="header__optionLineTwo"></div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
