import React from "react";
import "./App.css";
import Header from "./Header";
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
      {/* <img
        src={header__logo}
        alt="" */}
        {/* // style={{ width: "60px;", height: "auto" }}
      /> */}
      <Header />
      <div className={Header}></div>
      <Home />
    </div>
  );
}

export default App;
