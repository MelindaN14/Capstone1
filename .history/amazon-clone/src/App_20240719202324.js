import React from "react";
import "./App.css";
import Header from "./Header";
import  Product from "./Product";
import Home from "./Home";

function App() {
  return (
    //BEM
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
