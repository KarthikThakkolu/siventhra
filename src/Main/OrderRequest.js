
import React, { useState } from "react";
import "./OrderRequest.css";

import {
  FaWhatsapp,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClipboardList,
  FaRupeeSign,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const OrderRequest = () => {
  const [orderFormData, setOrderFormData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    customerLocation: "",
    customerService: "",
    customerBudget: "",
    customerTime: "",
    customerMessage: "",
  });

  const orderInputChange = (event) => {
    const { name, value } = event.target;

    setOrderFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const sendWhatsappMessage = (event) => {
    event.preventDefault();

    const whatsappMessage = `Hello Siventhra Interior & Decors,

I would like to request a quotation.

----------------------------

Name : ${orderFormData.customerName}
Phone : ${orderFormData.customerPhone}
Email : ${orderFormData.customerEmail}
Location : ${orderFormData.customerLocation}
Service : ${orderFormData.customerService}
Budget : ${orderFormData.customerBudget}
Preferred Time : ${orderFormData.customerTime}

Project Details :

${orderFormData.customerMessage}

----------------------------

Please contact me.

Thank You.`;

    const whatsappURL = `https://wa.me/916383431936?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const features = [
    "Free Interior Consultation",
    "Customized Design Solutions",
    "Affordable Pricing",
    "Premium Quality Materials",
    "Reliable Project Delivery",
  ];

  return (
    <div className="order-page-main">

      {/* HERO */}

      <div className="order-page-hero">
        <div className="order-hero-decoration order-hero-decoration-one"></div>
        <div className="order-hero-decoration order-hero-decoration-two"></div>

        <div className="order-page-badge">
          <div className="order-badge-dot"></div>
          YOUR DREAM SPACE STARTS HERE
        </div>

        <div className="order-page-title">
          Let's Create Something
          <div className="order-title-highlight">
            Beautiful Together.
          </div>
        </div>

        <div className="order-page-description">
          Tell us about your home, your ideas, and your vision.
          Our team will help you find the perfect interior solution
          with beautiful designs and pricing tailored to your needs.
        </div>

        <div className="order-hero-bottom">
          <div className="order-hero-line"></div>
          <div className="order-hero-bottom-text">
            DESIGNED AROUND YOU
          </div>
          <div className="order-hero-line"></div>
        </div>
      </div>


      {/* MAIN CONTENT */}

      <div className="order-page-container">

        {/* LEFT INFORMATION PANEL */}

        <div className="order-left-panel">

          <div className="order-left-top">

            <div className="order-panel-label">
              <FaStar />
              WHY SIVENTHRA
            </div>

            <div className="order-left-title">
              Interiors that feel
              <div className="order-left-title-highlight">
                like home.
              </div>
            </div>

            <div className="order-left-description">
              Thoughtfully designed spaces, quality materials,
              and personal attention at every step. We bring
              your vision to life with care and creativity.
            </div>

          </div>


          {/* FEATURES */}

          <div className="order-feature-list">

            {features.map((feature, index) => (
              <div className="order-feature-card" key={index}>

                <div className="order-feature-icon">
                  <FaCheckCircle />
                </div>

                <div className="order-feature-text">
                  {feature}
                </div>

                <div className="order-feature-arrow">
                  <FaArrowRight />
                </div>

              </div>
            ))}

          </div>


          {/* CUSTOMER HIGHLIGHT */}

          <div className="order-highlight-box">

            <div className="order-highlight-top">
              <div className="order-highlight-small">
                BUILT ON TRUST
              </div>

              <div className="order-highlight-star">
                <FaStar />
              </div>
            </div>

            <div className="order-highlight-number">
              500<div className="order-highlight-plus">+</div>
            </div>

            <div className="order-highlight-text">
              Happy Customers Across Nellore
            </div>

            <div className="order-highlight-bottom-line"></div>

          </div>


          {/* WHATSAPP CONTACT */}

          <a
            className="order-contact-box"
            href="https://wa.me/916383431936"
            target="_blank"
            rel="noopener noreferrer"
          >

            <div className="order-contact-icon">
              <FaWhatsapp />
            </div>

            <div className="order-contact-content">

              <div className="order-contact-caption">
                HAVE A QUICK QUESTION?
              </div>

              <div className="order-contact-title">
                Chat with our team
              </div>

              <div className="order-contact-value">
                +91 63834 31936
              </div>

            </div>

            <div className="order-contact-arrow">
              <FaArrowRight />
            </div>

          </a>

        </div>


        {/* RIGHT FORM PANEL */}

        <div className="order-right-panel">

          <div className="order-form-heading-area">

            <div className="order-form-heading-left">

              <div className="order-form-label">
                <div className="order-form-label-dot"></div>
                GET STARTED
              </div>

              <div className="order-form-title">
                Request a Quote
              </div>

              <div className="order-form-subtitle">
                A few details are all we need to get started.
              </div>

            </div>

            <div className="order-form-decoration">
              <FaClipboardList />
            </div>

          </div>


          {/* FORM */}

          <form
            className="order-form-wrapper"
            onSubmit={sendWhatsappMessage}
          >

            <div className="order-form-grid">

              {/* NAME */}

              <div className="order-input-group">
                <div className="order-field-label">
                  Full Name <div className="order-required">*</div>
                </div>

                <div className="order-input-box">
                  <div className="order-input-icon">
                    <FaUser />
                  </div>

                  <input
                    className="order-input-field"
                    type="text"
                    name="customerName"
                    placeholder="Enter your full name"
                    value={orderFormData.customerName}
                    onChange={orderInputChange}
                    autoComplete="name"
                    aria-label="Full Name"
                    required
                  />
                </div>
              </div>


              {/* PHONE */}

              <div className="order-input-group">
                <div className="order-field-label">
                  Phone Number <div className="order-required">*</div>
                </div>

                <div className="order-input-box">
                  <div className="order-input-icon">
                    <FaPhoneAlt />
                  </div>

                  <input
                    className="order-input-field"
                    type="tel"
                    name="customerPhone"
                    placeholder="Enter your phone number"
                    value={orderFormData.customerPhone}
                    onChange={orderInputChange}
                    autoComplete="tel"
                    aria-label="Phone Number"
                    required
                  />
                </div>
              </div>


              {/* EMAIL */}

              <div className="order-input-group">
                <div className="order-field-label">
                  Email Address
                </div>

                <div className="order-input-box">
                  <div className="order-input-icon">
                    <FaEnvelope />
                  </div>

                  <input
                    className="order-input-field"
                    type="email"
                    name="customerEmail"
                    placeholder="Enter your email"
                    value={orderFormData.customerEmail}
                    onChange={orderInputChange}
                    autoComplete="email"
                    aria-label="Email Address"
                  />
                </div>
              </div>


              {/* LOCATION */}

              <div className="order-input-group">
                <div className="order-field-label">
                  Project Location
                </div>

                <div className="order-input-box">
                  <div className="order-input-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <input
                    className="order-input-field"
                    type="text"
                    name="customerLocation"
                    placeholder="City / Area"
                    value={orderFormData.customerLocation}
                    onChange={orderInputChange}
                    autoComplete="address-level2"
                    aria-label="Project Location"
                  />
                </div>
              </div>


              {/* SERVICE */}

              <div className="order-input-group">
                <div className="order-field-label">
                  Service Required <div className="order-required">*</div>
                </div>

                <div className="order-input-box">
                  <div className="order-input-icon">
                    <FaClipboardList />
                  </div>

                  <select
                    className="order-select-field"
                    name="customerService"
                    value={orderFormData.customerService}
                    onChange={orderInputChange}
                    aria-label="Service Required"
                    required
                  >
                    <option value="">Choose a service</option>
                    <option value="Curtains">Curtains</option>
                    <option value="Blinds">Blinds</option>
                    <option value="Wallpapers">Wallpapers</option>
                    <option value="False Ceiling">False Ceiling</option>
                    <option value="Mosquito Mesh">Mosquito Mesh</option>
                    <option value="PVC Room Partition">PVC Room Partition</option>
                    <option value="Wall Panels">Wall Panels</option>
                    <option value="Modular Interiors">Modular Interiors</option>
                  </select>
                </div>
              </div>


              {/* BUDGET */}

              <div className="order-input-group">
                <div className="order-field-label">
                  Estimated Budget
                </div>

                <div className="order-input-box">
                  <div className="order-input-icon">
                    <FaRupeeSign />
                  </div>

                  <select
                    className="order-select-field"
                    name="customerBudget"
                    value={orderFormData.customerBudget}
                    onChange={orderInputChange}
                    aria-label="Estimated Budget"
                  >
                    <option value="">Select your budget</option>
                    <option value="Below ₹10,000">Below ₹10,000</option>
                    <option value="₹10,000 - ₹30,000">₹10,000 - ₹30,000</option>
                    <option value="₹30,000 - ₹60,000">₹30,000 - ₹60,000</option>
                    <option value="₹60,000 - ₹1,00,000">₹60,000 - ₹1,00,000</option>
                    <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                  </select>
                </div>
              </div>


              {/* CONTACT TIME */}

              <div className="order-input-group order-input-full">
                <div className="order-field-label">
                  Preferred Contact Time
                </div>

                <div className="order-input-box">
                  <div className="order-input-icon">
                    <FaClock />
                  </div>

                  <select
                    className="order-select-field"
                    name="customerTime"
                    value={orderFormData.customerTime}
                    onChange={orderInputChange}
                    aria-label="Preferred Contact Time"
                  >
                    <option value="">When should we contact you?</option>
                    <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                    <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                    <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                    <option value="Any Time">Any Time</option>
                  </select>
                </div>
              </div>

            </div>


            {/* PROJECT DETAILS */}

            <div className="order-textarea-section">

              <div className="order-field-label">
                Project Details
              </div>

              <div className="order-textarea-box">
                <textarea
                  className="order-message-field"
                  rows="4"
                  name="customerMessage"
                  placeholder="Tell us what you're looking for... Mention room size, design ideas, colors, materials, or anything else."
                  value={orderFormData.customerMessage}
                  onChange={orderInputChange}
                  aria-label="Project Details"
                />
              </div>

              <div className="order-message-helper">
                Share your ideas so we can understand your project better.
              </div>

            </div>


            {/* SUBMIT */}

            <button
              className="order-submit-button"
              type="submit"
            >
              <div className="order-submit-icon">
                <FaWhatsapp />
              </div>

              <div className="order-submit-text">
                Send Request via WhatsApp
              </div>

              <div className="order-submit-arrow">
                <FaPaperPlane />
              </div>
            </button>


            {/* PRIVACY NOTE */}

            <div className="order-form-bottom-note">
              <FaCheckCircle />
              <div>
                Your details are only used to respond to your enquiry.
              </div>
            </div>

          </form>

        </div>

      </div>

      <div className="order-page-bottom-decoration">
        <div className="order-bottom-line"></div>
        <div className="order-bottom-text">
          SIVENTHRA INTERIOR & DECORS
        </div>
        <div className="order-bottom-line"></div>
      </div>

    </div>
  );
};

export default OrderRequest;
