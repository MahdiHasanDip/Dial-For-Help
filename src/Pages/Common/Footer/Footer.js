import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='Footer'>
           <hr />
            <Container>
              <Row>
                <Col xs> <h1 className='mt-5'>DIAL FOR HELP</h1></Col>                
                <Col xs> Services: <hr />
                <ul>
                  <li>
                <Link style={{paddingLeft: 13, textDecoration: 'none', color: "whitesmoke"}} to="/electrician"> Electrician
                  </Link>
                  </li>
                  <li>
                <Link style={{paddingLeft: 13, textDecoration: 'none', color: "whitesmoke"}} to="/plumber"> Plumber
                  </Link>
                  </li>
                  <li>
                <Link style={{paddingLeft: 13, textDecoration: 'none', color: "whitesmoke"}} to="/driver"> Driver
                  </Link>
                  </li>
                  </ul>
                </Col>                
                <Col xs={{ order: 1 }}> <h4>Quick Access</h4>
                <hr />
                <ul>
                  <li>
                  <Link style={{paddingLeft: 13, textDecoration: 'none', color: "whitesmoke"}} to="/"> Home 
                  </Link>
                  </li>
                  <li>
                  <Link style={{paddingLeft: 13, textDecoration: 'none', color: "whitesmoke"}} to="/services"> All Services
                  </Link>
                  </li>
                  <li>
                  <Link style={{paddingLeft: 13, textDecoration: 'none', color: "whitesmoke"}} to="/about"> About Us
                  </Link>
                  </li>
                  <li>
                  <Link style={{paddingLeft: 13, textDecoration: 'none', color: "whitesmoke"}} to="/contact"> Contact us
                  </Link>
                  </li>
                  <li>

                  </li>
                </ul>
                </Col>
              </Row>
          </Container>
        </div>
    );
};

export default Footer;