import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Counter() {

    let counting = window.setInterval(countAnimate,20);

        let initial = 0;

        function countAnimate(){
            let uniqueEd = document.getElementById('uniqueEd');
            let slothAtr = document.getElementById('slothAtr');
            let followers = document.getElementById('followers');
            if (initial === 200){
                uniqueEd.innerText = '10000+';
                slothAtr.innerText = '70+';
                followers.innerText = '10000+';
                stop();
            } else{
                let newNumber = initial ++;
                uniqueEd.innerText = newNumber;
                slothAtr.innerText = newNumber;
                followers.innerText = newNumber;
            }
        }

        function stop(){
            clearInterval(counting);
        }

    return (
        <>
            <div className="counterDiv">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={3}>
                            <div className="unique_edition">
                                <h2 id="uniqueEd">10000+</h2>
                                <span>Unique Edition</span>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="unique_edition">
                                <h2 id="slothAtr">70+</h2>
                                <span>Sloth Attributes</span>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="unique_edition">
                                <h2 id="followers">10000+</h2>
                                <span>Followers</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
