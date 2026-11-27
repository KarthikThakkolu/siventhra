
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CurtainExplorer.css";

const fabrics = [
  {
    id: 1,
    name: "Sheer Elegance",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700",
    description: "Light and elegant natural daylight",
  },
  {
    id: 2,
    name: "Blackout Luxe",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700",
    description: "Complete privacy and light control",
  },
  {
    id: 3,
    name: "Linen Touch",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700",
    description: "Soft natural linen appearance",
  },
  {
    id: 4,
    name: "Velvet Charm",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?w=700",
    description: "Rich and luxurious velvet texture",
  },
  {
    id: 5,
    name: "Premium Linen",
    price: 1100,
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=700",
    description: "Timeless premium linen fabric",
  },
  {
    id: 6,
    name: "Cotton Blend",
    price: 900,
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=700",
    description: "Comfortable everyday fabric",
  },
];

const rooms = [
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Dining Room",
  "Kids Room",
  "Office",
];

const CurtainExplorer = () => {
  const navigate = useNavigate();

  const [selectedFabric, setSelectedFabric] = useState(fabrics[1]);
  const [selectedRoom, setSelectedRoom] = useState("Living Room");
  const [width, setWidth] = useState("10");
  const [height, setHeight] = useState("8");
  const [curtainStyle, setCurtainStyle] = useState("Regular Pleats");
  const [fullness, setFullness] = useState("1.5");

  const [showGuide, setShowGuide] = useState(false);

  const calculation = useMemo(() => {
    const windowWidth = Number(width);
    const windowHeight = Number(height);

    if (
      !Number.isFinite(windowWidth) ||
      !Number.isFinite(windowHeight) ||
      windowWidth <= 0 ||
      windowHeight <= 0
    ) {
      return { quantity: 0, total: 0, valid: false };
    }

    // Approximate calculation:
    // Width in metres × fullness, divided by assumed fabric width.
    const widthInMetres = windowWidth * 0.3048;
    const heightInMetres = windowHeight * 0.3048;

    const fabricWidth = 1.4;
    const fabricPanels = Math.ceil(
      (widthInMetres * Number(fullness)) / fabricWidth
    );

    const fabricDrop = heightInMetres + 0.3;
    const baseQuantity = fabricPanels * fabricDrop;

    const quantity = Math.ceil(baseQuantity * 1.1 * 10) / 10;
    const total = quantity * selectedFabric.price;

    return { quantity, total, valid: true };
  }, [width, height, fullness, selectedFabric]);

  const proceedToOrder = () => {
    if (!calculation.valid) {
      alert("Please enter valid window measurements.");
      return;
    }

    navigate("/pages/CurtainOrder", {
      state: {
        fabric: selectedFabric,
        room: selectedRoom,
        width,
        height,
        curtainStyle,
        fullness,
        quantity: calculation.quantity,
        estimatedPrice: calculation.total,
      },
    });
  };

  return (
    <div className="curtain-explorer-page">

      {/* HERO SECTION */}

      <div className="curtain-hero">
        <div className="curtain-hero-content">
          <div className="curtain-hero-label">
            CUSTOMIZE YOUR CURTAINS
          </div>

          <div className="curtain-hero-title">
            Curtain Explorer
          </div>

          <div className="curtain-hero-description">
            Discover beautiful fabrics, customize your measurements
            and create curtains that perfectly match your home.
          </div>

          <div className="curtain-hero-line"></div>
        </div>
      </div>

      {/* PAGE CONTENT */}

      <div className="curtain-main-container">

        {/* PROGRESS */}

        <div className="curtain-progress">
          <div className="curtain-progress-step active">
            <div className="curtain-progress-number">1</div>
            <div className="curtain-progress-text">Choose Fabric</div>
          </div>

          <div className="curtain-progress-line"></div>

          <div className="curtain-progress-step">
            <div className="curtain-progress-number">2</div>
            <div className="curtain-progress-text">Enter Details</div>
          </div>

          <div className="curtain-progress-line"></div>

          <div className="curtain-progress-step">
            <div className="curtain-progress-number">3</div>
            <div className="curtain-progress-text">Review Order</div>
          </div>
        </div>

        {/* FABRIC SECTION */}

        <div className="curtain-section-heading">
          <div className="curtain-section-icon">01</div>
          <div className="curtain-section-title">Choose Your Fabric</div>
        </div>

        <div className="curtain-product-layout">

          <div className="curtain-fabric-grid">
            {fabrics.map((fabric) => (
              <div
                key={fabric.id}
                className={`curtain-fabric-card ${
                  selectedFabric.id === fabric.id ? "selected" : ""
                }`}
                onClick={() => setSelectedFabric(fabric)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setSelectedFabric(fabric);
                  }
                }}
              >
                <div
                  className="curtain-fabric-image"
                  style={{ backgroundImage: `url("${fabric.image}")` }}
                >
                  {selectedFabric.id === fabric.id && (
                    <div className="curtain-selected-check">✓</div>
                  )}
                </div>

                <div className="curtain-fabric-info">
                  <div className="curtain-fabric-name">
                    {fabric.name}
                  </div>

                  <div className="curtain-fabric-price">
                    ₹{fabric.price.toLocaleString("en-IN")} / m
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FABRIC PREVIEW */}

          <div className="curtain-preview-container">
            <div
              className="curtain-large-preview"
              style={{
                backgroundImage: `url("${selectedFabric.image}")`,
              }}
            >
              <div className="curtain-preview-overlay">
                <div className="curtain-preview-tag">
                  SELECTED FABRIC
                </div>

                <div className="curtain-preview-name">
                  {selectedFabric.name}
                </div>
              </div>
            </div>

            <div className="curtain-preview-description">
              {selectedFabric.description}
            </div>

            <div className="curtain-preview-price">
              ₹{selectedFabric.price.toLocaleString("en-IN")} / metre
            </div>
          </div>
        </div>

        {/* ROOM SECTION */}

        <div className="curtain-section-heading">
          <div className="curtain-section-icon">02</div>
          <div className="curtain-section-title">Select Your Room</div>
        </div>

        <div className="curtain-room-grid">
          {rooms.map((room, index) => (
            <div
              key={room}
              className={`curtain-room-option ${
                selectedRoom === room ? "active" : ""
              }`}
              onClick={() => setSelectedRoom(room)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedRoom(room);
                }
              }}
            >
              <div className="curtain-room-symbol">
                {["⌂", "▣", "⌑", "▤", "♧", "⌘"][index]}
              </div>

              <div className="curtain-room-name">{room}</div>
            </div>
          ))}
        </div>

        {/* MEASUREMENT SECTION */}

        <div className="curtain-section-heading">
          <div className="curtain-section-icon">03</div>
          <div className="curtain-section-title">
            Window Measurements
          </div>
        </div>

        <div className="curtain-measurement-layout">

          <div className="curtain-measurement-field">
            <div className="curtain-field-label">
              Window Width
            </div>

            <div className="curtain-input-wrapper">
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={width}
                onChange={(event) => setWidth(event.target.value)}
                placeholder="Enter width"
              />

              <div className="curtain-input-unit">Feet</div>
            </div>
          </div>

          <div className="curtain-measurement-field">
            <div className="curtain-field-label">
              Window Height
            </div>

            <div className="curtain-input-wrapper">
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                placeholder="Enter height"
              />

              <div className="curtain-input-unit">Feet</div>
            </div>
          </div>

          <div className="curtain-measurement-field">
            <div className="curtain-field-label">
              Curtain Style
            </div>

            <select
              value={curtainStyle}
              onChange={(event) => setCurtainStyle(event.target.value)}
            >
              <option>Regular Pleats</option>
              <option>Eyelet Curtains</option>
              <option>Pinch Pleats</option>
              <option>Wave Curtains</option>
              <option>Rod Pocket</option>
            </select>
          </div>

          <div className="curtain-measurement-field">
            <div className="curtain-field-label">
              Fabric Fullness
            </div>

            <select
              value={fullness}
              onChange={(event) => setFullness(event.target.value)}
            >
              <option value="1.5">1.5x Standard</option>
              <option value="2">2x Rich</option>
              <option value="2.5">2.5x Luxury</option>
            </select>
          </div>

        </div>

        {/* ESTIMATE SECTION */}

        <div className="curtain-estimate-card">

          <div className="curtain-estimate-item">
            <div className="curtain-estimate-icon">▤</div>

            <div className="curtain-estimate-content">
              <div className="curtain-estimate-label">
                Estimated Fabric Quantity
              </div>

              <div className="curtain-estimate-value">
                {calculation.valid
                  ? `${calculation.quantity.toFixed(1)} m`
                  : "--"}
              </div>

              <div className="curtain-estimate-note">
                Includes 10% extra allowance
              </div>
            </div>
          </div>

          <div className="curtain-estimate-divider"></div>

          <div className="curtain-estimate-item">
            <div className="curtain-estimate-icon">₹</div>

            <div className="curtain-estimate-content">
              <div className="curtain-estimate-label">
                Estimated Price
              </div>

              <div className="curtain-estimate-value">
                {calculation.valid
                  ? `₹${calculation.total.toLocaleString("en-IN")}`
                  : "--"}
              </div>

              <div className="curtain-estimate-note">
                ₹{selectedFabric.price.toLocaleString("en-IN")} / metre
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ACTIONS */}

        <div className="curtain-bottom-actions">

          <div className="curtain-service-benefits">
            <div className="curtain-benefit-item">
              <div className="curtain-benefit-icon">✓</div>
              <div className="curtain-benefit-text">
                <div className="curtain-benefit-title">
                  Premium Quality
                </div>
                <div className="curtain-benefit-subtitle">
                  Carefully selected fabrics
                </div>
              </div>
            </div>

            <div className="curtain-benefit-item">
              <div className="curtain-benefit-icon">⌖</div>
              <div className="curtain-benefit-text">
                <div className="curtain-benefit-title">
                  Measurement Guide
                </div>
                <div className="curtain-benefit-subtitle">
                  Get accurate measurements
                </div>
              </div>
            </div>
          </div>

          <div className="curtain-action-buttons">
            <div
              className="curtain-guide-link"
              onClick={() => setShowGuide(!showGuide)}
              role="button"
              tabIndex={0}
            >
              Measurement Guide
            </div>

            <div
              className="curtain-proceed-button"
              onClick={proceedToOrder}
              role="button"
              tabIndex={0}
            >
              <div>Proceed to Order</div>
              <div className="curtain-proceed-arrow">→</div>
            </div>
          </div>

        </div>

        {showGuide && (
          <div className="curtain-guide-panel">
            <div className="curtain-guide-title">
              How to Measure Your Window
            </div>

            <div className="curtain-guide-description">
              Measure the curtain track or rod width for window width.
              Measure from the track or rod down to your desired curtain
              length for window height. Use the same unit for both.
              For accurate quantity, our team will verify your measurements.
            </div>
          </div>
        )}

      </div>

      {/* FOOTER BANNER */}

      <div className="curtain-footer-banner">
        <div className="curtain-footer-title">
          Transform Your Space with Elegant Curtains
        </div>

        <div className="curtain-footer-description">
          Style · Comfort · Privacy
        </div>
      </div>

    </div>
  );
};

export default CurtainExplorer;
