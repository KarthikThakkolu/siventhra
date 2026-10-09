import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaRulerCombined,
  FaTruck,
  FaShieldAlt,
  FaRegHeart
} from "react-icons/fa";
import "./Curtains.css";

const productImages = [
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    alt: "Elegant curtains in a modern living room"
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
    alt: "Neutral window styling in a bright interior"
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
    alt: "Soft neutral interior and fabric textures"
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
    alt: "Contemporary home interior"
  }
];

const fabricOptions = [
  { name: "Sheer", description: "Soft daylight", color: "#eee7dc" },
  { name: "Linen", description: "Natural texture", color: "#c9bba7" },
  { name: "Blackout", description: "More light control", color: "#8a8178" },
  { name: "Velvet", description: "Rich, plush finish", color: "#6b625e" }
];

const collections = [
  {
    title: "Sheer Curtains",
    description: "Airy fabrics that soften daylight while adding a graceful finish.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
    tag: "LIGHT & AIRY"
  },
  {
    title: "Blackout Curtains",
    description: "A practical choice for bedrooms and spaces that need more privacy.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900",
    tag: "PRIVACY & COMFORT"
  },
  {
    title: "Textured Curtains",
    description: "Subtle texture and timeless tones for a considered interior.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900",
    tag: "TIMELESS STYLE"
  }
];

export default function Curtains() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedFabric, setSelectedFabric] = useState("Linen");
  const [selectedRoom, setSelectedRoom] = useState("Living room");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [detailsOpen, setDetailsOpen] = useState(true);

  const enquiryMessage = `Hello Siventhra Interiors, I would like a quote for curtains. Fabric: ${selectedFabric}. Room: ${selectedRoom}. Width: ${width || "Not measured"}; Height: ${height || "Not measured"}.`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(enquiryMessage)}`;

  return (
    <main className="curtain-shop-page">
      <div className="curtain-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Curtains</span>
        <span>/</span>
        <span className="breadcrumb-current">Made-to-measure curtains</span>
      </div>

      {/* PRODUCT DETAIL: image on the left, shopping details on the right */}
      <section className="curtain-product-layout">
        <div className="curtain-gallery">
          <div className="curtain-main-image-wrap">
            <img
              className="curtain-main-image"
              src={productImages[activeImage].src}
              alt={productImages[activeImage].alt}
            />
            <span className="curtain-image-badge">MADE FOR YOUR HOME</span>
            <button
              type="button"
              className="curtain-image-heart"
              aria-label="Save curtain inspiration"
              onClick={() => window.alert("Save this design by bookmarking this page.")}
            >
              <FaRegHeart />
            </button>
          </div>

          <div className="curtain-thumbnails" aria-label="Curtain image gallery">
            {productImages.map((image, index) => (
              <button
                type="button"
                key={image.src}
                className={`curtain-thumbnail ${activeImage === index ? "is-active" : ""}`}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={activeImage === index}
              >
                <img src={image.src} alt={image.alt} />
              </button>
            ))}
          </div>
          <p className="curtain-gallery-note">Room images are for style inspiration. Fabric and colour appearance may vary by screen.</p>
        </div>

        <div className="curtain-product-info">
          <p className="curtain-eyebrow">SIVENTHRA INTERIORS · WINDOW COLLECTION</p>
          <h1 className="curtain-product-title">Made-to-Measure Curtains</h1>
          <div className="curtain-review-line">
            <span className="curtain-stars" aria-label="Five star design inspiration">★★★★★</span>
            <span>Designed around your space</span>
          </div>

          <p className="curtain-product-intro">
            Give your windows a finished look with carefully selected fabrics,
            custom sizing and professional stitching. Choose a style that suits
            your room, and we’ll help you plan the details.
          </p>

          <div className="curtain-price-area">
            <span className="curtain-price-label">CUSTOM PRICING</span>
            <p className="curtain-price">Request a quote</p>
            <p className="curtain-price-caption">Pricing depends on fabric, measurements and finishing.</p>
          </div>

          <div className="curtain-option-block">
            <div className="curtain-option-heading">
              <span>Choose fabric style</span>
              <span className="curtain-selected-value">{selectedFabric}</span>
            </div>
            <div className="curtain-fabric-options">
              {fabricOptions.map((fabric) => (
                <button
                  type="button"
                  key={fabric.name}
                  className={`curtain-fabric-option ${selectedFabric === fabric.name ? "is-selected" : ""}`}
                  onClick={() => setSelectedFabric(fabric.name)}
                  aria-pressed={selectedFabric === fabric.name}
                >
                  <span className="curtain-fabric-swatch" style={{ backgroundColor: fabric.color }}>
                    {selectedFabric === fabric.name && <FaCheck />}
                  </span>
                  <span className="curtain-fabric-option-name">{fabric.name}</span>
                  <span className="curtain-fabric-option-desc">{fabric.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="curtain-option-block">
            <label className="curtain-field-label" htmlFor="curtain-room">Where will you use them?</label>
            <select
              id="curtain-room"
              className="curtain-select"
              value={selectedRoom}
              onChange={(event) => setSelectedRoom(event.target.value)}
            >
              <option>Living room</option>
              <option>Bedroom</option>
              <option>Dining room</option>
              <option>Office</option>
              <option>Hotel or commercial space</option>
            </select>
          </div>

          <div className="curtain-measurement-block">
            <div className="curtain-option-heading">
              <span>Approximate window size</span>
              <span className="curtain-optional">Optional</span>
            </div>
            <div className="curtain-measurement-fields">
              <label>
                <span>Width</span>
                <div className="curtain-input-with-unit">
                  <input
                    type="number"
                    min="0"
                    value={width}
                    onChange={(event) => setWidth(event.target.value)}
                    placeholder="e.g. 120"
                  />
                  <span>in / cm</span>
                </div>
              </label>
              <label>
                <span>Height / drop</span>
                <div className="curtain-input-with-unit">
                  <input
                    type="number"
                    min="0"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    placeholder="e.g. 96"
                  />
                  <span>in / cm</span>
                </div>
              </label>
            </div>
            <p className="curtain-measurement-hint">Measurements are optional. Our team can help you measure your windows.</p>
          </div>

          <div className="curtain-product-actions">
            <a className="curtain-primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              Request a Quote <FaArrowRight />
            </a>
            <Link className="curtain-secondary-button" to="/contact">Talk to our team</Link>
          </div>

          <div className="curtain-trust-points">
            <div><FaRulerCombined /><span>Custom measurements</span></div>
            <div><FaTruck /><span>Installation support</span></div>
            <div><FaShieldAlt /><span>Quality finishing</span></div>
          </div>

          <div className="curtain-detail-accordion">
            <button
              type="button"
              className="curtain-accordion-trigger"
              onClick={() => setDetailsOpen(!detailsOpen)}
              aria-expanded={detailsOpen}
            >
              Fabric and product details <FaChevronDown className={detailsOpen ? "is-open" : ""} />
            </button>
            {detailsOpen && (
              <div className="curtain-accordion-content">
                <p><strong>Fabric:</strong> Choose from sheer, linen-look, blackout and velvet styles.</p>
                <p><strong>Finish:</strong> Discuss pleats, lining, tracks and accessories when requesting your quote.</p>
                <p><strong>Fit:</strong> Made to suit your window measurements and preferred curtain drop.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="curtain-benefits-strip" aria-label="Our curtain service">
        <div><span className="curtain-benefit-number">01</span><div><strong>Choose your style</strong><p>Explore fabric types and finishes.</p></div></div>
        <div><span className="curtain-benefit-number">02</span><div><strong>Measure your window</strong><p>Share sizes or ask us for help.</p></div></div>
        <div><span className="curtain-benefit-number">03</span><div><strong>Get your quote</strong><p>Plan your curtains with our team.</p></div></div>
      </section>

      <section className="curtain-collection-section">
        <div className="curtain-section-heading">
          <p className="curtain-eyebrow">FIND YOUR LOOK</p>
          <h2>Explore curtain styles</h2>
          <p>Different fabrics create different moods. Find the look that feels right for your room.</p>
        </div>
        <div className="curtain-collection-grid">
          {collections.map((item) => (
            <article className="curtain-collection-card" key={item.title}>
              <div className="curtain-collection-image-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span>{item.tag}</span>
              </div>
              <div className="curtain-collection-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="curtain-text-link">
                  Ask about this style <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="curtain-bottom-cta">
        <div>
          <p className="curtain-eyebrow">LET’S MAKE IT YOURS</p>
          <h2>Not sure which fabric to choose?</h2>
          <p>Tell us about your room and we’ll help you explore suitable curtain styles.</p>
        </div>
        <Link to="/orderrequest" className="curtain-primary-button">Plan my curtains <FaArrowRight /></Link>
      </section>
    </main>
  );
}
