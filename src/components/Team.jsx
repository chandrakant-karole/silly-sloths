import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Dummy from '../assets/images/dummy.jpg'
import MemberCard from './MemberCard'


export default function Team() {
    return (
        <>
            <div className="teamDiv" id="team">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center my-4">
                            <h2>Meet the Team</h2>
                            <p>The Silly Sloths team is a dynamic duo – Kiah and Joshua – passionate about art, crypto, and blockchain technology.</p>
                        </Col>
                        <MemberCard image={Dummy} name="Kiah" description="Kaih is a talented artistwhopersonally drew all the Silly Sloths digital art by hand."/>
                        <MemberCard image={Dummy} name="Joshuaaka Yoshi Motion" description="Joshuaaka Yoshi Motion is the creative vision and project manager of Silly Sloths."/>
                        <MemberCard image={Dummy}/>
                        <MemberCard image={Dummy}/>
                        <MemberCard image={Dummy}/>
                        <MemberCard image={Dummy}/>
                        <MemberCard image={Dummy}/>
                        <MemberCard image={Dummy}/>
                    </Row>
                </Container>
            </div>
        </>
    )
}
