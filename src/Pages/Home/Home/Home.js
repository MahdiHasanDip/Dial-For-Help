import React, { useEffect } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Email from '../../Contact/Email';
import Banner from '../Banner/Banner';
import "./Home.css"
import AOS from 'aos';
import Partners from './Partners';

const Home = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])
 
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
                  <div data-aos="fade-right" id="one" className="first">
                    <img className='img-fluid' src="https://i.ibb.co/Yf7rR5N/1.png" alt="" />
                    <h1>Electrician</h1>
                    <Link to="/electrician">                    
                    <button className='Service-btn'>Use Service</button>
                    </Link>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div data-aos="zoom-in-up" id="two" className="first">
                    <img src="https://i.ibb.co/mJqJjJS/2.png" alt="" />
                  <h1>Plumber</h1>
                  <Link to="/plumber">                    
                    <button className='Service-btn'>Use Service</button>
                    </Link>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div data-aos="fade-left" id="three" className="first">
                    <img src="https://i.ibb.co/x5Yj9FQ/3.png" alt="" />
                    <h1>Driver</h1>
                    <Link to="/driver">                    
                    <button className='Service-btn'>Use Service</button>
                    </Link>
                  </div>
                </Col>
              </Row>
          </Container>   


        <div  className="">
          <Container>
            <Row>
          <h1>Contact Us</h1>
              <Col xs={12} lg={5}> 
              <div data-aos="zoom-out-right" className="dial">
              <h3>DIAL FOR HELP</h3>
              <hr />
              <h4>Contact Information:</h4>
              <br /> 
              <ul>
                <li>Address: Khalishpur, Khulna,9000</li>
                <li>Phone: 0166666666</li>
                <li>Email: hellp@dial.com</li>                
              </ul>
              </div></Col>
              <Col data-aos="flip-right"xs={12} lg={7}><Email></Email></Col>
            </Row>
          </Container>
        
        
        </div>   


        <div className="mt-5 ">
          <h1>Who we are</h1>
          <hr />

          <Container>
            <Row>
              <Col data-aos="flip-left" xs={12} lg={6}><img className='img-fluid' src="https://i.ibb.co/yBRY9D8/Untitled-design-3.png" alt="" /></Col>
              <Col xs={12} lg={6}>
              <div data-aos="zoom-out-left" className="container  about-text">
                    <p className=''>We are DIAL FOR HELP. We provide Electricians, Drivers, and Plumber in one call. We provide cost-effective, high-quality human resource services allowing you to focus more on your core business. We collect workers data. Then test their quality. Finally we send them to you. We offer you the best people in the market. </p>
            </div>
              </Col>
            </Row>
          </Container>
          
          
        </div>


          <div data-aos="fade-up" className="">
            <Partners></Partners>
          </div>



        </div>
    );
};

export default Home;