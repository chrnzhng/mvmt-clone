import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/header';
import Footer from '../footer/footer';
import DetailsCarousel from './details_carousel/details_carousel';
import './details.css';

class Details extends Component {
    constructor(props){
        super(props) 
        this.state = { 
            watch: {}
        }
    }

        componentDidMount() {
        const results = axios.get(`/WatchId/${this.props.match.params.id}`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    watch: finalResult[0]
                });
                console.log(this.state)
            });
    }

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <section className="main-container">
                    <div className="size-guide">
                        Size Guide
                    </div>
                    <div className="watch-face-lg">
                         <img className="face-lg" src={this.state.watch.image}></img> 
                    
                    </div>
                    <div className="cart-block">
                        <div>
                        <p>{this.state.watch.product_name} SERIES - {this.state.watch.size}</p>
                        <h3>{this.state.watch.color}</h3>
                        <h4>${this.state.watch.price}.00</h4>
                        <div className="fit">
                          <DetailsCarousel /> 
                        </div>
                        </div>
                    </div>
                </section>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Details;