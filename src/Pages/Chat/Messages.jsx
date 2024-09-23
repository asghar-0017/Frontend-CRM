import React, { lazy, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Protected from "../../components/Protected/Protected";
import Logo from "../../assets/images/Logo2.png";
import OnlineAgentsListener from "../../components/OnlineAgents/OnlineAgents";
import "../../css/Dashboard.css";

const Navbar = lazy(() => import("../../components/Navbar/Navbar"));
const Sidebar = lazy(() => import("../../components/Sidebar/MessageSidebar"));
const ShowAgentChat = lazy(() => import("../Chat/chat"));

const Messages = () => {
  const location = useLocation();
  const hasAgentId = location.pathname.includes("/agentChat/");
  const [onlineAgents, setOnlineAgents] = useState([]);

  const handleAgentsUpdate = (agents) => {
    setOnlineAgents(agents);
  };
  return (
    <div>
      <div>
        <Navbar />
        <OnlineAgentsListener onAgentsUpdate={handleAgentsUpdate} />

        <div className="main-cont">
          <div className="left">
            <Sidebar />
          </div>
          <div className="right">
            {!hasAgentId ? (<div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
              <img src={Logo} alt="logo" style={{width: "500px", height: "300px", opacity: "0.2"}}/>
              </div>
            ) : (
              <Routes>
                <Route
                  path="/agentChat/:id"
                  element={
                    <Protected
                      Component={ShowAgentChat}
                      allowedRoles={["admin"]}
                    />
                  }
                />
              </Routes>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
