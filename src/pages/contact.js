import React from 'react';
import { MDBContainer,  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import contactPNG from "../assets/images/rob/rob-1.png";

function ContactPage() {
    return (
        <MDBContainer fluid className="display-flex">
        <section className="my-5 m-2">
            <MDBRow fluid className='display-flex align-items-center justify-content-center'>
                <MDBCol md={5} className="text-center"><img src={contactPNG} className="img-fluid" alt="..." style={{ minHeight: 'auto', maxHeight: '600px' }} /></MDBCol>
                <MDBCol md={5} className="mb-5">
                    <MDBCard className="hover-shadow mt-2">
                        <MDBCardBody>
                            <div className="form-header blue accent-1">
                                <h3 className="mt-2">
                                    <MDBIcon icon="envelope" /> Hit me up:
                                </h3>
                            </div>
                            <p className="dark-grey-text p-2">
                                I'll get back to you asap!
                            </p>
                            <div className="md-form p-2">
                                <MDBInput
                                    icon="user"
                                    label="Your name"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-name" />
                            </div>
                            <div className="md-form p-2">
                                <MDBInput
                                    icon="envelope"
                                    label="Your email"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-email" />
                            </div>
                            <div className="md-form p-2">
                                <MDBInput
                                    icon="tag"
                                    label="Subject"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-subject" />
                            </div>
                            <div className="md-form p-2">
                                <MDBInput
                                    icon="pencil-alt"
                                    // label="Icon Prefix"
                                    iconClass="grey-text"
                                    type="textarea"
                                    id="form-text" />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="dark">Submit</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className='display-flex align-items-center justify-content-center mt-5'>
                <MDBCol md={10}>
                    <div
                        id="map-container"
                        className="rounded z-depth-1-half map-container"
                        style={{ height: "400px" }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                            title="Google Map of SLC"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }} />
                    </div>
                    <br />
                    <MDBRow className="text-center">
                        <MDBCol md="3">
                            <MDBBtn tag="a" floating color="light" className="accent-1">
                                <MDBIcon icon="map-marker-alt" />
                            </MDBBtn>
                            <p>SLC, UT</p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn tag="a" floating color="light" className="accent-1">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <p>385.977.2989</p>
                        </MDBCol>
                        <MDBCol md="5">
                            <MDBBtn tag="a" floating color="light" className="accent-1">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                            <p>robertcjohnson1984@gmail</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>
        </MDBContainer>
    );
}
  
  export default ContactPage;