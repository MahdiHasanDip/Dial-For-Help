import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>
            <div className="about ">
                <img className="img-fluid" src="https://i.ibb.co/Bt10kdc/dial-for-help-7.png" alt="" />
            </div>

            <div className=" container ">
                <h1><span className='green'>
                About </span> US</h1>
                <hr />

                <div className="container about-text">
                    <p>We are DIAL FOR HELP. We provide Electricians, Drivers, and Plumber in one call. We provide cost-effective, high-quality human resource services allowing you to focus more on your core business. We collect workers data. Then test their quality. Finally we send them to you. We offer you the best people in the market. </p>
                </div>
            </div>
        </div>
    );
};

export default About;
