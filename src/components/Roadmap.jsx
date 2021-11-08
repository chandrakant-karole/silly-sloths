import React from 'react'
import Dummy from '../assets/images/dummy.jpg'
import { Container, Row, Image } from 'react-bootstrap'

export default function Roadmap() {
    return (
        <>
            <div className="roadMapDiv" id="roadMap">
                <Container>
                    <Row>
                        <div className="roadMap_container">
                            <h2>The Silly Sloth Roadmap</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eum unde esse ex, nulla debitis dolore excepturi reprehenderit ipsam explicabo voluptates tempore autem voluptas est quaerat asperiores ab. Ullam, voluptas.</p>
                            <div className="roadMap_phase">
                                <div className="roadMap_phase_img">
                                    <Image src={Dummy} fluid />
                                </div>
                                <div className="roadMap_phase_content">
                                    <h3>Pre Mint</h3>
                                    <ul>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadMap_phase">
                                <div className="roadMap_phase_img">
                                    <Image src={Dummy} fluid />
                                </div>
                                <div className="roadMap_phase_content">
                                    <h3>Mint</h3>
                                    <ul>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadMap_phase">
                                <div className="roadMap_phase_img">
                                    <Image src={Dummy} fluid />
                                </div>
                                <div className="roadMap_phase_content">
                                    <h3>Marketing</h3>
                                    <ul>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadMap_phase">
                                <div className="roadMap_phase_img">
                                    <Image src={Dummy} fluid />
                                </div>
                                <div className="roadMap_phase_content">
                                    <h3>Utility</h3>
                                    <ul>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadMap_phase">
                                <div className="roadMap_phase_img">
                                    <Image src={Dummy} fluid />
                                </div>
                                <div className="roadMap_phase_content">
                                    <h3>Heading</h3>
                                    <ul>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadMap_phase">
                                <div className="roadMap_phase_img">
                                    <Image src={Dummy} fluid />
                                </div>
                                <div className="roadMap_phase_content">
                                    <h3>Heading</h3>
                                    <ul>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                        <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
