import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Product";
import Home from "./routes/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
