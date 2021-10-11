import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';

import "./style.css"


export default function CustomNavbar() {
    const [showNavRight, setShowNavRight] = useState(false);

    return (
        <MDBNavbar sticky expand='md' light bgColor='white' style={{ boxShadow: 'none' }} >
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' className='me-2 me-lg-0'>DevDork</MDBNavbarBrand>

                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavRight(!showNavRight)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavRight} >
                    <MDBNavbarNav right fullWidth={false} className='mr-auto'>
                        <MDBNavbarItem className='me-2 me-lg-0'>
                            <MDBNavbarLink href='#Portfolio'>Portfolio</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='me-2 me-lg-0'>
                            <MDBNavbarLink href='#Story'>Story</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='me-2 me-lg-0'>
                            <MDBNavbarLink href='#Contact'>Contact</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='me-2 me-lg-0'>
                            <MDBNavbarLink href="https://www.visualcv.com/robert-johnson/" target="blank">Résumé</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='me-2 me-lg-0'>
                            <MDBNavbarLink href='https://github.com/johnsonr84' target='blank'>
                                <MDBIcon className='ms-1' fab icon='github' size='lg' />
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='me-2 me-lg-0'>
                            <MDBNavbarLink href='https://www.linkedin.com/in/robertjohnson1984/' target='blank'>
                                <MDBIcon className='ms-1' fab icon='linkedin-in' size='lg' />
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>

    )
}