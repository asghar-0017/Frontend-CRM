import React from "react";
import "../../css/Navbar.css";
import LeftDrawer from "../Drawer/Drawer";
import AgentLeftDrawer from "../Drawer/AgentDrawer";
import Logo from "../../assets/images/Logo2.png";
import agnetInfo from "../../Zunstand/agentInfo";
import { useNavigate } from "react-router-dom";
import ThemeToggleButton from "../Buttons/ThemeToggle";

const Navbar = () => {
  const { userData } = agnetInfo();
  const navigate = useNavigate();

  return (
    <div className="main-section">
      <div className="navbar">
        <div className="navbar-logo-div" >
          <img
            src={Logo}
            alt="logo"
            style={{ cursor: "pointer" }}
            className="navbar-logo"
            onClick={() =>
              userData.role == "admin"
                ? navigate("/")
                : navigate("/agent/agentLeads")
            }
          />
                {/* <ThemeToggleButton /> */}

        </div>
        {userData.role == "agent" ? (
          <div className="navbar-menu">
            <AgentLeftDrawer />
          </div>
        ) : (
          <div className="navbar-menu">
            <LeftDrawer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
