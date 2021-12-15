import React, { useEffect, useState } from 'react';

const DeleteService = () => {
    const [services, setServices]=useState([]);
   
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[services.length])

    const handleDelete = (id) =>{

        const confirmation = window.confirm('Are you sure,want to delete?');
          if(confirmation){
                         console.log(id);
                         fetch(`http://localhost:5000/service/${id}`,{
                             method:'DELETE'
                         })
                         .then(res => res.json())
                         .then(data =>{
                             if (data.deletedCount>0){
                                 alert("Service Deleted")
                             }
                         })
                     }
     
         }


    return (
        <div >
            <h1>Delete service here {services?.length} </h1>
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

export default DeleteService;<h1>Delete service here</h1>

