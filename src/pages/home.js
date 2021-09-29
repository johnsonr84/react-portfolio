import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import homePNG from "../assets/images/rob/rob-5.png";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


const Home = (props) => {
    return (
        <MDBContainer>
            <MDBRow className="display-flex align-items-center justify-content-center mx-auto vh-100">
                <MDBCol md={8}><img src={homePNG} className="img-fluid" alt="..." /></MDBCol>
                <MDBCol md={4}>
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
                        <MDBBtn size='lg' className='mt-1 p-3 hover-shadow-strong' color='dark' style={{ border: 'none' }} href="#Portfolio">
                            {/* <MDBIcon fas icon='code-branch' />  */}
                            Projects
                        </MDBBtn>
                        {/* <MDBBtn className='mx-1 mt-1 hover-shadow-strong rounded-circle hover-color-green' style={{ backgroundColor: '#333333', border: 'none', hover: 'green' }} href='https://github.com/johnsonr84' target='blank'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                        <MDBBtn className='mx-1 mt-1 hover-shadow-strong rounded-circle' style={{ backgroundColor: '#0670AE', border: 'none' }} href='https://www.linkedin.com/in/robertjohnson1984/' target='blank'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>
                        <MDBBtn className='mx-1 mt-1 hover-shadow-strong hover-zoom rounded-circle' style={{ backgroundColor: '#dd4b39', border: 'none' }} href='#'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn> */}
                    </div>

                </MDBCol >
            </MDBRow>
            {/* <MDBRow fluid className="align-items-center text-center" style={{ backgroundColor: 'grey', height: '300px' }}>
                <MDBCol size='4' className="display-flex align-items-center">
                   
                        <MDBIcon size='8x' fab icon="github" ><a href='https://www.linkedin.com/in/robertjohnson1984/' target='blank' ></a></MDBIcon>
                   
                </MDBCol>
                <MDBCol size='4' className="display-flex align-items-center text-center">
                    <MDBBtn className='shadow' style={{ backgroundColor: '#333333' }}  href='https://github.com/johnsonr84' target='blank'>
                    <MDBIcon size='8x' fab icon="github" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol size='4' className="display-flex align-items-center text-center" >
                    <MDBBtn className='shadow' style={{ backgroundColor: '#0082ca' }} floating size='lg' href='https://www.linkedin.com/in/robertjohnson1984/' target='blank'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>
                </MDBCol>
            </MDBRow> */}
        </MDBContainer>

    )
}

export default Home;