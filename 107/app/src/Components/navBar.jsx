import React, { Component } from 'react';//imrc
import "./navBar.css"


//cc
class NavBar extends Component {
    state = {  }
    render() { 
        return (<div classNameName= "navbar-page">
            <nav className="navbar navbar-expand-lg navbar-light "style={{backgroundColor: "rgb(231, 228, 10)"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">APP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">CATALOG</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">ABOUT US</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
            {/* <h6>Put MENU Here</h6> */}
            </div> 
             );
    }
}
 
export default NavBar;