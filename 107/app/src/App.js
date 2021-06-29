import "./App.css";
import NavBar from "./Components/navBar";
import Footer from "./Components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Catalog from "./Components/catalog";
function App() {
  return (
    <div className="App">
      <NavBar> </NavBar>
      <h1> Hello Welcome to my ONline</h1>
      <button className="btn btn-primary">Click Me!</button>
      <Catalog></Catalog>
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* <a */}
      {/* className="App-link" */}
      {/* href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <footer>Hello</footer> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
