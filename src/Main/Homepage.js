import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import About from "./About";

const Homepage = () => {
  const navigate = useNavigate();
  const [feedbackList, setFeedbackList] = useState([]);
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({ name: "", message: "" });

  // Fetch feedbacks
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/feedback");
        const data = await response.json();
        if (data.success && Array.isArray(data.feedbacks)) {
          setFeedbackList(data.feedbacks);
        } else {
          setFeedbackList([]);
        }
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
      }
    };
    fetchFeedbacks();
  }, []);

  // Calculate summary
  const totalFeedbacks = feedbackList.length;
  const averageRating =
    totalFeedbacks > 0
      ? (feedbackList.reduce((sum, fb) => sum + fb.rating, 0) / totalFeedbacks).toFixed(1)
      : 0;

  // Slider navigation
  const images = [
    {
      url: "https://www.hindustantimes.com/ht-img/img/2024/01/20/550x309/smrt_lock_1705734461390_1705734461631.jpg",
      title: "Modern Interior Design",
      subtitle: "Advanced Locking Systems for Your Safety",
      link: "/services/ss-automation",
    },
    {
      url: "https://miro.medium.com/1*UcaVRSzrIWP3q1fNqaTgkw.jpeg",
      title: "Floor Designers",
      subtitle: "Transforms Your Space with Elegance",
      link: "/services/floor-designers",
    },
    {
      url: "https://img.freepik.com/premium-photo/stylish-modern-living-room-interior-design-3d-render-8k-image_901408-22328.jpg",
      title: "The Best Interior Products",
      subtitle: "Create Your Dream Living Space",
      link: "/services/the-best",
    },
    {
      url: "https://mothernaturesinc.com/wp-content/uploads/2024/02/WhyProfessionalPestControlServicesareVitalforHomes.jpg",
      title: "Pest Control Services",
      subtitle: "Protect your home from unwanted guests",
      link: "/services/pest-control",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 9000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleSubmit = async () => {
    if (!formData.name || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    const response = await fetch("http://localhost:5000/send-sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  const services = [
    {
      img: "https://hnthebest.com/services_hn.jpg",
      title: "Home Automation",
      desc: "Advanced security solutions for your peace of mind",
      link: "/services/ss-automation",
    },
    {
      img: "https://hnthebest.com/service_wonder_flooring.jpg",
      title: "Floor Designers",
      desc: "Expert flooring solutions including vinyl, hardwood, and more",
      link: "/services/floor-designers",
    },
    {
      img: "https://hnthebest.com/services_the_best.jpg",
      title: "ALL Product",
      desc: "Transform your space with our interior design services",
      link: "/services/the-best",
    },
    {
      img: "https://hnthebest.com/service_pest_control.jpg",
      title: "Pest Control Services",
      desc: "Professional pest control services for your home and business",
      link: "/services/pest-control",
    },
  ];

  return (
    <div className="home-wrapper">

      {/* Slider */}
      <div className="slider-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slider-slide ${index === current ? "active" : ""}`}
          >
            {index === current && (
              <>
                <img src={img.url} alt={img.title} />
                <div className="slider-overlay">
                  <div className="slider-overlay-title">{img.title}</div>
                  <div className="slider-overlay-subtitle">{img.subtitle}</div>
                  <button
                    className="slider-overlay-button"
                    onClick={() => navigate(img.link)}
                  >
                    Get Started
                  </button>
                </div>
              </>
            )}
          </div>
        ))}

        <button className="slider-arrow-prev" onClick={prevSlide}>❮</button>
        <button className="slider-arrow-next" onClick={nextSlide}>❯</button>

        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`slider-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="services-wrapper">
        <div className="services-wrapper-title">Our Services</div>
        <div className="services-wrapper-description">
          We offer reliable home services designed to make daily living easier and your home better.
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-item">
              <img src={service.img} alt={service.title} className="service-item-img" />
              <div className="service-item-title">{service.title}</div>
              <div className="service-item-desc">{service.desc}</div>
              <button
                className="service-item-button"
                onClick={() => navigate(service.link)}
              >
                Check Products
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback */}
      <div className="feedback-section">
        <div className="feedback-section-title">Customer Feedback Summary</div>
        <div>Total Feedbacks: {totalFeedbacks}</div>
        <div>
          Average Rating: {averageRating} / 5 {"★".repeat(Math.round(averageRating))}
        </div>

        <div className="feedback-list-wrapper">
          {feedbackList.map((fb, i) => (
            <div key={i} className="feedback-card-item">
              <div className="feedback-card-name">{fb.name}</div>
              <div className="feedback-card-stars">
                {"★".repeat(fb.rating)}{"☆".repeat(5 - fb.rating)}
              </div>
              <div className="feedback-card-message">{fb.message}</div>
              <div className="feedback-card-date">
                {fb.timestamp
                  ? new Date(fb.timestamp).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "No date"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <About />
    </div>
  );
};

export default Homepage;
