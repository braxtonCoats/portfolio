import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "../src/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <style jsx='true' global='true'>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
