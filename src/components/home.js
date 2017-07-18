import React, { Component } from 'react';
import Header  from './header/header';
import Homebody from './home_body/home_body';

class Home extends Component {
    render() {
        return (
            <div>
            <div>
                <Header />                
            </div>
            <div>
                <Homebody />
            </div>
            </div>
        );
    }
}

export default Home;