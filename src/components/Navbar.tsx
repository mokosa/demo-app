import * as React from 'react';
import { FunctionComponent } from "react";

import { Container, Nav, Navbar as BtNavbar } from 'react-bootstrap';

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return <BtNavbar bg="dark" variant="dark">
        <Container>
            <BtNavbar.Brand href="#home">Navbar</BtNavbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </BtNavbar>;
}

export default Navbar;