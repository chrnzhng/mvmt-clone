import React, { Component } from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import "./watches_detail.css";

class WatchesDetail extends Component {
    render() {
        return (
            <div className="large-wrapper">
            {/* <section className="collection-bar">
                  <div className="navvie-left">HOME / CHRONO COLLECTION</div>
                  <div className="navvie-right">Sort By Featured</div>
            </section>  */}
              {/* <div className="side-bar-nav">
                  <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </SplitButton>
              </div>          */}
            <div className="thumbnail-wrapper">          
                <div className="thumbnail">
                        <img className="watch-img" src={this.props.image} />          
                </div>              
              </div>
            
            
            </div>
        );
    }
}

export default WatchesDetail;