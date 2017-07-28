import React, { Component } from 'react';
import { Table, FormControl, FormGroup, ControlLabel, HelpBlock, Form, Checkbox, Radio, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import './cart.css';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class Cart extends Component {
  constructor(props){
    super(props) 
      this.state = {
        cart: []
  
      }
    
  }
  componentDidMount() {
        const results = axios.get(`/readCart`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    cart: finalResult
                });
                console.log('cart', this.state)
            });
        }
    render() {
        const items = this.state.cart.map((items, id) => {
            return (
              <div key={items.id}>
               
 
        <ListGroupItem><img className ="test-style" src={items.watchimg} /></ListGroupItem>
        <ListGroupItem>Quantity:</ListGroupItem>
        <ListGroupItem>{items.watchname}</ListGroupItem>
        <ListGroupItem>Subtotal:</ListGroupItem>
        <ListGroupItem>SHIPPING -</ListGroupItem>
        <ListGroupItem>${items.watchprice}.00</ListGroupItem>
    
   
  </div>

            
            )

        })
   
        return (
            <div>
                <section className="logo-header">
                    <a href='http://localhost:3000'><img src={require("./logo-white.png")} /></a>
                </section>
                <section className="cart-body">
                <section className="left-form">
                    <form>
    
                      <h3>SHIPPING ADDRESS:</h3>
                      <div className="test">
                      <FieldGroup
                        id="formControlsText"
                        type="text"
                            
                        placeholder="First Name"
                        />
                        <FieldGroup
                        id="formControlsText"
                        type="text"
                
                        placeholder="Last Name"
                        />
                        </div>
                       
                      <div className="testt">
                        <FieldGroup
                        id="formControlsText"
                        type="text"
                    
                        placeholder="Address"
                        />
                        <FieldGroup
                        id="formControlsText"
                        type="text"
                    
                        placeholder="Apt, Suite, Etc.(Optional)"
                        />
                        <FieldGroup
                        id="formControlsText"
                        type="text"
                    
                        placeholder="City"
                        />
                        </div>                      
                      </form>
                </section>

     <div className="cart-right">
    <thead>
      <tr>
        <th>YOUR CART:</th>
        <th></th>
        {items}
       
      </tr>
    </thead>

  </div>
  
            </section>
            </div>
        );
    }
      
}


