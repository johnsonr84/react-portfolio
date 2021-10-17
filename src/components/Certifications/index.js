import React from 'react';
import { MDBContainer, MDBCard, MDBCardTitle, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import tiyPNG from "../../../src/assets/images/certifications/tiyCert.png";
import uofuPNG from "../../../src/assets/images/certifications/uofuCert.png";

const Certifications = () => {
    return (
        <MDBContainer>
            <MDBRow evenly className='d-flex justify-content-center'>
                <MDBCol lg={5}>
                    <MDBCard
                        className='card-image p-1 m-2'
                        style={{
                            backgroundImage:
                                `url(${uofuPNG})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            minHeight: '400px',
                        }}
                    >
                        <div className='text-dark text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                            <div>
                                <h5 className='pink-text'>
                                    <MDBIcon fas icon='certificate' /> Certificate
                                </h5>
                                <MDBCardTitle tag='h3' className='pt-2'>
                                    <strong>Full Stack Development</strong>
                                </MDBCardTitle>
                                <p>
                                    Demonstrated working knowledge of Bootstrap, CSS, Express.js,
                                    Git, Github, Heroku, HTML (HTML5), JavaScript, JQuery, MongoDB, MySQL,
                                    Node.js, React, SEO, Responsive Design, API/JSON, RESTful API, State Management,
                                    Command Line, Database Theory, Agile Methodologies, Quality Assurance Testing,
                                    Social Coding Best Practices, Computer Science Fundamentals.
                                </p>
                                {/* <MDBBtn color='pink'>
                                    <MDBIcon icon='clone left' /> View project
                                </MDBBtn> */}
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>

                <MDBCol lg={5}>
                    <MDBCard
                        className='card-image p-1 m-2'
                        style={{
                            backgroundImage:
                                `url(${tiyPNG})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            minHeight: '400px',
                        }}
                    >
                        <div className='text-dark text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
                            <div>
                                <h5 className='orange-text'>
                                <MDBIcon fas icon='certificate' /> Certificate
                                </h5>
                                <MDBCardTitle tag='h3' className='pt-2'>
                                    <strong>Front End Engineering</strong>
                                </MDBCardTitle>
                                <p>
                                    Demonstrated working knowledge of CSS, Git, Github, Heroku, HTML (HTML5), 
                                    JavaScript, JQuery, React, SEO, Responsive Design, API/JSON, RESTful API, State Management,
                                    Command Line, Agile Methodologies, Quality Assurance Testing,
                                    Social Coding Best Practices.
                                </p>
                                {/* <MDBBtn color='deep-orange'>
                                    <MDBIcon icon='clone left' /> View project
                                </MDBBtn> */}
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Certifications;