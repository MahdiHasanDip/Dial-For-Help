import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar} from 'react-bootstrap';
import {  Link} from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase/UseFirebase';

const Header = () => {
    const {user,logOut,admin} = UseFirebase();
    return (
        <div className="header">
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
            <div className="logo">                   
                <h3 >DIAL FOR HELP</h3>
            </div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">     
      
    </Nav>
    <Nav>
        
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/services">Services</Nav.Link>
        
           {
               admin&&<Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
           }
        
        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
        
       {
          user?.email 
          ?<button className='btn btn-danger' onClick={logOut}> Log Out</button> 
            
          :
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            

        }
   
       
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;