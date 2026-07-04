// src/Component/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://t4.ftcdn.net/jpg/03/16/40/61/360_F_316406153_OiWmjf1aL2gErJ4vpxTFjg9W7TYRoZ23.jpg"
          alt="Logo"
          className="logo-img"
        />
        <h1 className="brand-name">Siventhra</h1>
      </div>

      {/* Hamburger button for mobile */}
      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li className="navbar-item">
          <Link to="/" className="home-navbar" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>

        <li
          className="navbar-item dropdown"
          onClick={() => setIsServicesOpen(!isServicesOpen)}
        >
          <span className="home-navbar">Services ▾</span>
          <ul className={`dropdown-menu ${isServicesOpen ? "show" : ""}`}>
            <li>
              <Link to="/services/ss-automation" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>SS Automation</Link>
            </li>
            <li>
              <Link to="/services/floor-designers" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Floor Designers</Link>
            </li>
            <li>
              <Link to="/services/the-best" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>The Best</Link>
            </li>
            {/* <li>
              <Link to="/services/Galvanium" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Galvanium doors and windows</Link>
            </li> */}
            <li>
              <Link to="/services/pest-control" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Pest Control</Link>
            </li>
          </ul>
        </li>

        <li className="navbar-item">
          <Link to="/about" className="home-navbar" onClick={() => setIsMenuOpen(false)}>About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/feedback" className="home-navbar" onClick={() => setIsMenuOpen(false)}>Feedback</Link>
        </li>
        <li className="navbar-item">
          <Link to="/orderrequest" className="home-navbar" onClick={() => setIsMenuOpen(false)}>Order Request</Link>
        </li>

        {/* Single Profile Section (works for both desktop & mobile) */}
        <li className="navbar-profile">
          {/* <Link to="/profile" className="profile-btn" onClick={() => setIsMenuOpen(false)}>Profile</Link>
          <Link to="/" className="logout-btn" onClick={() => setIsMenuOpen(false)}>Logout</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
