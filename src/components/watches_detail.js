import React, { Component } from 'react';
// import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import "./watches_detail.css";

class WatchesDetail extends Component {
    render() {
        return (
            <div className="not-a-wrapper">
          
             <div className="thumbnail-wrapper">
             
                {/* <Thumbnail src={"/assets/thumbnaildiv.png"} alt="242x200">
                    <h3>Thumbnail label</h3> */}
                    <div className="thumbnail">
                    <p>{this.props.image}</p>
                    {/* <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail> */}
                    </div>
              
               </div>
            
            
            </div>
        );
    }
}

export default WatchesDetail;