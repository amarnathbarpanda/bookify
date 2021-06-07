import React from "react";
import Button from "@material-ui/core/Button";

function SignInForm() {
  const subBtn = {
    fontSize: 20,
    color: "var(--clr-white)",
  };
  return (
    <form>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password" />
      <Button style={subBtn} variant="contained" color="secondary">
        Sign in
      </Button>
      <span className="span">or</span>
      <span className="span">
        Sign in using
      </span>
      <img src="img/google.png" alt="" />
    </form>
  );
}

export default SignInForm;
