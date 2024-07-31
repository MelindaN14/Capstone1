import React from "react";
import "./App.css";
import Header from "./components/";
import "./components/Product";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
