import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Banner/>
              <div className="container">
                  <br /><br /><br /><br />                
                 
              </div>
            
            <Container>
                <div className="title">
                <h1>Our Services</h1>
                <img src="https://i.ibb.co/pLq611T/Minimalist-Vintage-Jeep-Offroad-Adventure-Car-Logo.png" alt="" />
                </div>
              <Row>
                <Col xs={12} md={6} lg={4}>
                  <div  id="one" className="first">
                    <img className='img-fluid' src="https://i.ibb.co/Yf7rR5N/1.png" alt="" />
                    <h1>Electrician</h1>
                    <Link to="/electrician">                    
                    <button className='Service-btn'>Use Service</button>
                    </Link>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div id="two" className="first">
                    <img src="https://i.ibb.co/mJqJjJS/2.png" alt="" />
                  <h1>Plumber</h1>
                  <Link to="/plumber">                    
                    <button className='Service-btn'>Use Service</button>
                    </Link>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div id="three" className="first">
                    <img src="https://i.ibb.co/x5Yj9FQ/3.png" alt="" />
                    <h1>Driver</h1>
                    <Link to="/driver">                    
                    <button className='Service-btn'>Use Service</button>
                    </Link>
                  </div>
                </Col>
              </Row>
          </Container>   
        </div>
    );
};

export default Home;