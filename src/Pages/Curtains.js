import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaRulerCombined,
  FaShieldAlt,
  FaPalette
} from "react-icons/fa";

import "./Curtains.css";

const Curtains = () => {
  return (
    <div className="curtains-page">

      {/*======================================================
                        HERO SECTION
      ======================================================*/}

      <section className="curtains-hero-section">

        <div className="curtains-hero-overlay"></div>

        <div className="curtains-hero-content">

          <div className="curtains-hero-small-title">
            PREMIUM CURTAIN COLLECTION
          </div>

          <h1 className="curtains-hero-title">

            Beautiful Curtains
            <br />

            For Every Interior

          </h1>

          <p className="curtains-hero-description">

            Transform your living spaces with premium curtains
            designed for elegance, privacy, comfort and style.
            At Siventhra Interior & Decors we provide custom
            stitched curtains for homes, apartments,
            villas and commercial interiors.

          </p>

          <div className="curtains-hero-buttons">

            <Link
              to="/orderrequest"
              className="curtains-primary-button"
            >
              Get Free Quote
            </Link>

            <Link
              to="/contact"
              className="curtains-secondary-button"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      {/*======================================================
                     INTRODUCTION
      ======================================================*/}

      <section className="curtains-introduction-section">

        <div className="curtains-introduction-container">

          {/* IMAGE */}

          <div className="curtains-introduction-image-box">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
              alt="Premium Curtains"
              className="curtains-introduction-image"
            />

          </div>

          {/* CONTENT */}

          <div className="curtains-introduction-content">

            <div className="curtains-section-small-title">
              ABOUT CURTAINS
            </div>

            <h2 className="curtains-section-title">

              Curtains That Blend
              Comfort & Luxury

            </h2>

            <p className="curtains-section-description">

              Curtains are more than window coverings.
              They define the ambience of your room,
              improve privacy, reduce sunlight and
              enhance interior beauty.

              <br /><br />

              Siventhra Interior & Decors provides
              premium quality curtain fabrics,
              customized stitching,
              modern accessories
              and professional installation.

            </p>

            <div className="curtains-highlight-grid">

              <div className="curtains-highlight-card">

                <FaCheckCircle />

                <span>
                  Premium Fabric
                </span>

              </div>

              <div className="curtains-highlight-card">

                <FaPalette />

                <span>
                  Elegant Designs
                </span>

              </div>

              <div className="curtains-highlight-card">

                <FaRulerCombined />

                <span>
                  Custom Sizes
                </span>

              </div>

              <div className="curtains-highlight-card">

                <FaShieldAlt />

                <span>
                  Long Lasting
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/*======================================================
                  BLACKOUT CURTAINS
      ======================================================*/}

      <section className="curtains-type-section">

        <div className="curtains-type-container">

          <div className="curtains-type-content">

            <div className="curtains-section-small-title">

              BLACKOUT CURTAINS

            </div>

            <h2 className="curtains-section-title">

              Complete Privacy &
              Light Control

            </h2>

            <p className="curtains-section-description">

              Blackout curtains are specially designed
              with thick fabrics that completely block
              outside sunlight.

              These curtains provide excellent privacy,
              thermal insulation and noise reduction,
              making them ideal for bedrooms,
              home theatres and offices.

            </p>

            <div className="curtains-feature-list">

              <div className="curtains-feature-item">

                <FaCheckCircle />

                <span>
                  Blocks 90-100% sunlight
                </span>

              </div>

              <div className="curtains-feature-item">

                <FaCheckCircle />

                <span>
                  Energy efficient
                </span>

              </div>

              <div className="curtains-feature-item">

                <FaCheckCircle />

                <span>
                  Better sleep quality
                </span>

              </div>

              <div className="curtains-feature-item">

                <FaCheckCircle />

                <span>
                  Modern premium look
                </span>

              </div>

            </div>

            <div className="curtains-use-box">

              <h3 className="curtains-use-title">

                Best Suitable For

              </h3>

              <p className="curtains-use-text">

                ✔ Bedrooms

                <br />

                ✔ Home Theatre

                <br />

                ✔ Hotel Rooms

                <br />

                ✔ Conference Rooms

                <br />

                ✔ Office Cabins

              </p>

            </div>

          </div>

          {/* IMAGE */}

          <div className="curtains-type-image-box">

            <img

              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900"

              alt="Blackout Curtains"

              className="curtains-type-image"

            />

          </div>

        </div>

      </section>
      {/*======================================================
                SHEER CURTAINS
======================================================*/}

<section className="curtains-type-section curtains-type-light">

    <div className="curtains-type-container curtains-type-reverse">

        {/* IMAGE */}

        <div className="curtains-type-image-box">

            <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
                alt="Sheer Curtains"
                className="curtains-type-image"
            />

        </div>

        {/* CONTENT */}

        <div className="curtains-type-content">

            <div className="curtains-section-small-title">
                SHEER CURTAINS
            </div>

            <h2 className="curtains-section-title">

                Soft Natural Light
                <br />

                Elegant Living

            </h2>

            <p className="curtains-section-description">

                Sheer curtains allow natural daylight to
                enter your home while maintaining privacy.
                Their lightweight fabric creates a luxurious,
                airy and modern appearance suitable for every
                contemporary interior.

                <br /><br />

                They beautifully complement blackout curtains,
                creating a perfect day-and-night curtain
                combination.

            </p>

            <div className="curtains-feature-list">

                <div className="curtains-feature-item">

                    <FaCheckCircle />

                    <span>
                        Soft natural lighting
                    </span>

                </div>

                <div className="curtains-feature-item">

                    <FaCheckCircle />

                    <span>
                        Elegant premium appearance
                    </span>

                </div>

                <div className="curtains-feature-item">

                    <FaCheckCircle />

                    <span>
                        Improves room brightness
                    </span>

                </div>

                <div className="curtains-feature-item">

                    <FaCheckCircle />

                    <span>
                        Perfect with blackout curtains
                    </span>

                </div>

            </div>

            <div className="curtains-use-box">

                <h3 className="curtains-use-title">

                    Best Suitable For

                </h3>

                <p className="curtains-use-text">

                    ✔ Living Rooms

                    <br />

                    ✔ Dining Rooms

                    <br />

                    ✔ Villas

                    <br />

                    ✔ Luxury Apartments

                    <br />

                    ✔ Hotels

                </p>

            </div>

        </div>

    </div>

</section>

{/*======================================================
              WHY CHOOSE SIVENTHRA
======================================================*/}

<section className="curtains-why-section">

    <div className="curtains-why-heading">

        <div className="curtains-section-small-title">

            WHY CHOOSE US

        </div>

        <h2 className="curtains-section-title">

            Why Customers Prefer
            Siventhra Curtains

        </h2>

        <p className="curtains-section-description">

            Every curtain is measured, stitched and
            installed with precision to deliver a premium
            finish that lasts for years.

        </p>

    </div>

    <div className="curtains-why-grid">

        <div className="curtains-why-card">

            <div className="curtains-why-icon">

                <FaRulerCombined />

            </div>

            <h3 className="curtains-why-title">

                Perfect Measurement

            </h3>

            <p className="curtains-why-text">

                Accurate measurements ensure
                wrinkle-free and elegant installation.

            </p>

        </div>

        <div className="curtains-why-card">

            <div className="curtains-why-icon">

                <FaPalette />

            </div>

            <h3 className="curtains-why-title">

                Hundreds of Fabrics

            </h3>

            <p className="curtains-why-text">

                Choose from modern,
                classic and luxury collections.

            </p>

        </div>

        <div className="curtains-why-card">

            <div className="curtains-why-icon">

                <FaShieldAlt />

            </div>

            <h3 className="curtains-why-title">

                Premium Quality

            </h3>

            <p className="curtains-why-text">

                Long-lasting fabrics with
                excellent finishing and durability.

            </p>

        </div>

        <div className="curtains-why-card">

            <div className="curtains-why-icon">

                <FaCheckCircle />

            </div>

            <h3 className="curtains-why-title">

                Professional Installation

            </h3>

            <p className="curtains-why-text">

                Experienced technicians ensure
                flawless installation every time.

            </p>

        </div>

    </div>

</section>

{/*======================================================
              CURTAIN PROCESS
======================================================*/}

<section className="curtains-process-section">

    <div className="curtains-process-heading">

        <div className="curtains-section-small-title">

            OUR PROCESS

        </div>

        <h2 className="curtains-section-title">

            How We Complete
            Every Curtain Project

        </h2>

    </div>

    <div className="curtains-process-container">

        <div className="curtains-process-card">

            <div className="curtains-process-number">
                01
            </div>

            <h3 className="curtains-process-title">

                Site Visit

            </h3>

            <p className="curtains-process-text">

                Our team visits your location,
                takes accurate measurements and
                understands your requirements.

            </p>

        </div>

        <div className="curtains-process-card">

            <div className="curtains-process-number">
                02
            </div>

            <h3 className="curtains-process-title">

                Fabric Selection

            </h3>

            <p className="curtains-process-text">

                Select colors, fabrics,
                patterns and accessories
                that perfectly match your interiors.

            </p>

        </div>

        <div className="curtains-process-card">

            <div className="curtains-process-number">
                03
            </div>

            <h3 className="curtains-process-title">

                Stitching

            </h3>

            <p className="curtains-process-text">

                Curtains are stitched
                with precision using
                premium tailoring standards.

            </p>

        </div>

        <div className="curtains-process-card">

            <div className="curtains-process-number">
                04
            </div>

            <h3 className="curtains-process-title">

                Installation

            </h3>

            <p className="curtains-process-text">

                Our professionals install
                everything perfectly and
                ensure complete customer satisfaction.

            </p>

        </div>

    </div>

</section>

{/*======================================================
                    CURTAIN GALLERY
======================================================*/}

<section className="curtains-gallery-section">

    <div className="curtains-gallery-heading">

        <div className="curtains-section-small-title">
            OUR PROJECTS
        </div>

        <h2 className="curtains-section-title">

            Recent Curtain Installations

        </h2>

        <p className="curtains-section-description">

            Explore some of our premium curtain projects
            completed for homes, villas and commercial spaces.

        </p>

    </div>

    <div className="curtains-gallery-grid">

        <div className="curtains-gallery-card">

            <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
                alt="Curtain"
                className="curtains-gallery-image"
            />

        </div>

        <div className="curtains-gallery-card">

            <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900"
                alt="Curtain"
                className="curtains-gallery-image"
            />

        </div>

        <div className="curtains-gallery-card">

            <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
                alt="Curtain"
                className="curtains-gallery-image"
            />

        </div>

        <div className="curtains-gallery-card">

            <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900"
                alt="Curtain"
                className="curtains-gallery-image"
            />

        </div>

    </div>

</section>

{/*======================================================
                    CURTAIN COMPARISON
======================================================*/}

<section className="curtains-comparison-section">

    <div className="curtains-comparison-heading">

        <div className="curtains-section-small-title">

            COMPARISON

        </div>

        <h2 className="curtains-section-title">

            Blackout vs Sheer Curtains

        </h2>

    </div>

    <div className="curtains-comparison-grid">

        <div className="curtains-comparison-card">

            <h3 className="curtains-comparison-title">

                Blackout Curtains

            </h3>

            <ul className="curtains-comparison-list">

                <li>✔ Blocks sunlight</li>
                <li>✔ Complete privacy</li>
                <li>✔ Noise reduction</li>
                <li>✔ Bedroom use</li>
                <li>✔ Thermal insulation</li>

            </ul>

        </div>

        <div className="curtains-comparison-card">

            <h3 className="curtains-comparison-title">

                Sheer Curtains

            </h3>

            <ul className="curtains-comparison-list">

                <li>✔ Soft daylight</li>
                <li>✔ Decorative look</li>
                <li>✔ Airy interiors</li>
                <li>✔ Living rooms</li>
                <li>✔ Luxury appearance</li>

            </ul>

        </div>

    </div>

</section>

{/*======================================================
                        FAQ
======================================================*/}

<section className="curtains-faq-section">

    <div className="curtains-faq-heading">

        <div className="curtains-section-small-title">

            FAQ

        </div>

        <h2 className="curtains-section-title">

            Frequently Asked Questions

        </h2>

    </div>

    <div className="curtains-faq-container">

        <div className="curtains-faq-card">

            <h3 className="curtains-faq-question">

                Which curtain is best for bedrooms?

            </h3>

            <p className="curtains-faq-answer">

                Blackout curtains provide maximum privacy,
                reduce sunlight and improve sleeping comfort.

            </p>

        </div>

        <div className="curtains-faq-card">

            <h3 className="curtains-faq-question">

                Can I combine blackout and sheer curtains?

            </h3>

            <p className="curtains-faq-answer">

                Yes. It is the most popular premium combination,
                allowing natural daylight during the day and
                complete privacy at night.

            </p>

        </div>

        <div className="curtains-faq-card">

            <h3 className="curtains-faq-question">

                Do you provide installation?

            </h3>

            <p className="curtains-faq-answer">

                Yes. Our experienced technicians provide
                measurement, stitching and complete installation.

            </p>

        </div>

    </div>

</section>

{/*======================================================
                    CALL TO ACTION
======================================================*/}

<section className="curtains-cta-section">

    <div className="curtains-cta-container">

        <h2 className="curtains-cta-title">

            Ready To Upgrade Your Home?

        </h2>

        <p className="curtains-cta-description">

            Get premium curtains designed,
            stitched and installed by
            Siventhra Interior & Decors.

        </p>

        <div className="curtains-cta-buttons">

            <Link
                to="/orderrequest"
                className="curtains-primary-button"
            >

                Get Free Quote

            </Link>

            <Link
                to="/contact"
                className="curtains-secondary-button"
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