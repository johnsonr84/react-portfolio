import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import storyPNG from "../assets/images/rob/rob-1.png";

const Story = (props) => {
    return (
        <MDBContainer>
            <MDBRow className="display-flex align-items-center justify-content-center mx-auto vh-100">
                <MDBCol size='6'><img src={storyPNG} style={{ maxHeight: '48rem', width: 'auto', paddingLeft: '100px' }} className="img-fluid" alt="..." /></MDBCol>
                <MDBCol size='6'>
                    <h3>
                        Thanks for stopping by!
                    </h3>
                    <p>
                        Thanks for being curious about my life.
                    </p>
                    <p>
                        I recently recieved my certificate in Full Stack Development from the University of Utah.
                    </p>
                    <p>
                        In addition, I hold a certificate in Front End Development from The Iron Yard and I have 1-year of professional experience.
                    </p>
                    <p>
                        Currently, I am seeking work as a Full Stack Developer, while doing online classes with Harvard Extension School in Computer Science.
                    </p>
                    <p>
                        Keep scrolling to see more!
                    </p>
                </MDBCol >
            </MDBRow>
            <MDBRow center className="align-items-center" style={{ height: '800px', paddingTop: '200px', paddingBottom: '200px' }}>
                <MDBCol size='8' className="justify-content-end text-end">
                    <MDBCard fluid className='shadow-2-strong' style={{ padding: '2rem', textAlign: "center", }}>
                        <MDBCardBody>
                            <h4>I am a dogfather to a handsome dogo named Samson</h4>
                            <p>Samson is my faithful companion and loves the dog park, ice cream, belly rubs and hiking. We both
                                have birthdays in July and we go nearly everwhere together.
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol >
            </MDBRow>
        </MDBContainer>
    )
}

export default Story;