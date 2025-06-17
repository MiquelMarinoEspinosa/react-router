import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContext from "./AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext />
  </React.StrictMode>
);
