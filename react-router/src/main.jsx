import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContext from "./AppContext";
import AppHook from "./AppHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App />
    <AppContext /> */}
    <AppHook />
  </React.StrictMode>
);
