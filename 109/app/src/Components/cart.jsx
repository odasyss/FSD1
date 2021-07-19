import React, { Component } from 'react';
import storeContext from '../context/storeContext';
import itemInCart from './itemInCart';
import "./cart.css"

class Cart extends Component {
    static contextType= storeContext
    state = {  }
    render() { 
        return ( 
            <div className="cart-page">
                <h4> THE CART!</h4>
                {/* <img src={"/images/products/"+ this.props.prod.image} alt="item" /> */}
                {/* <div className="product-container">
                    {this.context.cart.map((prod) =>
                    <itemInCart key={prod._id} prod={prod}></itemInCart> */}
                {/* )} 
                 </div> */}
             </div>
         );
    }
}
 
export default Cart;