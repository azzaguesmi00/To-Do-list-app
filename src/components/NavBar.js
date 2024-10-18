import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Everyday is a blessing</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">To-Do List</Nav.Link>
          <Nav.Link as={Link} to="/add">Add Todo</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
