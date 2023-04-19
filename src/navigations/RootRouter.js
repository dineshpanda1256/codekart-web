import React from "react";
import Home from "../pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NavConstants } from "./NavConstants";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UnderMaintainance from "../components/UnderMaintainance/UnderMaintainance";

export default function RootRouter() {

  return (
    <>
    <ToastContainer />
      <Router>
        <Routes>
          <Route path={NavConstants.home} element={<Home />} />
          <Route path={NavConstants.underconstrunction} element={<UnderMaintainance />} />
          <Route path={NavConstants.anything} element={<UnderMaintainance />} />
        </Routes>
      </Router>
    </>
  );
}
