import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Product";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout"/>
            <Header />
            <Checkout />
          <Router>
          <Route path="/"/>
            <Header />
            <Home />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
