import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
  FaHome,
  FaBuilding,
  FaCouch,
  FaWarehouse,
} from "react-icons/fa";

import "./CeilingHangers.css";

// Images
import heroImage from "../../assets/ceiling-hanger.png";
import chooseImage from "../../assets/ceiling-hanger-installation.jpg";

const features = [
  "16 mm Heavy Duty Stainless Steel Pipes",
  "Premium Quality Nylon Ropes",
  "Powder Coated Aluminium Holders",
  "Rust & Corrosion Resistant",
  "Smooth Pulley Lifting System",
  "Strong Load Carrying Capacity",
  "Space Saving Design",
  "Suitable for Indoor & Outdoor Use",
];

const CeilingHangers = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">
  <div className="hero-section-container">
    <div className="hero-section-image-wrapper">
      <img
        className="hero-section-image"
        src={heroImage}
        alt="Ceiling Cloth Hanger"
      />
    </div>

    <div className="hero-section-content">
      <span className="hero-section-tag">
        Premium Drying Solution
      </span>

      <h1 className="hero-section-title">
        Premium
        <span className="hero-section-title-highlight">
          Ceiling Cloth Hangers
        </span>
      </h1>
            <p>
              Transform your laundry space with our premium ceiling cloth
              hangers designed for modern homes. Built using superior quality
              materials, our ceiling drying systems offer exceptional strength,
              durability, and effortless operation while keeping your floor
              space completely free.
            </p>

            <p>
              Whether you live in an apartment, villa, or independent house,
              our ceiling hangers provide a practical and stylish solution for
              drying clothes throughout every season.
            </p>

            {/* Feature List */}

            <div className="feature-grid">
              {features.map((item, index) => (
                <div className="feature-item" key={index}>
                  <FaCheckCircle className="feature-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="hero-buttons">

              <Link to="/contact" className="primary-btn">
                Book Installation
                <FaArrowRight />
              </Link>

              <Link to="/products" className="secondary-btn">
                View Products
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

{/* ================= WHY CHOOSE US ================= */}

<section className="why-section">

  <div className="container why-section-container">

    {/* Left Content */}

    <div className="why-section-content">

      <span className="why-section-tag">
        Why Choose Us
      </span>

      <h2 className="why-section-title">
        <span className="why-section-title-first">
          Smart Drying Solution
        </span>
        <span className="why-section-title-highlight">
          For Every Home
        </span>
      </h2>

      <p className="why-section-description-one">
        Our ceiling cloth hangers are designed to maximize unused ceiling
        space while providing a convenient, safe, and efficient way to
        dry clothes. Unlike traditional floor stands, they keep your home
        neat, spacious, and clutter-free.
      </p>

      <p className="why-section-description-two">
        Every ceiling hanger is manufactured using premium-grade
        materials, ensuring excellent strength, rust resistance,
        smooth lifting, and years of reliable performance.
      </p>

      <div className="why-card-grid">

        {/* Card 1 */}

        <div className="why-card">

          <div className="why-card-icon-wrapper">
            <FaHome className="why-card-icon" />
          </div>

          <h4 className="why-card-title">
            Perfect for Homes
          </h4>

          <p className="why-card-description">
            Ideal for apartments, villas, and independent houses with
            limited drying space.
          </p>

        </div>

        {/* Card 2 */}

        <div className="why-card">

          <div className="why-card-icon-wrapper">
            <FaBuilding className="why-card-icon" />
          </div>

          <h4 className="why-card-title">
            Apartments
          </h4>

          <p className="why-card-description">
            Makes balconies and utility areas more organized without
            occupying valuable floor space.
          </p>

        </div>

        {/* Card 3 */}

        <div className="why-card">

          <div className="why-card-icon-wrapper">
            <FaWarehouse className="why-card-icon" />
          </div>

          <h4 className="why-card-title">
            Utility Areas
          </h4>

          <p className="why-card-description">
            A perfect drying solution for laundry rooms, wash areas,
            terraces, and service spaces.
          </p>

        </div>

        {/* Card 4 */}

        <div className="why-card">

          <div className="why-card-icon-wrapper">
            <FaCouch className="why-card-icon" />
          </div>

          <h4 className="why-card-title">
            Modern Design
          </h4>

          <p className="why-card-description">
            Stylish appearance that complements contemporary interior
            spaces while offering outstanding functionality.
          </p>

        </div>

      </div>

    </div>

    {/* Right Image */}

    <div className="why-section-image-wrapper">

      <img
        className="why-section-image"
        src={chooseImage}
        alt="Ceiling Hanger Installation"
      />

    </div>

  </div>

</section>

            {/* ================= ALL SEASONS ================= */}
{/* ================= ALL SEASONS ================= */}

<section className="season-section">

  <div className="container season-container">

    {/* Heading */}

    <div className="season-heading">

      <span className="season-tag">
        Suitable for Every Season
      </span>

      <h2 className="season-title">
        <span className="season-title-first">
          One Drying Solution
        </span>
        <span className="season-title-highlight">
          For All Weather Conditions
        </span>
      </h2>

      <p className="season-description">
        Our premium ceiling cloth hangers provide a reliable and convenient
        drying solution throughout the year. Whether it's the hot summer,
        rainy monsoon, or cool winter, you can dry your clothes efficiently
        while keeping your home clean, organized, and clutter-free.
      </p>

    </div>

    {/* Cards */}

    <div className="season-card-wrapper">

      {/* Summer */}

      <div className="season-card">

        <div className="season-card-icon-wrapper">
          <span className="season-card-icon">
            ☀️
          </span>
        </div>

        <h3 className="season-card-title">
          Summer Season
        </h3>

        <p className="season-card-description">
          Bright sunlight and excellent airflow help clothes dry much faster.
          Our ceiling hanger keeps clothes elevated, organized, and wrinkle-free
          while making full use of available ceiling space.
        </p>

        <ul className="season-card-list">

          <li className="season-card-list-item">
            Faster Drying in Direct Sunlight
          </li>

          <li className="season-card-list-item">
            Better Air Circulation
          </li>

          <li className="season-card-list-item">
            Saves Valuable Floor Space
          </li>

          <li className="season-card-list-item">
            Perfect for Daily Laundry
          </li>

        </ul>

      </div>

      {/* Rainy */}

      <div className="season-card">

        <div className="season-card-icon-wrapper">
          <span className="season-card-icon">
            🌧️
          </span>
        </div>

        <h3 className="season-card-title">
          Rainy Season
        </h3>

        <p className="season-card-description">
          During the rainy season, drying clothes becomes challenging due to
          humidity and lack of sunlight. Ceiling hangers provide an excellent
          indoor drying solution while keeping your home neat and hygienic.
        </p>

        <ul className="season-card-list">

          <li className="season-card-list-item">
            Ideal for Indoor Drying
          </li>

          <li className="season-card-list-item">
            Suitable for Monsoon Weather
          </li>

          <li className="season-card-list-item">
            Keeps Clothes Above Floor Level
          </li>

          <li className="season-card-list-item">
            Clean & Organized Drying Space
          </li>

        </ul>

      </div>

      {/* Winter */}

      <div className="season-card">

        <div className="season-card-icon-wrapper">
          <span className="season-card-icon">
            ❄️
          </span>
        </div>

        <h3 className="season-card-title">
          Winter Season
        </h3>

        <p className="season-card-description">
          Even during cold weather, ceiling-mounted drying improves air
          circulation around garments, helping them dry naturally while
          maintaining a spacious and tidy living environment.
        </p>

        <ul className="season-card-list">

          <li className="season-card-list-item">
            Better Ventilation
          </li>

          <li className="season-card-list-item">
            Organized Drying
          </li>

          <li className="season-card-list-item">
            Space Saving Solution
          </li>

          <li className="season-card-list-item">
            Convenient Everyday Use
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>

      {/* ================= PREMIUM MATERIALS ================= */}

      {/* ================= PREMIUM MATERIALS ================= */}

<section className="materials-section">

  <div className="container materials-container">

    {/* Section Heading */}

    <div className="materials-heading">

      <span className="materials-tag">
        Premium Quality Materials
      </span>

      <h2 className="materials-title">

        <span className="materials-title-first">
          Built With
        </span>

        <span className="materials-title-highlight">
          High-Performance Components
        </span>

      </h2>

      <p className="materials-description">
        At Siventhra Interior Decors, we believe quality materials create
        long-lasting products. Every ceiling cloth hanger is manufactured using
        premium-grade stainless steel, durable nylon ropes, and powder-coated
        aluminium accessories to ensure years of smooth and reliable
        performance.
      </p>

    </div>

    {/* Material Cards */}

    <div className="materials-card-wrapper">

      {/* Card 1 */}

      <div className="material-card">

        <div className="material-card-number-wrapper">
          <span className="material-card-number">
            01
          </span>
        </div>

        <h3 className="material-card-title">
          16 mm Stainless Steel Pipes
        </h3>

        <p className="material-card-description">
          We use premium quality 16 mm stainless steel pipes that provide
          superior strength and excellent resistance against rust, corrosion,
          moisture, and everyday wear. These heavy-duty pipes ensure maximum
          durability and long-lasting performance.
        </p>

        <ul className="material-card-list">

          <li className="material-card-list-item">
            Heavy Duty 16 mm Stainless Steel
          </li>

          <li className="material-card-list-item">
            Rust & Corrosion Resistant
          </li>

          <li className="material-card-list-item">
            High Load Carrying Capacity
          </li>

          <li className="material-card-list-item">
            Long Lasting Mirror Finish
          </li>

          <li className="material-card-list-item">
            Premium Quality Material
          </li>

        </ul>

      </div>

      {/* Card 2 */}

      <div className="material-card">

        <div className="material-card-number-wrapper">
          <span className="material-card-number">
            02
          </span>
        </div>

        <h3 className="material-card-title">
          Heavy-Duty Nylon Rope
        </h3>

        <p className="material-card-description">
          Our high-strength nylon ropes are specially selected for smooth pulley
          movement and excellent durability. They provide effortless lifting and
          lowering while maintaining strength even after years of continuous
          usage.
        </p>

        <ul className="material-card-list">

          <li className="material-card-list-item">
            Premium Nylon Material
          </li>

          <li className="material-card-list-item">
            Smooth Pulley Operation
          </li>

          <li className="material-card-list-item">
            High Tensile Strength
          </li>

          <li className="material-card-list-item">
            Wear & Tear Resistant
          </li>

          <li className="material-card-list-item">
            Long Service Life
          </li>

        </ul>

      </div>

      {/* Card 3 */}

      <div className="material-card">

        <div className="material-card-number-wrapper">
          <span className="material-card-number">
            03
          </span>
        </div>

        <h3 className="material-card-title">
          Powder-Coated Aluminium Holders
        </h3>

        <p className="material-card-description">
          Our lightweight aluminium holders are finished with premium
          powder coating to provide outstanding corrosion resistance,
          enhanced durability, and an elegant appearance that complements
          modern interiors.
        </p>

        <ul className="material-card-list">

          <li className="material-card-list-item">
            Premium Aluminium Body
          </li>

          <li className="material-card-list-item">
            Powder-Coated Finish
          </li>

          <li className="material-card-list-item">
            Corrosion Resistant
          </li>

          <li className="material-card-list-item">
            Strong Yet Lightweight
          </li>

          <li className="material-card-list-item">
            Elegant Modern Appearance
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>


{/* ================= PRODUCT HIGHLIGHTS ================= */}

<section className="product-highlight-section">

  <div className="container product-highlight-container">

    <div className="product-highlight-left">

      <span className="product-highlight-tag">
        Product Highlights
      </span>

      <h2 className="product-highlight-title">

        <span className="product-highlight-title-first">
          Designed For
        </span>

        <span className="product-highlight-title-highlight">
          Everyday Convenience
        </span>

      </h2>

      <p className="product-highlight-description">
        Our ceiling cloth hanger combines premium materials with modern
        engineering to deliver a hassle-free drying experience. Every component
        is designed for comfort, safety, durability, and smooth daily use.
      </p>

    </div>

    <div className="product-highlight-right">

      <div className="product-highlight-item">

        <h4 className="product-highlight-item-title">
          Space Saving Design
        </h4>

        <p className="product-highlight-item-description">
          Utilizes unused ceiling space, keeping your balcony and utility area
          clean and clutter-free.
        </p>

      </div>

      <div className="product-highlight-item">

        <h4 className="product-highlight-item-title">
          Smooth Pulley Mechanism
        </h4>

        <p className="product-highlight-item-description">
          Easily raise and lower clothes with minimal effort using the premium
          nylon rope system.
        </p>

      </div>

      <div className="product-highlight-item">

        <h4 className="product-highlight-item-title">
          Elegant Appearance
        </h4>

        <p className="product-highlight-item-description">
          Modern design enhances the overall look of your utility area while
          providing maximum functionality.
        </p>

      </div>

      <div className="product-highlight-item">

        <h4 className="product-highlight-item-title">
          Professional Installation
        </h4>

        <p className="product-highlight-item-description">
          Installed securely by experienced professionals to ensure safety,
          reliability, and long-term performance.
        </p>

      </div>

    </div>

  </div>

</section>


            {/* ================= ADVANTAGES ================= */}

      <section className="advantages-section">

        <div className="container">

          <div className="section-heading">
            <span className="section-tag">Why Customers Love It</span>

            <h2>
              Advantages of Our
              <span> Ceiling Cloth Hangers</span>
            </h2>

            <p>
              Our premium ceiling cloth hangers are designed to simplify your
              daily laundry routine while enhancing the appearance and
              functionality of your home.
            </p>
          </div>

          <div className="advantages-grid">

            <div className="advantage-card">
              <span>🏠</span>
              <h4>Space Saving</h4>
              <p>Utilizes ceiling space and keeps your floor completely free.</p>
            </div>

            <div className="advantage-card">
              <span>🛡️</span>
              <h4>Rust Resistant</h4>
              <p>Premium stainless steel components ensure years of durability.</p>
            </div>

            <div className="advantage-card">
              <span>💪</span>
              <h4>Heavy Duty</h4>
              <p>Strong enough to hold multiple clothes with ease.</p>
            </div>

            <div className="advantage-card">
              <span>⬆️</span>
              <h4>Smooth Pulley</h4>
              <p>Easy lifting and lowering with minimal effort.</p>
            </div>

            <div className="advantage-card">
              <span>🌦️</span>
              <h4>All Seasons</h4>
              <p>Suitable for summer, rainy season, and winter use.</p>
            </div>

            <div className="advantage-card">
              <span>🏢</span>
              <h4>Modern Homes</h4>
              <p>Perfect for apartments, villas, and independent houses.</p>
            </div>

            <div className="advantage-card">
              <span>✨</span>
              <h4>Premium Finish</h4>
              <p>Elegant design that blends beautifully with interiors.</p>
            </div>

            <div className="advantage-card">
              <span>⚙️</span>
              <h4>Low Maintenance</h4>
              <p>Requires very little maintenance for long-term use.</p>
            </div>

            <div className="advantage-card">
              <span>🌬️</span>
              <h4>Better Airflow</h4>
              <p>Improves ventilation around clothes for faster drying.</p>
            </div>

            <div className="advantage-card">
              <span>🧺</span>
              <h4>Large Capacity</h4>
              <p>Ideal for drying clothes, towels, bedsheets, and blankets.</p>
            </div>

            <div className="advantage-card">
              <span>🔧</span>
              <h4>Professional Installation</h4>
              <p>Installed securely by experienced technicians.</p>
            </div>

            <div className="advantage-card">
              <span>✔️</span>
              <h4>Best Quality</h4>
              <p>Manufactured using premium-grade materials for maximum life.</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= INSTALLATION AREAS ================= */}

      <section className="installation-section">

        <div className="container installation-wrapper">

          <div className="installation-content">

            <span className="section-tag">
              Installation Areas
            </span>

            <h2>
              Perfect for Every
              <span> Living Space</span>
            </h2>

            <p>
              Our ceiling cloth hangers are suitable for residential and
              commercial spaces. They are designed to fit seamlessly into
              different environments while providing maximum convenience.
            </p>

            <div className="installation-grid">

              <div className="install-item">🏢 Apartments</div>

              <div className="install-item">🏠 Villas</div>

              <div className="install-item">🏡 Independent Houses</div>

              <div className="install-item">🌇 Balconies</div>

              <div className="install-item">🧺 Utility Areas</div>

              <div className="install-item">🧼 Laundry Rooms</div>

              <div className="install-item">🌤️ Terraces</div>

              <div className="install-item">🏘️ Service Areas</div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= COUNTER SECTION ================= */}

      <section className="counter-section">

        <div className="container counter-grid">

          <div className="counter-card">
            <h2>1000+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="counter-card">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>

          <div className="counter-card">
            <h2>100%</h2>
            <p>Quality Materials</p>
          </div>

          <div className="counter-card">
            <h2>24/7</h2>
            <p>Customer Support</p>
          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="faq-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">
              Frequently Asked Questions
            </span>

            <h2>
              Common
              <span> Questions</span>
            </h2>

          </div>

          <div className="faq-container">

            <div className="faq-card">
              <h4>Is the ceiling hanger rust resistant?</h4>
              <p>
                Yes. We use premium 16 mm stainless steel pipes and
                powder-coated aluminium components that resist rust and
                corrosion.
              </p>
            </div>

            <div className="faq-card">
              <h4>How much weight can it carry?</h4>
              <p>
                Our heavy-duty ceiling hanger is designed to support multiple
                clothes, bedsheets, towels, and blankets safely.
              </p>
            </div>

            <div className="faq-card">
              <h4>Can it be installed in apartments?</h4>
              <p>
                Absolutely. It is ideal for apartments, villas, independent
                houses, balconies, and utility rooms.
              </p>
            </div>

            <div className="faq-card">
              <h4>Is the pulley easy to operate?</h4>
              <p>
                Yes. The high-quality nylon rope and smooth pulley mechanism
                make lifting and lowering effortless.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="hanger-cta">

        <div className="container cta-wrapper">

          <h2>
            Upgrade Your Laundry Space with Premium Ceiling Cloth Hangers
          </h2>

          <p>
            Enjoy a cleaner, smarter, and more organised drying solution with
            our high-quality ceiling cloth hangers. Designed for durability,
            convenience, and modern living, they're the perfect addition to any
            home.
          </p>

          <Link to="/contact" className="cta-btn">
            Contact Us Today
            <FaArrowRight />
          </Link>

        </div>

      </section>
    </>
  );
};

export default CeilingHangers;