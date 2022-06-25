import React, {Component} from "react";

import { Image } from "react-bootstrap";

export default class Card extends Component {
    render() {
        return (
            <div className="col" style={{marginLeft: "10%", position: "relative"}} >
                <div className="container">
                    <Image src={this.props.img} boxSize='100px' objectFit='cover' maxW='600px' width='580px'  />
                </div>
            </div>
        );
    }
}