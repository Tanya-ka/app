import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import MainLayout from './pages/CounterPage/components/MainLayout/MainLayout';

import "./index.css";
import Routes from "./routes/Routes";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
