import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";

import "./Navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (

    <div className="navbar-main">

      <div className="navbar-container">

        {/* ===========================
            BRAND
        ============================ */}

        <Link
          to="/"
          className="navbar-brand"
        >

          <img
            src={Logo}
            alt="Siventhra"
            className="navbar-brand-logo"
          />

          <div className="navbar-brand-content">

            <div className="navbar-brand-title">
              Siventhra
            </div>

            <div className="navbar-brand-tagline">
              Creative Spaces, Happy Faces
            </div>

          </div>

        </Link>

        {/* ===========================
             MENU
        ============================ */}

        <div className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>

          <Link
            to="/"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          {/* SERVICES */}

          <div
            className="navbar-dropdown"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >

            <div className="navbar-dropdown-title">

              Services

              <FaChevronDown
                className="navbar-dropdown-arrow"
              />

            </div>

            <div
              className={`navbar-dropdown-menu ${
                serviceOpen ? "navbar-dropdown-show" : ""
              }`}
            >

              <Link
                to="/services/curtains"
                className="navbar-dropdown-link"
              >
                Curtains
              </Link>

              <Link
                to="/services/blinds"
                className="navbar-dropdown-link"
              >
                Blinds
              </Link>

              <Link
                to="/services/wallpapers"
                className="navbar-dropdown-link"
              >
                Wallpapers
              </Link>

              <Link
                to="/services/mosquito-mesh"
                className="navbar-dropdown-link"
              >
                Mosquito Mesh
              </Link>

              <Link
                to="/services/pvc-partition"
                className="navbar-dropdown-link"
              >
                PVC Partition
              </Link>

              <Link
                to="/services/false-ceiling"
                className="navbar-dropdown-link"
              >
                False Ceiling
              </Link>

              <Link
                to="/services/modular-interior"
                className="navbar-dropdown-link"
              >
                Modular Interior
              </Link>

            </div>

          </div>

          <Link
            to="/process"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            Process
          </Link>

          <Link
            to="/reviews"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </Link>

          <Link
            to="/contact"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

        </div>

        {/* ===========================
            RIGHT SIDE
        ============================ */}

        <div className="navbar-right">

          <div className="navbar-search">

            <FaSearch />

          </div>

          <Link
            to="/orderrequest"
            className="navbar-quote-button"
          >
            Get Quote
          </Link>

          <div
            className="navbar-mobile-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {
              menuOpen
                ? <FaTimes />
                : <FaBars />
            }

          </div>

        </div>

      </div>

    </div>

  );

};

export default Navbar;