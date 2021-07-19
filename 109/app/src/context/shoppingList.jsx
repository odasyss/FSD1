import React, { Component } from 'react';
import storeContext from '../context/storeContext';

class ShoppingList extends Component {
    static contextType= storeContext;
    state = {  }
    render() { 
        return (
            <div className="shopping-list">
                <div className="capture">
                    <input type="text" />
                    <button onClick={this.handleAddToList} className="btn btn-sm btn-light btn-add">Add To List </button>
                    {this.context.cart.map((prod) =><addToShoppingList key={prod._id} prod={prod}></addToShoppingList>
)} 
                </div>
            </div>
          );
    }
    handleAddToList = () => {
        this.context.addToShoppingList("the test from the input field")
    };

}

/**
 *
 * handle the button click
 * call a function
 * get the text from the input field
 * connect your component to use the context store
 * call the function (addToShoppingList) on the context
 *
 * read the shoppingList [] from the context
 * map that array into div with the text inside
 *
 */

export default ShoppingList;