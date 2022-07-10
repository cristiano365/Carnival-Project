import React, {Component} from "react";





export default class carousel extends Component {
    render() {
        return (
                
                <div className="container-lg">
                    <div className="w-75 h-75">
                        <div className="carousel slide" id="carouselExample" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={this.props.img} alt="First Slide" class="d-block" ></img>
                                </div>
                                <div className="carousel-item ">
                                    <img src={this.props.img2} alt="Second Slide" class="d-block"></img>
                                </div>
                                <div className="carousel-item ">
                                    <img src={this.props.img3} alt="Third Slide" class="d-block"></img>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselprev" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselnext" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
        );
    }
}