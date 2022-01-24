import { React, useState } from 'react'
import { Container, Row, Col, Button, Image, Modal, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AboutImg from '../assets/images/about_img.jpeg'
import StoryImg from '../assets/images/story_img.jpeg'
import nftLogo from '../assets/images/nft-calendar-transparent.png'
import Counter from './Counter'
import Roadmap from './Roadmap'
import Team from './Team'
import Faq from './Faq'
import Video from './Video'
import AnimateEffect from './AnimateEffect'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

import Web3 from 'web3';

import { CONTACT_ABI, CONTACT_ADDRESS } from '../config';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

// export const CONTACT_ADDRESS = '0x6a91D45c22cE5ED4E56E72Cd8Fa6bb490c5B2Fa4';

// export const CONTACT_ABI = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_symbol",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_initBaseURI",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_initNotRevealedUri",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "approved",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Approval",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "bool",
// 				"name": "approved",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "ApprovalForAll",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "approve",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_mintAmount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "mint",
// 		"outputs": [],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "previousOwner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnershipTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "_state",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "pause",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_user",
// 				"type": "address"
// 			}
// 		],
// 		"name": "removeWhitelistUser",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "renounceOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "reveal",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "safeTransferFrom",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "bytes",
// 				"name": "_data",
// 				"type": "bytes"
// 			}
// 		],
// 		"name": "safeTransferFrom",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "approved",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "setApprovalForAll",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_newBaseExtension",
// 				"type": "string"
// 			}
// 		],
// 		"name": "setBaseExtension",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_newBaseURI",
// 				"type": "string"
// 			}
// 		],
// 		"name": "setBaseURI",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_newCost",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setCost",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_newmaxMintAmount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setmaxMintAmount",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_notRevealedURI",
// 				"type": "string"
// 			}
// 		],
// 		"name": "setNotRevealedURI",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Transfer",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transferFrom",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "transferOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_user",
// 				"type": "address"
// 			}
// 		],
// 		"name": "whitelistUser",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "withdraw",
// 		"outputs": [],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balanceOf",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "baseExtension",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "baseURI",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "cost",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getApproved",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			}
// 		],
// 		"name": "isApprovedForAll",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "maxMintAmount",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "maxSupply",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "name",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "notRevealedUri",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ownerOf",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "paused",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "revealed",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "bytes4",
// 				"name": "interfaceId",
// 				"type": "bytes4"
// 			}
// 		],
// 		"name": "supportsInterface",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "symbol",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "tokenByIndex",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "tokenOfOwnerByIndex",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "tokenURI",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalSupply",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_owner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "walletOfOwner",
// 		"outputs": [
// 			{
// 				"internalType": "uint256[]",
// 				"name": "",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "whitelisted",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]



export default function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const [showp, setShowp] = useState(true);

    // const handleClose = () => setShowp(false);
    // const handleShowp = () => setShowp(true);

    const mintNft = async (e) => {
        console.log("event", e.target.id)
        console.log('mintNft');
        await window.ethereum.enable().then((address) => {
            var loginUserAddress = address[0];
            // console.log(address,'this is the data we got ')
           

            const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

            const web_value = web3.utils.toWei(e.target.id, 'ether');
            console.log(web_value);

            var tokenPirce = 0.05;
            var totalAmount = tokenPirce * e.target.id;
            
            // var web_totalAmountBigNumbrt = web3.utils.toWei('0.05', 'totalAmount');

            console.log('tokenPirce',tokenPirce);
            console.log('totalAmount',totalAmount);
            // var amount = totalAmount.toFixed(5);
            var tokens = web3.utils.toWei(totalAmount.toString(), 'ether')
            var bntokens = web3.utils.toBN(tokens)

            console.log('tokens',tokens);
            console.log('weiValue',bntokens);

            contactList.methods.mint(loginUserAddress,e.target.id)
            // console.log(e.target.id)
            .send({
                from: loginUserAddress,
                gas:500000,
                // value: web_value,
                value:bntokens
                // gas: 4000000
                // gasPrice: '210000000',
            }).on('error', function(error){
                console.log('error');
                // location.reload();
            }).then( function( info ) {
                console.log('success ',info);
                // window.location.href = "/success";
                // var token_id = info.events.Transfer.returnValues.tokenId;
                // var transactionHash = info.transactionHash;

            });
            setShow(false)
        });
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Nft to Mint</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mint-modal'>
                    <ListGroup className="mint-modal-list">

                        <ListGroup.Item className='mint-item' id="1" onClick={mintNft}>Mint 1 Nft</ListGroup.Item>
                        <ListGroup.Item className='mint-item' id="2" onClick={mintNft}>Mint 2 Nft</ListGroup.Item>
                        <ListGroup.Item className='mint-item' id="3" onClick={mintNft}>Mint 3 Nft</ListGroup.Item>
                        <ListGroup.Item className='mint-item' id="4" onClick={mintNft}>Mint 4 Nft</ListGroup.Item>
                        <ListGroup.Item className='mint-item' id="5" onClick={mintNft}>Mint 5 Nft</ListGroup.Item>
                        <ListGroup.Item className='mint-item' id="6" onClick={mintNft}>Mint 6 Nft</ListGroup.Item>
                        <ListGroup.Item className='mint-item' id="7" onClick={mintNft}>Mint 7 Nft</ListGroup.Item>
                        <ListGroup.Item className='mint-item' id="8" onClick={mintNft}>Mint 8 Nft</ListGroup.Item>
                        <ListGroup.Item className='mint-item' id="9" onClick={mintNft}>Mint 9 Nft</ListGroup.Item>
                        {/* <ListGroup.Item className='mint-item' id="10" onClick={mintNft}>Mint 10 Nft</ListGroup.Item> */}
                    </ListGroup>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>

            {/* ==============date popup modal=========== */}
            {/* <Modal show={showp} onHide={handleClosep}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='mint-modal popup'>
                    <div>
                        <h5 className='text-center'>Whitelist Pre Sale :  21 th January</h5>
                        <h5 className="text-center">Public Sale : 22 th January</h5>
                    </div>
                </Modal.Body>

            </Modal> */}
            {/* ==============date popup modal=========== */}

            {/* ===================== Hero Section ============================= */}
            <div className="heroDiv">
                <AnimateEffect />
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="hero-section">
                                <h1>Silly Sloths</h1>
                                <p>In a rainforest of digital artistry the Silly Sloths are a unique family of creatures, nesting their home in the branches of the Ethereum blockchain.
                                </p>
                                <div className="heroSec-btnGroup">
                                    <Button onClick={handleShow} className="openseaBtn my-2">Mint Now <FontAwesomeIcon icon={faArrowRight} /></Button>
                                    <Button href='https://discord.com/invite/GeKngV8ds8' target='_blank' className="discordBtn my-2">Discord <FontAwesomeIcon icon={faDiscord} /></Button>
                                    <div className="bottomBtn">
                                        <Button href="https://twitter.com/sillysloths_nft" target="_blank" rel="noreferrer" className="twitter my-4">Twitter <FontAwesomeIcon icon={faArrowRight} /></Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ===================== Hero Section ============================= */}

            {/* ===================== Counter ============================= */}
            <Counter />
            {/* ===================== Counter ============================= */}


            {/* ========================Video========================== */}

            <Video />

            {/* ========================Video========================== */}
            {/* ===================== About ============================= */}
            <div className="aboutDiv" id="about">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="about">
                                <h2>ABOUT </h2>
                                <p>Here at Silly Sloths were growing the community of fantastical NFTs, and shaping the future of blockchain technology. There is no better time than now to engage with the world of digital currency. We plan to grow the Silly Sloth family, and have fun doing it!
                                </p>
                                <p>Silly Sloths is a visionary art collection guaranteed to surprise you. Our sloth friends are one-of-a-kind digital creations who love to have a good time. They are 100% hand drawn and personally curated to make you smile. There’s no guessing what your Silly Sloth will be up to, and that’s the most exciting part. Each sloth has its own personality, style, and interests. Good luck trying to keep up with these guys.</p>
                                <p>Silly Sloth values originality and authenticity. You are guaranteed a 100% random drawing after minting, and then get to meet your very own Silly Sloth. Everyone has an equal opportunity of drawing our rare sloths, the possibilities are endless. While no two sloths are the same, they are all guaranteed to be silly!</p>
                                <div style={{ marginTop: '25px' }}>
                                    <a href="https://discord.com/invite/GeKngV8ds8" target="_blank" rel="noreferrer" className="abtBtn_discord">Join Discord <FontAwesomeIcon icon={faArrowRight} /></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about_img">
                                <Image className="mindSloth" src={AboutImg} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ===================== About ============================= */}







            {/* ===================== Story ============================= */}
            <div className="storyDiv">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="story_img">
                                <Image className="mindSloth" src={StoryImg} fluid />
                            </div>

                        </Col>
                        <Col lg={6}>
                            <div className="story">
                                <h2>Silly Sloth Story</h2>
                                <p>Welcome to the canopies of the Slow Motion rain forest, home to the Silly Sloth family! There is never a boring day for the Silly Sloths. Our adorable tree-dwellers have created a world of their own filled with endless adventures. While the sloths love to take it slow, don’t underestimate their ability to have a good time. You can find them ziplining through tropical tree tops, or cascading down river banks with their friends. Some of the Silly Sloths like to soak in the sun, building epic sand castles. Others prefer to spend their hours drinking fruity beverages, and munching on leaves. They often end their nights with rockin’ dance parties, dancing the tango in slow motion or DJing the forest's next top hit. If they’re feeling really silly, they play a pretty iconic game of musical chairs: Sloth edition. You can imagine how long that one lasts. Our sloths keep it silly for a few hours before nestling into bed with their friends. These sleepy fellows spend 15 to 20 hours dreaming, so no wonder they pack their days so full! Who wouldn't want to hang out with our sloth friends?
                                </p>
                                <p>While their lives seem pretty great, our digital sloths don’t face quite as much distress as our real life mascot. Sloths are an endangered species, and their homes are being destroyed by deforestation. By investing into the Silly Sloth NFT, you could save a sloth in real life! A portion of our income is donated to help endangered sloths reclaim their environment. Let's help the sloths keep partying amongst the treetops! </p>
                                <i>Join the Sloth family as we expand the world of digital currency, artistry, and protect our sloth friends along the way.</i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ===================== Story ============================= */}

            {/* ===================== RoadMap ============================= */}
            <Roadmap />
            {/* ===================== RoadMap ============================= */}

            {/* ===================== Team ============================= */}
            <Team />
            {/* ===================== Team ============================= */}

            {/* ===================== FAQ ============================= */}
            <Faq />
            {/* ===================== FAQ ============================= */}

            {/* ===================== Logo Section ============================= */}

            <div className="logo_section">
                <Container>
                   <Row>
                        <Col lg={12}>
                            <div className="title">
                                <h1>As Seen On</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="logo_imgs">
                                <img src={nftLogo} alt="logo_images" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ===================== Logo Section ============================= */}


            {/* ===================== Bottom About ============================= */}
            <div className="bottomAboutDiv">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="bottomAbout">
                                <h2>Silly Sloths</h2>
                                <p>In a rain forest of digital artistry the Silly Sloths are a unique family of creatures, nesting their home in the branches of the Ethereum blockchain.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="bottomBtn">
                                <Button href="https://twitter.com/sillysloths_nft" target="_blank" rel="noreferrer" className="twitter my-4">Twitter <FontAwesomeIcon icon={faArrowRight} /></Button>
                                <a href="https://discord.com/invite/GeKngV8ds8" rel="noreferrer" target="_blank" className="discord">Join Discord <FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ===================== Bottom About ============================= */}

        </>
    )
}
