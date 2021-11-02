import React from 'react'
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap'
import Logo from '../assets/images/silly-sloths.png'

export default function Header() {
    return (
        <>
            <div className="mainHeader">
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
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">About Us</Nav.Link>
                                <Nav.Link href="#action3">RoadMap</Nav.Link>
                                <Nav.Link href="#action4">FAQ</Nav.Link>
                            </Nav>

                            <Button variant="outline-light">Connect Wallet</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
