import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                        A Full Stack Developer
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
                    <div>
                        {/* <MDBBtn className='m-1 shadow' style={{ backgroundColor: '#5B6369' , border: 'none' }} floating size='mx' href="#Portfolio">
                            <MDBIcon fas icon='code-branch' /> Projects
                        </MDBBtn> */}
                        <MDBBtn className='m-2 p-2 shadow' style={{ backgroundColor: '#333333', width: '100px', border: 'none' }} floating size='mx' href='https://github.com/johnsonr84' target='blank'>
                            <MDBIcon fab icon='github' /> Github
                        </MDBBtn>
                        <MDBBtn rounded className='mx-2 p-2 shadow' style={{ backgroundColor: '#0670AE', width: '100px', border: 'none' }} floating size='mx' href='https://www.linkedin.com/in/robertjohnson1984/' target='blank'>
                            <MDBIcon fab icon='linkedin-in' /> LinkedIn
                        </MDBBtn>
                    </div>

                </Col >
            </Row>
            <Row className="display-flex align-items-center text-center">
                <Col md={2} className="display-flex align-items-center">
                    <MDBBtn rounded className='mx-1 shadow' style={{ backgroundColor: '#0082ca' }} floating size='lg' href='https://www.linkedin.com/in/robertjohnson1984/' target='blank'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>
                </Col>
                <Col md={2} className="display-flex align-items-center">
                    <MDBBtn className='m-1 shadow' style={{ backgroundColor: '#333333' }} floating size='lg' href='https://github.com/johnsonr84' target='blank'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </Col>
                <Col md={2} className="display-flex align-items-center" >
                    <MDBBtn className='mx-1 shadow' style={{ backgroundColor: '#0082ca' }} floating size='lg' href='https://www.linkedin.com/in/robertjohnson1984/' target='blank'>
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