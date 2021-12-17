import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import "./AddServices.css"
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        Swal.fire({
            title: 'Do you want add this?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
              fetch('https://intense-crag-69313.herokuapp.com/service',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)              
                        
        })
        .then(reset())
        .then(console.log(data));
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
       
       
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
                <select className='selector' {...register("skill")}>
                        <option value="">Select skill...</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Driver">Driver</option>
                    </select>
                <br />
                <input {...register("Mobile")} placeholder="Phone Number"/>
                <br />
                <input {...register("location")} placeholder="location"/>
                <br />
                <input {...register("img")} placeholder="Image link" />
                <br />
                <input type="number" {...register("price")} placeholder="Price"/>
                <br />
                </div>
                <input className="submit-btn" type="submit" />
                </form>                
            </div>            
         </div>
        </div>
    );
};

export default AddService;<h1>Add service here</h1>