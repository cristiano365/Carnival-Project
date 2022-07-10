import React, {useState} from 'react'
import { Heading, Text } from '@chakra-ui/react';
import { ethers } from 'ethers';

const WalletCard = () => {

    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('WALLET');

    //function manage wallet
    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChangedHandler(result[0]);
            })
        } else {
            setErrorMessage('Install Metamask');
        }

    }
    
    
    //update account
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount);
    }

    const getUserBalance = (account) => {
        window.ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']})
        .then(balance => {
            setUserBalance(ethers.utils.formatEther(balance));
        })
        .catch(error => {
                setErrorMessage(error.message);
        });
    };

    const chainChangedHandler = () => {
        window.location.reload();
    }


    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);


    return (
        <div className="walletCard">
            <button  onClick={connectWalletHandler} type="button" className="btn btn-success" style={{marginTop: "20px"}}><Heading style={{fontFamily:"Carnivalee", fontSize:"30px"}} color='#f3edcd'>{connButtonText}</Heading></button>
            <div className="accountDisplay">
                <Text color="green">Address: {defaultAccount}</Text>
            </div>
            {errorMessage}
        </div>
    )
}

export default WalletCard