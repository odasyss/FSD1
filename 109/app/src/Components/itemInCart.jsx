import React, { Component } from 'react';
import storeContext from '../context/storeContext';
import "./itemInCart.css"


class itemInCart extends Component {
    static contextType= storeContext
    state = {  }
    render() { 
        return (
            <div className = "item-in-cart">
                {this.props.prod.title}
            </div>

        )          
    }

getTotal = () =>{
        let total = this.props.prod.price * this.state.quantity;
        return total.toFixed(2);
    }
  }
 
export default itemInCart;