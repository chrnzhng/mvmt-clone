import React from 'react';
import './header.css';
import { NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';



const Header = () => {
    return (        
        <div>
        <div className="header-top-navbar">Free Shipping On Orders Over $50</div>
        <Grid>
        <Row className="show-grid">
            <Col xs={6} md={4}> 
                <div className="header-nav-left">
                <NavDropdown eventKey={3} title="Mens" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Watches</MenuItem>
                    <MenuItem eventKey={3.2}>Sunglasses</MenuItem>
                    <MenuItem eventKey={3.3}>Straps</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Featured</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={3} title="Womens" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Watches</MenuItem>
                    <MenuItem eventKey={3.2}>Sunglasses</MenuItem>
                    <MenuItem eventKey={3.3}>Straps</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Featured</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={3} title="Brand" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
                </div>  
            </Col>
            <Col xs={6} md={4} className ="header-nav-div">
                <img className ="header-nav-logo" src= {require('./open-graph-image.jpg')}/>
            </Col>
            <Col xs={6} md={4} className = "header-nav-right"> 
                 <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                </NavDropdown>
               <img className= "profile"src= {require('./profile.png')}/>
                 <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                </NavDropdown>
               <img className= "cart" src= {require('./shopping-cart.png')}/>
            </Col>
        </Row>
        </Grid>
        </div>
    );
};

export default Header;