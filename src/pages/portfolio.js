import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import portfolioPNG from "../assets/images/rob/rob-6.png";
import placeholderPNG from "../assets/images/150.png";

const Portfolio = (props) => {
    return (
        <Container>
            <Row className="display-flex align-items-center justify-content-center mx-auto">
                <Col md={8}><img src={portfolioPNG} className="img-fluid" alt="..." min-height="10vh" width="auto"/></Col>
                <Col md={4}>
                    <p>
                        My humble <b class="front-end">Portfolio</b> features a variety of <b
                            class="word-press">Projects</b>
                    built with various programming languages and libraries.
                </p>
                    <p>
                        In the first section, you will find Projects 1,2 and 3 from my successfully completed <b
                            class="full-stack">Full Stack</b> University of Utah Coding Bootcamp.
                </p>
                    <p class="">
                        In the second section, you will find samples of some of my assignments from my <b
                            class="full-stack text-color-red">University of Utah</b> Coding Bootcamp.
                </p>
                </Col >
            </Row>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={placeholderPNG} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={placeholderPNG} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Portfolio;