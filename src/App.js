// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Main/Homepage";
import About from "./Main/About";
import Contact from "./Main/Contact";
import OrderRequest from "./Main/OrderRequest";
import Feedback from "./Main/Feedback";
import Curtains from "./Pages/Curtains";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orderrequest" element={<OrderRequest />} />
        <Route path="/Feedback" element={<Feedback />} />
        {/* <Route path="/curtains" element={<Curtains/>}/> */}
        <Route path="/Pages/Curtains" element={<Curtains />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;