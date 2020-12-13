import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
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
           <Row>
              <h2 className="text-light mt-5 pt-5">A travel guide <br/>to the planet</h2>
           </Row>
           <Row>
             <Col md={4} className="ml-5">
               <h1 className="text-warning">Venus</h1>
               <p className="text-light">
                 There are many variations of passages of Lorem Ipsum 
                 available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle</p>
                 <Button className="btn mt-4 p-3 mb-2 bg-transparent text-warning">More Detailes</Button>
             </Col>
           </Row>
           <Row className="mt-5">
               <Col className="text-light">
                    <h6>+ -------------------------------------</h6>
                       <h4 className="pt-4">The diameter <br/>of the venus is</h4>
                   <h1 className="pt-4 pb-5">12,103.6 <small>km</small></h1>
               </Col>
               <Col className="text-light">
                    <h6>+ -------------------------------------</h6>
                       <h4 className="pt-4">Rotation  <br/>period</h4>
                   <h1 className="pt-4 pb-5">243  <small>Earth days</small></h1>
               </Col>
               <Col className="text-light">
                    <h6>+ -------------------------------------</h6>
                       <h4 className="pt-4">Meansurface <br/> temperature of </h4>
                      <h1 className="pt-4">775k</h1>
                      <h6>762 C: 863 F</h6>
               </Col>
               <Col className="text-light">
                    <h6>+ --------------------------------- +</h6>
                       <h4 className="pt-4">Venus orbits the Sun at <br/>an average distance of</h4>
                       <h1 className="pt-4">0.72 AU</h1>
                       <h6>108 million km; million mi</h6>
               </Col>
           </Row>
          </Container>
    </div>
    );
};

export default Planets;