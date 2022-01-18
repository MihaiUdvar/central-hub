import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CENTRALHUB</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/bookmarks">Bookmarks</Nav.Link>
          <Nav.Link href="/notes">Notes</Nav.Link>
          <Nav.Link href="/lists">Lists</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
