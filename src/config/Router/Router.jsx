import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LoginForm = lazy(() => import("../../Pages/Login/Login"));
const Messages = lazy(() => import("../../Pages/Chat/Messages"));
const LoginFormAgent = lazy(() => import("../../Pages/Login/AgentLogin"));
const Dashboard = lazy(() => import("../../Pages/Dashboard/Dashboard"));
const AgentDashboard = lazy(() => import("../../Pages/Dashboard/AgentDashboard"));
const Emailbox = lazy(() => import("../../components/Email Box/Emailbox"));
const Otpform = lazy(() => import("../../components/Otp/Otpform"));
const Changepassword = lazy(() => import("../../components/Change Password/Changepassword"));
const Protected = lazy(() => import("../../components/Protected/Protected"));

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login page for Admin */}
          <Route path="/login" element={<LoginForm />} />

          {/* Login page for Agent */}
          <Route path="/agentLogin" element={<LoginFormAgent />} />

          {/* Admin Dashboard Route */}
          <Route path="/*" element={<Protected Component={Dashboard} allowedRoles={['admin']} />} />

          {/* Admin Messages Route */}
          <Route path="/messages/*" element={<Protected Component={Messages} allowedRoles={['admin']} />} />

          {/* Agent Dashboard Route */}
          <Route path="/agent/*" element={<Protected Component={AgentDashboard} allowedRoles={['agent']} />} />

          {/* Check Email Page */}
          <Route path="/checkemail" element={<Emailbox />} />

          {/* Check Email OTP */}
          <Route path="/otpform" element={<Otpform />} />

          {/* Change Password */}
          <Route path="/changepassword" element={<Changepassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
