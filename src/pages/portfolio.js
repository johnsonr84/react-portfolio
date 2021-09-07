import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import portfolioPNG from "../assets/images/rob/rob-6.png";
import projectOne from "../assets/images/project-1.png";
import projectThree from "../assets/images/project-3.png";
import placeholderPNG from "../assets/images/150.png";

const Portfolio = (props) => {
    return (
        <Container>
            <Row className="display-flex align-items-center justify-content-center mx-auto">
                <Col md={8}><img src={portfolioPNG} className="img-fluid" alt="..." min-height="10vh" width="auto" /></Col>
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
            <Row>
                <CardGroup className="projects">
                    <Card className="projectOne m-1">
                        <Card.Img variant="top" src={projectOne} />
                        <a href="https://johnsonr84.github.io/restaurant-roulette/" target="blank"></a>
                        <Card.Body>
                            <Card.Title>Restaurant Roulette</Card.Title>
                            <p>Project 1</p>
                            <Card.Text>
                            App asks users to enter basic criteria of what they are looking for (cuisine, location/distance, etc). Will populate a “spin the wheel” button that picks a random result and then links map/delivery links. API’s that we used: zippopotamus, zomato, google maps…
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="projectTwo m-1">
                        <Card.Img variant="top" src={placeholderPNG} />
                        <a href="https://github.com/johnsonr84/meowoof" target="blank"></a>
                        <Card.Body>
                            <Card.Title>MeoWoof</Card.Title>
                            <p>Project 2</p>
                            <Card.Text>
                            The MeoWoof is a mobile first designed application featuring a map and display the route walked for the day with date & time stamp, and distance/ duration walked. This feature will also display in real time so that the owner may see if/ where their dog sitter/ helper is walking their furball in real time!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="projectThree m-1">
                        <Card.Img variant="top" src={projectThree} />
                        <a href="https://voyagr.netlify.app/" target="blank"></a>
                        <Card.Body>
                            <Card.Title>Voyagr</Card.Title>
                            <p>Project 3</p>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Row>
   
        </Container>
    )
}

export default Portfolio;