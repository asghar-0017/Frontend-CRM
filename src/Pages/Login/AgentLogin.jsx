import React, { useState, useRef, useEffect } from "react";
import "../../css/Login.css";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import { loginUser } from "../../config/Api Services/apiServices";
import agentInfo from "../../Zunstand/agentInfo";

const LoginForm = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const { updatedUserData } = agentInfo();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
      inputRef1.current.select();
    }
  }, []);

  const onSubmit = async (data) => {
    setProgress(50);

    try {
      const res = await loginUser("login-agent", data.username, data.password);
      if (res) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("agentId", res.agent.agentId);
        if (res.agent.isActivated) {
          localStorage.setItem("status", true);
        }
        updatedUserData(res.agent);
        setProgress(100);
        setTimeout(() => {
          navigate("/agentLeads");
        }, 200);
      } else {
        console.log("Login Failed. Please check your credentials.");
        setProgress(100);
      }
    } catch (error) {
      setProgress(100);
      console.error("Login Error:", error);
      Swal.fire({
        icon: "error",
        title: "Try Again",
        text: "Wrong Username or Password!",
      });
    }
  };

  return (
    <div className="form">
      <LoadingBar
        color="#4599B4"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <form className="form_main" onSubmit={handleSubmit(onSubmit)}>
        <p className="heading">Agent Login</p>

        <div className="inputContainer">
          <svg
            className="inputIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#2e2e2e"
            viewBox="0 0 16 16"
          >
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
          </svg>
          <input
            type="email"
            className={`inputField ${errors.username ? 'error' : ''}`}
            id="email"
            placeholder="Email"
            ref={inputRef1}
            {...register("username", { 
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address."
              }
            })}
            autoComplete="off"
          />
        </div>
          {errors.username && <span className="error-message">{errors.username.message}</span>}

        <div className="inputContainer">
          <svg
            className="inputIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#2e2e2e"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input
            type="password"
            className={`inputField ${errors.password ? 'error' : ''}`}
            id="password"
            placeholder="Password"
            ref={inputRef2}
            {...register("password", { 
              required: "Password is required.",
              // minLength: { 
              //   value: 5, 
              //   message: "Password must be at least 6 characters." 
              // }
            })}
            autoComplete="off"
          />
        </div>
          {errors.password && <span className="error-message">{errors.password.message}</span>}

        <button type="submit" id="button">
          Submit
        </button>
        <div className="user-btn">
          <Button variant="contained" onClick={() => navigate("/login")}>
            Admin
          </Button>
          <Button variant="contained" disabled>
            Agent
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
