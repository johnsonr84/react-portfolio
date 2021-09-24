import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import homePNG from "../assets/images/rob/rob-5.png";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


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
                    {/* <a href="https://www.linkedin.com/in/robertjohnson1984/" target="blank" style={{ textDecoration: 'none' }}>LinkedIn</a>

                        <a class="fab fa-git-square" href="https://github.com/johnsonr84" target="blank" style={{ textDecoration: 'none' }}>Github</a>

                        <FontAwesomeIcon icon={['fab', 'github']} /> */}
                </Col >
            </Row>
            <Row>
                <Col md={4}>
                    <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>
                </Col>



                {/* <Col md={4}><a className="fab fa-github" href="https://github.com/johnsonr84?tab=repositories" target="blank" /></Col>
                <a target="blank">Repositories</a> */}
            </Row>
        </Container>

    )
}

export default Home;