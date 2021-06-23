import React from "react";
import "./Contact.css";
import Button from '@material-ui/core/Button';
import { useState } from "react";
import { set } from "react-hook-form";
import { toast } from "react-toastify";


function Contact() {
    const subBtn = {
        fontSize: 20,
        // marginBottom: '2rem'
    };
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUname("");
        setEmail("");
        setMessage("");
        toast.success("We will be in touch with lightening speed");
    }

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__left">
          <h1>Get in touch</h1>
          <p>
            Please fill out the the quick and we will be in touch with
            lightening speed.
          </p>
          <form onSubmit={handleSubmit}>
            <input value={uname} type="text" placeholder="Name" onChange={(e)=> setUname(e.target.value)}/>
            <input value={email} type="text" placeholder="Email Address" onChange={(e)=> setEmail(e.target.value)}/>
            <textarea  value={message} cols="30" rows="5" placeholder="Message" onChange={(e)=> setMessage(e.target.value)}></textarea>
            <Button style={subBtn} variant="contained" color="secondary"
            type="submit"
            >Submit</Button>
          </form>
        </div>
        <div className="contact__right">
          <div className="connect">
            <h2>Connect with us:</h2>
            <p>For support or any questions:</p>
            <p>Email us at: support@bookify.com</p>
          </div>
          <div className="bookify__india">
            <h2>BookiFy India</h2>
            <p>Hanuman Colony, Sakhipara,</p>
            <p>Sambalpur, 768001, Odisha.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
