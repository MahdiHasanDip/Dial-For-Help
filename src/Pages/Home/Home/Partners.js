import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Home.css"

const Partners = () => {
    return (
        <div className='partners'>
            <h3>Our <span className='green'>
                Partners </span></h3>

            <Container>
                <Row>
                <Col className='m-2' sm={6} lg={2}><img className='img-fluid' src="https://i.ibb.co/61K94KL/1.png" alt="" /></Col>
                    <Col className='m-2' sm={6} lg={2}><img className='img-fluid' src="https://i.ibb.co/hWSwJGm/2.png" alt="" /></Col>
                    
                    <Col className='m-2' sm={6} lg={2}><img className='img-fluid' src="https://i.ibb.co/xsk1M9s/4.png" alt="" /></Col>
                    
                    <Col className='m-2' sm={6} lg={2}><img className='img-fluid' src="https://i.ibb.co/2cfZH6G/6.png" alt="" /></Col>
                    <Col className='m-2' sm={6} lg={2}><img className='img-fluid' src="https://i.ibb.co/mBnZQyx/7.png" alt="" /></Col>
                    <Col className='m-2' sm={6} lg={2}><img className='img-fluid' src="https://i.ibb.co/B3HKxqZ/8.png" alt="" /></Col>
                    <Col className='m-2' sm={6} lg={2}><img className='img-fluid' src="https://i.ibb.co/xSQfmZw/9.png" alt="" /></Col>
                    <Col className='m-2' sm={6} lg={2}><img className='img-fluid' src="https://i.ibb.co/ZmFtLfm/10.png" alt="" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Partners;