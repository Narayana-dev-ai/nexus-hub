import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LandingPageView } from "./components/LandingPageView";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LandingPageView />
    </BrowserRouter>
  </React.StrictMode>
);
