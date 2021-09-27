import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
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
import dayPlanner from "../assets/images/projects/day-planner.png";
import teamProfileGenerator from "../assets/images/projects/team-profile-generator.png";
import weatherDashboard from "../assets/images/projects/weather-dashboard.png";
import noteTaker from "../assets/images/projects/note-taker.png";
import jsQuiz from "../assets/images/projects/js-quiz.png";
import passGenerator from "../assets/images/projects/password-generator.png";
import calculatorPNG from "../assets/images/projects/calculator.png";
import spaceInvadersPNG from "../assets/images/projects/space-invaders.png";
import drumsetPNG from "../assets/images/projects/drumset.png";
import clockPNG from "../assets/images/projects/countdown-clock.png";


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


                <MDBCard style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center" }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={voyagr} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Voyagr</MDBCardTitle>
                        <MDBCardText>
                            Travel Journal App
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://voyagr.netlify.app/' target="blank">Deployment</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={reactBook} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>React Book Search</MDBCardTitle>
                        <MDBCardText>
                            Google Book Search
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://mern-react-book.herokuapp.com/' target="blank">Deployment</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={employeeDirectory} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>React Employee Directory</MDBCardTitle>
                        <MDBCardText>
                            Find Employees List
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://johnsonr84.github.io/react-employee-directory/' target="blank">GH Pages</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={workoutTracker} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Workout Tracker</MDBCardTitle>
                        <MDBCardText>
                            Workout Tracker
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://dry-castle-85403.herokuapp.com/' target="blank">Deployment</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={budgetTracker} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Budget Tracker</MDBCardTitle>
                        <MDBCardText>
                            Online/ Offline App
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://amazing-budget-tracker.herokuapp.com/' target="blank">Heroku</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={fullStackBurgers} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Full Stack Burgers</MDBCardTitle>
                        <MDBCardText>
                            Burger Order App
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://full-stack-burgers.herokuapp.com/' target="blank">Heroku</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={employeeManagement} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Employee Management</MDBCardTitle>
                        <MDBCardText>
                            Employee Database Solution
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://github.com/johnsonr84/employee-management' target="blank">Repository</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={dayPlanner} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Day Planner</MDBCardTitle>
                        <MDBCardText>
                            Simple Calendar App
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://johnsonr84.github.io/day-planner/' target="blank">GH Pages</MDBBtn>
                    </MDBCardBody>
                </MDBCard>



                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Team Profile Generator</Card.Title>
                    <Card.Img src={teamProfileGenerator} />
                    <Card.Body>
                        <Card.Text>
                            Node.js CLI App
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/day-planner/" target="blank">GH Pages</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Weather Dashboard</Card.Title>
                    <Card.Img src={weatherDashboard} />
                    <Card.Body>
                        <Card.Text>
                            5-Day Weather Forcast
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/weather-dashboard/" target="blank">GH Pages</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Img src={noteTaker} />
                    <Card.Body>
                        <Card.Text>
                            Note Taking App
                        </Card.Text>
                        <Button variant="secondary" href="https://fathomless-journey-02992.herokuapp.com/" target="blank">Deployment</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>JS Code Quiz</Card.Title>
                    <Card.Img src={jsQuiz} />
                    <Card.Body>
                        <Card.Text>
                            Javascript Quiz App
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/code-quiz-challenge/" target="blank">GH Pages</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Password Generator</Card.Title>
                    <Card.Img src={passGenerator} />
                    <Card.Body>
                        <Card.Text>
                            Create Password App
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/password-generator/" target="blank">GH Pages</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }} >
                    <Card.Title>Restaurant Roulette</Card.Title>
                    <Card.Img src={restaurantRoulette} />
                    <Card.Body>
                        <Card.Text>
                            Random Restaurant App
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/restaurant-roulette/" target="blank">GH Pages</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>MeoWoof</Card.Title>
                    <Card.Img src={meoWoof} />
                    <Card.Body>
                        <Card.Text>
                            Pet Care/Tracker App
                        </Card.Text>
                        <Button variant="secondary" href="https://github.com/johnsonr84/meowoof" target="blank">Deployment</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Javascript Calculator</Card.Title>
                    <Card.Img src={calculatorPNG} />
                    <Card.Body>
                        <Card.Text>
                            Javascript Calculator
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/javascript-calculator/" target="blank">GH Pages</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Space Invaders</Card.Title>
                    <Card.Img src={spaceInvadersPNG} />
                    <Card.Body>
                        <Card.Text>
                            Space Invaders Game
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/space-invaders/" target="blank">GH Pages</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Javascript Drumset</Card.Title>
                    <Card.Img src={drumsetPNG} />
                    <Card.Body>
                        <Card.Text>
                            JS Keyboard Drumset
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/javascript-drum-kit/" target="blank">GH Pages</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', padding: '1rem', margin: '1rem', textAlign: "center" }}>
                    <Card.Title>Javascript Clock</Card.Title>
                    <Card.Img src={clockPNG} />
                    <Card.Body>
                        <Card.Text>
                            JS Countdown Clock
                        </Card.Text>
                        <Button variant="secondary" href="https://johnsonr84.github.io/countdown-clock/" target="blank">GH Pages</Button>
                    </Card.Body>
                </Card>




            </Row>

        </Container>
    )
}

export default Portfolio;