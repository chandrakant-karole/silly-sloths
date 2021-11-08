import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Counter() {

    // const [count, setCount] = useState(0);

    // function counting(){
    //     setInterval(function(){
    //         setCount(count + 1)
    //         console.log('work')
    //     }, 1000)
    // }

    return (
        <>
            <div className="counterDiv">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={3}>
                            <div className="unique_edition">
                                <h2>10000+</h2>
                                <span>Unique Edition</span>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="unique_edition">
                                <h2>70+</h2>
                                <span>Sloth Attributes</span>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="unique_edition">
                                <h2>10000+</h2>
                                <span>Followers</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
