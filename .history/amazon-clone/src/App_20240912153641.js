import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Product";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import Checkout from "./components/Checkout";
import Sign from "./routes/Sign";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  // my config goes here
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxxsa4IjkYV4AfnWZIlE69b7plXGD2DKU",
  authDomain: "clone-26808.firebaseapp.com",
  databaseURL: "https://clone-26808-default-rtdb.firebaseio.com",
  projectId: "clone-26808",
  storageBucket: "clone-26808.appspot.com",
  messagingSenderId: "111237847216",
  appId: "1:111237847216:web:19d554903015b3b1230375",
  measurementId: "G-5878888H8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// });

// const auth = firebase.auth();
// const firestore = firebase.firestore();


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
