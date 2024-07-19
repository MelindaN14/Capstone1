import React from "react";
import "./Home.css";
import "./App.css";
import "./Header.js";
import header__logo from "./Alogo._TTD_.png";
import Product from "./Product";
// import "./pexels-photo-281260.jpeg;
// import ListIcon from "@mui/icons-material/List";

function Home() {
  return (
    <div className="home">
      <div className="home__container" />
      <img
        className="home__image"
        src="amazon-clone/src/pexels-photo-281260.jpeg"
        alt=""
      />

      <div className="home__row">
        {/* {product} */}
        <Product />
        <product />
      </div>

      <div className="home__row">
        <product />
        <product />
        <product />
      </div>

      <div className="product__imnfo"></div>

      <div className="headerLogo" />
      <img
        className="header__logo"
        src="amazon-clone/src/pexels-photo-281260.jpeg"
        alt=""
      />

      {/* <p> The Home component</p> */}
    </div>
  );
}

export default Home;
