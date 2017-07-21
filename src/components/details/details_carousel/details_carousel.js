import React, { Component } from 'react';
import { Slider } from 'react-slick';

class DetailsCarousel extends Component {
    render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><img src={require("./black-leather.jpg")}></img></div>
        <div><img src={require("./black-leather.jpg")}></img></div>
        <div><img src={require("./black-leather.jpg")}></img></div>
        <div><img src={require("./black-leather.jpg")}></img></div>
        <div><img src={require("./black-leather.jpg")}></img></div>
        <div><img src={require("./black-leather.jpg")}></img></div>
      </Slider>
    );
  }
}

export default DetailsCarousel;