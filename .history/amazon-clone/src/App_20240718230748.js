import React from "react";
import "./App.css";
import Header from "./Header.js";
import "./Header";
import header__logo from "./images/Alogo._TTD_.png";
import "./Product.js";
import Home from "./Home";

// import Styles from "./App.module.css";
// import compressorComp from "./Components/Compressor";
// import "bootstrap/dist/css/bootstrap.css";
// import from "./pexels-photo-281260.jpeg";
// import Header from "./Header";

function App() {
  return (
    //BEM
    <div className="App">
      <img
        src={header__logo}
        alt=""
        // style={{ width: "60px;", height: "auto" }}
      />
      {/* <div> className = {Header} */}
      {/* Picture is too large and takes up entire page */}
      {/* <div className={Styles.block}></div> */}
      {/* <Header/> */}
      <Home />
      <Header />
    </div>
  );
}

export default App;
