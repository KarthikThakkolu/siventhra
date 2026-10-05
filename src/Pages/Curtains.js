import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCouch,
  FaHome,
  FaHotel,
  FaBuilding
} from "react-icons/fa";

import "./Curtains.css";

const collections = [
  {
    title: "Sheer Curtains",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
    desc: "Soft daylight with elegant privacy for modern interiors."
  },
  {
    title: "Blackout Curtains",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900",
    desc: "Complete light control for bedrooms and theatres."
  },
  {
    title: "Velvet Curtains",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
    desc: "Luxury fabrics that add warmth and richness."
  },
  {
    title: "Linen Curtains",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900",
    desc: "Minimal, airy and timeless curtain collection."
  }
];

const Curtains = () => {
  return (
    <div className="curtain-page">

      {/* ================= HERO ================= */}

      <section className="hero">

  <div className="hero-overlay"></div>

  <div className="container hero-grid">

    <div className="hero-content">

      <p className="hero-tag">
        Premium Curtain Collection
      </p>

      <h1 className="hero-title">
        Curtains That
        <br />
        Complete Every
        <span className="hero-title-highlight">
          {" "}Beautiful Home
        </span>
      </h1>

      <p className="hero-description">
        Discover premium curtains crafted with luxury fabrics,
        elegant stitching and professional installation.
        Designed to elevate every living space with timeless beauty.
      </p>

      <div className="hero-buttons">

        <Link
          to="/orderrequest"
          className="btn-primary"
        >
          Get Free Quote
        </Link>

        <Link
          to="/contact"
          className="btn-secondary"
        >
          Explore Collection
        </Link>

      </div>

    </div>

    <div className="hero-image">

      <img
        className="hero-image-photo"
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000"
        alt="Curtains"
      />

    </div>

  </div>

</section>

{/* ================= STATS ================= */}

<section className="stats">

  <div className="container stats-grid">

    <div className="stats-card">

      <h2 className="stats-number">
        500+
      </h2>

      <p className="stats-text">
        Projects Completed
      </p>

    </div>

    <div className="stats-card">

      <h2 className="stats-number">
        1000+
      </h2>

      <p className="stats-text">
        Fabric Designs
      </p>

    </div>

    <div className="stats-card">

      <h2 className="stats-number">
        10+
      </h2>

      <p className="stats-text">
        Years Experience
      </p>

    </div>

    <div className="stats-card">

      <h2 className="stats-number">
        100%
      </h2>

      <p className="stats-text">
        Customer Satisfaction
      </p>

    </div>

  </div>

</section>

      {/* ================= COLLECTIONS ================= */}

     {/* ================= COLLECTIONS ================= */}

<section className="collections">

  <div className="section-heading">

    <p className="section-tag">
      OUR COLLECTIONS
    </p>

    <h2 className="section-title">
      Premium Curtain Collections
    </h2>

    <p className="section-description">
      Choose from luxury fabrics designed for modern homes
      and commercial interiors.
    </p>

  </div>

  <div className="container collection-grid">

    {collections.map((item, index) => (

      <div
        className="collection-card"
        key={index}
      >

        <div className="collection-image">

          <img
            className="collection-photo"
            src={item.image}
            alt={item.title}
          />

        </div>

        <div className="collection-content">

          <h3 className="collection-title">
            {item.title}
          </h3>

          <p className="collection-description">
            {item.desc}
          </p>

          <button className="collection-button">

            <span className="collection-button-text">
              Explore Collection
            </span>

            <FaArrowRight className="collection-button-icon" />

          </button>

        </div>

      </div>

    ))}

  </div>

</section>
      {/* ================= ABOUT ================= */}

      {/* ================= ABOUT ================= */}

<section className="about-curtains">

  <div className="container about-grid">

    <div className="about-image">

      <img
        className="about-photo"
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900"
        alt="Curtains"
      />

    </div>

    <div className="about-content">

      <p className="about-tag">
        WHY CURTAINS MATTER
      </p>

      <h2 className="about-title">
        Luxury Meets Everyday Comfort
      </h2>

      <p className="about-description">

        Curtains are more than window coverings.
        They enhance privacy, lighting, comfort,
        energy efficiency and elevate the beauty
        of every interior.

      </p>

      <div className="features">

        <div className="feature-item">

          <FaCheckCircle className="feature-icon"/>

          <span className="feature-text">
            Premium Fabrics
          </span>

        </div>

        <div className="feature-item">

          <FaCheckCircle className="feature-icon"/>

          <span className="feature-text">
            Custom Stitching
          </span>

        </div>

        <div className="feature-item">

          <FaCheckCircle className="feature-icon"/>

          <span className="feature-text">
            Designer Collections
          </span>

        </div>

        <div className="feature-item">

          <FaCheckCircle className="feature-icon"/>

          <span className="feature-text">
            Professional Installation
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
            {/* ================= CURTAIN CATEGORIES ================= */}

     {/* ================= CURTAIN CATEGORIES ================= */}

<section className="categories">

  <div className="section-heading">

    <p className="section-tag">
      SHOP BY CATEGORY
    </p>

    <h2 className="section-title">
      Find Curtains For Every Space
    </h2>

    <p className="section-description">
      Designed for every room with premium fabrics,
      elegant colors and modern styles.
    </p>

  </div>

  <div className="container category-grid">

    <div className="category-card">

      <FaHome className="category-icon"/>

      <h3 className="category-title">
        Living Room
      </h3>

      <p className="category-description">
        Elegant sheer and designer curtains that
        enhance your living room beautifully.
      </p>

    </div>

    <div className="category-card">

      <FaCouch className="category-icon"/>

      <h3 className="category-title">
        Bedroom
      </h3>

      <p className="category-description">
        Blackout curtains for complete privacy
        and peaceful sleep.
      </p>

    </div>

    <div className="category-card">

      <FaHotel className="category-icon"/>

      <h3 className="category-title">
        Hotels
      </h3>

      <p className="category-description">
        Premium hospitality curtain
        collections with elegant finishing.
      </p>

    </div>

    <div className="category-card">

      <FaBuilding className="category-icon"/>

      <h3 className="category-title">
        Offices
      </h3>

      <p className="category-description">
        Professional window solutions for
        modern commercial interiors.
      </p>

    </div>

  </div>

</section>
      {/* ================= WHY CHOOSE US ================= */}

     {/* ================= WHY CHOOSE US ================= */}

<section className="why-us">

  <div className="container why-grid">

    <div className="why-left">

      <p className="why-tag">
        WHY CHOOSE US
      </p>

      <h2 className="why-title">
        Crafted With Precision,
        Designed For Luxury
      </h2>

      <p className="why-description">

        Every curtain is measured,
        stitched and installed by
        experienced professionals.

        We combine premium fabrics,
        elegant accessories and modern
        craftsmanship.

      </p>

      <div className="why-list">

        <div className="why-item">

          <FaCheckCircle className="why-icon"/>

          <span className="why-text">
            Free Site Measurement
          </span>

        </div>

        <div className="why-item">

          <FaCheckCircle className="why-icon"/>

          <span className="why-text">
            Premium Imported Fabrics
          </span>

        </div>

        <div className="why-item">

          <FaCheckCircle className="why-icon"/>

          <span className="why-text">
            Custom Stitching
          </span>

        </div>

        <div className="why-item">

          <FaCheckCircle className="why-icon"/>

          <span className="why-text">
            Professional Installation
          </span>

        </div>

      </div>

    </div>

    <div className="why-right">

      <div className="feature-box">

        <h3 className="feature-number">
          1000+
        </h3>

        <p className="feature-label">
          Fabric Options
        </p>

      </div>

      <div className="feature-box">

        <h3 className="feature-number">
          500+
        </h3>

        <p className="feature-label">
          Happy Homes
        </p>

      </div>

      <div className="feature-box">

        <h3 className="feature-number">
          10+
        </h3>

        <p className="feature-label">
          Years Experience
        </p>

      </div>

      <div className="feature-box">

        <h3 className="feature-number">
          100%
        </h3>

        <p className="feature-label">
          Quality Assured
        </p>

      </div>

    </div>

  </div>

</section>

      {/* ================= FABRIC SHOWCASE ================= */}

     {/* ================= FABRIC SHOWCASE ================= */}

<section className="fabric-showcase">

  <div className="section-heading">

    <p className="section-tag">
      PREMIUM FABRICS
    </p>

    <h2 className="section-title">
      Luxury Fabrics You'll Love
    </h2>

  </div>

  <div className="container fabric-grid">

    <div className="fabric-card">

      <img
        className="fabric-image"
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700"
        alt="Sheer Curtains"
      />

      <div className="fabric-content">

        <h3 className="fabric-title">
          Sheer Collection
        </h3>

        <p className="fabric-description">
          Soft daylight with elegant privacy.
        </p>

      </div>

    </div>

    <div className="fabric-card">

      <img
        className="fabric-image"
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700"
        alt="Blackout Curtains"
      />

      <div className="fabric-content">

        <h3 className="fabric-title">
          Blackout Collection
        </h3>

        <p className="fabric-description">
          Complete darkness for peaceful sleep.
        </p>

      </div>

    </div>

    <div className="fabric-card">

      <img
        className="fabric-image"
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700"
        alt="Velvet Curtains"
      />

      <div className="fabric-content">

        <h3 className="fabric-title">
          Velvet Collection
        </h3>

        <p className="fabric-description">
          Rich textures with luxurious elegance.
        </p>

      </div>

    </div>

  </div>

</section>
            {/* ================= GALLERY ================= */}

    {/* ================= GALLERY ================= */}

<section className="gallery">

  <div className="section-heading">

    <p className="section-tag">
      OUR PROJECTS
    </p>

    <h2 className="section-title">
      Recent Curtain Installations
    </h2>

    <p className="section-description">
      Every installation is completed with precision,
      premium fabrics and elegant finishing.
    </p>

  </div>

  <div className="container gallery-grid">

    <div className="gallery-card">
      <img
        className="gallery-image"
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
        alt="Curtain Installation 1"
      />
    </div>

    <div className="gallery-card">
      <img
        className="gallery-image"
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900"
        alt="Curtain Installation 2"
      />
    </div>

    <div className="gallery-card">
      <img
        className="gallery-image"
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
        alt="Curtain Installation 3"
      />
    </div>

    <div className="gallery-card">
      <img
        className="gallery-image"
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900"
        alt="Curtain Installation 4"
      />
    </div>

  </div>

</section>
      {/* ================= TESTIMONIAL ================= */}

     {/* ================= TESTIMONIAL ================= */}

<section className="testimonial">

  <div className="container">

    <div className="testimonial-card">

      <p className="testimonial-tag">
        CUSTOMER REVIEW
      </p>

      <h2 className="testimonial-title">
        Excellent finishing and premium quality curtains.
      </h2>

      <p className="testimonial-description">

        Siventhra Interiors transformed our living room
        with elegant curtains. Their measurement,
        stitching and installation were perfect.

      </p>

      <div className="testimonial-user">

        <img
          className="testimonial-image"
          src="https://i.pravatar.cc/150?img=12"
          alt="Customer"
        />

        <div className="testimonial-details">

          <h4 className="testimonial-name">
            Karthik Thakkolu
          </h4>

          <p className="testimonial-location">
            Home Owner • Nellore
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ================= CTA ================= */}

     {/* ================= CTA ================= */}

<section className="cta">

  <div className="container cta-box">

    <div className="cta-content">

      <p className="cta-tag">
        LET'S DESIGN YOUR HOME
      </p>

      <h2 className="cta-title">
        Ready To Transform Your Windows?
      </h2>

      <p className="cta-description">

        Discover luxury curtain collections with
        professional measurement, stitching and
        installation.

      </p>

    </div>

    <div className="cta-buttons">

      <Link
        to="/orderrequest"
        className="btn-primary"
      >
        Get Free Quote
      </Link>

      <Link
        to="/contact"
        className="btn-secondary"
      >
        Contact Us
      </Link>

    </div>

  </div>

</section>
    </div>
  );
};

export default Curtains;