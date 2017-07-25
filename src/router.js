import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/home';

import Watches from './components/mens_watches/mens_watches';
import Details from './components/details/details';
import Cart from './components/cart/cart';

export default (
    <Switch>
        <Route path="/watches/details/:id" component={Details}/>
        <Route path="/menswatches" component={Watches}/> 
        <Route path="/cart" component={Cart}/> 
        <Route path="/" component={Home}/> 
    </Switch>
)