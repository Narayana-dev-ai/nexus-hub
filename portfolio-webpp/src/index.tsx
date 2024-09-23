import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LandingPageView } from "./components/LandingPageView";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LandingPageView />
  </React.StrictMode>
);
