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

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orderrequest" element={<OrderRequest />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;