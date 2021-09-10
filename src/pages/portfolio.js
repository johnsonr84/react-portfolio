import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import portfolioPNG from "../assets/images/rob/rob-6.png";
import projectOne from "../assets/images/project-1.png";
import projectTwo from "../assets/images/project-2.png";
import projectThree from "../assets/images/project-3.png";


const Portfolio = (props) => {
    return (
        <Container className="display-flex" >
            <Row className="display-flex align-items-center justify-content-center mx-auto vh-100">
                <Col md={6}><img src={portfolioPNG} className="img-fluid" alt="..." /></Col>
                <Col md={6}>
                    <h3>
                        Let's Build Something!
                    </h3>
                    <p>
                        My portfolio features a variety of Projects built with various programming languages and libraries.
                    </p>
                    <p>
                        The first section features collaborative apps with some fellow developers.
                    </p>
                    <p>
                        The second section features samples of some projects from my University of Utah Coding Bootcamp.
                    </p>
                </Col >
            </Row>
            

           
            <Row className="projects display-flex mt-1 mb-1 justify-content-center">
               
                    <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }} >
                        <Card.Title>Restaurant Roulette</Card.Title>
                        <Card.Img src={projectOne} />
                        <Card.Body>
                            <Card.Text>
                                Random restraunt app
                            </Card.Text>
                            <Button variant="secondary" href="https://johnsonr84.github.io/restaurant-roulette/" target="blank">Deployment</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                        <Card.Title>MeoWoof</Card.Title>
                        <Card.Img src={projectTwo} />
                        <Card.Body>
                            <Card.Text>
                                Pet care tracker app
                            </Card.Text>
                            <Button variant="secondary" href="https://github.com/johnsonr84/meowoof" target="blank">Deployment</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                        <Card.Title>Voyagr</Card.Title>
                        <Card.Img src={projectThree} />
                        <Card.Body>
                            <Card.Text>
                                Travel journal app
                            </Card.Text>
                            <Button variant="secondary" href="https://voyagr.netlify.app/" target="blank">Deployment</Button>
                        </Card.Body>
                    </Card>
               
            </Row>

        </Container>
    )
}

export default Portfolio;