import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import Logo from '../assets/images/silly-sloths.png'
// import { CONTACT_ABI, CONTACT_ADDRESS } from '../config';
// import Web3 from 'web3';
// const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
export default function Header() {
    const openMatamask = async ()  =>{
        let data;
        await window.ethereum.enable().then((address) => {
            data = address[0]
            console.log(address,'this is the data we got ')
        });
    }

    // const reaveal = async() => {
    //     console.log('mintNft');
    //     await window.ethereum.enable().then((address) => {
    //         var loginUserAddress = address[0];
    //         // console.log(address,'this is the data we got ')

    //         const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

    //         contactList.methods.reveal()
    //         .send({
    //             from: loginUserAddress,
    //             // gas:500000,
    //             // value: 5
    //             //gasPrice: '210000000'
    //         }).on('error', function(error){
    //             console.log('error');
    //             // location.reload();
    //         }).then( function( info ) {
    //             console.log('success ',info);
    //             window.location.href = "/success";
    //             // var token_id = info.events.Transfer.returnValues.tokenId;
    //             // var transactionHash = info.transactionHash;

    //         });
    //     });

    // }

    return (
        <>
            <div className="mainHeader" id="home">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"><Image className="siteLogo" src={Logo} fluid/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '400px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About Us</Nav.Link>
                                <Nav.Link href="#roadMap">RoadMap</Nav.Link>
                                <Nav.Link href="#team">Team</Nav.Link>
                                <Nav.Link href="#faq">FAQ</Nav.Link>
                            </Nav>

                            <a className="connect_walletBtn" onClick={openMatamask}>Connect Wallet</a>
                            {/* <a className="connect_walletBtn" onClick={reaveal} href="/">Reaveal Button</a> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
