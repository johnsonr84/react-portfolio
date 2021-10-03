import React from 'react'
import { Container, Nav, Row } from 'react-bootstrap';
import { MDBFooter, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = (props) => {
    return (

        <Container fluid className="pt-5 pb-2 mt-5" style={{ boxShadow: '20px 20px 20px 20px rgb(0 0 0 / 5%)' }}>
                <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
                    <MDBContainer className=''>
                        <MDBRow className="text-center pt-3">
                            <ul>
                                <p className="text-center" style={{ fontSize: '12px'}} >Designed by yours truly with<MDBIcon className='ms-1' fab icon='react' size='lg' /></p>
                                {/* <MDBIcon className='ms-1' fab icon='react' size='2x' />
                                <MDBIcon className='ms-1' fab icon='js' size='2x' /> */}
                                {/* <MDBIcon className='ms-1' fab icon='bootstrap' size='lg' /> */}
                                {/* <MDBIcon className='ms-1' fab icon='mdb' size='2x' />
                                <MDBIcon className='ms-1' fab icon='html5' size='2x' />
                                <MDBIcon className='ms-1' fab icon='css3-alt' size='2x' />
                                <MDBIcon className='ms-1' fab icon='apple' size='2x' /> */}
                                {/* <MDBIcon className='ms-1' fab icon='npm' size='lg' />
                                <MDBIcon className='ms-1' fab icon='git' size='lg' />
                                <MDBIcon className='ms-1' fab icon='node-js' size='lg' /> */}
                            </ul>
                        </MDBRow>
                    </MDBContainer>
                    <div className='text-center  mb-3' style={{ fontSize: '12px'}} >
                        &copy; {new Date().getFullYear()} copyright:{' '}
                        <a className='text-dark' href='https://devdork.com/' style={{ textDecoration: 'none', fontSize: '12px'}}>
                            devdork.com
                        </a>
                    </div>
                </MDBFooter>
        </Container>

    )
}

export default Footer;