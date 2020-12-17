import React from 'react';
import './ArtIcoke.css';
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import fruit from '../../../images/green/greenfruit.png';
const ArtIcoke = () => {
    return (
        <div className="color-bg mt-5">
             <Container>
                    <Navbar expand="lg" className="pt-5">
                        <Navbar.Brand href="#home" className="text-light mr-5 pr-5">ART<span>ICOKE</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto ml-5 ">
                            <Nav.Link href="#" className="text-light ml-5 pl-5">Home</Nav.Link>
                            <Nav.Link href="#" className="text-light ml-5 pl-5">Where to find</Nav.Link>
                            <Nav.Link href="#" className="text-light ml-5 pl-5">Contact</Nav.Link>
                            </Nav>
                            <NavDropdown inline title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                    </Navbar>
                    <Row className="mt-5">
                        <Col>
                            <h2 className="text-light ml-5">01 <small>/05</small>_____________________</h2>
                            <h1  className="text-light mt-5">A HEALTHY <br/> EXPLOSION</h1>
                            <p className="text-light mt-2">It is a long established fact that a reader will be distracted<br/> by the readable content of a page when looking at its layout.</p>
                            <Button className="bg-transparent text-light pl-4 pr-4">Read More</Button>
                            <h6 className="text-light mt-5">01 ______________ 02    03  04  05</h6>
                        </Col>
                        <Col><img src={fruit} alt=""/></Col>
                    </Row>
                    <Row><h1 className="text-light text-center pb-5">G R E E N A D E !</h1></Row>
             </Container>
        </div>
    );
};

export default ArtIcoke;