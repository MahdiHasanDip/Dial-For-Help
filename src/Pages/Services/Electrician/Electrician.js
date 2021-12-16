import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Electrician = () => {
    const [services, setServices]= useState([]);
    const [electricians, setElectricians]= useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [])   

 useEffect(()=>{
        const matched = services.filter(service => service.skill == "Electrician");
        setElectricians(matched);
    },[services])   
    
     
    return (
        <div className='driver'>
           <div className="driver-title">
               <div >
                   <img className="img-fluid" src="https://i.ibb.co/ssCYMZp/Dial-For-help-3.png" alt="" />
               </div>
           <h1 className="pt-3">YOU CAN FIND ELECTRICIANS HERE</h1>
           {/* <p>You can find drivers here</p> */}
           </div>
                <div className="container driver-section">
                <Container>  
                    <Row>
                        {
                            electricians.map(electrician => <Col lg={4}  >
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

                </div>
        </div>
    );
};

export default Electrician;