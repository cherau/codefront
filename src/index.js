import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
