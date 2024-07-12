import "./App.css";
import Header from "./Header.js";
import logo from "./amazon-logo.jpeg";
// import compressorComp from "./Components/Compressor";
// import "bootstrap/dist/css/bootstrap.css";
// import Header from "./Header.css";
function App() {
  return (
    //BEM
    <div className="App">
      <h1>My Amazon Store </h1>
      <img src={logo} alt="amazon-logo.jpeg"/>
      <Header />
      {/* {Home Nav} */}
    </div>
  );
}

export default App;
