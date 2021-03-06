import React, {Component} from 'react';
import {

  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Form,

  Button,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import axios from 'axios';
import './cart.css';

function FieldGroup({
  id,
  label,
  help,
  ...props
}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props}/> {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      sumCart: [],
      hide: false

    }
    this.clearCart = this.clearCart.bind(this);
  }
  componentDidMount() {

    const items = axios
      .get(`/readCart`)
      .then(res => res.data)
      .then((finalResult) => {
        this.setState({cart: finalResult});
        console.log('cart', this.state)
      });

    const results = axios
      .get(`/sumCart`)
      .then(res => res.data)
      .then((finalResult) => {
        this.setState({sumCart: finalResult[0]});
        console.log('sumCart', this.state.sumCart)
      });
  }

  removeFromCart(id) {
    const results = axios
      .delete(`/removeFromCart/${id}`)
      .then(() => {
        axios
          .get(`/readCart`)
          .then(response => {
            this.setState({cart: response.data})
          })
      })
  }

  clearCart() {
    var newSum = this.state.sumCart.sum - this.state.sumCart.sum

    this.setState ={
      sumCart: newSum,
      hidden: true
    }
  }

  render() {
    const items = this
      .state
      .cart
      .map((items, id) => {
        return (
          <div key={items.id}>

            <div className="img-sec">
              <ListGroupItem><img className="test-style" src={items.watchimg}/>
              </ListGroupItem>
            </div>
            <div className="cart-info" hidden={this.state.hide}>

              <ListGroupItem>{items.watchname}-{items.watchcolor}</ListGroupItem>

              <ListGroupItem>${items.watchprice}.00</ListGroupItem>
            </div>
            <button className="remove" onClick={() => this.removeFromCart(items.id)}>
              Remove
            </button>
            {/* <ListGroupItem>Quantity:</ListGroupItem>
   <ListGroupItem>Subtotal:</ListGroupItem>
   <ListGroupItem>SHIPPING -</ListGroupItem> */}
          </div>

        )
      })
    return (
      <div>
        <section className="logo-header">
          <a href='http://localhost:3000'><img src={require("./logo-white.png")}/></a>
        </section>
        <section className="cart-body">
          <section className="left-form">

            <form>
              <div className="pay-buttons">
                <button className="paypal btn btn-default">
                  <img className="pPpic" src={require('./paypal.png')}/>
                </button>
                <button className="amazon btn btn-default">
                  <img className="aZpic" src={require('./amazon.png')}/>
                </button>
              </div>
              <h3>SHIPPING ADDRESS:</h3>
              <div className="test">
                <FieldGroup id="formControlsText" type="text" placeholder="First Name"/>
                <FieldGroup id="formControlsText" type="text" placeholder="Last Name"/>
              </div>

              <div className="testt">
                <FieldGroup id="formControlsText" type="text" placeholder="Address"/>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  placeholder="Apt, Suite, Etc.(Optional)"/>
              </div>
              <div>
                <FieldGroup id="formControlsText" type="text" placeholder="City"/>
              </div>
              <div className="testtt">
                <FieldGroup id="formControlsText" type="text" placeholder="Country"/>
                <FieldGroup id="formControlsText" type="text" placeholder="State"/>
                <FieldGroup id="formControlsText" type="text" placeholder="Zip code"/>

              </div>
              <div>
                <FieldGroup id="formControlsText" type="text" placeholder="Phone"/>
              </div>
            </form>
          </section>

          <div className="cart-right">
            <h3>YOUR CART:</h3>
            <div className="cart-info-container">
              {items}
            </div>
            <div className="total">
              <ListGroup>
                <ListGroupItem>SUBTOTAL:</ListGroupItem>
                <ListGroupItem>SHIPPING -</ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem>TOTAL: ${this.state.sumCart.sum}.00
                  
                </ListGroupItem>
                <button onClick={() => this.clearCart()}>Checkout</button>
              </ListGroup>

            </div>
          </div>

        </section>
      </div>
    );
  }

}
