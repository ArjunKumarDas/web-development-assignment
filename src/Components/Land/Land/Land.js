import React from 'react';
import './Land.css';
import { Carousel, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
// import { Button } from 'bootstrap';
import pic1 from '../../../images/land/pic1.jpg';
import pic2 from '../../../images/land/pic2.jpg';
import { Button } from 'bootstrap';

const Land = () => {
    return (
        <div className="bg-img mt-5">
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
                <div className="btn btn-primary pr-5 pl-5">Explore</div>
             </Col>
             <Col className="mt-5">         
               <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={pic1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={pic2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={pic1} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                    </div>

             </Col>
         </Row>
           </Container>
         
         
        </div>
    );
};

export default Land;