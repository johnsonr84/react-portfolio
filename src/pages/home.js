import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

const Home = (props) => {
    return (
    <Container>
        <Row>
            <Col><img src="public/assets/img/rob/rob-1.png" class="img-fluid" alt="..."></img></Col>
            <Col><h1>Hello everyone</h1></Col>
        </Row>
    </Container>
 )
}

export default Home;