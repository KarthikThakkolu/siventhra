
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
    <section className="order-page-main">

      {/* HERO SECTION */}

      <div className="order-page-hero">

        <div className="order-page-badge">
          <span className="order-badge-dot"></span>
          YOUR DREAM SPACE STARTS HERE
        </div>

        <h1 className="order-page-title">
          Let's Create Something
          <span> Beautiful Together</span>
        </h1>

        <p className="order-page-description">
          Tell us about your home, your ideas, and your vision.
          Our team will help you find the perfect interior solution
          with beautiful designs and pricing tailored to your needs.
        </p>

        <div className="order-hero-bottom">
          <div className="order-hero-line"></div>
          <span>DESIGNED AROUND YOU</span>
          <div className="order-hero-line"></div>
        </div>

      </div>


      {/* MAIN CONTENT */}

      <div className="order-page-container">


        {/* LEFT INFORMATION PANEL */}

        <aside className="order-left-panel">

          <div className="order-left-top">

            <span className="order-panel-label">
              <FaStar />
              WHY SIVENTHRA
            </span>

            <h2 className="order-left-title">
              Interiors that feel
              <span> like home.</span>
            </h2>

            <p className="order-left-description">
              Thoughtfully designed spaces, quality materials,
              and personal attention at every step. We bring
              your vision to life with care and creativity.
            </p>

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

                <FaArrowRight className="order-feature-arrow" />

              </div>
            ))}

          </div>


          {/* SPECIAL HIGHLIGHT */}

          <div className="order-highlight-box">

            <div className="order-highlight-top">
              <span className="order-highlight-small">
                BUILT ON TRUST
              </span>

              <span className="order-highlight-star">
                <FaStar />
              </span>
            </div>

            <div className="order-highlight-number">
              500<span>+</span>
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

              <span className="order-contact-caption">
                HAVE A QUICK QUESTION?
              </span>

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

        </aside>



        {/* RIGHT FORM PANEL */}

        <div className="order-right-panel">

          <div className="order-form-heading-area">

            <div className="order-form-heading-left">

              <span className="order-form-label">
                <span className="order-form-label-dot"></span>
                GET STARTED
              </span>

              <h2 className="order-form-title">
                Request a Quote
              </h2>

              <p className="order-form-subtitle">
                A few details is all we need to get started.
              </p>

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

                <label className="order-field-label">
                  Full Name <span>*</span>
                </label>

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
                    required
                  />

                </div>

              </div>


              {/* PHONE */}

              <div className="order-input-group">

                <label className="order-field-label">
                  Phone Number <span>*</span>
                </label>

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
                    required
                  />

                </div>

              </div>


              {/* EMAIL */}

              <div className="order-input-group">

                <label className="order-field-label">
                  Email Address
                </label>

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
                  />

                </div>

              </div>


              {/* LOCATION */}

              <div className="order-input-group">

                <label className="order-field-label">
                  Project Location
                </label>

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
                  />

                </div>

              </div>


              {/* SERVICE */}

              <div className="order-input-group">

                <label className="order-field-label">
                  Service Required <span>*</span>
                </label>

                <div className="order-input-box">

                  <div className="order-input-icon">
                    <FaClipboardList />
                  </div>

                  <select
                    className="order-select-field"
                    name="customerService"
                    value={orderFormData.customerService}
                    onChange={orderInputChange}
                    required
                  >

                    <option value="">Choose a service</option>
                    <option>Curtains</option>
                    <option>Blinds</option>
                    <option>Wallpapers</option>
                    <option>False Ceiling</option>
                    <option>Mosquito Mesh</option>
                    <option>PVC Room Partition</option>
                    <option>Wall Panels</option>
                    <option>Modular Interiors</option>

                  </select>

                </div>

              </div>


              {/* BUDGET */}

              <div className="order-input-group">

                <label className="order-field-label">
                  Estimated Budget
                </label>

                <div className="order-input-box">

                  <div className="order-input-icon">
                    <FaRupeeSign />
                  </div>

                  <select
                    className="order-select-field"
                    name="customerBudget"
                    value={orderFormData.customerBudget}
                    onChange={orderInputChange}
                  >

                    <option value="">Select your budget</option>
                    <option>Below ₹10,000</option>
                    <option>₹10,000 - ₹30,000</option>
                    <option>₹30,000 - ₹60,000</option>
                    <option>₹60,000 - ₹1,00,000</option>
                    <option>Above ₹1,00,000</option>

                  </select>

                </div>

              </div>


              {/* CONTACT TIME */}

              <div className="order-input-group order-input-full">

                <label className="order-field-label">
                  Preferred Contact Time
                </label>

                <div className="order-input-box">

                  <div className="order-input-icon">
                    <FaClock />
                  </div>

                  <select
                    className="order-select-field"
                    name="customerTime"
                    value={orderFormData.customerTime}
                    onChange={orderInputChange}
                  >

                    <option value="">When should we contact you?</option>
                    <option>Morning (9AM - 12PM)</option>
                    <option>Afternoon (12PM - 4PM)</option>
                    <option>Evening (4PM - 8PM)</option>
                    <option>Any Time</option>

                  </select>

                </div>

              </div>

            </div>


            {/* PROJECT MESSAGE */}

            <div className="order-textarea-box">

              <label className="order-field-label">
                Project Details
              </label>

              <textarea
                className="order-message-field"
                rows="5"
                name="customerMessage"
                placeholder="Tell us what you're looking for... Mention room size, design ideas, colors, materials, or anything else."
                value={orderFormData.customerMessage}
                onChange={orderInputChange}
              />

            </div>


            {/* SUBMIT */}

            <button
              className="order-submit-button"
              type="submit"
            >

              <span className="order-submit-icon">
                <FaWhatsapp />
              </span>

              <span className="order-submit-text">
                Send Request via WhatsApp
              </span>

              <FaPaperPlane className="order-submit-arrow" />

            </button>


            <div className="order-form-bottom-note">
              <FaCheckCircle />
              <span>Your details are only used to respond to your enquiry.</span>
            </div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default OrderRequest;
