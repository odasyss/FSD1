import React, { Component } from 'react';//imrc
import "./navBar.css"
import {Link} from "react-router-dom"
import storeContext from '../context/storeContext';


//cc
class NavBar extends Component {
  static contextType = storeContext;
    state = {  }
    render() { 
        return (<div className= "navbar-page">
            <nav className="navbar navbar-expand-lg navbar-light "style={{backgroundColor: "rgb(231, 228, 10)"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">ALGORITHM</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">CATALOG</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT US</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact US</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">ADMIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/list">Shopping List</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-primary" to="/cart">
              <i aria-hidden="true" className="fa fa-cart-plus mr-1"></i>
              View Cart &nbsp;
              <span className="badge badge-secondary cart-badge">
                {this.context.cart.lenght}
              </span>
            </Link>
          </form>

    </div>
  </div>
</nav>
            {/* <h6>Put MENU Here</h6> */}
            </div> 
             );
    }
}
 
export default NavBar;