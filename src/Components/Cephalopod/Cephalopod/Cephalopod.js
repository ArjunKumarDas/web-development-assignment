import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Cephalopod.css';
import logo from '../../../images/octopus/logo-octopus.png';
import { FaAlignCenter,  FaSearchengin } from 'react-icons/fa';
const Cephalopod = () => {
    return (
        <div className="bg-body-color">
            <Container className="mt-5">
                    <Row>
                       <Navbar collapseOnSelect expand="lg" variant="dark" className="pt-5">
                            <Navbar.Brand href="#home">< img src={logo} alt="" />CEPHALOPOD</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="ml-auto">
                             <Nav.Link className="text-light pr-5" href="#"><FaSearchengin /></Nav.Link>
                             <Nav.Link className="text-light" href="#"><FaAlignCenter /></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                    </Row>
                    <Row className="mt-5 pt-5 pb-5 mb-5 bg-cephalopod">
                        <Col className="mt-5 pb-5 mb-5">
                            <h1 className="text-light text-center text-decoration pt-5 mt-5 mb-5 pb-5">
                              <span className="letter-o">O</span> 
                             <span className="letter-c"> C</span> 
                              <span className=""> T</span> 
                              <span className=""> O</span> 
                              <span className=""> P</span> 
                              <span className=""> U</span> 
                              <span className=""> S</span> 
                               </h1>
                        </Col>
                    </Row>
                    <Row>
                       <h6 className="text-light text-center mt-3 mb-3">01 _________________________ 03</h6>
                    </Row>
            </Container>
        </div>
    );
};

export default Cephalopod;