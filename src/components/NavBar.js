// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="light" variant="light" expand="lg" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="font-weight-bold">Drug Query App</BootstrapNavbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/upload" className="mx-2">File Upload</Nav.Link>
          <Nav.Link as={Link} to="/" className="mx-2">Chat</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
