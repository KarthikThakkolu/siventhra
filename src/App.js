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
// import Newhomepage from "./Main/Newhomepage";
import CurtainExplorer from "./Pages/CurtainExplorer";
import CurtainOrder from "./Pages/CurtainOrder";
import Wallpapers from "./Pages/Wallpapers";
import WallpaperDetails from "./Pages/WallpaperDetails";
import CeilingHangers from "./Pages/CeilingHangers";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Newhomepage />} /> */}
        <Route path="/" element={<Homepage />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orderrequest" element={<OrderRequest />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Pages/Curtains" element={<Curtains />} />
        <Route path="/Pages/CurtainExplorer" element={<CurtainExplorer />} />
        <Route path="/Pages/CurtainOrder" element={<CurtainOrder />} />
        <Route path="/Pages/Wallpapers" element={<Wallpapers />} />
        <Route path="/Pages/WallpaperDetails" element={<WallpaperDetails />} />
        <Route path="/Pages/CeilingHangers" element={<CeilingHangers/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;