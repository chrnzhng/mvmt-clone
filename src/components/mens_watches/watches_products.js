import React, { Component } from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import "./watches_products.css";

class WatchesProduct extends Component {
    render() {
        return (         
            <div className="left-side-nav">            
                <div className="thumbnail-wrapper">          
                    <div className="thumbnail">
                        <a href="http://localhost:3000/watches/details"><img className="watch-img" src={this.props.image} /></a>
                        <h4>{this.props.name} - {this.props.size} </h4>
                        <h3>{this.props.color}</h3>
                        <p>${this.props.price}.00</p>          
                    </div>              
                </div>
            </div>                       
        );
    }
}

export default WatchesProduct;