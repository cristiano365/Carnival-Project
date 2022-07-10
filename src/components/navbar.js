import React, {Component} from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { Image, Heading } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa'

export default class navbar extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="trasparent" style={{position: "relative"}}>
                    <Container>
                    <Navbar.Brand >
                        <Image src={this.props.img} boxSize='150px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" color="white"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="justify-content-center">
                            <Nav.Link href="#MINT" >
                                <Heading style={{fontFamily:"Carnivalee", fontSize:"30px"}} color='#f3edcd' >MINT</Heading>
                            </Nav.Link>
                            <Nav.Link href="#WHITEPAPER">
                                <Heading style={{fontFamily:"Carnivalee", fontSize:"30px"}} color='#f3edcd'>WHITEPAPER</Heading>
                            </Nav.Link>
                            <Nav.Link href="#THE SANDBOX">
                                <Heading style={{fontFamily:"Carnivalee", fontSize:"30px"}} color='#f3edcd'>THE SANDBOX</Heading>
                            </Nav.Link>
                            <Nav.Link href="#LORE">
                                <Heading style={{fontFamily:"Carnivalee", fontSize:"30px"}} color='#f3edcd'>LORE</Heading>
                            </Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link href="https://discord.gg/Y7gcaxdB" >
                                <Icon color='#f3edcd' as={FaDiscord}  w={10} h={10} />
                            </Nav.Link>
                            <Nav.Link href="https://twitter.com/CarnivalSociety">
                                <Icon color='#f3edcd' as={FaTwitter}  w={10} h={10} />
                            </Nav.Link>
                            <Nav.Link href="https://www.instagram.com/the_carnival_society/">
                                <Icon color='#f3edcd' as={FaInstagram}  w={10} h={10} />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <Icon color='#f3edcd' as={FaYoutube}  w={10} h={10} />
                            </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </>
        );
    }
}