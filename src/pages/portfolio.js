import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import portfolioPNG from "../assets/images/rob/rob-6.png";

const Portfolio = (props) => {
    return (
    <Container>
        <Row>
            <Col><img src={portfolioPNG} className="img-fluid" alt="..." /></Col>
            <Col><h1>Portfolio</h1></Col>
        </Row>
    </Container>
 )
}

export default Portfolio;