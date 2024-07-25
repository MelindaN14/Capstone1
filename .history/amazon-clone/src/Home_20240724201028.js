import React from "react";
import "./Home.css";
// import "./Header.js";
import header__logo from "./images/Alogo._TTD_.png";
import Product from "./Product";
import home__image from "./images/blue.jpeg";
import Header from "./Header";
// import ListIcon from "@mui/icons-material/List";

function Home() {
  return (
    <div className="home">
      <div className="home__container" />
      <img className="home__image" src={home__image} alt="" />

      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home__row">
              {<product title="A Court Of Thorns and Roses" price {} />}
        {<product />}
        {<product />}
      </div>
      <div className="product__info"></div>
      <div className="logo" />
      <img className="header__logo" src="{header__logo}" alt="" />
      {/* <p> The Home component</p> BEM */}
    </div>
  );
}

export default Home;
