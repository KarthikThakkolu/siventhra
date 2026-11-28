
import React from "react";
import { Link } from "react-router-dom";
import "./Wallpapers.css";

const wallpaperStyles = [
  {
    name: "Modern",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Classic",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Nature",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Geometric",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Luxury",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Textured",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Abstract",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=80",
  },
];

const roomCollections = [
  {
    name: "Living Room",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Office",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
];

const bestSelling = [
  {
    name: "Nature Breeze",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Golden Floral",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Marble Luxury",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Botanical",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Black Gold",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Wood Texture",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
  },
];

const benefits = [
  { icon: "✦", title: "Premium Quality", subtitle: "Wallpapers" },
  { icon: "♢", title: "Long Lasting", subtitle: "& Durable" },
  { icon: "⌂", title: "Expert Installation", subtitle: "Support" },
  { icon: "♡", title: "Enhance Your Space", subtitle: "with Style" },
];

const wallpaperDetailsPath = "/Pages/WallpaperDetails";

const WallpaperCardLink = ({ children, className = "" }) => (
  <Link to={wallpaperDetailsPath} className={className}>
    {children}
  </Link>
);

function Wallpapers() {
  return (
    <div className="wallpaper-page">

      {/* HERO SECTION */}
      <section className="wallpaper-hero">
        <div className="wallpaper-hero-content">
          <span className="wallpaper-hero-small">
            Premium
          </span>

          <h2 className="wallpaper-hero-title">
            Wallpapers
          </h2>

          <p className="wallpaper-hero-description">
            Transform Your Walls,
            <br />
            Transform Your Life
          </p>

          <Link
            to={wallpaperDetailsPath}
            className="wallpaper-gold-button"
          >
            Explore Collections <span>→</span>
          </Link>
        </div>
      </section>

      {/* STYLE SECTION */}
      <section className="wallpaper-section">
        <div className="wallpaper-section-heading">
          <span className="wallpaper-heading-line"></span>
          <h3 className="wallpaper-section-title">
            Explore by Style
          </h3>
          <span className="wallpaper-heading-line"></span>
        </div>

        <div className="wallpaper-style-grid">
          {wallpaperStyles.map((style, index) => (
            <WallpaperCardLink
              key={index}
              className="wallpaper-style-card"
            >
              <div className="wallpaper-style-image-wrapper">
                <img
                  className="wallpaper-style-image"
                  src={style.image}
                  alt={style.name}
                />
              </div>

              <span className="wallpaper-style-name">
                {style.name}
              </span>
            </WallpaperCardLink>
          ))}
        </div>
      </section>

      {/* ROOM COLLECTIONS */}
      <section className="wallpaper-section">
        <div className="wallpaper-section-heading">
          <span className="wallpaper-heading-line"></span>
          <h3 className="wallpaper-section-title">
            Collections for Every Space
          </h3>
          <span className="wallpaper-heading-line"></span>
        </div>

        <div className="wallpaper-room-grid">
          {roomCollections.map((room, index) => (
            <WallpaperCardLink
              key={index}
              className="wallpaper-room-card"
            >
              <img
                className="wallpaper-room-image"
                src={room.image}
                alt={room.name}
              />

              <div className="wallpaper-room-overlay">
                <span className="wallpaper-room-name">
                  {room.name}
                </span>

                <span className="wallpaper-room-explore">
                  Explore →
                </span>
              </div>
            </WallpaperCardLink>
          ))}
        </div>
      </section>

      {/* BEST SELLING */}
      <section className="wallpaper-section">
        <div className="wallpaper-section-heading wallpaper-best-heading">
          <span className="wallpaper-heading-line"></span>
          <h3 className="wallpaper-section-title">
            Our Best Selling Wallpapers
          </h3>
          <span className="wallpaper-heading-line"></span>

          <Link
            to={wallpaperDetailsPath}
            className="wallpaper-view-all"
          >
            View All →
          </Link>
        </div>

        <div className="wallpaper-best-grid">
          {bestSelling.map((product, index) => (
            <WallpaperCardLink
              key={index}
              className="wallpaper-best-card"
            >
              <img
                className="wallpaper-best-image"
                src={product.image}
                alt={product.name}
              />

              <span className="wallpaper-best-name">
                {product.name}
              </span>
            </WallpaperCardLink>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="wallpaper-benefits">
        {benefits.map((benefit, index) => (
          <div className="wallpaper-benefit-card" key={index}>
            <span className="wallpaper-benefit-icon">
              {benefit.icon}
            </span>

            <span className="wallpaper-benefit-title">
              {benefit.title}
            </span>

            <span className="wallpaper-benefit-subtitle">
              {benefit.subtitle}
            </span>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="wallpaper-bottom-cta">
        <div className="wallpaper-cta-content">
          <span className="wallpaper-cta-title">
            Let's Create Beautiful Spaces Together
          </span>

          <span className="wallpaper-cta-description">
            Get expert advice and explore the perfect wallpaper
            for your space.
          </span>
        </div>

        <a
          href="https://wa.me/916383431936"
          className="wallpaper-cta-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <span>◉</span> Chat with Us
        </a>
      </section>

    </div>
  );
}

export default Wallpapers;
