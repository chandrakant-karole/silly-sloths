import { React, useState } from 'react'
import { Container, Row, Col, Button, Image, Modal, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AboutImg from '../assets/images/about_img.jpeg'
import StoryImg from '../assets/images/story_img.jpeg'
import Counter from './Counter'
import Roadmap from './Roadmap'
import Team from './Team'
import Faq from './Faq'
import AnimateEffect from './AnimateEffect'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Nft to Mint</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mint-modal'>
                        <ListGroup className="mint-modal-list">
                            <ListGroup.Item className='mint-item' onClick={handleClose}>Mint 1 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={handleClose}>Mint 2 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={handleClose}>Mint 3 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={handleClose}>Mint 4 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={handleClose}>Mint 5 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={handleClose}>Mint 6 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={handleClose}>Mint 7 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={handleClose}>Mint 8 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={handleClose}>Mint 9 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={handleClose}>Mint 10 Nft</ListGroup.Item>
                        </ListGroup>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>

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
                                    <Button onClick={handleShow} className="openseaBtn my-2">Mint <FontAwesomeIcon icon={faArrowRight} /></Button>
                                    <Button href='https://discord.com/invite/GeKngV8ds8' target='_blank' className="discordBtn my-2">Discord <FontAwesomeIcon icon={faDiscord} /></Button>
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
                                <Button href="https://twitter.com/SillySlothsNFT" target="_blank" rel="noreferrer" className="twitter my-4" disabled>Twitter <FontAwesomeIcon icon={faArrowRight} /></Button>
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
