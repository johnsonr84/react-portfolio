import React from 'react'
import { Navbar, Container, Nav, Row, Col, NavDropdown } from 'react-bootstrap';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import "./style.css"

const CustomNavbar = (props) => {
    return (
        <MDBNavbar sticky light bgColor='light'>
            <MDBContainer fluid>

                <Col>
                    <Nav>
                        <ul>
                            <li>
                                <MDBNavbarBrand href='#'>Rob C Johnson</MDBNavbarBrand>
                            </li>
                        </ul>
                    </Nav>
                </Col>

                <Col xs={6}>
                    <Nav className="pages justify-content-center p-2">
                        <Nav.Item>
                            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#Story">Story</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                                <Nav.Link href="#Contact">Contact</Nav.Link>
                            </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link href="https://www.visualcv.com/robert-johnson/" target="none">Résumé</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                <Col>
                    <Nav className="justify-content-end pb-2">
                        <NavDropdown title="Menu">
                            <NavDropdown.Item href="#">DevDork</NavDropdown.Item>
                            <NavDropdown.Item href="#Portfolio">Portfolio</NavDropdown.Item>
                            <NavDropdown.Item href="#Story">Story</NavDropdown.Item>
                            <NavDropdown.Item href="#Contact">Contact</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.visualcv.com/robert-johnson/" target="none">Resume</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://github.com/johnsonr84" target="none">Github</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Col>
            </MDBContainer>
        </MDBNavbar>

    )
}

export default CustomNavbar;