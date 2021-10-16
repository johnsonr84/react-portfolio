import React from 'react';
import { MDBContainer, MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import tiyPNG from "../../../src/assets/images/certifications/tiyCert.png";
import uofuPNG from "../../../src/assets/images/certifications/uofuCert.png";

const Certifications = () => {
  return (
    <MDBContainer>
    <MDBRow evenly className='d-flex justify-content-center'>
      <MDBCol lg={5}>
        <MDBCard
          className='card-image p-4 m-2'
          style={{
            backgroundImage:
            `url(${uofuPNG})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
                <MDBIcon icon='chart-pie' /> Marketing
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                officia accusamus minus error nisi architecto nulla ipsum
                dignissimos. Odit sed qui, dolorum!
              </p>
              <MDBBtn color='pink'>
                <MDBIcon icon='clone left' /> View project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol lg={5}>
        <MDBCard
          className='card-image p-4 m-2'
          style={{
            backgroundImage:
            `url(${tiyPNG})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
            <div>
              <h5 className='orange-text'>
                <MDBIcon icon='desktop' /> Software
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                officia accusamus minus error nisi architecto nulla ipsum
                dignissimos. Odit sed qui, dolorum!
              </p>
              <MDBBtn color='deep-orange'>
                <MDBIcon icon='clone left' /> View project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
  )
}

export default Certifications;