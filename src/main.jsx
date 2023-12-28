import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AssistantApp } from "./AssistantApp";
import "./styles.css";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AssistantApp />
    </BrowserRouter>
  </React.StrictMode>
);
