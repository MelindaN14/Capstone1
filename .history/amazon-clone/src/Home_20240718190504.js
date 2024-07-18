import React from "react";
import "./Home.css";
import "./App.css";
import Header from "./Header.js";
import Header__logo from "./amazon-logo.jpeg";
import home__image from ".
// import ListIcon from "@mui/icons-material/List";

function Home() {
  return (
    <div className="home">
      <div className="home__container" />
      <img
        className="home__image"
        src="amazon-clone/src/amazon-advertising-2021-652x342.jpg.webp"
        alt=""
      />
      <p> The Home component</p>
    </div>
  );
}

export default Home;
