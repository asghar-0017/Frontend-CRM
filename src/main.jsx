import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Loader from "./components/Loader/Loader.jsx";
import { TaskProvider } from "./Context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      {/* <SocketProvider> */}
        <TaskProvider>
          <App />
        </TaskProvider>
      {/* </SocketProvider> */}
    </React.Suspense>
  </React.StrictMode>
);
