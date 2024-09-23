import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdSupportAgent } from "react-icons/md";
import { GrTableAdd } from "react-icons/gr";
import { RiChatFollowUpLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import "../../css/Sidebar.css";
import { Button } from "@mui/material";
import axios from "axios";
import API_CONFIG from "../../config/API/api";
import { TbListDetails } from "react-icons/tb";
import handleLogout from "../Logout.jsx/Logout";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <div
          className={`sidebar-content ${
            location.pathname === "/agent/agentLeads" ? "active" : ""
          }`}
          onClick={() => navigate("/agent/agentLeads")}
        >
          <GrTableAdd color="#1640D6" size={20} />
          <span className="sidebar-span">Leads</span>
        </div>

        <div
          className={`sidebar-content ${
            location.pathname === "/agent/agentFollowUp" ? "active" : ""
          }`}
          onClick={() => navigate("/agent/agentFollowUp")}
        >
          <RiChatFollowUpLine color="#1640D6" size={20} />
          <span className="sidebar-span">Follow Up Details</span>
        </div>

        <div
          className={`sidebar-content ${
            location.pathname === "/agent/agentOther" ? "active" : ""
          }`}
          onClick={() => navigate("/agent/agentOther")}
        >
          <TbListDetails  color="#1640D6" size={20} />
          <span className="sidebar-span">Other Details</span>
        </div>

        <div
          className={`sidebar-content ${
            location.pathname === "/agent/agentTasks" ? "active" : ""
          }`}
          onClick={() => navigate("/agent/agentTasks")}
        >
          <FaTasks  color="#1640D6" size={20} />
          <span className="sidebar-span">Tasks</span>
        </div>

        <div
          className={`sidebar-content ${
            location.pathname === "/agent/agentChat/786" ? "active" : ""
          }`}
          onClick={() => navigate("/agent/agentChat/786")}
        >
          <FaRegMessage  color="#1640D6" size={20} />
          <span className="sidebar-span">Messages</span>
        </div>

      </div>
        <Button variant="outlined" className="logout" style={{color: "#1640D6", borderColor: "#1640D6", marginTop: "20px"}} onClick={() => handleLogout()}>
          LogOut
        </Button>
    </div>
  );
};

export default Sidebar;
