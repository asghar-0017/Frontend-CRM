import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import API_CONFIG from "../../config/API/api";
import Loader from "../Loader/Loader";
import { showErrorToast } from "../Toast/Toast";

const Protected = ({ Component, allowedRoles }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const verifyTokenWithBackend = async () => {
      try {
        const { apiKey } = API_CONFIG;
        const response = await axios.post(
          `${apiKey}/verify-token`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.code !== 200) {
          handleUnauthorized();
        } else {
          handleAuthorized(response.data.role);
        }
      } catch (error) {
        console.error("Token verification failed", error);
        handleUnauthorized();
      }
    };

    const handleUnauthorized = () => {
      localStorage.removeItem("token");
      // showErrorToast("Unauthorized or Invalid Token");
      navigate("/login");
    };

    const handleAuthorized = (role) => {      
      if (!allowedRoles.includes(role)) {
        role === "admin" ? navigate("/") : navigate("/agent/agentLeads");
        return;
      }
      setIsAuthenticated(true);
    };

    verifyTokenWithBackend();
  }, [navigate, location, allowedRoles]);

  return isAuthenticated ? <Component /> : <Loader />;
};

export default Protected;
