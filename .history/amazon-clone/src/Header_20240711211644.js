import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    // <React.Fragment>
    <div className="header">
      <imgclassName="header__logo"
        src="amazon-clone/src/amazon-logo.jpeg" />

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
