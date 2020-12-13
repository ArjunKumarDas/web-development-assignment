import React from 'react';
import './NikeBlazer.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from './Header/Header';

const NikeBlazer = () => {
    return (
        <div className="header">
           <Container>
               <Row><Header></Header></Row>
               <Row className="mt-5">  
                   <Col>
                   <h1 className="text-light">NIKE<br/>BLAZER<br/>MID</h1>
                   <h2 className="text-danger mt-5">$260</h2>
                   <Button type="button" className="bg-transparent text-light mt-5 pl-4 pr-5">GEt IT NOW</Button>
                   </Col>
                   <Col></Col>
                   <Col></Col>
               </Row> 
               <Row className="mt-5 pb-5">
                  <Col md={3}><h1>bg-transparent text-light</h1></Col>
                  <Col md={3}><h1>bg-transparent text-light</h1></Col>
                  <Col md={3}><h1>bg-transparent text-light</h1></Col>
                  <Col md={3}><h1>bg-transparent text-light</h1></Col>
              </Row>
           </Container>
        
        </div>
    );
};

export default NikeBlazer;