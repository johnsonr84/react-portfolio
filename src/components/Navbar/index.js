import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./style.css"

const CustomNavbar = (props) => {
    return (
        <Navbar className="justify-content-center text-center">
            <Navbar.Brand href="#">DevDork</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#Story">Story</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                    <Nav.Link href="#Resume">Resume</Nav.Link>
                    <NavDropdown title="Menu" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#">DevDork</NavDropdown.Item>
                        <NavDropdown.Item href="#Portfolio">Portfolio</NavDropdown.Item>
                        <NavDropdown.Item href="#Story">Story</NavDropdown.Item>
                        <NavDropdown.Item href="#Contact">Contact</NavDropdown.Item>
                        <NavDropdown.Item href="#Resume">Resume</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Github</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavbar;