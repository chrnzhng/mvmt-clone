import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import PressCarousel from './press_carousel/press_carousel.js';
import './home_body.css';

// const picStyle = {     height: '25%',     width: '25%' }

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
            <Col className="sunglass_row">
                <img className="sunglasses" src={require('./sunglasses.jpeg')}/>
            </Col>
            <Row className="show-grid">
                <Col lg={12} lg={8}>
                    <img className="docks" src={require('./docks.jpeg')}/>
                </Col>
                <Col className="carousel-strap" lg={6} lg={4}>
                    <img className="center-block" src={require('./strap_selector.gif')}/>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col className="our-story">
                    <h4>Founded on the belief that style shouldn't break the bank...</h4>
                    <Button>See Our Story</Button>
                </Col>
            </Row>
            <section className="instaposts">

                <div className="left-insta">
                    {/* <div  className="lefty"> */}
                    <img className="left-img" src={require('./instagram/left-one.jpg')}/>
                    {/* </div> */}
                    {/* <div className="lefty"> */}
                    <img className="left-img" src={require('./instagram/left-one.jpg')}/>
                    {/* </div> */}
                    {/* <div className="lefty"> */}
                    <img className="left-img" src={require('./instagram/left-one.jpg')}/>
                    {/* </div> */}
                    {/* <div className="lefty"> */}
                    <img className="left-img" src={require('./instagram/left-one.jpg')}/>
                    {/* </div> */}
                </div>

                <div className="center-insta">
                    <img className="center-img" src={require('./instagram/center.jpg')}/>
                </div>
                
                <div className="right-insta">
                    {/* <div className="righty"> */}
                    <img className="right-img" src={require('./instagram/left-one.jpg')}/>
                    {/* </div> */}
                    {/* <div className="righty"> */}
                    <img className="right-img" src={require('./instagram/left-one.jpg')}/>
                    {/* </div> */}
                    {/* <div className="righty"> */}
                    <img className="right-img" src={require('./instagram/left-one.jpg')}/>
                    {/* </div> */}
                    {/* <div className="righty"> */}
                    <img className="right-img" src={require('./instagram/left-one.jpg')}/>
                    {/* </div>  */}
                </div>

            </section>
            <Row className="press-block">
                <Col className="our-story">
                    <h3>See what the press is saying about MVMT</h3>
                    <PressCarousel className="pressC"/>
                </Col>
            </Row>
        </div>

    );

};

export default Homebody;