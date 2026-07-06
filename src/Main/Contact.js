import React, { useState } from "react";
import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
} from "react-icons/fa";

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const contactInputChange = (event) => {
    const { name, value } = event.target;

    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  const contactFormSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! We'll contact you shortly.");

    setContactFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const whyChooseData = [
    "Premium Quality Materials",
    "Modern Interior Designs",
    "Affordable Pricing",
    "Experienced Professionals",
    "On-Time Project Delivery",
    "24×7 Customer Support",
  ];

  return (
    <div className="contact-page-main">

      {/* HERO */}

      <div className="contact-hero-section">

        <div className="contact-hero-badge">
          CONTACT SIVENTHRA
        </div>

        <div className="contact-hero-heading">
          Let's Design Your Dream Space
        </div>

        <div className="contact-hero-description">
          Whether you're renovating your home, designing a new office,
          or looking for premium interior solutions, our team is here
          to help you every step of the way.
        </div>

      </div>

      {/* CONTENT */}

      <div className="contact-content-wrapper">

        {/* LEFT */}

        <div className="contact-information-panel">

          <div className="contact-panel-heading">
            Get In Touch
          </div>

          <div className="contact-panel-text">
            We'd love to hear about your project.
            Reach out through any of the following ways.
          </div>

          <div className="contact-detail-card">

            <div className="contact-detail-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="contact-detail-content">

              <div className="contact-detail-title">
                Office Address
              </div>

              <div className="contact-detail-value">
                2nd Floor, Sridhar Krishna Towers,
                Annamayya Circle,
                Mini Bypass Road,
                Nellore - 524004
              </div>

            </div>

          </div>

          <div className="contact-detail-card">

            <div className="contact-detail-icon">
              <FaPhoneAlt />
            </div>

            <div className="contact-detail-content">

              <div className="contact-detail-title">
                Phone
              </div>

              <div className="contact-detail-value">
                +91 63834 31936
              </div>

            </div>

          </div>

          <div className="contact-detail-card">

            <div className="contact-detail-icon">
              <FaEnvelope />
            </div>

            <div className="contact-detail-content">

              <div className="contact-detail-title">
                Email
              </div>

              <div className="contact-detail-value">
                siventhra5@gmail.com
              </div>

            </div>

          </div>

          <div className="contact-detail-card">

            <div className="contact-detail-icon">
              <FaClock />
            </div>

            <div className="contact-detail-content">

              <div className="contact-detail-title">
                Working Hours
              </div>

              <div className="contact-detail-value">
                Monday - Sunday <br />
                24 × 7 Available
              </div>

            </div>

          </div>

          <div className="contact-social-row">

            <div className="contact-social-button">
              <FaFacebookF />
            </div>

            <div className="contact-social-button">
              <FaInstagram />
            </div>

            <div className="contact-social-button">
              <FaWhatsapp />
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-form-panel">

          <div className="contact-form-heading">
            Send Us A Message
          </div>

          <div className="contact-form-subheading">
            Fill out the form below and we'll get back to you within 24 hours.
          </div>

          <form
            className="contact-form-wrapper"
            onSubmit={contactFormSubmit}
          >

            <div className="contact-input-group">

              <div className="contact-input-icon">
                <FaUser />
              </div>

              <input
                className="contact-input-field"
                type="text"
                placeholder="Full Name"
                name="name"
                value={contactFormData.name}
                onChange={contactInputChange}
              />

            </div>

            <div className="contact-input-group">

              <input
                className="contact-input-field"
                type="email"
                placeholder="Email Address"
                name="email"
                value={contactFormData.email}
                onChange={contactInputChange}
              />

            </div>

            <div className="contact-input-group">

              <input
                className="contact-input-field"
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={contactFormData.phone}
                onChange={contactInputChange}
              />

            </div>

            <div className="contact-input-group">

              <select
                className="contact-input-field"
                name="service"
                value={contactFormData.service}
                onChange={contactInputChange}
              >

                <option value="">
                  Select Service
                </option>

                <option>
                  Curtains
                </option>

                <option>
                  Wallpapers
                </option>

                <option>
                  Blinds
                </option>

                <option>
                  PVC Partitions
                </option>

                <option>
                  Mosquito Mesh
                </option>

                <option>
                  Modular Interiors
                </option>

              </select>

            </div>

            <div className="contact-textarea-group">

              <textarea
                className="contact-message-field"
                rows="6"
                placeholder="Tell us about your project..."
                name="message"
                value={contactFormData.message}
                onChange={contactInputChange}
              />

            </div>

            <button
              className="contact-submit-button"
              type="submit"
            >

              <FaPaperPlane />

              Send Inquiry

            </button>

          </form>

        </div>

      </div>

      {/* WHY CHOOSE */}

      <div className="contact-why-section">

        <div className="contact-why-small-title">
          WHY CHOOSE US
        </div>

        <div className="contact-why-main-title">
          Why Homeowners Trust Siventhra
        </div>

        <div className="contact-why-grid">

          {whyChooseData.map((item, index) => (

            <div
              className="contact-why-card"
              key={index}
            >

              <div className="contact-why-icon">
                <FaCheckCircle />
              </div>

              <div className="contact-why-text">
                {item}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Contact;