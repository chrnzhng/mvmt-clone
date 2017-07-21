import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import DetailsCarousel from './details_carousel/details_carousel';
import './details.css';

class Details extends Component {
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
                         <img className="face-lg" src={require("./details_img/watch-face-lg.jpg")}></img> 
                    
                    </div>
                    <div className="cart-block">
                        <div>
                        <p>CHRONO SERIES - 45 MM</p>
                        <h3>GUNMETAL SANDSTONE</h3>
                        <h4>$135.00</h4>
                        
                        </div>
                        {/* <DetailsCarousel /> */}
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