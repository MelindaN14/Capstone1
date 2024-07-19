import React from "react";
import "./App.css";
import Header from "./Header.js";
import header__logo from "./images/Alogo._TTD_.png";
import "./Product.js";

import Home from "./Home";
import Header from "./Header.css";
// import Styles from "./App.module.css";
// import compressorComp from "./Components/Compressor";
// import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    //BEM
    <div className="App">
      <img
        src={header__logo}
        alt="amazon__logo"
        // style={{ width: "60px;", height: "auto" }}
      />
      {/* Picture is too large and takes up entire page */}
      {/* <div className={Styles.block}></div> */}
      {/* <Header/> */}
      <Home/>
    </div>
  );
}

export default App;
