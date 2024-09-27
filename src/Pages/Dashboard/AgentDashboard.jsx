import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "../../css/Dashboard.css";
import { EmitOnlineAgent } from "../../components/OnlineAgents/OnlineAgents";

const Navbar = lazy(() => import("../../components/Navbar/Navbar"));
const MessageListener = lazy(() => import("../../components/MessageRecieved/MessageRecieved"));
const Sidebar = lazy(() => import("../../components/Sidebar/AgentSidebar"));
const NotFound = lazy(() => import("../../components/NotFound/NotFound"));
const Leads = lazy(() => import("../Leads/AgentLeads"));
const FollowUp = lazy(() => import("../FollowUp/AgentFollowUp"));
const AgentTasks = lazy(() => import("../Agent Tasks/AgentTasks"));
const AgentTasksCSV = lazy(() => import("../Agent Tasks/AgentTasksCSV"));
const Protected = lazy(() => import("../../components/Protected/Protected"));
const OtherDetails = lazy(() => import("../Other Details/AgentOtherDetails"));
const ShowAgentChat = lazy(() => import("../Chat/AgentChat"));


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <MessageListener />
      <EmitOnlineAgent />
      <div className="main-cont">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Routes>
            <Route path="/agentLeads" element={<Protected Component={Leads} allowedRoles={['agent']} />} />
            <Route path="/agentFollowUp" element={<Protected Component={FollowUp} allowedRoles={['agent']} />} />
            <Route path="/agentOther" element={<Protected Component={OtherDetails} allowedRoles={['agent']} />} />
            <Route path="/agentTasks" element={<Protected Component={AgentTasks} allowedRoles={['agent']} />} />
            <Route path="/agentChat/786" element={<Protected Component={ShowAgentChat} allowedRoles={['agent']} />} />
            <Route path="/tasksCSV/:agentId/:taskId" element={<Protected Component={AgentTasksCSV} allowedRoles={['agent']} />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
