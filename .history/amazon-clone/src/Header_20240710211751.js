import React from "react";
import "./Header.css";

function Header() {
  return (
    // <React.Fragment>
      <div className="header">
        <img className="header__logo" src="" alt="amazon.com" />

        {/* className="header__logo"
          src="https://www.amazon.com/ref=nav_logo"
          alt="amazon.com" */}
    
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          {/* {Logo} */}
        </div>

        <div className="header__nav">

          <div className="header__option">
            <span
              className='header__optionLineOne'>HelloGuest </span>
          <span
            className='header__optionLineTwo'>Sign In</span>
        </div>

        <div className='header___option'>
          <span
            className='optionLineOne'> Returns
          </span>

          <span
          className=

        </div>




      </div>

       </div>
   
  );
}

export default Header;
