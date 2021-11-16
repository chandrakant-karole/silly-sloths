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
import AnimateEffect from './AnimateEffect'

export default function Home() {
    return (
        <>

            {/* ===================== Hero Section ============================= */}
            <div className="heroDiv">
                <AnimateEffect />
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="hero-section">
                                <h1>Silly Sloths</h1>
                                <p>Silly Sloths are one-of-a-kind creatures in the new age of digital art
                                    living on the Ethereum blockchain.
                                </p>
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
                                <h2>ABOUT </h2>
                                <p>At Silly Sloths we believe in the future of blockchain and especially the future of NFTs. We want to have fun & help shape the future of blockchain technology! 
                                </p>
                                <p>Silly Slothsis an art collectionof 100% hand drawn digital artwork combined to create unique NFTs.Each sloth will have its owncombination of background, color scheme, facial expressions,body, hat, eyes, accessories and more– the possibilities are endless.</p>
                                <p>Silly Slothswill be an honest operation with 100% randomdrawing after minting. Please be confident that you will have an equal opportunity of drawing a rare Silly Sloth as anyone else. Good luck and stay Silly!</p>
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
                                <h2>STORY BOX</h2>
                                <p>Welcome to Slow Motion tropical rainforest. Slow Motion is home to a group of the sluggish tree-dwellers known as Silly Sloths. These adorable sloths come together to enjoy some thrilling activities like river rafting, canyoning, cave tubing, and zip lining -- of course all in super slow motion. They also throw some killer parties and dance in slow motion to Calypso, soca, salsa, merengue, and cumbia. When the sloths really want to get silly they pump up the rock, reggaeton, and hip hop music. In addition to being their shelter and food source, the tree tops are where they rest after being silly. Their partying only lasts a few hours per day because sloths spend 15 to 20 hours per day sleeping. Yeah they live a good life except their homes are being depleted due to deforestation.  Save a sloth on the NFT blockchain and help a sloth in the real world.
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
                                <Button className="twitter my-4">Twitter <FontAwesomeIcon icon={faArrowRight} /></Button>
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
