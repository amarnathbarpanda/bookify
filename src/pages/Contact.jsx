import React from "react";
import "./Contact.css";
import Button from '@material-ui/core/Button';


function Contact() {
    const subBtn = {
        fontSize: 20,
        // marginBottom: '2rem'
    };
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__left">
          <h1>Get in touch</h1>
          <p>
            Please fill out the the quick and we will be in touch with
            lightening speed.
          </p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email Address" />
            <textarea  cols="30" rows="5" placeholder="Message"></textarea>
            <Button style={subBtn} variant="contained" color="secondary">Submit</Button>
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
