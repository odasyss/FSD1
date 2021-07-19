import React, { Component } from 'react';
import storeContext from './storeContext';
import ShoppingList from './shoppingList';

class GlobalSate extends Component {
    state = { 
        name: "Odasys",
        cart: [],
     };
    render() { 
        return (
        <storeContext.Provider value={{
            name: this.state.name,
            cart: this.state.cart,
            ShoppingList: this.state.ShoppingList,
            addProdToCart: this.addProdToCart,
            addToShoppingList: this.addToShoppingList,
            }}
        >
           {this.props.children}
        </storeContext.Provider>
        );
    }

    addToShoppingList = (text) => {
        let copy = [...this.state.ShoppingList];

        copy.push(text);

        this.setState({ ShoppingList: copy})

    }

    addProdToCart = (product) =>{
        let myCart =[...this.state.cart];
        let found = false;
        for(let i =0; i<myCart.length; i++){
            let current = myCart[i];
            if(current._id === product._id){
                found =true;
                current.quantity += product.quantity;
            }
        }
        if(!found){
        myCart.push(product);
        }
        this.setState({cart: myCart});
        console.log("Addeed a prod to the cart", myCart);
    };

}
 
export default GlobalSate;