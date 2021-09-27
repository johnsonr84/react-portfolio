import React from 'react'
import { Container, Nav, Row } from 'react-bootstrap';
import { MDBFooter, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import reactPNG from "./../../../src/assets/images/logos/react.png";
import bootstrapPNG from "./../../../src/assets/images/logos/bootstrap.png";
import htmlPNG from "./../../../src/assets/images/logos/html.png";
import cssPNG from "./../../../src/assets/images/logos/css.png";
import jsPNG from "./../../../src/assets/images/logos/js.png";
import nodePNG from "./../../../src/assets/images/logos/node.png";
import gatsbyPNG from "./../../../src/assets/images/logos/gatsby.png";


const Footer = (props) => {
    return (

        <Container fluid className="pt-5 pb-2" style={{ backgroundColor: '#FAFAFA' }}>
                <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
                    <MDBContainer className=''>
                        <MDBRow className="text-center pt-5 pb-5">
                            <ul>
                                <p className="text-center">designed by yours truly with</p>
                                <img src={reactPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="react logo" />
                                <img src={bootstrapPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="bootstrap logo" />
                                <img src={htmlPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="html shield logo" />
                                <img src={cssPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="css shield logo" />
                                <img src={jsPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="javascript shield logo" />
                                <img src={gatsbyPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="gatsby shield logo" />
                                <img src={nodePNG} width="40" height="45" className="d-inline-block align-top p-1" alt="node shield logo" />
                            </ul>
                        </MDBRow>
                    </MDBContainer>
                    <div className='text-center mt-5 mb-3' >
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        <a className='text-dark' href='https://devdork.com/' style={{ textDecoration: 'none' }}>
                            devdork.com
                        </a>
                    </div>
                </MDBFooter>
        </Container>

    )
}

export default Footer;