import React, { Component } from 'react';
import QuantityPicker from './QuantityPicker';
import "./item.css"
import storeContext from '../context/storeContext';

class Item extends Component {
    static contextType = storeContext;
    state = {
        quantity: 1
      };
    render() { 
        return (<div className="item">
             <h2>{this.props.prod.title}</h2>
             {this.context.name}
            <img src={"/images/products/"+ this.props.prod.image} alt="item" />
            {/* <img src="https://picsum.photos/200/200" alt="photo" /> */}
           
            <h6>{this.props.prod.description}..</h6>
            <div className="prices">
                {/* <h6>{this.props.prod.price}</h6> */}
            <label className="total-value">Total:${this.getTotal()}</label>
            <label className="price">Price:${this.props.prod.price.toFixed(2)}</label>
            {/* <label className="total">Total:${this.props.prod.price * this.state.quantity}</label> */}
            </div>
            <div className="item-control">
            <QuantityPicker onValueChange={this.handleQuantityChange}></QuantityPicker>
            <button onClick={this.handleAddButton} className="btn btn-sm btn-light btn-add">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
            
            </div>
        </div>);
    }
    handleAddButton = () =>{
        var copy = {...this.props.prod,
            quantity: this.state.quantity
        };
        
        this.context.addProdToCart(copy);

    }
    getTotal = () =>{
        let total = this.props.prod.price * this.state.quantity;
        return total.toFixed(2);
    }
    handleQuantityChange = (quantity) =>{
         console.log("Quantity changed", quantity);
         this.setState({quantity : quantity});
    };
     
}

export default Item;

// https://picsum.photos/200/300
