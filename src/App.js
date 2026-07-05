// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import Homepage from "./Main/Homepage";
import About from "./Main/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/Homepage" element={<Homepage/>}/>
            <Route path="/About" element={<About/>}/>

          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
