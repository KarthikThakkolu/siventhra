import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Home = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      url: "https://i.pinimg.com/736x/59/3c/17/593c1764523530d5f3e0f2ff8fd6b06d.jpg",
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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
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
                <h1 className="slider-overlay-title">{img.title}</h1>

                <p className="slider-overlay-subtitle">
                  {img.subtitle}
                </p>

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

      <button className="slider-arrow-prev" onClick={prevSlide}>
        ❮
      </button>

      <button className="slider-arrow-next" onClick={nextSlide}>
        ❯
      </button>

      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${
              index === current ? "active" : ""
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Home;