import React from 'react'
import { Navbar, Container, Nav, Row, Col, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab, github } from '@fortawesome/free-brands-svg-icons'
// import "./style.css"

const Footer = (props) => {
    return (

        <Container className="">
            <Nav >
                <Row className="justify-content-center p-2">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/robertjohnson1984/" target="blank" style={{ textDecoration: 'none', listStyleType: 'none'}}>LinkedIn</a>
                        </li>
                        <li>
                        <a class="fab fa-git-square" href="https://github.com/johnsonr84" target="blank"  style={{ textDecoration: 'none', listStyleType: 'none'}}>Github</a>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={['fab', 'github']} />
                        </li>
                    </ul>
                </Row>
{/* 
                <Row className="justify-content-center p-2">
                    <ul>
                        <li>
                            <Navbar.Brand href="#">LinkedIN</Navbar.Brand>
                        </li>
                        <li>

                        </li>
                    </ul>
                </Row> */}
            </Nav >

        </Container>

    )
}

export default Footer;