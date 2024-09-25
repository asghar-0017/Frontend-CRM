import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdSupportAgent } from "react-icons/md";
import { GrTableAdd } from "react-icons/gr";
import { RiChatFollowUpLine } from "react-icons/ri";
import { FaTasks, FaRegTrashAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GoTasklist } from "react-icons/go";
import "../../css/Sidebar.css";
import { Button } from "@mui/material";
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
            location.pathname === "/" ? "active" : ""
          }`}
          onClick={() => navigate("/")}
        >
          <MdSupportAgent color="#1640D6" size={20} />
          <span className="sidebar-span">Agents</span>
        </div>
        <div
          className={`sidebar-content ${
            location.pathname === "/leads" ? "active" : ""
          }`}
          onClick={() => navigate("/leads")}
        >
          <GrTableAdd color="#1640D6" size={20} />
          <span className="sidebar-span">Leads</span>
        </div>
        <div
          className={`sidebar-content ${
            location.pathname === "/followUp" ? "active" : ""
          }`}
          onClick={() => navigate("/followUp")}
        >
          <RiChatFollowUpLine color="#1640D6" size={20} />
          <span className="sidebar-span">Follow Up Details</span>
        </div>

        <div
          className={`sidebar-content ${
            location.pathname === "/other" ? "active" : ""
          }`}
          onClick={() => navigate("/other")}
        >
          <TbListDetails  color="#1640D6" size={20} />
          <span className="sidebar-span">Other Details</span>
        </div>

        <div
          className={`sidebar-content ${
            location.pathname === "/allTasks" ? "active" : ""
          }`}
          onClick={() => navigate("/allTasks")}
        >
          <FaTasks  color="#1640D6" size={20} />
          <span className="sidebar-span">All Tasks</span>
        </div>

        <div
          className={`sidebar-content ${
            location.pathname === "/remaining-tasks" ? "active" : ""
          }`}
          onClick={() => navigate("/remaining-tasks")}
        >
          <GoTasklist  color="#1640D6" size={22} />
          <span className="sidebar-span">Remaining Tasks</span>
        </div>

        <div
          className={`sidebar-content ${
            location.pathname === "/trash" ? "active" : ""
          }`}
          onClick={() => navigate("/trash")}
        >
          <FaRegTrashAlt  color="#1640D6" size={20} />
          <span className="sidebar-span">Trash</span>
        </div>

        <div
          className={`sidebar-content ${
            location.pathname === "/messages" ? "active" : ""
          }`}
          onClick={() => navigate("/messages")}
        >
          <FaRegMessage  color="#1640D6" size={20} />
          <span className="sidebar-span">All Messages</span>
        </div>

      </div>
        <Button variant="outlined" className="logout" style={{color: "#1640D6", borderColor: "#1640D6", marginTop: "20px"}} onClick={() => handleLogout()}>
          LogOut
        </Button>
    </div>
  );
};

export default Sidebar;
