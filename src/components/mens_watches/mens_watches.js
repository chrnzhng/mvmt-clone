import React, { Component } from 'react';

import axios from 'axios';
import WatchesProduct from './watches_products';
import Header from '../header/header';
import Footer from '../footer/footer';

import './mens_watches.css';

class Watches extends Component {
    constructor(){
        super();
        this.state = {
            watches: []
        }

    }
    componentDidMount() {
        const results = axios.get(`http://localhost:3001/MensWatches`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    watches: finalResult
                });
                console.log(this.state)
            });
    }

    render() {

        const MensWatches = this.state.watches
            .map((watches, i) => {
                return <WatchesProduct
                            image = { watches.image }
                            color = { watches.color }
                            size = { watches.size }
                            name = { watches.product_name }
                            price = { watches.price }
                            key = { watches.id }
                    
                            />                
            }) 
        return (
            <div>
            <div className="header">
                <Header />
            </div>
            <div className="banner-container-with-bg"> 
                <img className="banner-img" src={require("./mens-chrono.jpg")}>   
                </img>       
            </div>
            <section className="watches-main-section">
            <div className="watches-side-nav">
            </div>          
            
              
             <div className="watches-wrapper">
               { MensWatches }
            </div> 
            </section>
           
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Watches;