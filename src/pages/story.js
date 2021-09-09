import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import storyPNG from "../assets/images/rob/rob-2.png";

const Story = (props) => {
    return (
    <Container>
        <Row className="display-flex align-items-center justify-content-center mx-auto">
        <Col md={8}><img src={storyPNG} className="img-fluid" alt="..." /></Col>
        <Col md={4}>
                <h3>
                    Heyo! I'm Rob  
                </h3>
                <p>
                    Thanks for being curious about my life. I'm a Full Stack Developer. 
                </p>
                <p>
                    I recently recieved my certificate in Full Stack Development from the University of Utah. 
                </p>
                <p>
                    In addition, I hold a certificate in Front End Development from The Iron Yard and I have 1-year of professional experience.
                </p>
                <p>
                    Keep scrolling to see more!
                </p>
                </Col >
        </Row>
    </Container>
 )
}

export default Story;