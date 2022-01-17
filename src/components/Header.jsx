import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import Logo from '../assets/images/silly-sloths.png'

export default function Header() {
    const openMatamask = async ()  =>{
        let data;
        await window.ethereum.enable().then((address) => {
            data = address[0]
            console.log(address,'this is the data we got ')
        });
    }
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

                            <a className="connect_walletBtn" onClick={openMatamask} href="/">Connect Wallet</a>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
