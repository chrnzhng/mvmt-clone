import React, { Component } from 'react';

import axios from 'axios';
import WatchesDetail from './watches_detail';
import Header from './header/header';
import Footer from './footer/footer';

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
                return <WatchesDetail
                            image = { watches.image }
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
            <div className="banner-container">           
            </div>           
            
              
             <div>
               { MensWatches }
            </div> 
           
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Watches;