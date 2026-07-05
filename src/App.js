// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Navbar/>}/>
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
