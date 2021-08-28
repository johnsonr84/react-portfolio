import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import contactPNG from "../assets/images/rob/rob-1.png";

const Contact = (props) => {
    return (
    <Container>
        <Row>
            <Col><img src={contactPNG} className="img-fluid" alt="..." /></Col>
            <Col><h1>Contact</h1></Col>
        </Row>
    </Container>
 )
}

export default Contact;