
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaChevronDown,
  FaArrowRight,
  FaBars,
  FaTimes,
  // FaLeaf
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../assets/siventhra logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
    setIsProductsOpen(false);
  };

  const toggleProducts = () => {
    setIsProductsOpen((previous) => !previous);
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? " nav-link-active" : ""}`;

  return (
    <div className="navbar-shell">

      <div className="navbar">

        {/* BRAND */}

        <div className="navbar-logo">

          <Link
            to="/"
            className="logo-link"
            onClick={closeMenu}
          >

            <div className="logo-frame">
              <img
                src={logo}
                alt="Siventhra Interior and Decors"
                className="logo-img"
              />
            </div>

            <div className="brand-content">

              <div className="brand-name">
                Siventhra
              </div>

              <div className="brand-subtitle">
                INTERIOR & DECORS
              </div>

            </div>

          </Link>

        </div>


        {/* DESKTOP / MOBILE NAVIGATION */}

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>

          <div className="navbar-links">

            <div className="navbar-item">

              <NavLink
                to="/"
                end
                className={navLinkClass}
                onClick={closeMenu}
              >
                Home
              </NavLink>

            </div>


            {/* PRODUCTS DROPDOWN */}

            <div
              className={`navbar-item services-item ${
                isProductsOpen ? "services-open" : ""
              }`}
            >

              <button
                type="button"
                className="services-button"
                onClick={toggleProducts}
                aria-expanded={isProductsOpen}
              >

                <span>Products</span>

                <FaChevronDown className="services-arrow" />

              </button>


              <div
                className={`dropdown-menu ${
                  isProductsOpen ? "show" : ""
                }`}
              >

                <div className="dropdown-heading">
                  EXPLORE OUR PRODUCTS
                </div>

                <Link
                  to="/services/ss-automation"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  <span>SS Automation</span>
                  <FaArrowRight />
                </Link>

                <Link
                  to="/services/floor-designers"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  <span>Floor Designers</span>
                  <FaArrowRight />
                </Link>

                <Link
                  to="/services/the-best"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  <span>The Best</span>
                  <FaArrowRight />
                </Link>

                <Link
                  to="/services/pest-control"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  <span>Pest Control</span>
                  <FaArrowRight />
                </Link>

              </div>

            </div>


            {/* ABOUT */}

            <div className="navbar-item">

              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={closeMenu}
              >
                About
              </NavLink>

            </div>


            {/* FEEDBACK */}

            <div className="navbar-item">

              <NavLink
                to="/feedback"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Feedback
              </NavLink>

            </div>


            {/* CONTACT */}

            <div className="navbar-item">

              <NavLink
                to="/Contact"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Contact
              </NavLink>

            </div>

          </div>


          {/* ORDER REQUEST */}

          <div className="navbar-action">

            <Link
              to="/orderrequest"
              className="order-link"
              onClick={closeMenu}
            >

              <span>Order Request</span>

              <span className="order-link-icon">
                <FaArrowRight />
              </span>

            </Link>

          </div>

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
        >

          {isMenuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* DECORATIVE BOTTOM LINE */}

      <div className="navbar-bottom-line"></div>

    </div>
  );
};

export default Navbar;
