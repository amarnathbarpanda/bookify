import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/StateProvider";
import { useForm } from "react-hook-form";
import { auth } from "../firebase";
// import { db } from "../firebase";

function SignUpForm() {
  const subBtn = {
    fontSize: 20,
    color: "var(--clr-white)",
  };
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

      auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((result) =>{
        setLoading(true)
      result.user
          .updateProfile({ displayName: data.uname })
          .then(() =>  toast.success("You have created an account Successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }))
            history.push("/");
      }).catch((error) => toast.error(`Failed to create an account! ${error.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }));

    
    

    // db.collection("users").add({
    //   username: data.uname,
    //   email: data.email,
    // }).then((docRef)=>{
    //   console.log("Doc written with ID : ", docRef.id);
    // }).catch((error)=> console.log(error));

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <input
        type="text"
        {...register("uname", { required: true })}
        placeholder="Username"
      />
      <span className="span" style={{ color: "#ff4757" }}>
        {errors.uname?.type === "required" && " Username is required"}
      </span>
      <input
        type="text"
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        })}
        placeholder="Email Address"
        autoComplete="off"
      />
      <span className="span" style={{ color: "#ff4757" }}>
        {errors.email?.type === "required" && " Email Address is required"}
      </span>
      <span className="span" style={{ color: "#ff4757" }}>
        {errors.email?.type === "pattern" && "Invalid Email Address"}
      </span>

      <input
        type="password"
        {...register("password", {
          required: true,
          minLength: 6,
          maxLength: 14,
        })}
        placeholder="Password"
        autoComplete="off"
      />
      <span className="span" style={{ color: "#ff4757" }}>
        {errors.password?.type === "required" && " Password is required"}
      </span>
      <span className="span" style={{ color: "#ff4757" }}>
        {errors.password?.type === "minLength" && " Minimum length is 6"}
      </span>
      <span className="span" style={{ color: "#ff4757" }}>
        {errors.password?.type === "maxLength" && " Maximum length is 14"}
      </span>
      <input
        type="password"
        // value={cpassword}
        // name="confirmPassword"
        {...register("confirmPassword", {
          required: true,
          minLength: 6,
          maxLength: 14,
        })}
        placeholder="Confirm Password"
        // onChange={(e) => setCpassword(e.target.value)}
        autoComplete="off"
      />
      <span className="span" style={{ color: "#ff4757" }}>
        {errors.confirmPassword?.type === "required" && "This is required"}
      </span>
      <span className="span" style={{ color: "#ff4757" }}>
        {errors.confirmPassword?.type === "minLength" && "Minimum length is 6"}
      </span>
      <span className="span" style={{ color: "#ff4757" }}>
        {errors.confirmPassword?.type === "maxLength" && "Maximum length is 14"}
      </span>
      <Button
        disable={loading.toString()}
        style={subBtn}
        variant="contained"
        color="secondary"
        type="submit"
      >
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;
