import React from 'react';
import './Header.css';
import logo from '../../../images/shoe/nike-logo.png';
import { Nav, Navbar } from 'react-bootstrap';
import { FaShippingFast } from 'react-icons/fa';

const Header = () => {
    return (
         <div>
               <Navbar collapseOnSelect expand="lg" className="text-light"  variant="dark">
               <Nav>
                  <Nav.Link href="#"> <img className="logo" src={logo} alt=""></img></Nav.Link>
               </Nav>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="mr-auto text-center ml-5 pl-5">
                          <Nav.Link className="ml-5 pl-5" href="#features">MAN</Nav.Link>
                          <Nav.Link className="pl-5" href="#pricing">WOMAN</Nav.Link>
                          <Nav.Link className="pl-5" href="#features">KIDS</Nav.Link>
                          <Nav.Link className="pl-5" href="#pricing">CUSTOMIZES</Nav.Link>
                          <Nav.Link className="pl-5" href="#features">FAVORITES</Nav.Link>
                     </Nav>
                   <Nav>
                   <Nav.Link className="text-dark ship-cart" href="#"><FaShippingFast /></Nav.Link>
                 </Nav>
  </Navbar.Collapse>
</Navbar>
         </div>
    );
};

export default Header;