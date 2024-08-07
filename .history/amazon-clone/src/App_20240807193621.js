import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Product";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    // BEM
      <Header />
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout">
          
            <h1>I AM A CHECKOUT TEST ME</h1>
          </Route>
          <Route path="/">
          
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
