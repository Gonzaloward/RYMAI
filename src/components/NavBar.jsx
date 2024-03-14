import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">RYMAI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Cascos</Nav.Link>
            <Nav.Link href="#features">Jets</Nav.Link>
            <Nav.Link href="#pricing">Piletas</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
};