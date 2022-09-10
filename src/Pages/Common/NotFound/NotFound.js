import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className='not'>            
        <h1>Don't worry...Sharlock will find you.</h1>
            <img className='img-fluid' src="https://i.ibb.co/mR83ny2/error-404-page-not-found-6845510.jpg" alt="images" />
            <br />
            <Link to="/">
            <Button className='ps-5 pe-5' variant="success">Back to Home Page?</Button>
            </Link>
        </div>
    );
};

export default NotFound;