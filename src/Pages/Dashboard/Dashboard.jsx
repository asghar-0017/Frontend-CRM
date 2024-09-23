import React, { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../../css/Dashboard.css";
import MessageListener from "../../components/MessageRecieved/MessageRecieved";
import OnlineAgentsListener from "../../components/OnlineAgents/OnlineAgents";

const Navbar = lazy(() => import("../../components/Navbar/Navbar"));
const Sidebar = lazy(() => import("../../components/Sidebar/Sidebar"));
const NotFound = lazy(() => import("../../components/NotFound/NotFound"));
const Leads = lazy(() => import("../Leads/Leads"));
const FollowUp = lazy(() => import("../FollowUp/FollowUp"));
const Agents = lazy(() => import("../Agents/Agents"));
const OtherDetails = lazy(() => import("../Other Details/OtherDetails"));
const ShowAgentTasks = lazy(() => import("../Agent Tasks/ShowAgentTasks"));
const TasksCSV = lazy(() => import("../Agent Tasks/ShowAgentCSVTasks"));
const AllTasks = lazy(() => import("../All Tasks/AllTasks"));
const Trash = lazy(() => import("../Trash Leads/TrashLeads"));
const Protected = lazy(() => import("../../components/Protected/Protected"));
const Messages = lazy(() => import("../Chat/Messages"));

const Dashboard = () => {
  

  return (
    <div>
      <Navbar />
      <MessageListener />

      <div className="main-cont">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Routes>
            <Route path="/" element={<Protected Component={Agents} allowedRoles={['admin']} />} />
            <Route path="/leads" element={<Protected Component={Leads} allowedRoles={['admin']} />} />
            <Route path="/followUp" element={<Protected Component={FollowUp} allowedRoles={['admin']} />} />
            <Route path="/other" element={<Protected Component={OtherDetails} allowedRoles={['admin']} />} />
            <Route path="/allTasks" element={<Protected Component={AllTasks} allowedRoles={['admin']} />} />
            <Route path="/trash" element={<Protected Component={Trash} allowedRoles={['admin']} />} />
            <Route path="/messages" element={<Protected Component={Messages} allowedRoles={['admin']} />} />
            <Route path="/agentTasks/:id" element={<Protected Component={ShowAgentTasks} allowedRoles={['admin']} />} />
            <Route path="/tasksCSV/:agentId/:taskId" element={<Protected Component={TasksCSV} allowedRoles={['admin']} />} />
            {/* <Route path="/agentChat/:id" element={<Protected Component={ShowAgentChat} allowedRoles={['admin']} />} /> */}

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
