import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { videoReducer, videoState } from "./VideoReducer";
import { VideoProvider } from "./VideoProvider";

ReactDOM.render(
  <VideoProvider videoState={videoState} videoReducer={videoReducer}>
    <App />
  </VideoProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
