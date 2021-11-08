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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempore iure explicabo vel, minus accusamus at accusantium pariatur tempora hic distinctio harum, fugit deleniti unde! Recusandae voluptatibus eligendi perspiciatis nemo!</p>
                        </Col>
                        <MemberCard image={Dummy}/>
                        <MemberCard image={Dummy}/>
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
