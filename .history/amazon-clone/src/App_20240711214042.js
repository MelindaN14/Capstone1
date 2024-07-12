import React from "react";
import "./App.css";
import Header from "./Header.js";
import Header__logo from "./amazon-logo.jpeg";
// import Styles from "./App.module.css";
// import compressorComp from "./Components/Compressor";
// import "bootstrap/dist/css/bootstrap.css";
// import Header from "./Header.css";
function App() {
  return (
    //BEM
    <div className="App">
      <img src={Header__logo} alt="amazon-logo.jpeg" style={{ width: 60px; }} />
      {/* <div className={Styles.block}></div> */}
      <Header />
      {/* {Home Nav} */}
    </div>
  );
}

export default App;
