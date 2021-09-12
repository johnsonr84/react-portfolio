import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import portfolioPNG from "../assets/images/rob/rob-6.png";
import restaurantRoulette from "../assets/images/projects/restaurant-roulette.png";
import meoWoof from "../assets/images/projects/meowoof.png";
import voyagr from "../assets/images/projects/voyagr.png";
import reactBook from "../assets/images/projects/react-book-search.png";
import employeeDirectory from "../assets/images/projects/employee-directory.png";
import workoutTracker from "../assets/images/projects/workout-tracker.png";
import budgetTracker from "../assets/images/projects/budget-tracker.png";
import fullStackBurgers from "../assets/images/projects/full-stack-burgers.png";
import employeeManagement from "../assets/images/projects/employee-management.png";

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

                <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Voyagr</Card.Title>
                    <Card.Img src={voyagr} />
                    <Card.Body>
                        <Card.Text>
                            Travel Journal App
                        </Card.Text>
                        <Button variant="secondary" href="https://voyagr.netlify.app/" target="blank">Deployment</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>React Book Search</Card.Title>
                    <Card.Img src={reactBook} />
                    <Card.Body>
                        <Card.Text>
                            Google Book Search
                        </Card.Text>
                        <Button variant="secondary" href="https://mern-react-book.herokuapp.com/" target="blank">Deployment</Button>
                    </Card.Body>
                </Card>
              
                <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>React Employee Directory</Card.Title>
                    <Card.Img src={employeeDirectory} />
                    <Card.Body>
                        <Card.Text>
                            Find/ FIlter Employee List
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/react-employee-directory/" target="blank">Deployment</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Workout Tracker</Card.Title>
                    <Card.Img src={workoutTracker} />
                    <Card.Body>
                        <Card.Text>
                            Create/Track your workout
                        </Card.Text>
                        <Button variant="secondary" href="https://dry-castle-85403.herokuapp.com/" target="blank">Deployment</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Budget Tracker</Card.Title>
                    <Card.Img src={budgetTracker} />
                    <Card.Body>
                        <Card.Text>
                            Online/ Offline App
                        </Card.Text>
                        <Button variant="secondary" href="https://github.com/johnsonr84/pwa-budget-tracker" target="blank">Deployment</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Full Stack Burgers</Card.Title>
                    <Card.Img src={fullStackBurgers} />
                    <Card.Body>
                        <Card.Text>
                            Burger Order App
                        </Card.Text>
                        <Button variant="secondary" href="https://full-stack-burgers.herokuapp.com/" target="blank">Deployment</Button>
                    </Card.Body>
                </Card>
              
                <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Employee Management</Card.Title>
                    <Card.Img src={employeeManagement} />
                    <Card.Body>
                        <Card.Text>
                            Employee Database Solution
                        </Card.Text>
                        <Button variant="secondary" href="https://github.com/johnsonr84/employee-management" target="blank">Repository</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }} >
                    <Card.Title>Restaurant Roulette</Card.Title>
                    <Card.Img src={restaurantRoulette} />
                    <Card.Body>
                        <Card.Text>
                            Random Restraunt Finder App
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/restaurant-roulette/" target="blank">Deployment</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>MeoWoof</Card.Title>
                    <Card.Img src={meoWoof} />
                    <Card.Body>
                        <Card.Text>
                            Pet Care/Tracker App
                        </Card.Text>
                        <Button variant="secondary" href="https://github.com/johnsonr84/meowoof" target="blank">Deployment</Button>
                    </Card.Body>
                </Card>


            </Row>

        </Container>
    )
}

export default Portfolio;