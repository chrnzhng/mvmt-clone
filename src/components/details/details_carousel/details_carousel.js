import React, {Component} from 'react';
import Slider from 'react-slick';
import './details_carousel.css';

class SimpleSlider extends Component {
  render() {
    var settings = {
      adaptiveHeight: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="test-cont">
        <Slider {...settings}>
          <div className="wrap-slider">
            <img src={require('./car-1.jpg')}/>
            

          </div>
          <div className="wrap-slider">
            <img src={require('./car-1.jpg')}/>

          </div>
          <div className="wrap-slider">
            <img src={require('./car-1.jpg')}/>

          </div>

          <div className="wrap-slider">
            <img src={require('./car-1.jpg')}/>

          </div>

          <div className="wrap-slider">
            <img src={require('./car-1.jpg')}/>

          </div>

          <div className="wrap-slider">
            <img src={require('./car-1.jpg')}/>

          </div>
         

        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;

// Bootstrap Carousel export const ControlledCarousel = React.createClass({
// getInitialState() {     return {       index: 0,       direction: null,
// wrap: true     };   },   handleSelect(selectedIndex, e) {     //
// alert('selected=' + selectedIndex + ', direction=' + e.direction);
// this.setState({       index: selectedIndex,       direction: e.direction
// });   },   render() {     return (     <div >       <Carousel
// className="wrappo" activeIndex={this.state.index}
// direction={this.state.direction} onSelect={this.handleSelect}>
// <Carousel.Item>           <img width={270} height={270}
// src={require("./car-1.jpg")}/>           {/* <Carousel.Caption>
// <h3>First slide label</h3>             <p>Nulla vitae elit libero, a pharetra
// augue mollis interdum.</p>           </Carousel.Caption> */}
// </Carousel.Item>         <Carousel.Item>           <img width={270}
// height={270} src={require("./car-1.jpg")}/>           {/* <Carousel.Caption>
//            <h3>Second slide label</h3>             <p>Lorem ipsum dolor sit
// amet, consectetur adipiscing elit.</p>           </Carousel.Caption> */}
//    </Carousel.Item>         <Carousel.Item>           <img width={270}
// height={270} src={require("./car-1.jpg")}/>           {/* <Carousel.Caption>
//            <h3>Third slide label</h3>             <p>Praesent commodo cursus
// magna, vel scelerisque nisl consectetur.</p>           </Carousel.Caption>
// */}         </Carousel.Item>         <Carousel.Item>           <img
// width={270} height={270} src={require("./car-1.jpg")}/>           {/*
// <Carousel.Caption>             <h3>Third slide label</h3>
// <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption> */}         </Carousel.Item>         <Carousel.Item>
//          <img width={270} height={270} src={require("./car-1.jpg")}/>
//   {/* <Carousel.Caption>             <h3>Third slide label</h3>
// <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption> */}         </Carousel.Item>         <Carousel.Item>
//          <img width={270} height={270} src={require("./car-1.jpg")}/>
// </Carousel.Item>       </Carousel>     </div>     );   } });
