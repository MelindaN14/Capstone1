import React from "react";
import "./Home.css";
// import "./Header.js";
import header__logo from "./images/Alogo._TTD_.png";
import Product from "./Product";
import home__image from "./images/amazon-border.jpg";
import Header from "./Header";
import book from "./images/ACOTAR.jpeg";
import beats from "./images/beats pill.jpg";
import images from "./images";
import eero from "./images/eero.jpg";
// import ListIcon from "@mui/icons-material/List";

function Home() {
  return (
    <div className="home">
      <div className="home__container" />
      <img className="home__image" src={home__image} alt="" />

      <div className="home__row">
        <Product
          title="A Court Of Thorns and Roses"
          price={17.59}
          image={book}
          rating={5}
        />
        <Product
          title="Beats Pill Wireless Bluetooth Speaker"
          price={149.95}
          rating={4}
          image={beats}
        />
        <Product
          title="Amazon eero mesh wifi router"
          price={69.99}
          rating={5}
          image={eero}
        />
      </div>
      <div className="home__row">
        <Product />
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
