import React from "react";
import Button from "@material-ui/core/Button";

function SignUpForm() {
  const subBtn = {
    fontSize: 20,
    color: "var(--clr-white)",
  };
  return (
    <form>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email Address" />
      <input type="number" placeholder="Mobile Number" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <Button style={subBtn} variant="contained" color="secondary">
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;
