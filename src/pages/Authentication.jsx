import React, { useState } from "react";
import "./Authentication.css";
import Switch from "@material-ui/core/Switch";

import SignInForm from "../components/SignInForm.jsx";
import SignUpForm from "../components/SignUpForm.jsx";


function Authentication() {
  const [form, setForm] = useState(false);
  const toggleForm = () => {
    setForm(!form);
  };

  return (
    <>
      <div className="auth">
        <div className="auth__container">
          <div className="auth__left">
            <img src="img/loginimg.png" alt="" />
          </div>
          <div className="auth__right">
            <h1>Welcome To BookiFy</h1>
            <div className="switch">
              Sign up
              <Switch color="primary" onChange={toggleForm} />
            </div>
            {form ? <SignUpForm/> : <SignInForm />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
