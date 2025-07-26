import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {createGlobalStyle} from "styled-components"

const Globalstyle = createGlobalStyle`

*{
  box-sizing:border-box;
  padding:0;
  margin:0;
}

`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Globalstyle/>
    <App />
  </React.StrictMode>
);
