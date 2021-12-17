import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import UseFirebase from '../Hooks/UseFirebase/UseFirebase';
import "./Registration.css"

const Registration = () => {
    const {registration,error}= UseFirebase(); 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigation = useNavigate();

const handleEmail = (e) =>{
    setEmail(e.target.value);
}
const handlePassword = (e) =>{
    setPassword(e.target.value);
}
const handleReg = (e) => {
    registration(email, password,navigation);
    e.preventDefault();
}
console.log(error);



    return (
        <div className="Login"> 
        <div className="container login-form">
<Container fluid>
<Row>
    <Col xs={12} lg={6}>
        <div className=""> 
        <h3>Registration Here</h3>    
        <hr />                          
        <form className='Form' onSubmit={handleReg}>
                <input onBlur={handleEmail} type="email" placeholder='Your Email'/><br />
                <input onBlur={handlePassword} type="password" placeholder='Your Password' /><br />
                <input id="submit" type="submit" value="Submit" />
            </form>
               
            <br /><br /><br />
            
          
            
        </div>
    </Col>

    <Col xs={12} lg={6} className="Reg-section">
        <div >
            <h1>Welcome to Registration</h1>
            <h4>Have an account?</h4>
            <Link to="/login" ><button className='link-btn'>Login</button></Link>
        </div>
    </Col>
</Row>
</Container>
</div>                              
 </div>
    );
};

export default Registration;
