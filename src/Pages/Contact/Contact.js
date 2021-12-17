import React from 'react';
import "./Contact.css"
import Email from './Email';


const Contact = () => {
   
    return (
        <div id="Contact" >
            <div className="">
                <img className="img-fluid" src="https://i.ibb.co/6JpNPx9/Contact-Us.png" alt="" />
            </div>
            <Email></Email>

        </div>
       
  
    );
};

export default Contact;