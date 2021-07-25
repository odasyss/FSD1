import React, { Component } from 'react';
import Item from './items';
import "./catalog.css"
import ItemService from './../services/itemService';

class Catalog extends Component {
    state = { 
        items: [],
        categories: [],
        selectedCategory: "",
     };
    render() { 
        let itemsToDisplay = this.state.items;
        if(this.state.selectedCategory !==""){
            // filter items array
            itemsToDisplay = itemsToDisplay.filter((item) => item.category === this.state.selectedCategory);
        }
        console.log("RENDER");
        return (
            <div className="catalog-page">
                <h3>Our Amazing catalog with {this.state.items.length} Code Snippets</h3>
                <div className="filter-buttons">
                <button onClick={() => this.filterItem("")} className="btn btn-sm btn-info">All Items</button>
                {this.state.categories.map((cat) => (
                <button onClick={() => this.filterItem(cat)} className="btn btn-sm btn-info" key={cat}>{cat}</button>))}
                </div>
                

                <div className="item-container">
                {itemsToDisplay.map((prod) => (
                <Item key ={prod._id } prod={prod}></Item>
                ))}
                </div>
            </div>
          );
    }
    filterItem = (category) =>{

        // console.log("Filtering", category);
        this.setState({selectedCategory: category});
    }
    async componentDidMount(){
        console.log("CAT did mount");
        // call the service to get the list of items
        var itemService = new ItemService();
        var items = await itemService.getCatalog();
        this.setState({items : items});
        // identify the unique categories
        // let cats = [];
        // for(let i =0; i < items.length; i ++){
        //     let cat = items[i].category;

        //     if(!cats.includes(cat)){
        //         cats.push(cat);
        //     }

        // }
        let cats =await itemService.getCategories();
        // console.log("Unique categories", cats);
        this.setState({categories: cats});
     }
}
 
export default Catalog;