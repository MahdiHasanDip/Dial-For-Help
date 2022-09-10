import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Driver.css"

const Driver = () => {
    const [services, setServices]= useState([]);
    const [drivers, setDrivers]= useState([]);

    // Load data 
    useEffect(() => {
        fetch('https://intense-crag-69313.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [])
    

    useEffect(()=>{
        const matched = services.filter(service => service.skill == "Driver");
        setDrivers(matched);
    },[services])
    
    

    return (
        <div className='driver'>
           <div className="driver-title">
                <img className="img-fluid" src="https://i.ibb.co/cYyCMvJ/Dial-For-help-5.png" alt="images" />
                <h1>YOU CAN FIND DRIVERS HERE</h1>
                <hr />
           </div>
           
            <div className="container driver-section">
                <Container>  
                    <Row>
                        {
                            drivers.map(driver => <Col lg={4}  >
                                <div className="card">
                                    <img className='mx-auto' src={driver.img} alt="images" />
                                    <h4><b>{driver.name}</b> </h4>
                                    <b>{driver.skill}</b>
                                    <ul>
                                        <li>Location: {driver.location} </li>
                                        <li>Charge: {driver.price} TAKA</li>
                                        <li>Phone: {driver.Mobile}</li>
                                    </ul>
                                </div>
                            </Col> )
                        }
                    </Row>
                </Container>

                </div>
        </div>
    );
};

export default Driver;