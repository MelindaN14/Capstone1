import React from "react";
import "./Home.css";
import Book from "../images/ACOTAR.jpeg";
import "../components/Header.js";
import header__logo from "../images/Alogo._TTD_.png";
import Product from "../components/Product.js";
import home__image from "../images/amazon-border.jpg";
import Header from "../components/Header";
import beats from "../images/beats pill.jpg";
import Ipad from "../images/apple-tablet.jpg";
import echo from "../images/echo-show.jpg";
import printer from "../images/hp-printer.jpg";
// import images from "..images";
import eero from "../images/eero.jpg";
// import ListIcon from "@mui/icons-material/List";

function Home() {
  return (
    <div className="home">
      <div className="home__container" />
      <img className="home__image" src={home__image} alt="" />

      <div className="home__row">
        <Product
          id=""
          title="A Court Of Thorns and Roses"
          price={17.59}
          image={Book}
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
        <Product
          title="Apple Ipad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display, 
              64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue"
          price={299.99}
          rating={5}
          image={Ipad}
        />
        <Product
          title="Amazon Echo Show 8 (3rd Gen, 2023 release) 
                  | With Spatial Audio, Smart Home Hub, and Alexa | 
                  Charcoal"
          price={149.99}
          rating={4}
          image={echo}
        />
        <Product
          title="HP Deskjet 2855e Home Printer"
          price={59.99}
          rating={4}
          image={printer}
        />

      </div>
      <div className="product__info"></div>
      <div className="logo" />
      <img className="header__logo" src={header__logo} alt="" />
      {/* <p> The Home component</p> BEM */}
    </div>
  );
}

export default Home;
