import React from 'react';
import './Land.css';
import { Carousel, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
// import { Button } from 'bootstrap';
import pic1 from '../../../images/land/pic1.jpg';
import pic2 from '../../../images/land/pic2.jpg';
// import pic3 from '../../../images/land/pic3.jpg';


const Land = () => {
    return (
        <div className="bg-img">
          <Container>
            <Row>
              <Navbar className="mt-4 bg-transparent" expand="lg" >
                   <Navbar.Brand href="#home">A____Land</Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto pr-5">
                    <Nav.Link  className="pr-5" href="#">News</Nav.Link>
                    <Nav.Link className="pr-5" href="#">Favorite</Nav.Link>
                    <Nav.Link className="pr-5" href="#">Contact</Nav.Link>
              </Nav>
                 <Form inline>
                     <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
                  </Form>
               </Navbar.Collapse>
              </Navbar>
              </Row>
              <Row className="d-flex justify-content-center mt-5 pb-5 pt-5">
             <Col className="mt-5 text-light">
                 <h1>Africa</h1>
                 <p>It is a long established fact that a reader will be distracted <br/>by the readable content of a page when looking at its layout.</p>
                
             </Col>
             <Col className="mt-5">
             <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-75"
                        src={pic1}
                        alt="First slide"
                        />
                          
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-50"
                            src={pic2}
                            alt="Third slide"
                            />

                       
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-50"
                            src={pic1}
                            alt="Third slide"
                            />

                    
                        </Carousel.Item>
                        </Carousel>
             </Col>
         </Row>
           </Container>
         
         
        </div>
    );
};

export default Land;