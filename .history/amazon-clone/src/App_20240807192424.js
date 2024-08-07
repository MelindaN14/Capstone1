import React from "react";
import "./App.css";
// import Header from "./components/Header";
import "./components/Product";
// import Home from "./routes/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>I AM A CHECKOUT TEST ME</h1>
            </
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
