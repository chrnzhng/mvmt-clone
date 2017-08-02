import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import axios from 'axios';
import WatchesProduct from './watches_products';
import Header from '../header/header';
import Footer from '../footer/footer';

import './mens_watches.css';

class Watches extends Component {
    constructor() {
        super();
        this.state = {
            watches: []
        }

    }
    componentDidMount() {
        const results = axios
            .get(`http://localhost:3001/MensWatches`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({watches: finalResult});
                console.log(this.state)
            });
    }

    render() {

        const MensWatches = this
            .state
            .watches
            .map((watches, i) => {
                return <WatchesProduct
                    image={watches.image}
                    color={watches.color}
                    size={watches.size}
                    name={watches.product_name}
                    price={watches.price}
                    id={watches.id}
                    key={watches.id}/>
            })
        return (
            <div>
                <div className="header">
                    <Header/>
                </div>
                <div className="banner-container-with-bg">
                    <img className="banner-img" src={require("./banner.jpeg")}></img>
                </div>
                <section className="nav-bar-full">
                 
                    <Navbar className="nav-styling">
                        <div className="dropdown-coll">
                        <Nav >
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        </div>
                    
                        <div className="dropdown-sort-filter">
                        <Nav >
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                            </NavDropdown>
               
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        </div>
                    </Navbar>
                </section>
                <section className="watches-main-section">
                    <div className="watches-side-nav"></div>

                    <div className="watches-wrapper">
                        {MensWatches}
                    </div>

                </section>
                <section className="power-bottom">
                    <div className="bottom-top-left">
                        <img className="banner-img-test" src={require("./msunglass.jpeg")}></img>
                    </div>
                    <div className="bottom-top-right">
                        <img className="banner-img-test" src={require("./mstrap.jpeg")}></img>
                    </div>
                </section>
                <section className="explore-block">
                    <div className="explore-top">
                      <h2>EXPLORE MENS WATCHES</h2>
                    </div>
                    <div className="explore-bot">
                       <p>From casual to formal your wrist is covered. Find the collection that<br></br> suits you.</p>
                    </div>
                </section>
                <section className="four-watches">
                    <div className="f-series">
                        <img className="banner-img-test" src={require("./40.jpeg")}></img>
                        <div className="watches-link"><img className="tile-icon" src={require("./link1.png")} />
                        <div className="tile-text"><p>40 SERIES</p>
                            </div>
                        </div>
                    </div>
                    <div className="classic">
                        <img className="banner-img-test" src={require("./classic.jpeg")}></img>
                        <div className="watches-link"><img className="tile-icon" src={require("./link2.png")} />
                        <div className="tile-text"><p>40 SERIES</p>
                            </div></div>
                    </div>
                    <div className="modern-sport">
                        <img className="banner-img-test" src={require("./modern-sport.jpeg")}></img>
                        <div className="watches-link"><img className="tile-icon" src={require("./link3.png")} />
                        <div className="tile-text"><p>40 SERIES</p>
                            </div></div>
                    </div>
                    <div className="voyager">
                        <img className="banner-img-test" src={require("./voyager.jpeg")}></img>
                        <div className="watches-link"><img className="tile-icon" src={require("./link4.png")} />
                        <div className="tile-text"><p>40 SERIES</p>
                            </div></div>
                    </div>
                </section>

                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Watches;