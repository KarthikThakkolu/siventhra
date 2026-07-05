import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      alert("✅ Message sent to WhatsApp!");
    } else {
      alert("❌ Error: " + result.error);
    }
  } catch (err) {
    alert("❌ Failed to send message.");
  }
};


  return (
    <div className="about-container">
      {/* ... Keep your existing content (top image, reviews, etc.) ... */}

      {/* ✉️ Contact Section */}
      <div className="container1">
        <div className="left-content">
          <h1>Get in Touch</h1>
          <p>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
          <div className="contact-details">
            <p>
              <i className="fa-solid fa-location-dot"></i> <span>Our Office</span> <br />
              123 Service Avenue, Home Park, Bangalore
            </p>
            <p>
              <i className="fa-solid fa-phone-volume"></i> <span>Phone</span> <br />
              +91 6383431936
            </p>
            <p>
              <i className="fa-solid fa-envelope-circle-check"></i> <span>Email</span> <br />
              ssinteriors99@gmail.com
            </p>
          </div>
        </div>

        <div className="right-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
