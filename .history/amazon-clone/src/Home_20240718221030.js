import React from "react";
import "./Home.css";
import "./App.css";
import "./Header.js";
import header__logo from "./images/";
import Product from "./Product";
import home__image from "./images/blue.jpeg";
// import ListIcon from "@mui/icons-material/List";

function Home() {
  return (
    <div className="home">
      <div className="home__container" />
      <img className="home__image" src={home__image} alt="" />

      <div className="home__row">
        {/* {product} */}
        <Product />
      </div>

      <div className="home__row">
        <product />
        <product />
        <product />
      </div>

      <div className="product__info"></div>

      <div className="Logo" />
      <img className="header__logo" src="{header__logo}" alt="" />

      {/* <p> The Home component</p> */}
    </div>
  );
}

export default Home;
