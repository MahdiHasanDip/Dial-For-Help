import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Driver.css"

const Driver = () => {
    const [services, setServices]= useState([]);
    const [drivers, setDrivers]= useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [])
    console.log(services);

    useEffect(()=>{
        const matched = services.filter(service => service.skill == "Driver");
        setDrivers(matched);
    },[services])
    
     console.log(drivers);

    return (
        <div className='driver'>
           <div className="driver-title">
           <h1 className="pt-3">Available Drivers Nearby</h1>
           {/* <p>You can find drivers here</p> */}
           </div>
                <div className="container driver-section">
                <Container>  
                    <Row>
                        {
                            drivers.map(driver => <Col lg={4}  >
                                <div className="card">
                                    <img className='mx-auto' src={driver.img} alt="" />
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