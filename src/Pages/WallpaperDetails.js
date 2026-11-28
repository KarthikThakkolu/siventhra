
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WallpaperDetails.css";

const wallpaperGallery = [
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=90",
];

const relatedWallpapers = [
  {
    name: "Botanical Garden",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Geometric Dreams",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Floral Elegance",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Tropical Forest",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Golden Texture",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80",
  },
];

const wallpaperFeatures = [
  {
    icon: "✦",
    title: "Premium",
    subtitle: "Quality",
  },
  {
    icon: "♢",
    title: "Long Lasting",
    subtitle: "& Durable",
  },
  {
    icon: "♧",
    title: "Easy to Clean",
    subtitle: "",
  },
  {
    icon: "⌂",
    title: "Perfect for",
    subtitle: "All Spaces",
  },
];

function WallpaperDetails() {
  const [activeImage, setActiveImage] = useState(0);

  const productName = "Nature Breeze – NW1024";

  const whatsappMessage = encodeURIComponent(
    `Hello Siventhra, I am interested in ${productName}. Please provide the price, catalogue and installation details.`
  );

  const whatsappLink = `https://wa.me/916383431936?text=${whatsappMessage}`;

  return (
    <div className="wallpaper-detail-page">

      {/* HERO BANNER */}
      <section className="wallpaper-detail-banner">
        <div className="wallpaper-detail-banner-content">
          <h2 className="wallpaper-detail-banner-title">
            Wallpapers
          </h2>

          <p className="wallpaper-detail-banner-subtitle">
            Nature's Elegance for Your Walls
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav className="wallpaper-detail-breadcrumb">
        <Link
          to="/"
          className="wallpaper-detail-breadcrumb-item"
        >
          Home
        </Link>

        <span className="wallpaper-detail-breadcrumb-separator">
          ›
        </span>

        <Link
          to="/Pages/Wallpapers"
          className="wallpaper-detail-breadcrumb-item"
        >
          Wallpapers
        </Link>

        <span className="wallpaper-detail-breadcrumb-separator">
          ›
        </span>

        <span className="wallpaper-detail-breadcrumb-current">
          Nature Collection
        </span>
      </nav>

      {/* PRODUCT SECTION */}
      <section className="wallpaper-detail-main">

        {/* IMAGE GALLERY */}
        <div className="wallpaper-detail-gallery">

          <div className="wallpaper-detail-thumbnails">
            {wallpaperGallery.map((image, index) => (
              <div
                key={index}
                className={`wallpaper-detail-thumbnail ${
                  activeImage === index
                    ? "wallpaper-detail-thumbnail-active"
                    : ""
                }`}
                onClick={() => setActiveImage(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    setActiveImage(index);
                  }
                }}
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  className="wallpaper-detail-thumbnail-image"
                  src={image}
                  alt={`Wallpaper view ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="wallpaper-detail-main-image-wrapper">
            <img
              className="wallpaper-detail-main-image"
              src={wallpaperGallery[activeImage]}
              alt={productName}
            />

            <span className="wallpaper-detail-image-badge">
              Premium Collection
            </span>
          </div>
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="wallpaper-detail-info">

          <div className="wallpaper-detail-info-top">
            <span className="wallpaper-detail-collection-tag">
              Nature Collection
            </span>

            <h2 className="wallpaper-detail-product-title">
              {productName}
            </h2>

            <div className="wallpaper-detail-rating">
              <span className="wallpaper-detail-stars">
                ★★★★★
              </span>

              <span className="wallpaper-detail-rating-text">
                4.8
              </span>

              <span className="wallpaper-detail-review-count">
                (120+ Reviews)
              </span>
            </div>

            <p className="wallpaper-detail-description">
              Bring the calming beauty of nature indoors
              with this elegant botanical leaf pattern
              wallpaper. Perfect for modern homes and offices.
            </p>
          </div>

          {/* SPECIFICATIONS */}
          <div className="wallpaper-detail-specifications">

            <div className="wallpaper-detail-spec-row">
              <span className="wallpaper-detail-spec-icon">
                ◈
              </span>

              <span className="wallpaper-detail-spec-label">
                Material
              </span>

              <span className="wallpaper-detail-spec-value">
                Premium Vinyl
              </span>
            </div>

            <div className="wallpaper-detail-spec-row">
              <span className="wallpaper-detail-spec-icon">
                ▧
              </span>

              <span className="wallpaper-detail-spec-label">
                Finish
              </span>

              <span className="wallpaper-detail-spec-value">
                Matte Finish
              </span>
            </div>

            <div className="wallpaper-detail-spec-row">
              <span className="wallpaper-detail-spec-icon">
                ⛶
              </span>

              <span className="wallpaper-detail-spec-label">
                Available Sizes
              </span>

              <span className="wallpaper-detail-spec-value">
                6 ft, 7 ft, 8 ft
              </span>
            </div>

            <div className="wallpaper-detail-spec-row">
              <span className="wallpaper-detail-spec-icon">
                ◉
              </span>

              <span className="wallpaper-detail-spec-label">
                Washable
              </span>

              <span className="wallpaper-detail-spec-value">
                Yes
              </span>
            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="wallpaper-detail-actions">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="wallpaper-detail-quote-button"
            >
              Get Quote <span>→</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="wallpaper-detail-whatsapp-button"
            >
              <span className="wallpaper-detail-whatsapp-icon">
                ◉
              </span>
              Chat on WhatsApp
            </a>

          </div>

          <div className="wallpaper-detail-delivery-note">
            <span className="wallpaper-detail-delivery-icon">
              ♧
            </span>

            <span className="wallpaper-detail-delivery-text">
              Custom designs, professional installation
              and service available.
            </span>
          </div>

        </div>

      </section>

      {/* FEATURES STRIP */}
      <section className="wallpaper-detail-features">
        {wallpaperFeatures.map((feature, index) => (
          <div
            className="wallpaper-detail-feature-card"
            key={index}
          >
            <span className="wallpaper-detail-feature-icon">
              {feature.icon}
            </span>

            <span className="wallpaper-detail-feature-title">
              {feature.title}
            </span>

            <span className="wallpaper-detail-feature-subtitle">
              {feature.subtitle}
            </span>
          </div>
        ))}
      </section>

      {/* BELOW PRODUCT SECTION */}
      <section className="wallpaper-detail-extra">

        <div className="wallpaper-detail-about">
          <div className="wallpaper-detail-suitable">

            <h3 className="wallpaper-detail-section-title">
              Suitable for
            </h3>

            <div className="wallpaper-detail-room-tags">
              <span className="wallpaper-detail-room-tag">
                Living Room
              </span>

              <span className="wallpaper-detail-room-tag">
                Bedroom
              </span>

              <span className="wallpaper-detail-room-tag">
                Office
              </span>

              <span className="wallpaper-detail-room-tag">
                Commercial
              </span>
            </div>

          </div>

          <div className="wallpaper-detail-design-about">
            <h3 className="wallpaper-detail-section-title">
              About This Design
            </h3>

            <p className="wallpaper-detail-about-description">
              A refreshing blend of green foliage and soft
              tones, this wallpaper creates a peaceful and
              stylish ambience. Ideal for contemporary
              interiors, living rooms, bedrooms and elegant
              office spaces.
            </p>
          </div>

        </div>

        {/* VIDEO PREVIEW */}
        <div className="wallpaper-detail-video-card">

          <img
            className="wallpaper-detail-video-image"
            src={wallpaperGallery[1]}
            alt="Wallpaper interior preview"
          />

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="wallpaper-detail-video-overlay"
          >
            <span className="wallpaper-detail-play-icon">
              ▶
            </span>

            <span className="wallpaper-detail-video-title">
              Explore this Design
            </span>
          </a>

        </div>

      </section>

      {/* RELATED PRODUCTS */}
      <section className="wallpaper-detail-related">

        <div className="wallpaper-detail-related-heading">
          <h3 className="wallpaper-detail-section-title">
            Related Wallpapers
          </h3>

          <Link
            to="/Pages/Wallpapers"
            className="wallpaper-detail-related-viewall"
          >
            View All →
          </Link>
        </div>

        <div className="wallpaper-detail-related-grid">
          {relatedWallpapers.map((product, index) => (
            <Link
              to="/Pages/Wallpapers"
              className="wallpaper-detail-related-card"
              key={index}
            >
              <img
                className="wallpaper-detail-related-image"
                src={product.image}
                alt={product.name}
              />

              <span className="wallpaper-detail-related-name">
                {product.name}
              </span>
            </Link>
          ))}
        </div>

      </section>

      {/* FINAL CTA */}
      <section className="wallpaper-detail-final-cta">

        <div className="wallpaper-detail-final-content">
          <h3 className="wallpaper-detail-final-title">
            Transform Your Walls with Siventhra
          </h3>

          <p className="wallpaper-detail-final-description">
            Discover beautiful wallpaper designs for
            every space. Let's make your dream interior
            a reality.
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="wallpaper-detail-final-button"
        >
          Enquire Now →
        </a>

      </section>

    </div>
  );
}

export default WallpaperDetails;
