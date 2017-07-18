import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/home';

import Watches from './components/watches';
import Details from './components/details';
import Cart from './components/cart';

export default (
    <Switch>
        <Route path="/watches/details" component={Details}/>
        <Route path="/watches" component={Watches}/> 
        <Route path="/cart" component={Cart}/> 
        <Route path="/" component={Home}/> 
    </Switch>
)