import React, { Component } from 'react';
import axios from 'axios';
import WatchesDetail from './watches_detail';

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
               { MensWatches }
            </div>
        );
    }
}

export default Watches;