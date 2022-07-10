import React, {Component} from "react";

import WalletCard from "./WalletCard";

import { Image, VStack } from "@chakra-ui/react";

export default class Card extends Component {
    render() {
        return (
            <VStack >
                <Image src={this.props.img} maxW='500px' width='350px' height="130px" />
                <WalletCard 
                colorbutton="btn btn-success"
                />
            </VStack>
        );
    }
}