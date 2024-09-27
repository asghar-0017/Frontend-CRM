import React, { useState, useRef, useEffect } from "react";
import "../../css/Login.css";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Swal from "sweetalert2";
import API_CONFIG from '../../config/API/api';
import { Button } from "@mui/material";
import { loginUser } from "../../config/Api Services/apiServices";

const LoginForm = () => {
  const { apiKey } = API_CONFIG;
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
      inputRef1.current.select();
    }
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress(50);

    try {
      const res = await loginUser("auth" ,username, password);
      if (res) {
        localStorage.setItem("token", res.token);        
        setProgress(100);
        setTimeout(() => {
          navigate("/");
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleKeyDown2 = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      inputRef2.current.focus(); 
    }
  };

  return (
    <div className="form">
      <LoadingBar
        color="#4599B4"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <form className="form_main" onSubmit={handleSubmit}>
        <p className="heading">Admin Login</p>

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
            type="text"
            className="inputField"
            id="username"
            placeholder="Username"
            value={username}
            ref={inputRef1}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown2}
            required
            autoComplete="off"
          />
        </div>

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
            className="inputField"
            id="password"
            placeholder="Password"
            value={password}
            ref={inputRef2}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            required
            autoComplete="off"
          />
        </div>

        <button type="submit" id="button">
          Submit
        </button>
        <a className="forgotLink" onClick={() => navigate('/checkemail')}>
          Forgot your password?
        </a>
      <div className="user-btn">
      <Button variant="contained" disabled>Admin</Button>
      <Button variant="contained" onClick={()=>navigate("/agentLogin")}>Agent</Button>
      </div>
      </form>
    </div>
  );
};

export default LoginForm;
