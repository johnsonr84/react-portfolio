import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Certifications from '../components/Certifications/index';
import homePNG from "../assets/images/rob/rob-5.png";
// import laptop from "../assets/images/devices/laptop.png"


const Home = (props) => {
    
    return (
        <MDBContainer >
            <MDBRow className="display-flex align-items-center justify-content-center mx-auto vh-100" >
                <MDBCol lg={8}><img src={homePNG} className="img-fluid" alt="..." /></MDBCol>
                <MDBCol lg={4}>
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
                        <MDBBtn size='lg' className='mt-1 p-3 shadow' color='dark' style={{ border: 'none', fontSize: '14px' }} href="#Portfolio">
                            {/* <MDBIcon fas icon='code-branch' />  */}
                            Projects
                        </MDBBtn>
                    </div>
                </MDBCol >
            </MDBRow>

            <MDBRow>
                <Certifications />
            </MDBRow>

            <MDBRow center className="position-relative align-items-center justify-content-center mx-auto vh-100" style={{ height: '800px', paddingTop: '200px', paddingBottom: '200px' }}>
                <MDBCard fluid className='shadow-2-strong' style={{ padding: '2rem', textAlign: "center", zIndex: '2' }}>
                    <MDBCardBody>I have demonstrated working knowledge of Bootstrap, CSS, Express.js, Git, Github, Heroku, HTML (HTML5), JavaScript, JQuery, MongoDB, MySQL, Node.js, React, SEO, Responsive Design, API/JSON, RESTful API, State Management, Command Line, Database Theory, Agile Methodologies, Quality Assurance Testing, Social Coding Best Practices, Computer Science Fundamentals.</MDBCardBody>

                </MDBCard>
                {/* <img src={laptop} className="img-fluid" alt="..." style={{ paddingLeftt: '400px', zIndex: '1' }}/> */}
            </MDBRow>
        </MDBContainer>

    )
}

export default Home;