import React, { Component } from 'react';
import Slider from 'react-slick';
import './press_carousel.css';

class PressCarousel extends Component {
    render() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 200,
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <Slider {...settings}>
                <div><h3>"MVMT seeks to keep watches simple and<br></br>
                     affordable while still making a statement<br></br>
                     with their look"</h3><img className = "test" src= {require('./press-img-1.svg')} /></div>
                <div><h3>"MVMT seeks to keep watches simple and<br></br>
                     affordable while still making a statement<br></br>
                     with their look"</h3><img className = "test" src= {require('./press-img-2.svg')} /></div>
                <div><h3>"MVMT seeks to keep watches simple and<br></br>
                     affordable while still making a statement<br></br>
                     with their look"</h3><img className = "test" src= {require('./press-img-3.svg')} /></div>
                <div><h3>"MVMT seeks to keep watches simple and<br></br>
                     affordable while still making a statement<br></br>
                     with their look"</h3><img className = "test" src= {require('./press-img-4.svg')} /></div>
                <div><h3>"MVMT seeks to keep watches simple and<br></br>
                     affordable while still making a statement<br></br>
                     with their look"</h3><img className = "test" src= {require('./press-img-5.svg')} /></div>                
            </Slider>
        );
    }
}

export default PressCarousel;