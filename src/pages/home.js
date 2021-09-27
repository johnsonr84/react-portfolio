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
                        Hey! I'm Rob.
                    </h1>
                    <h4 className='pt-2'>
                        A Full Stack Developer
                    </h4>
                    <p className='pt-2'>
                        I enjoy building projects to provide solutions and help others.
                    </p>
                    <p>
                        Positive energy, a flair for problem solving and making people laugh is what I
                        am known for.
                    </p>
                    <p>
                        I consider myself fortunate to do what I love daily.
                    </p>
                    <p>
                        Currently, I am seeking work as a Full Stack Developer, while doing online classes with Harvard Extension School in Computer Science.
                    </p>
                    <div className='pt-2'>
                        <MDBBtn className='mx-3 mt-1 hover-shadow-strong' style={{ backgroundColor: '#5B6369', width: '100px', border: 'none' }} href="#Portfolio">
                            {/* <MDBIcon fas icon='code-branch' />  */}
                            Projects
                        </MDBBtn>
                        <MDBBtn className='mx-1 mt-1 hover-shadow-strong rounded-circle' style={{ backgroundColor: '#333333', border: 'none' }} href='https://github.com/johnsonr84' target='blank'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                        <MDBBtn className='mx-1 mt-1 hover-shadow-strong rounded-circle' style={{ backgroundColor: '#0670AE', border: 'none' }} href='https://www.linkedin.com/in/robertjohnson1984/' target='blank'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>
                        <MDBBtn className='mx-1 mt-1 hover-shadow-strong hover-zoom rounded-circle' style={{ backgroundColor: '#dd4b39', border: 'none' }} href='#'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>
                    </div>

                </Col >
            </Row>
            {/* <Row className="display-flex align-items-center text-center">
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



                <Col md={4}><a className="fab fa-github" href="https://github.com/johnsonr84?tab=repositories" target="blank" /></Col>
                <a target="blank">Repositories</a>
            </Row> */}
        </Container>

    )
}

export default Home;