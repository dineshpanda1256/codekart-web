import React from "react";
import Home from "../pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavConstants } from "./NavConstants";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function RootRouter() {

  return (
    <>
    <ToastContainer />
      <Router>
        <Header/>
        <Routes>
          <Route path={NavConstants.home} element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
