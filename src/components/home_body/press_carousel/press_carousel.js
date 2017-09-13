import React, {Component} from 'react';
import Slider from 'react-slick';
import './press_carousel.css';

class PressCarousel extends Component {
    render() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 220,
            dots: false,

            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <Slider {...settings}>
                <div>
                    <h3>"Literally keffiyeh man braid messenger bag<br></br>
                        you probably haven't heard of them
                        <br></br>
                        pour-over cornhole"</h3><img className="test" src={require('./press-img-1.svg')}/></div>
                <div>
                    <h3>"Skateboard fixie banjo, helvetica cronut<br></br>
                        chillwave ennui dreamcatcher vexillologist. Selfies<br></br>
                        jean shorts thundercats"</h3><img className="test" src={require('./press-img-2.svg')}/></div>
                <div>
                    <h3>"Hell of af copper mug pop-up neutra<br></br>
                        gastropub chambray artisan. Salvia quinoa<br></br>
                        lomo heirloom gluten-free"</h3><img className="test" src={require('./press-img-3.svg')}/></div>
                <div>
                    <h3>"Seitan freegan pug gentrify lo-fi edison<br></br>
                        bulb craft beer vexillologist locavore meh<br></br>
                        fixie chicharrones twee."</h3><img className="test" src={require('./press-img-4.svg')}/></div>
                <div>
                    <h3>"Taxidermy heirloom meh put a bird on it<br></br>
                        kombucha, biodiesel cardigan master cleanse<br></br>
                        cold-pressed cloud bread"</h3><img className="test" src={require('./press-img-5.svg')}/></div>
            </Slider>
        );
    }
}

export default PressCarousel;