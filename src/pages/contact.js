import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import robContact from "../assets/images/rob/rob-1.png";

const Contact = (props) => {
    return (
    <Container>
        <Row>
            <Col><img src={robContact} className="img-fluid" alt="..." /></Col>
            <Col><h1>Contact</h1></Col>
        </Row>
    </Container>
 )
}

export default Contact;