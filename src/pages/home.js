import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homePNG from "../assets/images/rob/rob-2.png";

const Home = (props) => {
    return (
        <Container>
            <Row className="display-flex">
                <Col>
                    <h1 class="main-title">Hey!</h1><small>Thanks for stopping by. </small>
                    <p>
                        I am Rob, a <b class="front-end">Front End</b> and <b class="word-press">WordPress Developer</b>
                        who is passionate about building projects to help
                        people and society. Positive energy, a flair for problem solving and making people laugh is what I
                        am known for. I consider
                        myself fortunate to do what I love daily.
                    </p>
                    <p>
                        I am currently expanding my dev skills as a student at the University of Utah <b
                            class="full-stack">Full Stack Developer</b> Coding Bootcamp in
                        evening Zoom classes.
                    </p>
                </Col>
                <Col><img src={homePNG} className="img-fluid" alt="..." /></Col>
            </Row>
        </Container>

    )
}

export default Home;