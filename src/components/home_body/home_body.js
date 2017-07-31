import React from 'react';
import { Button } from 'react-bootstrap';
import PressCarousel from './press_carousel/press_carousel.js';
import './home_body.css';

const Homebody = () => {
    return (
        <div className="home-view">
            <section className="top-grid">
                <div className="mens">
                    <img className="watch_img" src={require('./mens_watches.jpeg')}/>
                </div>
                <div className="womens">
                    <img className="watch_img" src={require('./womens_watches.jpeg')}/>
                </div>
            </section>
            <section className="sunglass_row">
                <img className="sunglasses" src={require('./sunglasses.jpeg')}/>
            </section>
            <section className="show-grid">
                <div >
                    <img className="docks" src={require('./docks.jpeg')}/>
                </div>
                <div className="strap-div">
                    <img className="carousel-strap" src={require('./strap_selector.gif')}/>
                </div>

            </section>
            <section className="our-story">
                <div>
                    <h4>Founded on the belief that style<br></br> shouldn't break the bank...</h4>
                    <Button>See Our Story</Button>
                </div>
            </section>

            <section className="instaposts">
                <div className="left-insta">

                    <img className="left-img" src={require('./instagram/left-one.jpg')}/>

                    <img className="left-img" src={require('./instagram/left-two.jpg')}/>

                    <img className="left-img" src={require('./instagram/left-three.jpeg')}/>

                    <img className="left-img" src={require('./instagram/left-four.jpeg')}/>

                </div>

                <div className="center-insta">
                    <img className="center-img" src={require('./instagram/center.jpg')}/>
                </div>

                <div className="right-insta">

                    <img className="right-img" src={require('./instagram/right-one.jpeg')}/>

                    <img className="right-img" src={require('./instagram/right-two.jpeg')}/>

                    <img className="right-img" src={require('./instagram/right-three.jpg')}/>

                    <img className="right-img" src={require('./instagram/right-four.jpg')}/>

                </div>

            </section>

            <div className="press-block">
                <div className="our-story">
                    <h3>See what the press is saying about MVMT</h3>
                    <PressCarousel className="pressC"/>
                </div>
            </div>
        </div>

    );

};

export default Homebody;
