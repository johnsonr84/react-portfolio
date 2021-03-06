import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
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
        <MDBContainer className="display-flex" >
            <MDBRow className="display-flex align-items-center justify-content-center">
                <MDBCol md={6}><img src={portfolioPNG} className="img-fluid" alt="..." /></MDBCol>
                <MDBCol md={6}>
                    <h3>
                        Let's Build Something!
                    </h3>
                    <p className='pt-2'>
                        This portfolio website was built with React.js and features a variety of projects from single page apps to Full Stack Apps with back-end databases.
                    </p>
                    <h5 className='pt-3'>
                        My projects are primarily built with combinations of:
                    </h5>
                    <p className='pt-2'>
                        MongoDB, Express.js, React.js, Node.js, HTML, CSS, JavaScript, MySQL, API's and Bootstrap.
                    </p>
                </MDBCol >
            </MDBRow>



            <MDBRow className="projects display-flex mt-1 mb-1 justify-content-center mt-5">


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center" }}>
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


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
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


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
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


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
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


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
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


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
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


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
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


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
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


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={teamProfileGenerator} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Team Profile Generator</MDBCardTitle>
                        <MDBCardText>
                            Node.js CLI App
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://github.com/johnsonr84/team-profile-generator' target="blank">Repository</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={weatherDashboard} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Weather Dashboard</MDBCardTitle>
                        <MDBCardText>
                            5-Day Weather Forcast
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://johnsonr84.github.io/weather-dashboard/' target="blank">GH Pages</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={noteTaker} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Note Taker</MDBCardTitle>
                        <MDBCardText>
                            Note Taking App
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://fathomless-journey-02992.herokuapp.com/' target="blank">Heroku</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={jsQuiz} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>JS Code Quiz</MDBCardTitle>
                        <MDBCardText>
                            Javascript Quiz App
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://johnsonr84.github.io/code-quiz-challenge/' target="blank">GH Pages</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={passGenerator} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>JS Code Quiz</MDBCardTitle>
                        <MDBCardText>
                            Create Password App
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://johnsonr84.github.io/password-generator/' target="blank">GH Pages</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={restaurantRoulette} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Restaurant Roulette</MDBCardTitle>
                        <MDBCardText>
                            Random Restaurant App
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://johnsonr84.github.io/restaurant-roulette/' target="blank">GH Pages</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={meoWoof} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>MeoWoof</MDBCardTitle>
                        <MDBCardText>
                            Pet Care/Tracker App
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://github.com/johnsonr84/meowoof' target="blank">Repository</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={calculatorPNG} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Javascript Calculator</MDBCardTitle>
                        <MDBCardText>
                            Simple Javascript Calculator
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://johnsonr84.github.io/javascript-calculator/' target="blank">GH Pages</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={spaceInvadersPNG} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Space Invaders</MDBCardTitle>
                        <MDBCardText>
                            Space Invaders Game
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://johnsonr84.github.io/space-invaders/' target="blank">GH Pages</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={drumsetPNG} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Javascript Drumset</MDBCardTitle>
                        <MDBCardText>
                            JS Keyboard Drumset
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://johnsonr84.github.io/javascript-drum-kit/' target="blank">GH Pages</MDBBtn>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className='hover-shadow' style={{ maxWidth: '20rem', margin: '1rem', textAlign: "center", }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={clockPNG} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Javascript Clock</MDBCardTitle>
                        <MDBCardText>
                            JS Countdown Clock
                        </MDBCardText>
                        <MDBBtn color='secondary' href='https://johnsonr84.github.io/countdown-clock/' target="blank">GH Pages</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

            </MDBRow>

        </MDBContainer>
    )
}

export default Portfolio;