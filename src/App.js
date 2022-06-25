import './App.css';

import React, {Component} from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Heading, Box, Flex } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import Sfondo from "./img/totale.png";
import Logo from "./img/logonero.png";

import Navbar from "./components/navbar";

export default class App extends Component {
  render() {
    return (
      <>
        <ChakraProvider>
          <img src={Sfondo} class="img-fluid" style={{position: "absolute"}}/>
            <Navbar img={Logo}/>
            <button type="button" class="btn btn-success" style={{position: "absolute", marginLeft: "17%", marginTop: "21%"}}><Heading style={{fontFamily:"Carnivalee", fontSize:"30px"}} color='#f3edcd'>WALLET</Heading></button>
            <button type="button" class="btn btn-danger" style={{position: "absolute", marginLeft: "84%", marginTop: "78%"}}><Heading style={{fontFamily:"Carnivalee", fontSize:"30px"}} color='#f3edcd'>MINT</Heading></button>
            <button type="button" class="btn" style={{position: "absolute", marginLeft: "17%", marginTop: "140%", backgroundColor: "#f27979"}}><Heading style={{fontFamily:"Carnivalee", fontSize:"30px"}} color='#f3edcd'>THE SANDBOX</Heading></button>
            <button type="button" class="btn btn-primary" style={{position: "absolute", marginLeft: "84%", marginTop: "202%"}}><Heading style={{fontFamily:"Carnivalee", fontSize:"30px"}} color='#f3edcd'>ROADMAP</Heading></button>
            <Flex style={{position: "absolute", marginLeft: "17%", marginTop: "265%", color: "#eaa148"}}>
              <Box w='100%' p={4}>
                <Icon as={FaInstagram}  w={10} h={10} />
              </Box>
              <Box w='100%' p={4}>
                <Icon as={FaYoutube}  w={10} h={10} />
              </Box>
              <Box w='100%' p={4}>
                <Icon as={FaTwitter}  w={10} h={10} />
              </Box>
              <Box w='100%' p={4}>
                <Icon as={FaDiscord}  w={10} h={10} />
              </Box>
            </Flex>
        </ChakraProvider>
      </>
    );
  }
}
