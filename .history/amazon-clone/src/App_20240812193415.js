import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Product";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import { Checkout } from "./components/";

function App() {
  return (
    // BEM

    <Router>
      <Header />
      <Home />
      <Checkout />
      <div className="app">
        <Routes>
          <Route path="./components/Checkout.js" element={<Checkout />} />
          <Route path="/"></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
