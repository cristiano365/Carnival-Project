import React, {Component} from "react";

import { Image, VStack } from "@chakra-ui/react";

export default class Card extends Component {
    render() {
        return (
            <VStack >
                <Image src={this.props.img} boxSize='470px' objectFit= 'contain' />
            </VStack>
        );
    }
}