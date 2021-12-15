import React, { useState } from 'react';
import "./Admin.css"

const Admin = () => {
    const [email,setEmail] = useState('');
    const [adminAdded, setAdminAdded] = useState(false);

    const handleSubmit = e =>{ 
        const user = {email} ;      
        fetch('http://localhost:5000/users/admin',{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)              
                         
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
            console.log(data)
            setAdminAdded(true);
            setEmail("")
            }
        })

        e.preventDefault();
    };

    const handleEmail = e =>{
        setEmail(e.target.value);
        console.log(email);
        };
    return (
        <div className='mt-5'>
             <div>
            <h1>Make An Admin Here</h1>
            <form onSubmit={handleSubmit} >
            <input className="input-field" onChange={handleEmail} type="Email" placeholder="Email" />
            <input className="btn btn-outline-success submit-btn" type="submit" value="Submit" />
            </form>
            {
                adminAdded
                &&
                <div className="alert alert-success" role="alert">
                Admin Made Successfully
               </div>
            }
        </div>
        </div>
    );
};

export default Admin;