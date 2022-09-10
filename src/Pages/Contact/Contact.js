import React from 'react';
import "./Contact.css"
import Email from './Email';


const Contact = () => {
   
    return (
        <div id="Contact" >
            <div className="">
                <img className="img-fluid" src="https://i.ibb.co/yR4X4Jm/Contact-Us.png" alt="images" />
            </div>
            <Email></Email>

        </div>
       
  
    );
};

export default Contact;