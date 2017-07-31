import React, {Component} from 'react';
import './footer.css';
import {
    Col,
    Row,
    Nav,
    NavItem,
    FormGroup,
    InputGroup,
    FormControl,
    Glyphicon
} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-benefits">
                    
                        <div className="footer-icons">
                            <img className="footer-img" src ={require("./prop0.svg")}/>
                            <p>Free worldwide shipping
                                <br></br>on orders over $50</p>
                        </div>
                    
                    
                        <div className="footer-icons"><img className="footer-img" src ={require("./prop1.svg")}/>
                            <p>Free returns worldwide
                                <br></br>on orders over $50</p>
                        </div>
                    
                    
                        <div className="footer-icons"><img className="footer-img" src ={require("./prop2.svg")}/>
                            <p>24 month warranty
                                <br></br>on all products</p>
                        </div>
                    
                    
                        <div className="footer-icons"><img className="footer-img" src ={require("./prop3.svg")}/>
                            <p>100% safe &amp; secure
                                <br></br>
                                checkout</p>
                        </div>
                    

                </div>
                <div className="footer-footer">
                    <section className="company-info"><img className="logo" src ={require("./open-graph-image.jpg")}/>
                        <p>support@mvmtwatches.com<br></br>
                            <br></br>Call Toll-Free<br></br>+1 (888) 507-0220<br></br>
                            <br></br>M-T 8:30-2:00 pm &amp; F 9-1 pm PST</p>
                    </section>
                    <section className="footer-nav">
                        <div>
                            <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>
                                <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                                <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
                                <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
                            </Nav>
                            <br/>
                            <Nav bsStyle="pills" justified activeKey={1} onSelect={this.handleSelect}>
                                <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                                <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
                                <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
                            </Nav>
                        </div>
                    </section>
                    <section className="sign-up">Sign up for newsletter
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text"/>
                                <InputGroup.Addon>
                                    <Glyphicon glyph="glyphicon glyphicon-envelope"/>
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                    </section>

                </div>
                <section className="footer-bottom">
                    <div className="country-picker">
                        <img className="flag" src={require('./usa.png')}/>
                        <p>UNITED STATES OF AMERICA</p>
                    </div>
                </section>
                <section className="footer-bottom-bottom">
                    <div className="legal">
                        <p>Terms &amp; Conditions | Privacy Policy | 2017 MVMT</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;