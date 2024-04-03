import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">RYMAI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/cascos" as={NavLink}>Cascos</Nav.Link>
            <Nav.Link to="/Category/Jets" as={NavLink}>Jets</Nav.Link>
            <Nav.Link to="/Category/piletas"as={NavLink}>Piletas</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
};