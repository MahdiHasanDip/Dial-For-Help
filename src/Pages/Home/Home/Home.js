import React, { useEffect } from 'react';
import {  Col, Container, Row, Spinner } from 'react-bootstrap';
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
                <h1>Our <span className='green'>
                Services </span> </h1>
                <img src="https://i.ibb.co/pLq611T/Minimalist-Vintage-Jeep-Offroad-Adventure-Car-Logo.png" alt="images" />
                </div>
              <Row>
                <Col xs={12} md={6} lg={4}>
                  <div data-aos="fade-right" id="one" className="first">
                    <img className='img-fluid' src="https://i.ibb.co/Yf7rR5N/1.png" alt="images" />
                    <h1>Electrician</h1>
                    <Link to="/electrician">                    
                    <button className='Service-btn'>Use Service</button>
                    </Link>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div data-aos="zoom-in-up" id="two" className="first">
                    <img src="https://i.ibb.co/mJqJjJS/2.png" alt="images" />
                  <h1>Plumber</h1>
                  <Link to="/plumber">                    
                    <button className='Service-btn'>Use Service</button>
                    </Link>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div data-aos="fade-left" id="three" className="first">
                    <img src="https://i.ibb.co/x5Yj9FQ/3.png" alt="images" />
                    <h1>Driver</h1>
                    <Link to="/driver">                    
                    <button className='Service-btn'>Use Service</button>
                    </Link>
                  </div>
                </Col>
              </Row>
          </Container>   


        <div  className="contact-home">
          <Container>
            <Row>
              
          <h1><span className='green'>
                Contact </span> Us</h1>
              <hr />
              <Col xs={12} lg={5}> 
              <div data-aos="zoom-out-right" className="dial">
              <h3>DIAL FOR HELP</h3>
              <hr />
              <h4>Contact <span className='green'>
                Information </span></h4>
              <br /> 
              <ul>
                <li>Address: Khalishpur, Khulna,9000</li>
                <li>Phone: 0166666666</li>
                <li>Email: hellp@dial.com</li>                
              </ul>
              </div></Col>
              <Col className='email-home' data-aos="flip-right"xs={12} lg={7}><Email></Email></Col>
            </Row>
          </Container>
        
        
        </div>   


        <div className="mt-5 ">
          <h1>Who <span className='green'>
                We Are </span></h1>
          <hr />


          <div data-aos="flip-left" className="">
            <img className='img-fluid' src="https://i.ibb.co/VtHkXMQ/dial-for-help-8-1.png" alt="images" />
          </div>
          
          
        </div>


          <div data-aos="fade-up" className="">
            <Partners></Partners>
          </div>

         

        </div>
    );
};

export default Home;