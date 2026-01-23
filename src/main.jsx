import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    // ✅ Ask user if they want the latest update
    if (confirm("New update available 🚀 Reload now?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("App is ready to work offline ✅");
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
