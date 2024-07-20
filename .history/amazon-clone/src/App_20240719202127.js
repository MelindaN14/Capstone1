import React from "react";
import "./App.css";
import Header from "./Header";
import "./Product.js";
import Home from "./Home";

function App() {
  return (
    //BEM
    <div className="App">
      <Header />
      {/* <div className={Header}></div> */}
      <Home />
    </div>
  );
}

export default App;
