import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const ReactDOM = require("react-dom");

// const Routes = require("./routes");

// function getResumePath() {
//   if (["localhost", "127.0.0.1"].indexOf(window.location.hostname) === -1) {
//     return "/public/resume.json";
//   }
//   return "/public/resume.example.json";
// }

// function getNavigation() {
//   return {
//     ceremony: "Ceremony",
//     about: "Reception",
//     work: "Registry",
//     education: "RSVP"
//   };
// }

// ReactDOM.render(
//   Routes.get({
//     resumePath: getResumePath(),
//     navigation: getNavigation()
//   }),
//   document.getElementById("app")
// );
