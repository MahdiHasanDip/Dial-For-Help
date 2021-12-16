import React, { useState } from 'react';
import "./Login.css"
import UseFirebase from '../Hooks/UseFirebase/UseFirebase';
import "./Login.css"
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
const Login = () => {
    const {signInWithGoogle,user,logOut,login}= UseFirebase();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = (e)=>{
        login(email,password);
        e.preventDefault();
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
        
    }

    
    return (
        <div className="Login"> 
            <div className="container login-form">
                <Container fluid>
                    <Row>
                        <Col xs={12} lg={6}>
                            <div className="">
                                <h1 className='mt-5'>{user?.email}</h1>
                                    <form className='Form' onClick={handleLogin}>
                                        <input onBlur={handleEmail} type="email"  placeholder='Email'  />
                                        <br />
                                        <input onBlur={handlePassword} type="password" placeholder='Password' />
                                        <br />
                                        <input id="submit" type="submit" value="Submit" />
                                    </form>

                                    <br />
                                    
                                <button className='google-login' onClick={signInWithGoogle}>
                                    Login with Goolgle
                                </button>
                                <button onClick={logOut}link>Log</button>
                                <p>{user.email}</p>
                                
                            </div>
                        </Col>

                        <Col xs={12} lg={6} className="Reg-section">
                            <div >
                                <h1>Welcome to login</h1>
                                <h4>Do you need an account?</h4>
                                <Link to="/registration" ><button className='link-btn'>Sign Up</button></Link>
                            </div>
                        </Col>
                    </Row>
                 </Container>
            </div>                              
        </div>
    );
};

export default Login;