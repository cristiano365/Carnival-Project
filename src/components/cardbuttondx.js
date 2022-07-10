import React, {Component} from "react";

import { Image, Heading, VStack } from "@chakra-ui/react";

export default class Card extends Component {
    render() {
        return (
            <VStack >
                <Image src={this.props.img} maxW='500px' width='350px' height="130px" />
                <button type="button" className={this.props.colorbutton} style={{marginTop: "10px", marginLeft: "43%"}}><Heading style={{fontFamily:"Carnivalee", fontSize:"30px"}} color='#f3edcd'>{this.props.title}</Heading></button>
            </VStack>
        );
    }
}