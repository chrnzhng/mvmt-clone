import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { SplitButton, MenuItem } from 'react-bootstrap';
import "./watches_products.css";

class WatchesProduct extends Component {
    render() {
        return (         
            // <div className="left-side-nav">            
                <div className="thumbnail-wrapper"> 
                    <div className="thumb-test">         
                    <div className="thumbnail">
                        <Link to={`/watches/details/${this.props.id}`}><img className="watch-size" src={this.props.image} /></Link>
                        <h4>{this.props.name} - {this.props.size} </h4>
                        <h3>{this.props.color}</h3>
                        <p>${this.props.price}.00</p>          
                    </div>            
                    </div>  
                </div>
            // </div>                       
        );
    }
}

export default WatchesProduct;