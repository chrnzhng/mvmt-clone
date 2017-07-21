import React from 'react';
import './header.css';
import { NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';



const Header = () => {
    return (
        <div className="fixed-nav">
            <Row className="header-top-navbar">Free Shipping On Orders Over $50</Row>
       
                <Row className="">
                    <Col xs={6} md={4}>
                        <div className="header-nav-left">
                            <NavDropdown eventKey={3} title="Mens" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="/menswatches">Watches</MenuItem>
                                <MenuItem eventKey={3.2}>Sunglasses</MenuItem>
                                <MenuItem eventKey={3.3}>Straps</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.4}>Featured</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Womens" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Watches</MenuItem>
                                <MenuItem eventKey={3.2}>Sunglasses</MenuItem>
                                <MenuItem eventKey={3.3}>Straps</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.4}>Featured</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Brand" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>#JoinTheMVMT</MenuItem>
                                <MenuItem eventKey={3.2}>Our Insta</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>Recent Blog Posts</MenuItem>

                            </NavDropdown>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="header-nav-div">
                        <a href="http://localhost:3000/"><img className="header-nav-logo" src={require('./open-graph-image.jpg')}/></a>
                    </Col>
                    <Col xs={6} md={4} className="header-nav-right">
                         <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="http://localhost:3001/auth">Login</MenuItem>
                            <MenuItem eventKey={3.2}>Sign Up</MenuItem>
                         </NavDropdown>                        
                        <img className="profile" src={require('./user.svg')}/>
                        <NavDropdown eventKey={3} title="Cart" id="basic-nav-dropdown"></NavDropdown>
                        <a href="http://localhost:3000/cart"><img className="cart" src={require('./cart.svg')}/></a>
                        <img className="search" src={require('./search.svg')}/>
                    </Col>

                </Row>
         
        </div>
    );
};

export default Header;