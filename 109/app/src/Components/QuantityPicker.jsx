import React, { Component } from 'react';
import "./QuantityPicker.css";
class QuantityPicker extends Component {
    state = { 
        value: 1,
        // name: "Odasys",
     };
    render() { 
        return <div className="quantityPicker">
            <button  onClick={this.increase} className="btn btn-sm btn-info">*</button>
            <label className="value"> {this.state.value} </label>
            <button disabled= {this.state.value === 1} onClick={this.decrease} className="btn btn-minus btn-sm btn-primary">-</button>
            {/* <h1> PICKER</h1> */}
            <h3>{this.state.name}</h3>
        </div>;
    }

    increase = ( ) =>{
        // this.setState({value: this.state.value + 1});
        let val = this.state.value +1;
        this.setState({value: val});

        // console.log("Button clicked!!!", this.state);
        this.props.onValueChange(val);
    };
    decrease = ( ) =>{
        let val = this.state.value - 1;
        // validaiton
        if(val >0){
            this.setState({value: val});
            this.props.onValueChange(val);
            // console.log("Button clicked!!!", this.state);
        }
        
    };
       
}
//  JAVASCRIPT Functions vs 
export default QuantityPicker;