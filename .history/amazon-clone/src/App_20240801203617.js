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
       <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
      </div>
    </Router>
  );
}

export default App;
