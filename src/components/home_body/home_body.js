import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './home_body.css';

const Homebody = () => {
    return (
        <div className="home-view">
        <Row className="show-grid">                
            <Col md={6} mdPush={6}>
            <img className = "watch_img" src= {require('./mens_watches.jpeg')}/>
            </Col>            
            <Col md={6} mdPull={6}> 
            <img className = "watch_img" src= {require('./womens_watches.jpeg')} />
            </Col>           
        </Row>
            <Col className="sunglass_row">
            <img className = "sunglasses" src= {require('./sunglasses.jpeg')} />
            </Col>
        <Row className="show-grid">                
            <Col md={12} md={8}>
            <img className = "docks" src= {require('./docks.jpeg')}/>
            </Col>            
            <Col className ="carousel-strap" md={6} md={4}> 
            <img className = "center-block" src= {require('./strap_selector.PNG')} />
            </Col>
        </Row>
        <Row className="show-grid">
            <Col className="our-story">
                <h4>Founded on the belief that style shouldn't break the bank...</h4>                
                <Button>See Our Story</Button>
            </Col>
        </Row>
        </div>

                   
        
    );
};

export default Homebody;