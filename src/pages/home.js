import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homePNG from "../assets/images/rob/rob-5.png";

const Home = (props) => {
    return (
        <Container>
            <Row className="display-flex align-items-center justify-content-center mx-auto vh-100">
                <Col md={8}><img src={homePNG} className="img-fluid" alt="..." /></Col>
                <Col md={4}>
                    <h1>
                        Heyo! I'm Rob.
                    </h1>
                    <h4>
                        A Full Stack Developer.
                    </h4>
                    <p>
                        I enjoy building projects to provide solutions and help others.
                    </p>
                    <p>
                        Positive energy, a flair for problem solving and making people laugh is what I
                        am known for.
                    </p>
                    <p>
                        I consider myself fortunate to do what I love daily.
                    </p>
                    <div className="justify-content-center align-items-center">
                        <Button variant="secondary" size="md" href="#Portfolio">Projects</Button>
                    </div>
                </Col >
            </Row>
        </Container>

    )
}

export default Home;