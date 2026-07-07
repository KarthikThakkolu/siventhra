import React from "react";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

// import logo from "./assets/logo.png";

function Footer() {
  return (
    <>
      {/* CTA SECTION */}

      {/* <section className="footer-top">
        <h2>Ready to Transform Your Space?</h2>

        <p>
          Get a free consultation and quote. We'll make your dream interior a
          reality!
        </p>

        <a
          href="https://wa.me/916383431936"
          target="_blank"
          rel="noopener noreferrer"
          className="quote-btn"
        >
          <FaWhatsapp />
          Get Free Quote on WhatsApp
        </a>
      </section> */}

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-container">

          {/* LEFT */}

          <div className="footer-col about">

            {/* <img src={logo} alt="logo" className="footer-logo" /> */}

            <p>
              Siventhra — Your one-stop destination for all interior design,
              home decor, automation & maintenance services in Nellore,
              Andhra Pradesh.
            </p>

            <h4>Creative Spaces, Happy Faces</h4>

          </div>

          {/* QUICK LINKS */}

          <div className="footer-col">

            <h3>Quick Links</h3>

            <ul>

              <li><a href="/">Home</a></li>

              <li><a href="/about">About</a></li>

              <li><a href="/services">Services</a></li>

              <li><a href="/expertise">Expertise</a></li>

              <li><a href="/process">Process</a></li>

              <li><a href="/reviews">Reviews</a></li>

              <li><a href="/contact">Contact</a></li>

            </ul>

          </div>

          {/* SERVICES */}

          <div className="footer-col">

            <h3>Top Services</h3>

            <ul>

              <li>Drapes & Blinds</li>

              <li>Wallpaper & Wall Panels</li>

              <li>False Ceiling</li>

              <li>Modular Kitchen</li>

              <li>Home Automation</li>

              <li>Flooring Solutions</li>

              <li>Pest Control</li>

            </ul>

          </div>

          {/* CONTACT */}

          <div className="footer-col">

            <h3>Contact</h3>

            <ul>

              <li>
                <FaPhoneAlt />
                +91 63834 31936
              </li>

              <li>
                <FaEnvelope />
                siventhra5@gmail.com
              </li>

              <li>
                <FaInstagram />
                @SSID_2025
              </li>

              <li>
                <FaWhatsapp />
                WhatsApp Us
              </li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Siventhra Interior & Decors. All rights reserved. | Made with
          ❤️ in Nellore
        </div>

      </footer>
    </>
  );
}

export default Footer;