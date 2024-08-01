import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Product";
import Home from "./routes/Home";
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
        <Header />
        <Home />
      </div>
    </Router>
    </Switch>
  );
}

export default App;
