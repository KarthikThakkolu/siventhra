
import React, { useState } from "react";
import {
  FaLeaf,
  FaSearch,
  FaShoppingBag,
  FaArrowRight,
  FaShieldAlt,
  FaRulerCombined,
  FaTools,
  FaUser,
  FaGem,
  FaUsers,
  FaStar,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "../Main/Newhomepage.css";

const products = [
  {
    title: "Wallpapers",
    description: "Transform your walls with stunning designs.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    link: "/wallpapers",
  },
  {
    title: "Curtains",
    description: "Add elegance and comfort to your space.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    link: "/curtains",
  },
  {
    title: "Wooden Blinds",
    description: "Control light, style your space.",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=85",
    link: "/blinds",
  },
];

const advantages = [
  {
    icon: <FaGem />,
    title: "Premium Quality Products",
  },
  {
    icon: <FaShieldAlt />,
    title: "Custom Solutions",
  },
  {
    icon: <FaUsers />,
    title: "Design & Installation Support",
  },
];

const benefits = [
  {
    icon: <FaShieldAlt />,
    title: "Premium Quality",
    description: "Materials",
  },
  {
    icon: <FaRulerCombined />,
    title: "Custom Sizes",
    description: "& Designs",
  },
  {
    icon: <FaTools />,
    title: "Professional",
    description: "Installation",
  },
  {
    icon: <FaUser />,
    title: "Expert",
    description: "Guidance",
  },
];

const testimonials = [
  {
    quote: "Amazing quality drapes!",
    name: "Priya",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote: "The wallpaper transformed our living room!",
    name: "Ananya",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote: "Beautiful designs and excellent service!",
    name: "Meera",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
];

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    title: "Elegant Interiors",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    title: "Curtain Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=600&q=80",
    title: "Modern Living",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    title: "Beautiful Spaces",
  },
];

function Newhomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const heroSlides = [
    {
      eyebrow: "WALLPAPERS  |  CURTAINS  |  BLINDS",
      title: (
        <>
          Beautiful Spaces.
          <br />
          Better Living.
        </>
      ),
      description:
        "Premium wallpapers, curtains & blinds for your dream spaces.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
    },
    {
      eyebrow: "DESIGN  |  COMFORT  |  QUALITY",
      title: (
        <>
          Style Your Home.
          <br />
          Love Your Space.
        </>
      ),
      description:
        "Discover timeless designs made for beautiful everyday living.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
    },
    {
      eyebrow: "PERSONALIZED INTERIOR SOLUTIONS",
      title: (
        <>
          Your Vision.
          <br />
          Our Inspiration.
        </>
      ),
      description:
        "Thoughtful designs, custom sizes and professional installation.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=90",
    },
  ];

  const currentSlide = heroSlides[activeSlide];

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect this handler to your backend/API to save enquiries.
    console.log("Consultation enquiry:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      service: "",
    });
  };

  const scrollToConsultation = () => {
    document
      .getElementById("consultation")
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  return (
    <main className="siv-home">
      {/* ================= NAVBAR ================= */}
      <header className="siv-header">
        <div className="siv-navbar">
          <a className="siv-logo" href="/" aria-label="Siventhra home">
            <span className="siv-logo-icon">
              <FaLeaf />
            </span>

            <span className="siv-logo-copy">
              <strong>Siventhra</strong>
              <small>Creative spaces, Happy faces.</small>
            </span>
          </a>

          <button
            type="button"
            className="siv-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav
            className={`siv-nav ${menuOpen ? "siv-nav-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <div className="siv-nav-products">
              <a href="#collections" onClick={() => setMenuOpen(false)}>
                Products <FaChevronDown />
              </a>

              <div className="siv-dropdown">
                <a href="/wallpapers">Wallpapers</a>
                <a href="/curtains">Curtains</a>
                <a href="/blinds">Wooden Blinds</a>
                <a href="/custom-solutions">Custom Solutions</a>
              </div>
            </div>

            <a href="#why-us" onClick={() => setMenuOpen(false)}>
              About Us
            </a>

            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>

            <a href="#consultation" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <div className="siv-header-actions">
            <button
              type="button"
              className="siv-icon-btn"
              aria-label="Search products"
              onClick={() => {
                window.location.href = "/search";
              }}
            >
              <FaSearch />
            </button>

            <a
              href="/cart"
              className="siv-icon-btn siv-cart"
              aria-label="Shopping cart"
            >
              <FaShoppingBag />
            </a>

            <button
              type="button"
              className="siv-quote-btn"
              onClick={scrollToConsultation}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        className="siv-hero"
        id="home"
        style={{
          backgroundImage: `url("${currentSlide.image}")`,
        }}
      >
        <div className="siv-hero-overlay" />

        <div className="siv-hero-content" key={activeSlide}>
          <span className="siv-hero-eyebrow">
            {currentSlide.eyebrow}
          </span>

          <h1>{currentSlide.title}</h1>

          <p>{currentSlide.description}</p>

          <a href="#collections" className="siv-primary-btn">
            Explore Our Collection <FaArrowRight />
          </a>
        </div>

        <div className="siv-hero-dots" aria-label="Hero slides">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.eyebrow}
              className={activeSlide === index ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={activeSlide === index}
            />
          ))}
        </div>
      </section>

      {/* ================= BENEFITS STRIP ================= */}
      <section className="siv-benefits" aria-label="Our benefits">
        <div className="siv-benefits-inner">
          {benefits.map((benefit) => (
            <div className="siv-benefit-item" key={benefit.title}>
              <span className="siv-benefit-icon">{benefit.icon}</span>

              <div>
                <strong>{benefit.title}</strong>
                <span>{benefit.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COLLECTIONS ================= */}
      <section className="siv-collections siv-section" id="collections">
        <div className="siv-container">
          <div className="siv-section-heading">
            <div>
              <span className="siv-eyebrow">OUR PRODUCTS</span>
              <h2>Explore Our Collections</h2>
              <span className="siv-heading-line" />
            </div>

            <a href="/products" className="siv-text-link">
              View All Products <FaArrowRight />
            </a>
          </div>

          <div className="siv-product-grid">
            {products.map((product) => (
              <a
                className="siv-product-card"
                href={product.link}
                key={product.title}
                style={{
                  backgroundImage: `url("${product.image}")`,
                }}
              >
                <span className="siv-product-shade" />

                <div className="siv-product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>

                <span className="siv-product-arrow">
                  <FaArrowRight />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="siv-why" id="why-us">
        <div className="siv-container siv-why-inner">
          <div className="siv-why-heading">
            <span className="siv-eyebrow">WHY CHOOSE SIVENTHRA</span>
            <h2>Your Space, Our Inspiration</h2>
            <span className="siv-heading-line" />
          </div>

          <div className="siv-why-features">
            {advantages.map((item) => (
              <div className="siv-why-item" key={item.title}>
                <span>{item.icon}</span>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS + GALLERY ================= */}
      <section className="siv-social-proof siv-section">
        <div className="siv-container">
          <h2 className="siv-main-heading">Loved by Our Clients</h2>

          <div className="siv-social-grid">
            <div className="siv-left-column">
              <div className="siv-testimonials">
                {testimonials.map((item) => (
                  <article
                    className="siv-testimonial-card"
                    key={item.name}
                  >
                    <img
                      className="siv-testimonial-avatar"
                      src={item.image}
                      alt=""
                      loading="lazy"
                    />

                    <p className="siv-testimonial-quote">
                      "{item.quote}"
                    </p>

                    <strong>{item.name}</strong>

                    <div className="siv-stars" aria-label="5 out of 5 stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              {/* GALLERY IMAGES */}
              <div className="siv-gallery" id="gallery">
                {galleryImages.map((item) => (
                  <a
                    href="/gallery"
                    className="siv-gallery-item"
                    key={item.title}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <span className="siv-gallery-caption">
                      <strong>{item.title}</strong>
                      <span>View Gallery <FaArrowRight /></span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* CONSULTATION SECTION - BELOW GALLERY, ABOVE FOOTER */}
            <section
              className="siv-consultation"
              id="consultation"
              aria-labelledby="siv-consultation-title"
            >
              <h2 id="siv-consultation-title">
                Request a Free Consultation
              </h2>

              <div className="siv-consultation-panel">
                <div className="siv-consultation-promo">
                  <span className="siv-promo-decoration">
                    <FaLeaf />
                  </span>

                  <h3>
                    Transform
                    <br />
                    Your Space
                  </h3>

                  <p>
                    Get a free home measurement and design consultation.
                  </p>

                  <ul>
                    <li><FaCheckCircle /> Personalized designs</li>
                    <li><FaCheckCircle /> Custom measurements</li>
                    <li><FaCheckCircle /> Expert guidance</li>
                  </ul>
                </div>

                <form
                  className="siv-consultation-form"
                  onSubmit={handleSubmit}
                >
                  <label className="siv-sr-only" htmlFor="siv-name">
                    Your name
                  </label>
                  <input
                    id="siv-name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />

                  <label className="siv-sr-only" htmlFor="siv-phone">
                    Phone number
                  </label>
                  <input
                    id="siv-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[+]?[0-9 ()-]{7,20}"
                    title="Enter a valid phone number."
                    required
                  />

                  <label className="siv-sr-only" htmlFor="siv-service">
                    Select a service
                  </label>
                  <select
                    id="siv-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="Wallpapers">Wallpapers</option>
                    <option value="Curtains">Curtains</option>
                    <option value="Wooden Blinds">Wooden Blinds</option>
                    <option value="Custom Solutions">Custom Solutions</option>
                    <option value="Interior Consultation">
                      Interior Consultation
                    </option>
                  </select>

                  <button type="submit" className="siv-submit-btn">
                    Request Consultation <FaArrowRight />
                  </button>

                  {submitted && (
                    <p className="siv-success-message" role="status">
                      Thank you! Your enquiry has been received in this
                      session. Connect the form to your backend to save
                      and process enquiries.
                    </p>
                  )}
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="siv-footer">
        <div className="siv-container">
          <div className="siv-footer-grid">
            <div className="siv-footer-brand">
              <a href="#home" className="siv-footer-logo">
                <FaLeaf />
                <span>Siventhra</span>
              </a>

              <p>
                Creative spaces, happy faces. We bring comfort and
                character to every corner of your home.
              </p>

              <div className="siv-social-links">
                <a href="https://instagram.com/" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com/" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://linkedin.com/" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="siv-footer-column">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#why-us">About Us</a>
              <a href="#gallery">Gallery</a>
              <a href="#consultation">Contact</a>
              <a href="/blog">Blog</a>
            </div>

            <div className="siv-footer-column">
              <h3>Our Products</h3>
              <a href="/wallpapers">Wallpapers</a>
              <a href="/curtains">Curtains</a>
              <a href="/blinds">Wooden Blinds</a>
              <a href="/custom-solutions">Custom Solutions</a>
            </div>

            <div className="siv-footer-column">
              <h3>Our Services</h3>
              <a href="/measurement">Custom Measurements</a>
              <a href="/installation">Installation</a>
              <a href="/consultation">Design Consultation</a>
              <a href="/support">Customer Support</a>
            </div>

            <div className="siv-footer-contact">
              <h3>Contact Info</h3>

              <p>
                <FaEnvelope />
                <a href="mailto:info@siventhra.com">
                  info@siventhra.com
                </a>
              </p>

              <p>
                <FaPhoneAlt />
                <a href="tel:+9125267299">+91 22526 7299</a>
              </p>

              <p>
                <FaMapMarkerAlt />
                <span>
                  Showroom Address
                  <br />
                  Add your actual showroom address here.
                </span>
              </p>

              <button
                type="button"
                className="siv-footer-quote"
                onClick={scrollToConsultation}
              >
                Get a Free Quote <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="siv-footer-bottom">
            <p>
              © {new Date().getFullYear()} Siventhra. All rights reserved.
            </p>

            <div>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Newhomepage;