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

    <Router>
      <Header />
      <Home />
      <Checkout />
      <div className="app">
        <Routes>
          <Route path="/checkout"></Route>

          <Route path="/"></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
