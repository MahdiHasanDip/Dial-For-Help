import React, { useState } from 'react';
import "./Login.css"
import UseFirebase from '../Hooks/UseFirebase/UseFirebase';
import "./Login.css"
import { Link } from 'react-router-dom';
const Login = () => {
    const {signInWithGoogle,user,logOut}= UseFirebase();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = (e)=>{
        
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    
    return (
        <div className="Login">
            <h1 className='mt-5'>{user?.email}</h1>
            <form onClick={handleLogin}>
                <input onBlur={handleEmail} type="email" />
                <input onBlur={handlePassword} type="password" />
                <input type="submit" value="Submit" />
            </form>
            <button onClick={signInWithGoogle}>
                Login
            </button>
            <button onClick={logOut}>
                Logout
            </button>
            <Link to="/registration" >Reg</Link>
        </div>
    );
};

export default Login;