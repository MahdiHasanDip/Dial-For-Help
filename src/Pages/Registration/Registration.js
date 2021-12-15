import React, { useState } from 'react';
import UseFirebase from '../Hooks/UseFirebase/UseFirebase';
import "./Registration.css"

const Registration = () => {
    const {registration}= UseFirebase(); 
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


const handleEmail = (e) =>{
    setEmail(e.target.value);
}
const handlePassword = (e) =>{
    setPassword(e.target.value);
}
const handleReg = (e) => {
    e.preventDefault();
    registration(email, password);
}


    return (
        <div className='reg'>
            <form onClick={handleReg}>
                <input onBlur={handleEmail} type="email" />
                <input onBlur={handlePassword} type="password" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Registration;