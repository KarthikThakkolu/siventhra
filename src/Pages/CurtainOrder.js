
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CurtainOrder.css";

const CurtainOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state || {};

  const fabric = order.fabric || {
    name: "Blackout Luxe",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900",
    description: "Premium fabric for elegant interiors",
  };

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [requirements, setRequirements] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submittedOrderId, setSubmittedOrderId] = useState("");

  const room = order.room || "Living Room";
  const width = order.width || "10";
  const height = order.height || "8";
  const style = order.curtainStyle || "Regular Pleats";
  const fullness = order.fullness || "1.5";

  const quantity = Number(order.quantity) || 8;
  const estimatedPrice = Number(order.estimatedPrice) || 9600;

  // BACK TO CURTAIN EXPLORER

  const goBackToExplorer = () => {
    navigate("/curtain-explorer", {
      state: order,
    });
  };

  // DIRECT ORDER SUBMISSION

  const submitCurtainOrder = async () => {
    // Prevent duplicate submissions
    if (isSending || orderSuccess) {
      return;
    }

    setSubmitError("");

    // VALIDATE CUSTOMER NAME

    if (!customerName.trim()) {
      setSubmitError("Please enter your name.");
      return;
    }

    // VALIDATE PHONE NUMBER

    if (!customerPhone.trim()) {
      setSubmitError("Please enter your mobile number.");
      return;
    }

    if (!/^[0-9+\-\s()]{8,18}$/.test(customerPhone.trim())) {
      setSubmitError("Please enter a valid mobile number.");
      return;
    }

    // ORDER DATA

    const orderData = {
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      requirements: requirements.trim(),

      fabric: {
        name: fabric.name,
        price: Number(fabric.price) || 0,
      },

      room,
      width: Number(width),
      height: Number(height),
      curtainStyle: style,
      fullness: Number(fullness),
      quantity,
      estimatedPrice,
    };

    try {
      setIsSending(true);

      const apiURL = (
        process.env.REACT_APP_API_URL || "http://localhost:5000"
      ).replace(/\/+$/, "");

      // SEND ORDER TO BACKEND

      const response = await fetch(`${apiURL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      // SAFELY READ RESPONSE

      const result = await response.json();

      // CHECK BACKEND RESPONSE

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit your order."
        );
      }

      if (!result.success) {
        throw new Error(
          result.message || "Order submission was unsuccessful."
        );
      }

      // GET ORDER ID FROM MVC RESPONSE

      const orderId =
        result.order?._id ||
        result.order?.id ||
        result.orderId ||
        result._id ||
        "";

      setSubmittedOrderId(orderId);
      setOrderSuccess(true);

      console.log("Curtain order submitted successfully:", orderId);

      // WhatsApp notification is handled by the backend.
      // No separate WhatsApp API call is needed here.

    } catch (error) {
      console.error("Curtain order submission error:", error);

      setSubmitError(
        error.message || "Something went wrong. Please try again."
      );

    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="curtain-order-page">

      {/* HERO */}

      <div className="curtain-order-hero">
        <div className="curtain-order-hero-content">

          <div className="curtain-order-hero-label">
            YOUR CUSTOM CURTAINS
          </div>

          <div className="curtain-order-hero-title">
            Review Your Order
          </div>

          <div className="curtain-order-hero-description">
            Your space, your style. Review your curtain selections
            and send your requirements directly to our team.
          </div>

        </div>
      </div>

      {/* MAIN */}

      <div className="curtain-order-main">

        {/* BACK AND PROGRESS */}

        <div className="curtain-order-topbar">

          <div
            className="curtain-order-back"
            onClick={goBackToExplorer}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                goBackToExplorer();
              }
            }}
          >
            <div className="curtain-order-back-arrow">
              ←
            </div>

            <div>Back to Curtain Explorer</div>
          </div>

          <div className="curtain-order-step-label">
            STEP 2 OF 2
          </div>

        </div>

        {/* ORDER GRID */}

        <div className="curtain-order-grid">

          {/* LEFT COLUMN */}

          <div className="curtain-order-left">

            {/* PRODUCT CARD */}

            <div className="curtain-order-product-card">

              <div className="curtain-order-card-heading">
                <div className="curtain-order-heading-icon">
                  01
                </div>

                <div className="curtain-order-heading-text">
                  Your Selected Fabric
                </div>
              </div>

              <div
                className={`curtain-order-product-image curtain-order-product-image-${fabric.id || 2}`}
              ></div>

              <div className="curtain-order-product-info">

                <div className="curtain-order-product-name">
                  {fabric.name}
                </div>

                <div className="curtain-order-product-description">
                  {fabric.description || "Beautiful fabric for your home"}
                </div>

                <div className="curtain-order-product-price">
                  ₹{Number(fabric.price || 0).toLocaleString("en-IN")}

                  <div className="curtain-order-product-unit">
                    / metre
                  </div>
                </div>

              </div>

              <div
                className="curtain-order-edit-fabric"
                onClick={goBackToExplorer}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    goBackToExplorer();
                  }
                }}
              >
                Change Fabric
              </div>

            </div>

            {/* CUSTOMIZATION DETAILS */}

            <div className="curtain-order-details-card">

              <div className="curtain-order-card-heading">
                <div className="curtain-order-heading-icon">
                  02
                </div>

                <div className="curtain-order-heading-text">
                  Your Customization
                </div>
              </div>

              <div className="curtain-order-detail-row">
                <div className="curtain-order-detail-icon">⌂</div>
                <div className="curtain-order-detail-label">Room</div>
                <div className="curtain-order-detail-separator">:</div>
                <div className="curtain-order-detail-value">{room}</div>
              </div>

              <div className="curtain-order-detail-row">
                <div className="curtain-order-detail-icon">↔</div>
                <div className="curtain-order-detail-label">
                  Window Width
                </div>
                <div className="curtain-order-detail-separator">:</div>
                <div className="curtain-order-detail-value">
                  {width} ft
                </div>
              </div>

              <div className="curtain-order-detail-row">
                <div className="curtain-order-detail-icon">↕</div>
                <div className="curtain-order-detail-label">
                  Window Height
                </div>
                <div className="curtain-order-detail-separator">:</div>
                <div className="curtain-order-detail-value">
                  {height} ft
                </div>
              </div>

              <div className="curtain-order-detail-row">
                <div className="curtain-order-detail-icon">⌁</div>
                <div className="curtain-order-detail-label">
                  Curtain Style
                </div>
                <div className="curtain-order-detail-separator">:</div>
                <div className="curtain-order-detail-value">
                  {style}
                </div>
              </div>

              <div className="curtain-order-detail-row">
                <div className="curtain-order-detail-icon">▤</div>
                <div className="curtain-order-detail-label">
                  Fabric Fullness
                </div>
                <div className="curtain-order-detail-separator">:</div>
                <div className="curtain-order-detail-value">
                  {fullness}x
                </div>
              </div>

              <div className="curtain-order-detail-row">
                <div className="curtain-order-detail-icon">◫</div>
                <div className="curtain-order-detail-label">
                  Quantity Required
                </div>
                <div className="curtain-order-detail-separator">:</div>
                <div className="curtain-order-detail-value curtain-order-quantity">
                  {quantity.toFixed(1)} metres
                </div>
              </div>

              <div
                className="curtain-order-edit-measurements"
                onClick={goBackToExplorer}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    goBackToExplorer();
                  }
                }}
              >
                Edit Measurements
              </div>

            </div>

            {/* CUSTOMER INFORMATION */}

            <div className="curtain-order-customer-card">

              <div className="curtain-order-card-heading">
                <div className="curtain-order-heading-icon">
                  03
                </div>

                <div className="curtain-order-heading-text">
                  Your Contact Details
                </div>
              </div>

              <div className="curtain-order-customer-fields">

                <div className="curtain-order-field">

                  <div className="curtain-order-field-label">
                    Your Name
                  </div>

                  <input
                    type="text"
                    value={customerName}
                    onChange={(event) =>
                      setCustomerName(event.target.value)
                    }
                    placeholder="Enter your full name"
                    maxLength={100}
                    disabled={isSending || orderSuccess}
                  />

                </div>

                <div className="curtain-order-field">

                  <div className="curtain-order-field-label">
                    Mobile Number
                  </div>

                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(event) =>
                      setCustomerPhone(event.target.value)
                    }
                    placeholder="Enter your phone number"
                    maxLength={18}
                    disabled={isSending || orderSuccess}
                  />

                </div>

              </div>

              <div className="curtain-order-field curtain-order-requirements-field">

                <div className="curtain-order-field-label">
                  Additional Requirements

                  <div className="curtain-order-optional-label">
                    Optional
                  </div>
                </div>

                <textarea
                  value={requirements}
                  onChange={(event) =>
                    setRequirements(event.target.value)
                  }
                  placeholder="Tell us about lining, colour preferences, installation or anything else you need..."
                  rows={4}
                  maxLength={1000}
                  disabled={isSending || orderSuccess}
                />

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="curtain-order-right">

            {/* PRICE CARD */}

            <div className="curtain-order-price-card">

              <div className="curtain-order-price-heading">
                <div className="curtain-order-price-icon">
                  ₹
                </div>

                <div className="curtain-order-price-title">
                  Estimated Cost
                </div>
              </div>

              <div className="curtain-order-price-total">
                ₹{estimatedPrice.toLocaleString("en-IN")}
              </div>

              <div className="curtain-order-price-rate">
                {quantity.toFixed(1)} m × ₹
                {Number(fabric.price || 0).toLocaleString("en-IN")}
              </div>

              <div className="curtain-order-price-divider"></div>

              <div className="curtain-order-includes-title">
                What you can expect
              </div>

              <div className="curtain-order-includes-list">

                <div className="curtain-order-includes-item">
                  <div className="curtain-order-includes-check">✓</div>
                  <div>Premium Quality Fabric</div>
                </div>

                <div className="curtain-order-includes-item">
                  <div className="curtain-order-includes-check">✓</div>
                  <div>Expert Measurement Guidance</div>
                </div>

                <div className="curtain-order-includes-item">
                  <div className="curtain-order-includes-check">✓</div>
                  <div>Personalized Design Assistance</div>
                </div>

                <div className="curtain-order-includes-item">
                  <div className="curtain-order-includes-check">✓</div>
                  <div>Installation Support</div>
                </div>

              </div>

              <div className="curtain-order-estimate-note">
                Final price may change after measurement,
                fabric confirmation and installation requirements.
              </div>

            </div>

            {/* DIRECT ORDER SUBMISSION */}

            <div className="curtain-order-whatsapp-card">

              {orderSuccess ? (

                <div className="curtain-order-success">

                  <div className="curtain-order-success-icon">
                    ✓
                  </div>

                  <div className="curtain-order-whatsapp-title">
                    Order Submitted Successfully!
                  </div>

                  <div className="curtain-order-whatsapp-description">
                    Thank you for choosing Siventhra Interior & Decors.
                    We have received your curtain order request.
                    Our team will contact you shortly.
                  </div>

                  {submittedOrderId && (
                    <div className="curtain-order-reference">
                      Order Reference: {submittedOrderId}
                    </div>
                  )}

                </div>

              ) : (

                <>

                  <div className="curtain-order-whatsapp-title">
                    Ready to Place Your Order?
                  </div>

                  <div className="curtain-order-whatsapp-description">
                    Submit your curtain requirements directly through
                    our website. Our team will contact you shortly.
                  </div>

                  <div
                    className="curtain-order-whatsapp-button"
                    onClick={!isSending ? submitCurtainOrder : undefined}
                    role="button"
                    tabIndex={isSending ? -1 : 0}
                    aria-disabled={isSending}
                    onKeyDown={(event) => {
                      if (
                        !isSending &&
                        (event.key === "Enter" ||
                          event.key === " ")
                      ) {
                        event.preventDefault();
                        submitCurtainOrder();
                      }
                    }}
                  >

                    <div className="curtain-order-whatsapp-icon">
                      ✓
                    </div>

                    <div>
                      {isSending
                        ? "Submitting Order..."
                        : "Submit Order"}
                    </div>

                    <div className="curtain-order-whatsapp-arrow">
                      →
                    </div>

                  </div>

                  {submitError && (
                    <div className="curtain-order-error">
                      {submitError}
                    </div>
                  )}

                  <div className="curtain-order-privacy-note">
                    Your order details will be submitted securely
                    through our website.
                  </div>

                </>

              )}

            </div>

          </div>

        </div>

        {/* BOTTOM TRUST SECTION */}

        <div className="curtain-order-trust-section">

          <div className="curtain-order-trust-item">
            <div className="curtain-order-trust-icon">✓</div>
            <div className="curtain-order-trust-text">
              Premium Fabrics
            </div>
          </div>

          <div className="curtain-order-trust-item">
            <div className="curtain-order-trust-icon">⌂</div>
            <div className="curtain-order-trust-text">
              Beautiful Interiors
            </div>
          </div>

          <div className="curtain-order-trust-item">
            <div className="curtain-order-trust-icon">✧</div>
            <div className="curtain-order-trust-text">
              Personal Guidance
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="curtain-order-footer">

        <div className="curtain-order-footer-brand">
          Siventhra Interior & Decors
        </div>

        <div className="curtain-order-footer-tagline">
          Beautiful Curtains. A Beautiful Home.
        </div>

      </div>

    </div>
  );
};

export default CurtainOrder;
