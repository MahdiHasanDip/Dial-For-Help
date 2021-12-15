import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddServices.css"
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        
        fetch('http://localhost:5000/service',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)              
                        
        })
        .then(reset())
        .then(console.log(data));
       
       
      }
    return (
        <div >
                    <div className="form">
            <h1>Add A service</h1>            
            <br />
                <hr />
            <div>
                <h2>Add Workers here</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <br />
                <input {...register("skill")} placeholder="Electrician, Driver, Plumber"/>
                <br />
                <input {...register("location")} placeholder="location"/>
                <br />
                <input {...register("img")} placeholder="Image link" />
                <br />
                <input type="number" {...register("price")} placeholder="Price"/>
                <br />
                </div>
                <input className="btn btn-secondary mt-3 ps-5 pe-5" type="submit" />
                </form> 
            </div>            
         </div>
        </div>
    );
};

export default AddService;<h1>Add service here</h1>