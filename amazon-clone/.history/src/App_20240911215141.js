import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Product";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import Checkout from "./components/Checkout";
import Sign from "./routes/Sign";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  // my config goes here
});

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
          <Route path="/src/routes/Sign.js" element={<Sign />} />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
