import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Planets.css';

const Planets = () => {
    return (
    <div className="planets mt-5">
          <Container>
            <Navbar collapseOnSelect expand="lg"  variant="dark">
                <Navbar.Brand href="#home">THE PLANETS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
            <Nav.Link href="#">Project</Nav.Link>
            <Nav.Link href="#">Mercury</Nav.Link>
            <Nav.Link href="#">Venus</Nav.Link>
            <Nav.Link href="#">Earth</Nav.Link>
            <Nav.Link href="#">Mars</Nav.Link>
            <Nav.Link href="#">Jupiter</Nav.Link>
            <Nav.Link href="#">Saturn</Nav.Link>
            <Nav.Link href="#">Utanus</Nav.Link>
            <Nav.Link href="#">Naptune</Nav.Link>
       </Nav>
    <Nav>
      <Nav.Link href="#">FB</Nav.Link>
      <Nav.Link href="#">IN</Nav.Link>
      <Nav.Link href="#">FK.</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          </Container>
    </div>
    );
};

export default Planets;