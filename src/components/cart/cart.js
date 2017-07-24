import React, { Component } from 'react';
import './cart.css';

class Cart extends Component {
    render() {
        return (
            <div>
                <section className="logo-header">
                    <img src={require("./logo-white.png")} />
                </section>
            </div>
        );
    }
}

export default Cart;