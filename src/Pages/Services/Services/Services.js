import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Driver from '../Driver/Driver';
import Electrician from '../Electrician/Electrician';
import Plumber from '../Plumber/Plumber';
import "./Services.css"
import 'aos/dist/aos.css';
import AOS from 'aos';

const Services = () => {
    const [services, setServices]= useState([]);
    const [drivers, setDrivers]= useState([]);
    const [plumbers, setPlumbers]= useState([]);
    const [electricians, setElectricians]= useState([]);

    useEffect(()=>{
        AOS.init({duration: 1000});
      },[])

    useEffect(() => {
        fetch('https://intense-crag-69313.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [])

    // plumber 
    useEffect(()=>{
        const matched = services.filter(service => service.skill == "Plumber");
        setPlumbers(matched);
    },[services])

    // dRIVER 

    useEffect(()=>{
        const matched = services.filter(service => service.skill == "Driver");
        setDrivers(matched);
    },[services])
    
    

    //  ELECTRICIAN 
    useEffect(()=>{
        const matched = services.filter(service => service.skill == "Electrician");
        setElectricians(matched);
    },[services])

    // slice 
    const newElectricians = electricians.slice(0, 3);
    const newPlumbers = plumbers.slice(0, 3);
    const newDrivers = drivers.slice(0, 3);
  


    return (
        <div className='services'> 

                <div className="services-header">
                    <img className='img-fluid' src="https://i.ibb.co/WDHDFMS/Dial-For-help-1.png" alt="" />
                    <br /> <br /> <br />              
                </div>

                <div className="container">
                    <div className="img mx-auto">
                    <img data-aos="fade-right" className='img-fluid' src="https://i.ibb.co/Y019rT5/Driver-2.png" alt="" />
                    <br /><br /><br /><br /><br />
                    </div>
                    <Container>  
                         <Row>
                    {
                        newElectricians.map(electrician => <Col data-aos="flip-left" lg={4}  >
                            <div className="card">
                                <img className='mx-auto' src={electrician?.img} alt="" />
                                <h4><b>{electrician?.name}</b> </h4>
                                <b>{electrician?.skill}</b>
                                <ul>
                                    <li>Location: {electrician?.location} </li>
                                    <li>Charge: {electrician?.price} TAKA</li>
                                    <li>Phone: {electrician?.Mobile}</li>
                                </ul>
                            </div>
                        </Col> )
                    }
                        </Row>
                    </Container> 
                             <Link to="/electrician"><button className='find-btn'>Mind More</button></Link>

                </div>
                <div className="container">
                    <div className="img mx-auto">
                    <img data-aos="fade-right" className='img-fluid' src="https://i.ibb.co/Kq6kwMX/d-1.png" alt="" />                    
                    <br /><br /><br /><br /><br />
                    </div>
                    <Container>  
                         <Row>
                    {
                        newPlumbers.map(plumber => <Col data-aos="flip-left" lg={4}  >
                            <div className="card">
                                <img className='mx-auto' src={plumber?.img} alt="" />
                                <h4><b>{plumber?.name}</b> </h4>
                                <b>{plumber?.skill}</b>
                                <ul>
                                    <li>Location: {plumber?.location} </li>
                                    <li>Charge: {plumber?.price} TAKA</li>
                                    <li>Phone: {plumber?.Mobile}</li>
                                </ul>
                            </div>
                        </Col> )
                    }
                        </Row>
                    </Container> 
                    <Link to="/plumber"><button className='find-btn'>Mind More</button></Link>
                </div>
                <div className="container">
                    <div className="img mx-auto">
                    <img data-aos="fade-right" className='img-fluid' src="https://i.ibb.co/DpFJHvn/Driverssssss.png" alt="" />                    
                    <br /><br /><br /><br /><br /> 
                    </div>
                    <Container>  
                         <Row>
                    {
                        newDrivers.map(driver => <Col data-aos="flip-left" lg={4}  >
                            <div className="card">
                                <img className='mx-auto' src={driver?.img} alt="" />
                                <h4><b>{driver?.name}</b> </h4>
                                <b>{driver?.skill}</b>
                                <ul>
                                    <li>Location: {driver?.location} </li>
                                    <li>Charge: {driver?.price} TAKA</li>
                                    <li>Phone: {driver?.Mobile}</li>
                                </ul>
                            </div>
                        </Col> )
                    }
                        </Row>
                    </Container> 
                    <Link to="/driver"><button className='find-btn'>Mind More</button></Link>
                </div>                
        </div>
    );
};

export default Services;