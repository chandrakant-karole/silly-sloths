import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player'
export default function MemberCard(props) {
    return (
        <>
            <Container fluid >
                <Row>
                <Col lg={12} md={12} className="px-0">
                <div className=" video-player">
                <ReactPlayer url='https://youtu.be/WXvKkZxFsdc'  width='100%' height="500px"  />
                </div>
            </Col>
                </Row>
            </Container>
        </>
    )
}