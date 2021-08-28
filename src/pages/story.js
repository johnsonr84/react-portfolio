import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import storyPNG from "../assets/images/rob/rob-6.png";

const Story = (props) => {
    return (
    <Container>
        <Row>
        <Col><img src={storyPNG} className="img-fluid" alt="..." /></Col>
            <Col><h1>Story</h1></Col>
        </Row>
    </Container>
 )
}

export default Story;