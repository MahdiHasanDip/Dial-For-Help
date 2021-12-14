import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='Footer'>
           <hr />
            <Container>
              <Row>
                <Col xs> <h1>Here is footer</h1></Col>
                <Col xs={{ order: 12 }}> <h1>Here is footer</h1></Col>
                <Col xs={{ order: 1 }}> <h1>Here is footer</h1></Col>
              </Row>
          </Container>
        </div>
    );
};

export default Footer;