import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Product";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import Checkout from "./components/Checkout";
import Sign from "./routes/Sign"

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/" element={<Home />} />
          <Route path="/src/routes/Sign.js"/>
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
