import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
<ul className="footer-links">
  <li>
    <p className="footer-heading">About Us</p>
    We are a team of passionate innovators <br />
    committed to transforming industries <br />
    through technology and convenience.
  </li>
</ul>

<ul className="footer-links">
  <li>
    <p className="footer-heading">Quick Links</p>
    Home <br />
    About <br />
    Services <br />
    Contact
  </li>
</ul>

<ul className="footer-links">
  <li>
    <p className="footer-heading">Our Services</p>
    H&N Automation <br />
    Floor Designers <br />
    THE BEST <br />
    Pest Control Services
  </li>
</ul>

<ul className="footer-links">
  <li>
    <p className="footer-heading">Connect With Us</p>
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </li>
</ul>




       
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shiva Shankara Interior. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
