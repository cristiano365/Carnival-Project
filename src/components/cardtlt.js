import React, {Component} from "react";

import { Heading } from "@chakra-ui/react";

export default class Cardtlt extends Component {
    render() {
        return (
            <div className="col" style={{marginLeft: "15%", marginTop: "15%", position: "relative"}}>
                <div className="container">
                    <Heading style={{fontFamily:"Carnivalee", fontSize:"70px", color:"#f3edcd"}}>Carnival Hub</Heading>
                    <Heading style={{fontFamily:"Carnivalee", fontSize:"30px", color:"#f3edcd"}}>Enjoy Carnival in Metaverse </Heading>
                </div>
            </div>
        );
    }
}