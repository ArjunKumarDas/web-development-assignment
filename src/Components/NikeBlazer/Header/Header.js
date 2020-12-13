import React from 'react';
import './Header.css';
import logo from '../../../images/shoe/nike-logo.png';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
         <div>
               <Navbar collapseOnSelect expand="lg" className="text-light"  variant="dark">
               <Nav>
                  <Nav.Link href="#"> <img className="logo" src={logo} alt=""></img></Nav.Link>
               </Nav>
              
                 {/* <Navbar.Brand href="#home"><img className="logo" src={logo} alt=""></img></Navbar.Brand> */}
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto text-center">
                 <Nav.Link href="#features">MAN</Nav.Link>
                 <Nav.Link href="#pricing">WOMAN</Nav.Link>
                 <Nav.Link href="#features">KIDS</Nav.Link>
                 <Nav.Link href="#pricing">CUSTOMIZES</Nav.Link>
                 <Nav.Link href="#features">FAVORITES</Nav.Link>
            </Nav>
          <Nav>
             <Nav.Link href="#deets">More</Nav.Link>
        </Nav>
  </Navbar.Collapse>
</Navbar>
         </div>
    );
};

export default Header;