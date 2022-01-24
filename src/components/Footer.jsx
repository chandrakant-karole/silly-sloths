import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={12} className="my-2 text-center">
                            <div className="footerDiv">
                                <div className="copyrightContent">© 2021 Copyright, All Rights Reserved to Silly Sloths</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
