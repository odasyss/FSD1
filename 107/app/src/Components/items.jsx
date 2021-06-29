import React, { Component } from 'react';
import QuantityPicker from './QuantityPicker';
import "./item.css"

class Item extends Component {
    state = {  }
    render() { 
        return (<div className="item">
             <h2>{this.props.prod.title}</h2>
            <img src={"/images/products/"+ this.props.prod.image} alt="item" />
            {/* <img src="https://picsum.photos/200/200" alt="photo" /> */}
           
            <h6>{this.props.prod.description}..</h6>
            <div className="prices">
                {/* <h6>{this.props.prod.price}</h6> */}
            <label className="total">Total:${this.props.prod.price.toFixed(2)}</label>
            <label className="price">Price:${this.props.prod.price.toFixed(2)}</label>
            </div>
            <div className="item-control">
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-sm btn-light btn-add">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
            
            </div>
        </div>);
    }
}
 
export default Item;

// https://picsum.photos/200/300
