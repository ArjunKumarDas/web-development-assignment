import React from 'react';
import './NikeBlazer.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from './Header/Header';
import show1 from '../../images/shoe/show1.jpg';
import show2 from '../../images/shoe/show2.png';
import show3 from '../../images/shoe/show3.jpg';
import show4 from '../../images/shoe/show4.jpg';
const NikeBlazer = () => {

    return (
        <div className="header-bg ">
           <Container>
               <Row><Header></Header></Row>
               <Row className="mt-5">  
                   <Col>
                   <h1 className="text-light">NIKE<br/>BLAZER<br/>MID</h1>
                   <h2 className="text-danger mt-5">$260</h2>
                   <Button type="button" className="bg-transparent text-light mt-5 pl-4 pr-5">GEt IT NOW</Button>
                   </Col>
                   <Col>
                       


                   </Col>
                   <Col></Col>
               </Row> 
               <Row className="mt-5 pb-5">
                <Col className="text-light">
                  <h6>01 / 05 </h6>
                  <p>_______________</p>
                </Col>
                <Col className="img-hover">
                   <img className="w-75" src={show1} alt=""/>
                </Col>
                <Col className="">
                   <img className="w-75" src={show2} alt=""/>
                </Col>
                <Col className="">
                   <img className="w-75" src={show3} alt=""/>
                </Col>
                <Col className="">
                   <img className="w-75" src={show4} alt=""/>
                </Col>
            </Row>
           </Container>
           
         
        
        </div>
    );
};

export default NikeBlazer; 