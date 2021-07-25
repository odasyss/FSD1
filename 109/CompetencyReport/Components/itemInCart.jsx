import React, { Component } from 'react';
import storeContext from '../context/storeContext';
import "./itemInCart.css"


class itemInCart extends Component {
    static contextType= storeContext
    state = {  }
    render() { 
        return (
            <div className = "item-in-cart">
          <img src={"/images/products/" + this.props.prod.image} alt="item" />
            <div className="item-info">
            <h2>{this.props.prod.title}</h2>
            <label>{this.props.prod.category}</label>
            </div>

            <label>${this.props.prod.price}</label>
            <label>{this.props.prod.quantity}</label>
            <label>${this.getTotal()}</label>

            <button className="btn btn-sm btn-danger">Remove</button>
            </div>
            );         
                }

getTotal = () =>{
        let total = this.props.prod.price * this.state.quantity;
        return total.toFixed(2);
    }
  }
 
export default itemInCart;