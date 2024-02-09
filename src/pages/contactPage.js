import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: 140 }}></div>
      <Footer />
    </>
  );
};
