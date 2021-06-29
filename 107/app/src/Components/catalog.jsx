import React, { Component } from 'react';
import Item from './items';
import "./catalog.css"
import ItemService from './../services/itemService';

class Catalog extends Component {
    state = { 
        items: []
     };
    render() { 
        console.log("RENDER")
        return (
            <div className="catalog-page">

                <h3>Our Amazing catalog with {this.state.items.length} products</h3>
                {this.state.items.map((prod) => (
                <Item key ={prod._id } prod={prod}></Item>
                ))}
            </div>
          );
    }
    componentDidMount(){
        console.log("did mount");
        // call the service to get the list of items
        var itemService = new ItemService();
        var items = itemService.getCatalog();
        this.setState({items : items});
        }
}
 
export default Catalog;