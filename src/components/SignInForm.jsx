import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "../GlobalContext/StateProvider";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function SignInForm() {
  const { logIn, resetPassword } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [fpassword, setFpassword] = useState(false);
  const history = useHistory();

  const subBtn = {
    fontSize: 20,
    color: "var(--clr-white)",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleOnSubmit(data) {
    try {
      setLoading(true);
      await logIn(data.email, data.password);
      toast.success("Logged In Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/");
    } catch {
      toast.error("Incorrect username or password!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setLoading(false);
  }

  const handleForgotPassword = async (data) => {
    try {
      setLoading1(true);
      await resetPassword(data.email);
      toast.success("Check your inbox for further instructions!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch {
      toast.error("Failed to reset password!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setLoading1(false);
  };

  return (
    <div>
      {fpassword ? (
        <form onSubmit={handleSubmit(handleForgotPassword)}>
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
          <Button
            disable={loading1.toString()}
            style={subBtn}
            variant="contained"
            color="primary"
            type="submit"
          >
            Reset Password
          </Button>
          <span className="span link" onClick={() => setFpassword(false)}>
            Cancel
          </span>
        </form>
      ) : (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
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
          <Button
            disable={loading.toString()}
            style={subBtn}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Sign in
          </Button>
          <span className="span link" onClick={() => setFpassword(true)}>
            Forgot Password ?
          </span>
          <span className="span">or</span>
          <span className="span">Sign in using</span>
          <img src="img/google.png" alt="" />
        </form>
      )}
    </div>
  );
}

export default SignInForm;
