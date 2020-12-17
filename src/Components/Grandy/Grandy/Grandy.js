import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { FaAlignCenter, FaShoppingBag, FaShippingFast } from 'react-icons/fa';
import bottol from '../../../images/grandy/bottol.png';
import smallBottol from '../../../images/grandy/small-bottol.png';
import packet from '../../../images/grandy/packet.png';
import wideBottol from '../../../images/grandy/wide-bottol.png';
import './Grandy.css';
const Grandy = () => {
    return (
        <div className="bg-color mt-5">
            <Container>
                <Row className="mb-5">
                  <Col>
                     <Nav className="mr-auto text-light">
                       <Nav.Link className="text-light" href="#"><FaAlignCenter /></Nav.Link>
                       <Nav.Link className="text-light" href="#"><FaShoppingBag /></Nav.Link>
                       <Nav.Link className="text-light" href="#"><FaShippingFast /></Nav.Link>
                    </Nav>
                     <h1 className="text-light mt-5">GOLD <br/> BREW</h1>
                     <Button className="btn mt-5 bg-info text-dark">COFFE CONCENTRAT</Button>
                     <p className="text-light mt-5">$ 60.00 <span className="pl-3"><FaShoppingBag /></span></p>
                     <p className="text-light">It is a long established fact that a reader will be <br/>distracted by the readable content of a page<br/> when looking at its layout. ,</p>
                  </Col>
                <Col className="right-bg text-center pt-5 pb-5">
                    <img src={bottol} alt=""/>
                </Col>
                </Row>
               
            </Container>
                    <Row className="pt-5 pb-5">
                       <Col md={6} className="bg-special">
                       <Nav className="ml-5 pl-5">
                       <Nav.Link className="text-light" href="#"><img src={smallBottol} alt="" /></Nav.Link>
                       <Nav.Link className="text-light" href="#"><img src={packet} alt="" /></Nav.Link>
                       <Nav.Link className="text-light" href="#"><img src={wideBottol} alt="" /></Nav.Link>
                    </Nav>
                       </Col>
                       <Col md={4} className="ml-5 mt-5">
                          <div className="justify-content-center bg-off p-4 text-center">
                          <h6 className="text-light">15 % OFF</h6>
                          <p className="text-danger-">#endregion</p>
                          </div>
                       </Col>
                    </Row>
        </div>
    );
};

export default Grandy;