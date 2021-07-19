import React, { Component } from 'react';
import "./admin.css"

class admin extends Component {
    state = { 
        title : "",
        price: 0,
        description : "",
        category : "",
        images : ""



     }
    render() { 
        return ( 
        <div className="capture-form">
            <div className="admin-page">
                <h2>HELLO ADMIN!</h2>
                <label> Title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                <br/>

                <label> Price $:</label>
                <input type="number"name="price" value={this.state.price} onChange={this.handleInputChange} />
                <br/>

                <label> Description :</label>
                <input type="text"name="description" value={this.state.description} onChange={this.handleInputChange} />
                <br/>

                <label> Category:</label>
                <input type="text"name="category" value={this.state.category} onChange={this.handleInputChange} />
                <br/>

                <label> images:</label>
                <input type="text"name="images" value={this.state.images} onChange={this.handleInputChange} />
                <br/>

                <button className="btn btn-dark" onClick={this.handleSave}> Save Product</button>

                </div>
            </div>
         );
    }

    handleInputChange =(event) =>{
        // console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
    };
    handleSave = () =>{
        // console.log("Saving......");
        this.setState({title : "changing from code..."});
        console.log(this.state);
        
    }
}
 
export default admin;