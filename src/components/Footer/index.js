import React from 'react'
import { Container, Nav, Row } from 'react-bootstrap';
import { MDBFooter, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = (props) => {
    return (


        <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
            <MDBContainer fluid className='pt-5 mt-5'>
                <MDBRow className="text-center pt-3">
                    <p className="text-center" style={{ fontSize: '12px' }} >Designed by yours truly with<MDBIcon className='ms-1' fab icon='react' size='lg' /></p>
                </MDBRow>
            </MDBContainer>
            <div className='text-center mb-3' style={{ fontSize: '12px' }} >
                &copy; {new Date().getFullYear()} copyright:{' '}
                <a className='text-dark' href='https://devdork.com/' style={{ textDecoration: 'none', fontSize: '12px' }}>
                    devdork.com
                </a>
            </div>
        </MDBFooter>


    )
}

export default Footer;