import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={8} className="my-2 text-center">
                            <div className="footerDiv">
                                <div className="copyrightContent">© 2021 Copyright, All Rights Reserved to Silly Sloths</div>
                            </div>
                        </Col>
                        <Col lg={4} className="my-2">
                            <div className="footerSocial">
                                <FontAwesomeIcon className="twitterIcon" icon={faTwitter} />
                                <FontAwesomeIcon className="instagramIcon" icon={faInstagram} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
