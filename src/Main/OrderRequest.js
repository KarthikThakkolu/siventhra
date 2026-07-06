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

    setOrderFormData({
      ...orderFormData,
      [name]: value,
    });

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

    window.open(whatsappURL, "_blank");

  };

  return (

    <div className="order-page-main">

      {/* HERO */}

      <div className="order-page-hero">

        <div className="order-page-badge">
          REQUEST A FREE QUOTATION
        </div>

        <div className="order-page-title">
          Tell Us About Your Dream Interior
        </div>

        <div className="order-page-description">
          Share your requirements with us and receive a personalized quotation
          directly through WhatsApp. Fast response, expert guidance, and
          completely free consultation.
        </div>

      </div>

      {/* CONTENT */}

      <div className="order-page-container">

        {/* LEFT */}

        <div className="order-left-panel">

          <div className="order-left-title">
            Why Choose Siventhra?
          </div>

          <div className="order-left-description">
            Every project receives personal attention from our experienced
            designers. We focus on quality, affordability, and customer
            satisfaction.
          </div>

          <div className="order-feature-card">

            <div className="order-feature-icon">
              <FaCheckCircle />
            </div>

            <div className="order-feature-text">
              Free Interior Consultation
            </div>

          </div>

          <div className="order-feature-card">

            <div className="order-feature-icon">
              <FaCheckCircle />
            </div>

            <div className="order-feature-text">
              Customized Design Solutions
            </div>

          </div>

          <div className="order-feature-card">

            <div className="order-feature-icon">
              <FaCheckCircle />
            </div>

            <div className="order-feature-text">
              Affordable Pricing
            </div>

          </div>

          <div className="order-feature-card">

            <div className="order-feature-icon">
              <FaCheckCircle />
            </div>

            <div className="order-feature-text">
              Premium Quality Materials
            </div>

          </div>

          <div className="order-feature-card">

            <div className="order-feature-icon">
              <FaCheckCircle />
            </div>

            <div className="order-feature-text">
              Fast Project Delivery
            </div>

          </div>

          <div className="order-highlight-box">

            <div className="order-highlight-number">
              500+
            </div>

            <div className="order-highlight-text">
              Happy Customers Across Nellore
            </div>

          </div>

          <div className="order-contact-box">

            <div className="order-contact-icon">
              <FaWhatsapp />
            </div>

            <div className="order-contact-content">

              <div className="order-contact-title">
                WhatsApp Support
              </div>

              <div className="order-contact-value">
                +91 63834 31936
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="order-right-panel">

          <div className="order-form-title">
            Request Your Quote
          </div>

          <div className="order-form-subtitle">
            Fill in the details below and we'll contact you shortly.
          </div>

          <form
            className="order-form-wrapper"
            onSubmit={sendWhatsappMessage}
          >

            <div className="order-form-grid">

              <div className="order-input-box">

                <div className="order-input-icon">
                  <FaUser />
                </div>

                <input
                  className="order-input-field"
                  type="text"
                  name="customerName"
                  placeholder="Full Name"
                  value={orderFormData.customerName}
                  onChange={orderInputChange}
                  required
                />

              </div>

              <div className="order-input-box">

                <div className="order-input-icon">
                  <FaPhoneAlt />
                </div>

                <input
                  className="order-input-field"
                  type="tel"
                  name="customerPhone"
                  placeholder="Phone Number"
                  value={orderFormData.customerPhone}
                  onChange={orderInputChange}
                  required
                />

              </div>

              <div className="order-input-box">

                <div className="order-input-icon">
                  <FaEnvelope />
                </div>

                <input
                  className="order-input-field"
                  type="email"
                  name="customerEmail"
                  placeholder="Email Address"
                  value={orderFormData.customerEmail}
                  onChange={orderInputChange}
                />

              </div>

              <div className="order-input-box">

                <div className="order-input-icon">
                  <FaMapMarkerAlt />
                </div>

                <input
                  className="order-input-field"
                  type="text"
                  name="customerLocation"
                  placeholder="Project Location"
                  value={orderFormData.customerLocation}
                  onChange={orderInputChange}
                />

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
                  required
                >

                  <option value="">Select Service</option>

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

                  <option value="">Estimated Budget</option>

                  <option>Below ₹10,000</option>
                  <option>₹10,000 - ₹30,000</option>
                  <option>₹30,000 - ₹60,000</option>
                  <option>₹60,000 - ₹1,00,000</option>
                  <option>Above ₹1,00,000</option>

                </select>

              </div>

              <div className="order-input-box order-input-full">

                <div className="order-input-icon">
                  <FaClock />
                </div>

                <select
                  className="order-select-field"
                  name="customerTime"
                  value={orderFormData.customerTime}
                  onChange={orderInputChange}
                >

                  <option value="">Preferred Contact Time</option>

                  <option>Morning (9AM - 12PM)</option>
                  <option>Afternoon (12PM - 4PM)</option>
                  <option>Evening (4PM - 8PM)</option>
                  <option>Any Time</option>

                </select>

              </div>

            </div>

            <div className="order-textarea-box">

              <textarea
                className="order-message-field"
                rows="6"
                name="customerMessage"
                placeholder="Describe your project requirements..."
                value={orderFormData.customerMessage}
                onChange={orderInputChange}
              />

            </div>

            <button
              className="order-submit-button"
              type="submit"
            >

              <FaWhatsapp />

              Send Request via WhatsApp

              <FaPaperPlane />

            </button>

          </form>

        </div>

      </div>

    </div>

  );

};

export default OrderRequest;