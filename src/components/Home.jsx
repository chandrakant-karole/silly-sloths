import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import MindSloth from '../assets/images/mind-sloth.jpg'
import Counter from './Counter'
import Roadmap from './Roadmap'
import Team from './Team'
import Faq from './Faq'

export default function Home() {
    return (
        <>
            {/* ===================== Hero Section ============================= */}
            <div className="heroDiv">
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="hero-section">
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus fugiat hic veritatis expedita mollitia quae nisi quia aut quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus fugiat hic veritatis expedita mollitia quae nisi quia aut quos.</p>
                                <div className="heroSec-btnGroup">
                                    <Button className="openseaBtn my-2">Mint <FontAwesomeIcon icon={faArrowRight} /></Button>
                                    <Button className="twitterBtn my-2">Twitter <FontAwesomeIcon icon={faTwitter} /></Button>
                                    <Button className="discordBtn my-2">Join Discord <FontAwesomeIcon icon={faDiscord} /></Button>
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

            {/* ===================== About ============================= */}
            <div className="aboutDiv" id="about">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="about">
                                <h2>About</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut labore nulla quasi voluptatem quidem sequi aut! Non quibusdam, voluptates et atque id sunt. Dolorum incidunt itaque rem aliquid accusantium expedita, optio magni eius! Deserunt, tempore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut labore nulla quasi voluptatem quidem sequi aut! Non quibusdam, voluptates et atque id sunt. Dolorum incidunt itaque rem aliquid accusantium expedita, optio magni eius! Deserunt, tempore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut labore nulla quasi voluptatem quidem sequi aut! Non quibusdam, voluptates et atque id sunt. Dolorum incidunt itaque rem aliquid accusantium expedita, optio magni eius! Deserunt, tempore.
                                </p>
                                <Button className="abtBtn_discord">Join Discord <FontAwesomeIcon icon={faArrowRight} /></Button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about_img">
                                <Image className="mindSloth" src={MindSloth} fluid />
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
                                <Image className="mindSloth" src={MindSloth} fluid />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="story">
                                <h2>The Story</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut labore nulla quasi voluptatem quidem sequi aut! Non quibusdam, voluptates et atque id sunt. Dolorum incidunt itaque rem aliquid accusantium expedita, optio magni eius! Deserunt, tempore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut labore nulla quasi voluptatem quidem sequi aut! Non quibusdam, voluptates et atque id sunt. Dolorum incidunt itaque rem aliquid accusantium expedita, optio magni eius! Deserunt, tempore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut labore nulla quasi voluptatem quidem sequi aut! Non quibusdam, voluptates et atque id sunt. Dolorum incidunt itaque rem aliquid accusantium expedita, optio magni eius! Deserunt, tempore.
                                </p>
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

            {/* ===================== Bottom About ============================= */}
            <div className="bottomAboutDiv">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="bottomAbout">
                                <h2>Silly Sloths</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo accusantium quam recusandae repudiandae quia tempore nobis veniam, impedit dolore fuga repellendus tenetur asperiores sunt unde quos ut deleniti possimus sit.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="bottomBtn">
                                <Button className="twitter my-4">Twitter <FontAwesomeIcon icon={faArrowRight}/></Button>
                                <Button className="discord">Join Discord <FontAwesomeIcon icon={faArrowRight} /></Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ===================== Bottom About ============================= */}

        </>
    )
}
