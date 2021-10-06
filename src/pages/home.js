import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import homePNG from "../assets/images/rob/rob-5.png";
import badge from "../assets/images/logos/coding-bootcamp-full-stack-developer-certificate.1.png"

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
                        <MDBBtn size='lg' className='mt-1 p-3 hover-shadow-strong' color='dark' style={{ border: 'none', fontSize: '14px' }} href="#Portfolio">
                            {/* <MDBIcon fas icon='code-branch' />  */}
                            Projects
                        </MDBBtn>
                    </div>
                </MDBCol >
            </MDBRow>
            <MDBRow className="align-items-center justify-content-center  vh-100">
                <MDBCol md={8}>
                    <MDBCard>
                        <MDBCardBody>I have demonstrated working knowledge of Bootstrap, CSS, Express.js, Git, Github, Heroku, HTML (HTML5), JavaScript, JQuery, MongoDB, MySQL, Node.js, React, SEO, Responsive Design, API/JSON, RESTful API, State Management, Command Line, Database Theory, Agile Methodologies, Quality Assurance Testing, Social Coding Best Practices, Computer Science Fundamentals.</MDBCardBody>
                    </MDBCard>
                </MDBCol >
                <MDBCol md={4}><img src={badge} className="img-fluid" alt="..." /></MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}

export default Home;