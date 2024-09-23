import React, { useEffect } from "react";
import Router from "./config/Router/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastNotification } from "./components/Toast/Toast";
import { Toaster } from "react-hot-toast";
import useThemeStore from "./Zunstand/themeStore";

const App = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <ToastNotification />
      <Toaster />
      <Router />
    </>
  );
};

export default App;
