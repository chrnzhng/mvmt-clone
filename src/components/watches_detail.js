import React, { Component } from 'react';

class WatchesDetail extends Component {
    render() {
        return (
            <div>
                <img src= {this.props.image} />
                 {this.props.name}
                 {this.props.price}                 
            </div>
        );
    }
}

export default WatchesDetail;