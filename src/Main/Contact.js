
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
  FaArrowRight,
  FaHeadset,
  FaStar,
  FaRegCompass,
  FaComments,
} from "react-icons/fa";

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const contactInputChange = (event) => {
    const { name, value } = event.target;

    setContactFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
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

    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Our Office",
      lines: [
        "2nd Floor, Sridhar Krishna Towers,",
        "Annamayya Circle, Mini Bypass Road,",
        "Nellore - 524004",
      ],
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      lines: ["+91 63834 31936"],
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      lines: ["siventhra5@gmail.com"],
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      lines: ["Monday - Sunday", "24 × 7 Available"],
    },
  ];

  const whyChooseData = [
    "Premium Quality Materials",
    "Modern Interior Designs",
    "Affordable Pricing",
    "Experienced Professionals",
    "On-Time Project Delivery",
    "24×7 Customer Support",
  ];

  const services = [
    "Curtains",
    "Wallpapers",
    "Blinds",
    "PVC Partitions",
    "Mosquito Mesh",
    "Modular Interiors",
    "False Ceilings",
    "Wall Panels",
  ];

  return (
    <div className="contact-page-main">

      {/* HERO SECTION */}

      <div className="contact-hero-section">

        <div className="contact-hero-decoration contact-hero-decoration-one"></div>
        <div className="contact-hero-decoration contact-hero-decoration-two"></div>

        <div className="contact-hero-content">

          <div className="contact-hero-badge">
            <div className="contact-hero-badge-line"></div>
            CONTACT SIVENTHRA
            <div className="contact-hero-badge-line"></div>
          </div>

          <div className="contact-hero-heading">
            Let's create
            <div className="contact-hero-heading-accent">
              something beautiful.
            </div>
          </div>

          <div className="contact-hero-description">
            Every beautiful space begins with a conversation.
            Tell us your ideas, share your vision and let's bring
            your dream interior to life.
          </div>

          <div className="contact-hero-bottom">
            <div className="contact-hero-bottom-icon">
              <FaComments />
            </div>

            <div className="contact-hero-bottom-text">
              We're here to listen, guide and create.
            </div>
          </div>

        </div>

        <div className="contact-hero-side">

          <div className="contact-hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
              alt="Beautiful modern interior"
              className="contact-hero-image"
            />
          </div>

          <div className="contact-hero-floating-card">
            <div className="contact-hero-floating-icon">
              <FaStar />
            </div>

            <div>
              <div className="contact-hero-floating-title">
                Your vision matters
              </div>

              <div className="contact-hero-floating-description">
                Let's make it happen.
              </div>
            </div>
          </div>

          <div className="contact-hero-image-caption">
            SIVENTHRA · CREATIVE SPACES
          </div>

        </div>

        <div className="contact-hero-bottom-line">
          <div>01 — LET'S CONNECT</div>
          <div className="contact-hero-line"></div>
          <div>WE WOULD LOVE TO HEAR FROM YOU</div>
        </div>

      </div>


      {/* MAIN CONTACT AREA */}

      <div className="contact-content-wrapper">

        {/* LEFT INFORMATION PANEL */}

        <div className="contact-information-panel">

          <div className="contact-panel-top">

            <div className="contact-section-label">
              <div className="contact-section-label-line"></div>
              GET IN TOUCH
            </div>

            <div className="contact-panel-heading">
              Let's start a
              <div className="contact-panel-heading-accent">
                conversation.
              </div>
            </div>

            <div className="contact-panel-text">
              Have a question or planning a new project?
              Connect with us. Our team is always happy to help
              you find the right interior solution.
            </div>

          </div>


          <div className="contact-detail-list">

            {contactDetails.map((detail, index) => (
              <div
                className="contact-detail-card"
                key={detail.title}
                style={{ "--contact-delay": `${index * 100}ms` }}
              >

                <div className="contact-detail-icon">
                  {detail.icon}
                </div>

                <div className="contact-detail-content">

                  <div className="contact-detail-title">
                    {detail.title}
                  </div>

                  <div className="contact-detail-value">
                    {detail.lines.map((line, lineIndex) => (
                      <div key={lineIndex}>{line}</div>
                    ))}
                  </div>

                </div>

                <div className="contact-detail-arrow">
                  <FaArrowRight />
                </div>

              </div>
            ))}

          </div>


          <div className="contact-social-area">

            <div className="contact-social-heading">
              CONNECT WITH US
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


          <div className="contact-information-footer">

            <div className="contact-information-footer-icon">
              <FaHeadset />
            </div>

            <div>
              <div className="contact-information-footer-title">
                Need assistance?
              </div>

              <div className="contact-information-footer-text">
                Our team is ready to help you.
              </div>
            </div>

          </div>

        </div>


        {/* RIGHT FORM PANEL */}

        <div className="contact-form-panel">

          <div className="contact-form-top">

            <div className="contact-section-label">
              <div className="contact-section-label-line"></div>
              SEND AN INQUIRY
            </div>

            <div className="contact-form-heading">
              Tell us about
              <div className="contact-form-heading-accent">
                your project.
              </div>
            </div>

            <div className="contact-form-subheading">
              Share a few details and we'll get back to you
              with the right ideas for your space.
            </div>

          </div>


          <form
            className="contact-form-wrapper"
            onSubmit={contactFormSubmit}
          >

            <div className="contact-form-row">

              <div className="contact-form-field">

                <div className="contact-field-label">
                  Your Name
                </div>

                <div className="contact-input-group">
                  <div className="contact-input-icon">
                    <FaUser />
                  </div>

                  <input
                    className="contact-input-field"
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    value={contactFormData.name}
                    onChange={contactInputChange}
                    required
                  />
                </div>

              </div>


              <div className="contact-form-field">

                <div className="contact-field-label">
                  Email Address
                </div>

                <div className="contact-input-group">
                  <div className="contact-input-icon">
                    <FaEnvelope />
                  </div>

                  <input
                    className="contact-input-field"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={contactFormData.email}
                    onChange={contactInputChange}
                    required
                  />
                </div>

              </div>

            </div>


            <div className="contact-form-row">

              <div className="contact-form-field">

                <div className="contact-field-label">
                  Phone Number
                </div>

                <div className="contact-input-group">
                  <div className="contact-input-icon">
                    <FaPhoneAlt />
                  </div>

                  <input
                    className="contact-input-field"
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={contactFormData.phone}
                    onChange={contactInputChange}
                    required
                  />
                </div>

              </div>


              <div className="contact-form-field">

                <div className="contact-field-label">
                  Service Interested In
                </div>

                <div className="contact-input-group contact-select-group">

                  <div className="contact-input-icon">
                    <FaRegCompass />
                  </div>

                  <select
                    className="contact-input-field"
                    name="service"
                    value={contactFormData.service}
                    onChange={contactInputChange}
                    required
                  >

                    <option value="">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option value={service} key={service}>
                        {service}
                      </option>
                    ))}

                  </select>

                </div>

              </div>

            </div>


            <div className="contact-form-field contact-message-form-field">

              <div className="contact-field-label">
                Tell Us About Your Project
              </div>

              <div className="contact-textarea-group">

                <textarea
                  className="contact-message-field"
                  rows="5"
                  placeholder="Describe your ideas, requirements or questions..."
                  name="message"
                  value={contactFormData.message}
                  onChange={contactInputChange}
                  required
                />

                <div className="contact-message-decoration">
                  <FaComments />
                </div>

              </div>

            </div>


            <div className="contact-form-bottom">

              <div className="contact-form-note">
                <FaCheckCircle />
                Your details are safe with us.
              </div>

              <button
                className="contact-submit-button"
                type="submit"
              >
                <div>Send Inquiry</div>
                <FaPaperPlane />
              </button>

            </div>

            {submitted && (
              <div className="contact-success-message">
                <FaCheckCircle />
                Thank you! Your inquiry has been submitted.
              </div>
            )}

          </form>


          <div className="contact-form-footer">
            <div className="contact-form-footer-line"></div>
            <div>WE LOOK FORWARD TO HEARING FROM YOU</div>
            <div className="contact-form-footer-line"></div>
          </div>

        </div>

      </div>


      {/* WHY CHOOSE US */}

      <div className="contact-why-section">

        <div className="contact-why-heading">

          <div className="contact-section-label">
            <div className="contact-section-label-line"></div>
            THE SIVENTHRA DIFFERENCE
            <div className="contact-section-label-line"></div>
          </div>

          <div className="contact-why-main-title">
            Why homeowners
            <div className="contact-why-title-accent">
              trust Siventhra.
            </div>
          </div>

          <div className="contact-why-description">
            Thoughtful solutions, dependable service and quality
            craftsmanship — everything your space deserves.
          </div>

        </div>


        <div className="contact-why-grid">

          {whyChooseData.map((item, index) => (

            <div
              className="contact-why-card"
              key={item}
              style={{ "--contact-delay": `${index * 80}ms` }}
            >

              <div className="contact-why-number">
                0{index + 1}
              </div>

              <div className="contact-why-icon">
                <FaCheckCircle />
              </div>

              <div className="contact-why-text">
                {item}
              </div>

              <div className="contact-why-arrow">
                <FaArrowRight />
              </div>

            </div>

          ))}

        </div>

      </div>


      {/* FINAL CONTACT BANNER */}

      <div className="contact-final-banner">

        <div className="contact-final-decoration"></div>

        <div className="contact-final-content">

          <div className="contact-final-label">
            YOUR DREAM SPACE STARTS HERE
          </div>

          <div className="contact-final-title">
            Have an idea?
            <div className="contact-final-title-accent">
              Let's make it real.
            </div>
          </div>

          <div className="contact-final-description">
            A beautiful space begins with one simple conversation.
            Get in touch with Siventhra today.
          </div>

          <div className="contact-final-phone">
            <FaPhoneAlt />
            +91 63834 31936
          </div>

        </div>

        <div className="contact-final-bottom">
          CREATIVE SPACES · HAPPY FACES
        </div>

      </div>

    </div>
  );
};

export default Contact;
