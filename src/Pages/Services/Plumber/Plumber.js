import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Plumber.css"

const Plumber = () => {
    const [services, setServices]= useState([]);
    const [plumbers, setPlumbers]= useState([]);
    useEffect(() => {
        fetch('https://intense-crag-69313.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [])
    console.log(services);

    useEffect(()=>{
        const matched = services.filter(service => service.skill == "Plumber");
        setPlumbers(matched);
    },[services])
    
     console.log(plumbers);
    return (
        <div className='plumber'>
        <div className="plumber-title">
            <div >
                <img className="img-fluid" src="https://i.ibb.co/rpcQq6h/Dial-For-help-4.png" alt="" />
            </div>
        <h1 className="pt-3">YOU CAN FIND PLUMBERS HERE</h1>
        {/* <p>You can find plumbers here</p> */}
        </div>
             <div className="container plumber-section">
             <Container>  
                 <Row>
                     {
                         plumbers.map(plumber => <Col lg={4}  >
                             <div className="card">
                                 <img className='mx-auto' src={plumber.img} alt="" />
                                 <h4><b>{plumber.name}</b> </h4>
                                 <b>{plumber.skill}</b>
                                 <ul>
                                     <li>Location: {plumber.location} </li>
                                     <li>Charge: {plumber.price} TAKA</li>
                                     <li>Phone: {plumber.Mobile}</li>
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

export default Plumber;