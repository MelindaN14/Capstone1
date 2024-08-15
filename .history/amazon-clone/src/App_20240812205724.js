import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Product";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    // BEM

    <Router>
      <Header />
      <Home />
      <div className="app">
        <Routes>
          <Route path="/" element={<a/>} />
          {/* <Route path="/components/Checkout.js"> element={<Checkout/> } */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
