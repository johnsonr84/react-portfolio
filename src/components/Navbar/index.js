import React from 'react'
import { Navbar, Container, Nav, Row, Col, NavDropdown } from 'react-bootstrap';
import "./style.css"

const CustomNavbar = (props) => {
    return (

        <Container className="">
            <Row>
                <Navbar className="navbar">

                    <Col>
                        <Nav>
                            <ul>
                                <li>
                                    <Navbar.Brand href="#">Rob C Johnson</Navbar.Brand>
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

                </Navbar >
            </Row>
        </Container>


    )
}

export default CustomNavbar;