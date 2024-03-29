import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const DeleteService = () => {
    const [services, setServices]=useState([]);
   
    useEffect(()=>{
        fetch('https://intense-crag-69313.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[services.length])

    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {              
              fetch(`https://intense-crag-69313.herokuapp.com/service/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if (data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      const remaining = services.filter(order => order._id !== id)
                      setServices(remaining)
                }
            })
            }
          });
     
         }




    return (
        <div >
            <h1>Delete service here  </h1>
            <hr />
            <p>Total Services: {services?.length}</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                            <th scope="col">#</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Skill</th> 
                            <th scope="col">Price</th> 
                            <th scope="col">Action</th>                    
                        </tr>
                    </thead>
                <tbody>
                    {
                    services.map(service => (
                            <tr key={service._id}>
                                <th scope="row">#</th>
                                    <td><h3>{service?.name}</h3></td>
                                    <td>{service?.skill}</td>
                                    <td>{service?.price}</td>
                                    <td><button className="btn btn-danger" onClick={()=>handleDelete(service?._id)}>Delete</button></td>
                            </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DeleteService;

