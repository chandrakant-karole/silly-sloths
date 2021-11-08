import React from 'react'
import { Col, Image } from 'react-bootstrap'

export default function MemberCard(props) {
    return (
        <>
            <Col lg={3} md={6} className="my-4">
                <div className="team_box text-center">
                    <Image src={props.image} fluid />
                    <h3>Member Name</h3>
                    <h5>About Team Member</h5>
                </div>
            </Col>
        </>
    )
}
