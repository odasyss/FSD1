import "./App.css";
import NavBar from "./Components/navBar";
import Footer from "./Components/footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Catalog from "./Components/catalog";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Components/home";
import about from "./Components/about";
import contact from "./Components/contact";
import Cart from "./Components/cart";
import admin from "./Components/admin";
import GlobalSate from "./context/globalState";
import ShoppingList from "./context/shoppingList";

function App() {
  return (
    <GlobalSate>
      <BrowserRouter>
        <div className="App">
          <NavBar> </NavBar>

          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/admin" exact component={admin}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/about" exact component={about}></Route>
            <Route path="/contact" exact component={contact}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/list" exact component={ShoppingList}></Route>
          </Switch>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalSate>
  );
}

export default App;
