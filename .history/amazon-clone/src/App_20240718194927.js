import React from "react";
import "./App.css";
import Header from "./Header.js";
import Header__logo from "./Alogo._TTD_.png";
import home__image from ""
// import Header from "./Header";
import Home from "./Home";
// import Styles from "./App.module.css";
// import compressorComp from "./Components/Compressor";
// import "bootstrap/dist/css/bootstrap.css";
// import Header from "./Header.css";
function App() {
  return (
    //BEM
    <div className="App">
      <img
        src={Header__logo}
        alt="amazon__logo"
        // style={{ width: "60px;", height: "auto" }}
      />
      {/* Picture is too large and takes up entire page */}
      {/* <div className={Styles.block}></div> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
