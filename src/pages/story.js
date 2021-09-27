import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import storyPNG from "../assets/images/rob/rob-1.png";

const Story = (props) => {
    return (
    <Container>
        <Row className="display-flex align-items-center justify-content-center mx-auto vh-100">
        <Col md={6}><img src={storyPNG} style={{maxHeight: '48rem', width: 'auto', paddingLeft: '100px' }} className="img-fluid" alt="..." /></Col>
        <Col md={6}>
                <h3>
                    Thanks for stopping by! 
                </h3>
                <p>
                    Thanks for being curious about my life.
                </p>
                <p>
                    I recently recieved my certificate in Full Stack Development from the University of Utah. 
                </p>
                <p>
                    In addition, I hold a certificate in Front End Development from The Iron Yard and I have 1-year of professional experience.
                </p>
                <p>
                    Currently, I am seeking work as a Full Stack Developer, while doing online classes with Harvard Extension School in Computer Science.
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