import "./App.css";
import Header from "./Header.js";
import logo from "./amazon-logo.jpeg";
// import Header from "./Header.css";
function App() {
  return (
    //BEM
    <div className="App">
      <h1>My Amazon Store </h1>
      <img src= {logo}
      <Header />
      {/* {Home Nav} */}
    </div>
  );
}

export default App;
