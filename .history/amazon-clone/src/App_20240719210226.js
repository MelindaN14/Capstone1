import React from "react";
import "./App.css";
import Header from "./Header";
import "./Product";
import Home from "./Home";

function App() {
  return (
    //BEM Block Element Modifi
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
