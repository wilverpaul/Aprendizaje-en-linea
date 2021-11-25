import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";

import AdminHome from "./pages/Admin/Admin";
import AdmLogin from "./pages/Admin/Login";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminHome />} />;
          <Route path="/admin/login" element={<AdmLogin />} />;
          <Route path="/" element={<Home />} />;
          <Route path="/login" element={<Login />} />;
        </Routes>
      </Router>
    </>
  );
}

function RouteWithSubRoutes(route) {
  //console.log(route);
  return <Route path="/admin" element={<AdminHome />} />;
}
