import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Card extends Component {
    render(){
        return(
            <div className="">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4 mb-4 grid-margin">
                            <div className="card h-100">
                                <h4 className="card-header">Card Title</h4>
                                <div className="card-body">
                                    <p className="card-text">
                                    eque.</p>
                                </div>
                                <div className="card-footer">
                                    <Button variant="btn btn-primary">Learn More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;