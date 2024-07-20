import React from "react";
import "./App.css";
import Header from "./Header";
import "./Product";
import Home from "./Home";

function App() {
  return (
    //BEM BL
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
