import React from "react";
import ReactDOM from "react";
import App from "./App";
import "./index.css";
const domRoot = document.getElementById("root");
// const el = <div id="root"></div>;
// console.dir(domRoot);
// console.log(el);
ReactDOM.createRoot(domRoot).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
);
