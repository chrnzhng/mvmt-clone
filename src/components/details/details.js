import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

class Details extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <section className="main-container">
                    <div className="size-guide"></div>
                    <div className="watch-face-lg"></div>
                    <div className="cart-block"></div>
                </section>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Details;