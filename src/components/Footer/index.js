import React from 'react'
import { Container, Nav, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import reactPNG from "./../../../src/assets/images/logos/react.png";
import bootstrapPNG from "./../../../src/assets/images/logos/bootstrap.png";
import htmlPNG from "./../../../src/assets/images/logos/html.png";
import cssPNG from "./../../../src/assets/images/logos/css.png";
import jsPNG from "./../../../src/assets/images/logos/js.png";
import nodePNG from "./../../../src/assets/images/logos/node.png";
import gatsbyPNG from "./../../../src/assets/images/logos/gatsby.png";


const Footer = (props) => {
    return (

        <Container >

            <Nav className="justify-content-center m-5">
                <Row className="text-center">
                    <ul>
                        <p className="text-center">Designed by yours truly with</p>
                        <img src={reactPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="react logo" />
                        <img src={bootstrapPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="bootstrap logo" />
                        <img src={htmlPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="html shield logo" />
                        <img src={cssPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="css shield logo" />
                        <img src={jsPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="javascript shield logo" />
                        <img src={gatsbyPNG} width="40" height="45" className="d-inline-block align-top p-1" alt="gatsby shield logo" />
                        <img src={nodePNG} width="40" height="45" className="d-inline-block align-top p-1" alt="node shield logo" />
                    </ul>
                </Row>

            </Nav >

        </Container>

    )
}

export default Footer;