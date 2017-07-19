import React, { Component } from 'react';
import './footer.css';
import { Col, Row } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div className ="footer-benefits">
                <Row className="show-grid">
                <Col lg={6} lg={3}><img className ="footer-icons" src ={require("./shipping.svg")} /><p>Free worldwide shipping on orders over $50</p></Col>
                <Col lg={6} lg={3}><img className ="footer-icons" src ={require("./returns.svg")} /><p>Free returns worldwide on orders over $50</p></Col>
                <Col lg={6} lg={3}><img className ="footer-icons" src ={require("./warranty.svg")} /><p>24 month warranty on all products</p></Col>
                <Col lg={6} lg={3}><img className ="footer-icons" src ={require("./secure.svg")} /><p>100% safe &amp; secure checkout</p></Col>
                </Row>
            </div>
        );
    }
}

export default Footer;