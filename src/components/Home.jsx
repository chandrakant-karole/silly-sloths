import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    return (
        <>
            <div className="heroDiv">
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="hero-section">
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus fugiat hic veritatis expedita mollitia quae nisi quia aut quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus fugiat hic veritatis expedita mollitia quae nisi quia aut quos.</p>
                                <div className="heroSec-btnGroup">
                                    <Button className="openseaBtn">View on Opensea <FontAwesomeIcon icon={faArrowRight} /></Button>
                                    <Button className="discordBtn">Join Discord <FontAwesomeIcon icon={faDiscord} /></Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row className="justify-content-center">
                    <Col lg={3}>
                        <div className="unique_edition">
                            <h2>10000+</h2>
                            <span>Unique Edition</span>
                        </div>
                    </Col>
                    <Col lg={3}>
                    <div className="unique_edition">
                            <h2>70+</h2>
                            <span>Sloth Attributes</span>
                        </div>
                    </Col>
                    <Col lg={3}>
                    <div className="unique_edition">
                            <h2>10000+</h2>
                            <span>Followers</span>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about">
                            <h2>About</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut labore nulla quasi voluptatem quidem sequi aut! Non quibusdam, voluptates et atque id sunt. Dolorum incidunt itaque rem aliquid accusantium expedita, optio magni eius! Deserunt, tempore.
                            </p>
                            <Button>Join Discord <FontAwesomeIcon icon={faArrowRight} /></Button>                                        
                        </div>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
            </Container>
        </>
    )
}
