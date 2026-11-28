
import React, { useState } from "react";
import "./CeilingHangers.css";

const normalImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiL59cn98gDp2fu1cvWqwM6929phMtRIooFDqGFrNBQw&s=10";

const wallImage =
  "https://flyinghanger.in/cdn/shop/files/IMG-20250704-WA0007.jpg?v=1751612438&width=1100";

// Example prices: replace with your actual product rates
const hangerPrices = {
  4: 1200,
  5: 1450,
  6: 1700,
  7: 1950,
  8: 2200,
};

const wallExtra = 800;
const installationPrice = 350;

const CeilingHangers = () => {
  const [hangerType, setHangerType] = useState("normal");
  const [length, setLength] = useState(4);
  const [installation, setInstallation] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    ceilingType: "",
    notes: "",
  });

  const isWall = hangerType === "wall";

  const productPrice = hangerPrices[length];
  const wallCharge = isWall ? wallExtra : 0;
  const baseTotal = productPrice + wallCharge;
  const installCost = installation ? installationPrice : 0;
  const unitTotal = baseTotal + installCost;
  const totalPrice = unitTotal * quantity;

  const updateCustomer = (event) => {
    const { name, value } = event.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const submitOrder = (event) => {
    event.preventDefault();

    const orderDetails = {
      product: "Ceiling Clothes Hanger",
      hangerType: isWall ? "Wall Mounted" : "Normal Ceiling Mounted",
      length: `${length} feet`,
      basePrice: productPrice,
      wallMountExtra: wallCharge,
      installation: installation ? "Included" : "Not Included",
      installationPrice: installCost,
      quantity,
      totalPrice,
      ...customer,
    };

    console.log("Hanger Order:", orderDetails);

    alert(
      `Order Request!\n\nType: ${isWall ? "Wall Mounted" : "Normal Ceiling"}\nLength: ${length} Feet\nQuantity: ${quantity}\nTotal: ₹${totalPrice.toLocaleString("en-IN")}`
    );

    // Later connect this to your backend API.
  };

  return (
    <div className="ch-page">
      <div className="ch-topbar">
        <div className="ch-brand">
          <div className="ch-brand-symbol">S</div>
          <div className="ch-brand-name">
            SIVENTHRA
            <span className="ch-brand-subtitle">HOME SOLUTIONS</span>
          </div>
        </div>

        <div className="ch-topbar-right">
          <div className="ch-topbar-note">SMART HOME ACCESSORIES</div>
          <div className="ch-topbar-contact">CUSTOM ORDER</div>
        </div>
      </div>

      <div className="ch-breadcrumb">
        Home <span>/</span> Products <span>/</span> Ceiling Hangers
      </div>

      <main className="ch-main">
        {/* HERO SECTION */}
        <section className="ch-hero">
          <div className="ch-hero-content">
            <div className="ch-category">SMART SPACE · SMART LIVING</div>

            <h1 className="ch-hero-title">
              Dry smarter.
              <span>Live better.</span>
            </h1>

            <p className="ch-hero-description">
              A space-saving clothes drying solution designed for
              modern homes. Choose the right hanger for your ceiling
              and enjoy effortless everyday drying.
            </p>

            <div className="ch-hero-points">
              <div className="ch-hero-point">
                <span>01</span> Space-saving design
              </div>
              <div className="ch-hero-point">
                <span>02</span> Smooth pulley operation
              </div>
              <div className="ch-hero-point">
                <span>03</span> Installation available
              </div>
            </div>
          </div>

          <div className="ch-hero-image">
            <img
              className="ch-hero-photo"
              src={normalImage}
              alt="Ceiling mounted clothes drying hanger"
            />
            <div className="ch-hero-image-caption">
              <span>HOME ESSENTIALS</span>
              <strong>Make every space count.</strong>
            </div>
          </div>
        </section>

        {/* PRODUCT TYPE SELECTION */}
        <section className="ch-type-section">
          <div className="ch-section-heading">
            <div className="ch-category">CHOOSE YOUR INSTALLATION</div>
            <h2>Which hanger suits your ceiling?</h2>
            <p>
              Select your ceiling type. We will show you the recommended
              hanger and price.
            </p>
          </div>

          <div className="ch-type-grid">
            <button
              type="button"
              className={`ch-type-card ${
                hangerType === "normal" ? "ch-type-selected" : ""
              }`}
              onClick={() => setHangerType("normal")}
            >
              <div className="ch-type-photo">
                <img
                  className="ch-type-image"
                  src={normalImage}
                  alt="Normal ceiling hanger"
                />
                <span className="ch-type-badge">STANDARD</span>
              </div>

              <div className="ch-type-card-content">
                <div className="ch-type-title-row">
                  <h3>Normal Ceiling Hanger</h3>
                  <span className="ch-type-radio">
                    {hangerType === "normal" ? "✓" : ""}
                  </span>
                </div>

                <p>
                  Directly fixed to a solid concrete or RCC ceiling.
                  Ideal for homes with strong exposed ceilings.
                </p>

                <div className="ch-type-footer">
                  <strong>Standard price</strong>
                  <span>Choose length ↓</span>
                </div>
              </div>
            </button>

            <button
              type="button"
              className={`ch-type-card ${
                hangerType === "wall" ? "ch-type-selected" : ""
              }`}
              onClick={() => setHangerType("wall")}
            >
              <div className="ch-type-photo">
                <img
                  className="ch-type-image"
                  src={wallImage}
                  alt="Wall mounted ceiling clothes hanger"
                />
                <span className="ch-type-badge ch-wall-badge">
                  FALSE CEILING SOLUTION
                </span>
              </div>

              <div className="ch-type-card-content">
                <div className="ch-type-title-row">
                  <h3>Wall-Mounted Hanger</h3>
                  <span className="ch-type-radio">
                    {hangerType === "wall" ? "✓" : ""}
                  </span>
                </div>

                <p>
                  Supported by wall brackets instead of your ceiling.
                  Suitable for POP, gypsum and false ceiling spaces.
                </p>

                <div className="ch-type-footer">
                  <strong>₹800 extra</strong>
                  <span>Recommended for false ceilings ↓</span>
                </div>
              </div>
            </button>
          </div>

          <div className={`ch-recommendation ${isWall ? "ch-recommend-wall" : ""}`}>
            <div className="ch-recommend-icon">
              {isWall ? "⌂" : "✓"}
            </div>
            <div className="ch-recommend-text">
              <strong>
                {isWall
                  ? "Wall mounting recommended for your false ceiling"
                  : "Suitable for solid ceiling installation"}
              </strong>
              <span>
                {isWall
                  ? "Avoid fixing heavy hanger loads directly onto POP or gypsum ceiling sheets. The wall brackets must be secured to a suitable structural wall."
                  : "The mounting points must be secured firmly to the concrete ceiling for safe everyday use."}
              </span>
            </div>
          </div>
        </section>

        {/* PRODUCT DETAILS AND PRICING */}
        <section className="ch-product-section">
          <div className="ch-product-visual">
            <div className="ch-product-visual-label">
              {isWall ? "WALL-MOUNTED SYSTEM" : "CEILING-MOUNTED SYSTEM"}
            </div>

            <div className="ch-product-visual-image">
              <img
                className="ch-product-main-image"
                src={isWall ? wallImage : normalImage}
                alt={
                  isWall
                    ? "Wall mounted hanger system"
                    : "Ceiling mounted hanger system"
                }
              />
            </div>

            <div className="ch-product-visual-footer">
              <span className="ch-live-dot"></span>
              {isWall
                ? "WALL BRACKET SUPPORTED"
                : "DIRECT CEILING SUPPORTED"}
            </div>
          </div>

          <div className="ch-product-info">
            <div className="ch-category">
              {isWall ? "WALL MOUNTED SERIES" : "STANDARD SERIES"}
            </div>

            <h2 className="ch-product-title">
              Ceiling Clothes
              <span>Drying Hanger</span>
            </h2>

            <p className="ch-product-description">
              Lift your drying space out of the way. Designed with
              sturdy stainless-steel rods, nylon ropes and a smooth
              lifting system for practical daily use.
            </p>

            <div className="ch-spec-list">
              <div className="ch-spec-row">
                <span>Hanger type</span>
                <strong>
                  {isWall ? "Wall Mounted" : "Normal Ceiling"}
                </strong>
              </div>

              <div className="ch-spec-row">
                <span>Rods</span>
                <strong>Stainless Steel</strong>
              </div>

              <div className="ch-spec-row">
                <span>Lifting rope</span>
                <strong>Durable Nylon</strong>
              </div>

              <div className="ch-spec-row">
                <span>Channel</span>
                <strong>Aluminium</strong>
              </div>
            </div>

            <div className="ch-price-selector">
              <div className="ch-price-selector-heading">
                <div>
                  <span className="ch-small-label">SELECT YOUR LENGTH</span>
                  <h3>Hanger Size</h3>
                </div>

                <div className="ch-size-indicator">
                  {length}<small>FT</small>
                </div>
              </div>

              <div className="ch-size-grid">
                {Object.keys(hangerPrices).map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`ch-size-option ${
                      length === Number(size) ? "ch-size-active" : ""
                    }`}
                    onClick={() => setLength(Number(size))}
                  >
                    <span>{size}</span>
                    <small>FT</small>
                  </button>
                ))}
              </div>

              <div className="ch-breakdown">
                <div className="ch-price-row">
                  <span>Standard hanger · {length} ft</span>
                  <strong>₹{productPrice.toLocaleString("en-IN")}</strong>
                </div>

                {isWall && (
                  <div className="ch-price-row ch-wall-extra">
                    <span>Wall mount hardware / support</span>
                    <strong>+ ₹{wallExtra.toLocaleString("en-IN")}</strong>
                  </div>
                )}

                <div className="ch-price-row">
                  <span>Installation</span>
                  <strong>
                    {installation
                      ? `₹${installationPrice.toLocaleString("en-IN")}`
                      : "₹0"}
                  </strong>
                </div>

                <label className="ch-install-toggle">
                  <input
                    className="ch-install-input"
                    type="checkbox"
                    checked={installation}
                    onChange={(event) =>
                      setInstallation(event.target.checked)
                    }
                  />
                  <span className="ch-checkmark"></span>
                  <span className="ch-install-copy">
                    <strong>Include installation service</strong>
                    <small>Professional fitting at your location</small>
                  </span>
                </label>

                <div className="ch-total">
                  <div>
                    <span>Total price / unit</span>
                    <small>
                      {isWall ? "Wall mounted + ₹800" : "Standard model"}
                    </small>
                  </div>
                  <strong>₹{unitTotal.toLocaleString("en-IN")}</strong>
                </div>
              </div>
            </div>

            <div className="ch-price-note">
              Final installation suitability will be verified by our team.
            </div>
          </div>
        </section>

        {/* EXPLANATION SECTION */}
        <section className="ch-explanation-section">
          <div className="ch-section-heading">
            <div className="ch-category">WHY CHOOSE A WALL MOUNT?</div>
            <h2>Not every ceiling can hold a hanger.</h2>
            <p>
              False ceilings are usually decorative. A clothes hanger
              carrying wet laundry should be supported by a strong
              structural surface, not just the ceiling panel.
            </p>
          </div>

          <div className="ch-explanation-grid">
            <div className="ch-explanation-card">
              <div className="ch-explanation-number">01</div>
              <h3>POP / False Ceilings</h3>
              <p>
                POP and gypsum sheets are not intended to support the
                weight of wet clothes and a moving hanger mechanism.
                Wall-mounted brackets help transfer the load to
                suitable wall fixings.
              </p>
            </div>

            <div className="ch-explanation-card">
              <div className="ch-explanation-number">02</div>
              <h3>Strong Wall Support</h3>
              <p>
                The wall-mounted system is fixed into a suitable
                masonry or structural wall. The wall and anchor
                selection should be checked before installation.
              </p>
            </div>

            <div className="ch-explanation-card">
              <div className="ch-explanation-number">03</div>
              <h3>Convenient Lifting</h3>
              <p>
                Nylon rope and the pulley system allow the drying
                rods to be lowered for loading clothes and lifted
                back up to free your floor and walking space.
              </p>
            </div>
          </div>

          <div className="ch-ceiling-guide">
            <div className="ch-guide-column ch-guide-safe">
              <div className="ch-guide-symbol">✓</div>
              <div>
                <strong>Normal Ceiling Hanger</strong>
                <span>Solid RCC / concrete ceiling with secure anchor points</span>
              </div>
            </div>

            <div className="ch-guide-column ch-guide-wall">
              <div className="ch-guide-symbol">↗</div>
              <div>
                <strong>Wall-Mounted Hanger</strong>
                <span>POP, gypsum, false ceilings or locations where a suitable ceiling fixing is unavailable</span>
              </div>
            </div>
          </div>
        </section>

        {/* MATERIALS */}
        <section className="ch-material-section">
          <div className="ch-section-heading">
            <div className="ch-category">BUILT FOR DAILY USE</div>
            <h2>Materials that matter.</h2>
            <p>
              Each part serves a purpose, from supporting your clothes
              to helping the hanger move smoothly.
            </p>
          </div>

          <div className="ch-material-grid">
            <div className="ch-material-card">
              <div className="ch-material-visual ch-ss-visual">
                <div className="ch-material-rod"></div>
                <div className="ch-material-rod"></div>
                <div className="ch-material-rod"></div>
                <div className="ch-material-tag">SS</div>
              </div>
              <div className="ch-material-content">
                <span className="ch-material-index">MATERIAL 01</span>
                <h3>Stainless Steel Rods</h3>
                <p>
                  Sturdy rods designed to hold laundry. Stainless
                  steel provides a durable surface and helps resist
                  rust in normal use.
                </p>
              </div>
            </div>

            <div className="ch-material-card">
              <div className="ch-material-visual ch-rope-visual">
                <div className="ch-rope-line"></div>
                <div className="ch-rope-line"></div>
                <div className="ch-rope-line"></div>
                <div className="ch-material-tag">NYLON</div>
              </div>
              <div className="ch-material-content">
                <span className="ch-material-index">MATERIAL 02</span>
                <h3>Nylon Lifting Rope</h3>
                <p>
                  Flexible rope used in the pulley mechanism to
                  raise and lower the hanger. Proper installation
                  and periodic inspection are important.
                </p>
              </div>
            </div>

            <div className="ch-material-card">
              <div className="ch-material-visual ch-channel-visual">
                <div className="ch-channel-shape"></div>
                <div className="ch-channel-shape ch-channel-second"></div>
                <div className="ch-material-tag">AL</div>
              </div>
              <div className="ch-material-content">
                <span className="ch-material-index">MATERIAL 03</span>
                <h3>Aluminium Channels</h3>
                <p>
                  Lightweight channels with a powder-coated finish
                  designed for a neat look, corrosion resistance
                  and smooth hanger support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ORDER FORM */}
        <section className="ch-order-section">
          <div className="ch-order-heading">
            <div>
              <div className="ch-category">LET'S MAKE YOUR SPACE BETTER</div>
              <h2>Request an installation.</h2>
              <p>
                Tell us about your ceiling, and our team will help
                confirm the right hanger for your home.
              </p>
            </div>
            <div className="ch-order-number">ORDER DETAILS / 01</div>
          </div>

          <form className="ch-order-form" onSubmit={submitOrder}>
            <div className="ch-fields-grid">
              <div className="ch-field">
                <label className="ch-label" htmlFor="ch-name">
                  Full Name *
                </label>
                <input
                  className="ch-input"
                  id="ch-name"
                  name="name"
                  value={customer.name}
                  onChange={updateCustomer}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="ch-field">
                <label className="ch-label" htmlFor="ch-phone">
                  Mobile Number *
                </label>
                <input
                  className="ch-input"
                  id="ch-phone"
                  name="phone"
                  type="tel"
                  value={customer.phone}
                  onChange={updateCustomer}
                  placeholder="Your contact number"
                  required
                />
              </div>

              <div className="ch-field">
                <label className="ch-label" htmlFor="ch-city">
                  City *
                </label>
                <input
                  className="ch-input"
                  id="ch-city"
                  name="city"
                  value={customer.city}
                  onChange={updateCustomer}
                  placeholder="Your city"
                  required
                />
              </div>

              <div className="ch-field">
                <label className="ch-label" htmlFor="ch-pincode">
                  PIN Code *
                </label>
                <input
                  className="ch-input"
                  id="ch-pincode"
                  name="pincode"
                  inputMode="numeric"
                  value={customer.pincode}
                  onChange={updateCustomer}
                  placeholder="6 digit PIN"
                  required
                />
              </div>

              <div className="ch-field ch-field-full">
                <label className="ch-label" htmlFor="ch-address">
                  Full Address *
                </label>
                <input
                  className="ch-input"
                  id="ch-address"
                  name="address"
                  value={customer.address}
                  onChange={updateCustomer}
                  placeholder="House, street, area, landmark"
                  required
                />
              </div>

              <div className="ch-field">
                <label className="ch-label" htmlFor="ch-ceiling">
                  Ceiling Type *
                </label>
                <select
                  className="ch-input ch-select"
                  id="ch-ceiling"
                  name="ceilingType"
                  value={customer.ceilingType}
                  onChange={updateCustomer}
                  required
                >
                  <option value="">Select ceiling type</option>
                  <option value="RCC Concrete">RCC / Concrete</option>
                  <option value="POP Ceiling">POP Ceiling</option>
                  <option value="Gypsum False Ceiling">Gypsum False Ceiling</option>
                  <option value="Other">Other / Not sure</option>
                </select>
              </div>

              <div className="ch-field">
                <label className="ch-label" htmlFor="ch-quantity">
                  Quantity
                </label>
                <div className="ch-quantity">
                  <button
                    className="ch-quantity-btn"
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <div className="ch-quantity-value">{quantity}</div>
                  <button
                    className="ch-quantity-btn"
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="ch-field ch-field-full">
                <label className="ch-label" htmlFor="ch-notes">
                  Additional Requirements
                </label>
                <textarea
                  className="ch-input ch-textarea"
                  id="ch-notes"
                  name="notes"
                  value={customer.notes}
                  onChange={updateCustomer}
                  placeholder="Describe your installation area or additional requirements..."
                  rows={4}
                />
              </div>
            </div>

            <div className="ch-order-summary">
              <div className="ch-summary-info">
                <span>SELECTED PRODUCT</span>
                <strong>
                  {isWall ? "Wall-Mounted" : "Normal Ceiling"} · {length} Feet
                </strong>
                <small>
                  {installation ? "Installation included" : "Installation excluded"}
                </small>
              </div>

              <div className="ch-summary-price">
                <span>GRAND TOTAL</span>
                <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
              </div>
            </div>

            <button className="ch-submit-button" type="submit">
              <span>Submit Order Request</span>
              <span className="ch-submit-arrow">→</span>
            </button>

            <div className="ch-submit-note">
              Final price and installation availability will be confirmed
              by our team.
            </div>
          </form>
        </section>
      </main>

      <footer className="ch-footer">
        <span>SIVENTHRA HOME SOLUTIONS</span>
        <span>BETTER SPACES. BETTER LIVING.</span>
      </footer>
    </div>
  );
};

export default CeilingHangers;
