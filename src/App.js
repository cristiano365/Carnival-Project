import './App.css';

import React, {Component} from 'react';
import { Center, ChakraProvider, Spacer, Stack } from '@chakra-ui/react';

import Logo from "./img/logonero.png";
import Background from "./img/1sfondo.png";
import Titolo from "./img/titolo + sottotitolo.png";
import mint2 from "./img/2mint.png";


import mask1 from "./img/mask1.png";
import mask2 from "./img/mask2.png";



import Navbar from "./components/navbar";
import Cardbuttonsx from './components/cardbuttonsx';
import Cardbuttondx from './components/cardbuttondx';
import Cardimg from './components/cardimg';

export default class App extends Component {
  render() {
    return (
      <>
          <ChakraProvider>
            <div className='container-fluid' style={{backgroundImage: "url(" + Background + ")", backgroundRepeat: "no-repeat", backgroundSize: "3050px", margin: "0"}}>                
                <Navbar img={Logo}/>
                <Center>
                  <Stack direction={['column', 'row']} spacing='90px' height='680px' marginTop={16}>
                    <Cardbuttonsx 
                    img={Titolo} />
                    <Cardimg img={mask1} />
                  </Stack>
                </Center>
                <Center>
                  <Stack direction={['column', 'row']} spacing='90px' p={16}>
                    <Cardimg img={mask2} />
                    <Cardbuttondx 
                    img={mint2}
                    title="MINT"
                    colorbutton="btn btn-danger"/>
                  </Stack>
                </Center>
            </div>       
          </ChakraProvider>
      </>
    );
  }
}
