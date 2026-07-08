// import React from "react";
import React, { useState } from "react";


import {
  FaStar,
  FaQuoteLeft,
  FaThumbsUp,
  FaHome,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUpload,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaClipboardCheck
} from "react-icons/fa";

import "./Feedback.css";

const Feedback = () => {
    
const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0);
const [images, setImages] = useState([]);

const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    date: "",
    feedback: "",
    recommend: true
});

const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value
    });

};

const handleSubmit = (e) => {

    e.preventDefault();

    console.log({
        ...formData,
        rating
    });

    alert("Thank you for your valuable feedback!");
};
  const feedbackData = [
    {
      id: 1,
      image: "https://i.pravatar.cc/300?img=12",
      name: "Ramesh Kumar",
      location: "Nellore",
      service: "Premium Curtains",
      rating: 5,
      date: "March 2026",
      review:
        "Outstanding workmanship. The curtains completely transformed our living room. Installation was neat, professional and completed before the promised date.",
    },
    {
      id: 2,
      image: "https://i.pravatar.cc/300?img=15",
      name: "Priya Reddy",
      location: "Kavali",
      service: "Wallpaper Design",
      rating: 5,
      date: "April 2026",
      review:
        "Very creative designs with premium finishing. Every visitor appreciates our wallpaper. Highly recommended.",
    },
    {
      id: 3,
      image: "https://i.pravatar.cc/300?img=22",
      name: "Srinivas Rao",
      location: "Gudur",
      service: "False Ceiling",
      rating: 5,
      date: "January 2026",
      review:
        "Excellent quality materials and very skilled workers. The ceiling lighting gives a luxurious feel to our home.",
    },
    {
      id: 4,
      image: "https://i.pravatar.cc/300?img=33",
      name: "Anitha Devi",
      location: "Nellore",
      service: "Mosquito Mesh",
      rating: 5,
      date: "May 2026",
      review:
        "Installation was clean and quick. The mesh quality is excellent and looks elegant.",
    },
    {
      id: 5,
      image: "https://i.pravatar.cc/300?img=45",
      name: "Sai Krishna",
      location: "Atmakur",
      service: "PVC Partition",
      rating: 5,
      date: "February 2026",
      review:
        "Affordable pricing with premium finish. Very happy with the professionalism of the entire team.",
    },
    {
      id: 6,
      image: "https://i.pravatar.cc/300?img=55",
      name: "Harika",
      location: "Naidupeta",
      service: "Blinds",
      rating: 5,
      date: "June 2026",
      review:
        "Amazing experience from consultation to installation. Siventhra exceeded our expectations.",
    },
  ];


  const handleImageUpload = (e) => {

    const files = Array.from(e.target.files);

    const previewImages = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file)
    }));

    setImages((prev) => [...prev, ...previewImages]);

};
const removeImage = (index) => {

    const updatedImages = [...images];

    URL.revokeObjectURL(updatedImages[index].preview);

    updatedImages.splice(index, 1);

    setImages(updatedImages);

};

  
  return (
    <div className="feedback-page">
      {/* HERO */}

      <div className="feedback-hero-section">
        <div className="feedback-hero-overlay"></div>

        <div className="feedback-hero-content">
          <p className="feedback-hero-small-title">
            CUSTOMER EXPERIENCES
          </p>

          <h1 className="feedback-hero-main-title">
            Trusted by Hundreds of Happy Families
          </h1>

          <p className="feedback-hero-description">
            Every smile tells a story. Discover how Siventhra Interior &
            Decors has transformed homes with creativity, quality and
            premium workmanship.
          </p>
        </div>
      </div>

      {/* STATS */}

      <div className="feedback-stats-section">

        <div className="feedback-stat-card">

          <div className="feedback-stat-number">
            500+
          </div>

          <div className="feedback-stat-title">
            Happy Customers
          </div>

        </div>

        <div className="feedback-stat-card">

          <div className="feedback-stat-number">
            4.9★
          </div>

          <div className="feedback-stat-title">
            Average Rating
          </div>

        </div>

        <div className="feedback-stat-card">

          <div className="feedback-stat-number">
            98%
          </div>

          <div className="feedback-stat-title">
            Recommend Us
          </div>

        </div>

        <div className="feedback-stat-card">

          <div className="feedback-stat-number">
            40+
          </div>

          <div className="feedback-stat-title">
            Interior Services
          </div>

        </div>

      </div>


      {/* customer feedback form */}

      
<div className="feedback-form-section">

    <div className="feedback-form-container">

        {/* LEFT */}

        <div className="feedback-form-left">

            <div className="feedback-form-small-title">
                SHARE YOUR EXPERIENCE
            </div>

            <h2 className="feedback-form-main-title">
                Tell Us About Your
                <br />
                Dream Space Journey
            </h2>

            <p className="feedback-form-description">

                Your opinion inspires us to deliver
                even better interiors.

                Every review helps future customers
                make confident decisions while helping
                Siventhra improve every project.

            </p>

            <div className="feedback-form-feature-list">

                <div className="feedback-form-feature-card">

                    <div className="feedback-form-feature-icon">
                        <FaUsers />
                    </div>

                    <div>

                        <div className="feedback-form-feature-title">
                            500+ Happy Customers
                        </div>

                        <div className="feedback-form-feature-text">
                            Trusted throughout Nellore.
                        </div>

                    </div>

                </div>

                <div className="feedback-form-feature-card">

                    <div className="feedback-form-feature-icon">
                        <FaAward />
                    </div>

                    <div>

                        <div className="feedback-form-feature-title">
                            Premium Quality
                        </div>

                        <div className="feedback-form-feature-text">
                            Professional finishing &
                            premium materials.
                        </div>

                    </div>

                </div>

                <div className="feedback-form-feature-card">

                    <div className="feedback-form-feature-icon">
                        <FaClipboardCheck />
                    </div>

                    <div>

                        <div className="feedback-form-feature-title">
                            Honest Feedback
                        </div>

                        <div className="feedback-form-feature-text">
                            Every review is personally read.
                        </div>

                    </div>

                </div>

            </div>

        </div>

        {/* RIGHT */}

        <div className="feedback-form-right">

            <form
                className="feedback-main-form"
                onSubmit={handleSubmit}
            >

                {/* ROW 1 */}

                <div className="feedback-form-row">

                    <div className="feedback-form-group">

                        <label className="feedback-form-label">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="feedback-form-input"
                            placeholder="Enter your name"
                        />

                    </div>

                    <div className="feedback-form-group">

                        <label className="feedback-form-label">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="feedback-form-input"
                            placeholder="9876543210"
                        />

                    </div>

                </div>

                {/* ROW 2 */}

                <div className="feedback-form-row">

                    <div className="feedback-form-group">

                        <label className="feedback-form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="feedback-form-input"
                            placeholder="example@email.com"
                        />

                    </div>

                    <div className="feedback-form-group">

                        <label className="feedback-form-label">
                            City
                        </label>

                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="feedback-form-input"
                            placeholder="Nellore"
                        />

                    </div>

                </div>

                {/* ROW 3 */}

                <div className="feedback-form-row">

                    <div className="feedback-form-group">

                        <label className="feedback-form-label">
                            Service Used
                        </label>

                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="feedback-form-select"
                        >

                            <option value="">
                                Select Service
                            </option>

                            <option>Curtains</option>
                            <option>Blinds</option>
                            <option>Wallpapers</option>
                            <option>False Ceiling</option>
                            <option>Mosquito Mesh</option>
                            <option>Wall Panels</option>
                            <option>Modular Interiors</option>

                        </select>

                    </div>

                    <div className="feedback-form-group">

                        <label className="feedback-form-label">
                            Completion Date
                        </label>

                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="feedback-form-input"
                        />

                    </div>

                </div>

                {/* GOOGLE STYLE RATING */}

                <div className="feedback-form-rating-container">

                    <label className="feedback-form-label">
                        Overall Rating
                    </label>

                    <div className="feedback-form-stars">

                        {[1,2,3,4,5].map((star)=>{

                            return(

                                <FaStar

                                    key={star}

                                    className={`feedback-form-star ${
                                        star <= (hover || rating)
                                        ? "feedback-form-star-active"
                                        : ""
                                    }`}

                                    onClick={()=>setRating(star)}

                                    onMouseEnter={()=>setHover(star)}

                                    onMouseLeave={()=>setHover(0)}

                                />

                            );

                        })}

                    </div>

                    <div className="feedback-form-rating-text">

                        {
                            rating===0 && "Click to rate your experience"
                        }

                        {
                            rating===1 && "⭐ Poor"
                        }

                        {
                            rating===2 && "⭐⭐ Fair"
                        }

                        {
                            rating===3 && "⭐⭐⭐ Good"
                        }

                        {
                            rating===4 && "⭐⭐⭐⭐ Very Good"
                        }

                        {
                            rating===5 && "⭐⭐⭐⭐⭐ Excellent"
                        }

                    </div>

                </div>

                {/* FEEDBACK */}

                <div className="feedback-form-group">

                    <label className="feedback-form-label">
                        Your Feedback
                    </label>

                    <textarea

                        rows="6"

                        name="feedback"

                        value={formData.feedback}

                        onChange={handleChange}

                        className="feedback-form-textarea"

                        placeholder="Tell us about your experience..."

                    />

                </div>

                {/* IMAGE */}

                <div className="feedback-upload-box">

    <FaUpload className="feedback-upload-icon" />

    <span className="feedback-upload-title">
        Upload Project Images
    </span>

    <span className="feedback-upload-subtitle">
        JPG, PNG (Max 5 Images)
    </span>

    <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageUpload}
    />

</div>

<div className="feedback-preview-container">

    {

        images.map((image, index) => (

            <div
                className="feedback-preview-card"
                key={index}
            >

                <img
                    src={image.preview}
                    alt="Preview"
                    className="feedback-preview-image"
                />

                <button

                    type="button"

                    className="feedback-preview-remove"

                    onClick={() => removeImage(index)}

                >

                    ×

                </button>

            </div>

        ))

    }

</div>

                {/* RECOMMEND */}

                <label className="feedback-checkbox">

                    <input
                        type="checkbox"
                        checked={formData.recommend}
                        name="recommend"
                        onChange={handleChange}
                    />

                    <span>
                        I recommend Siventhra Interior & Decors.
                    </span>

                </label>

                {/* BUTTON */}

                <button
                    className="feedback-submit-button"
                    type="submit"
                >

                    <FaCheckCircle />

                    Submit Feedback

                </button>

            </form>

        </div>

    </div>

</div>



      {/* HEADING */}

      <div className="feedback-heading-section">

        <p className="feedback-heading-small-title">
          REAL CUSTOMER STORIES
        </p>

        <h2 className="feedback-heading-main-title">
          Hear Directly From Our Clients
        </h2>

      </div>

      {/* GRID */}

      <div className="feedback-grid-container">

        {feedbackData.map((customer) => (

          <div
            className="feedback-review-card"
            key={customer.id}
          >

            <div className="feedback-review-top">

              <FaQuoteLeft className="feedback-review-quote-icon" />

              <div className="feedback-review-verified">

                <FaCheckCircle />

                <span>
                  Verified Customer
                </span>

              </div>

            </div>

            <div className="feedback-review-profile">

              <img
                src={customer.image}
                alt={customer.name}
                className="feedback-review-image"
              />

              <div className="feedback-review-profile-content">

                <h3 className="feedback-review-name">
                  {customer.name}
                </h3>

                <div className="feedback-review-location">

                  <FaMapMarkerAlt />

                  <span>
                    {customer.location}
                  </span>

                </div>

              </div>

            </div>

            <div className="feedback-review-stars">

              {[...Array(customer.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}

            </div>

            <p className="feedback-review-text">
              {customer.review}
            </p>

            <div className="feedback-review-service">

              <FaHome />

              <span>
                {customer.service}
              </span>

            </div>

            <div className="feedback-review-footer">

              <div className="feedback-review-date">

                <FaCalendarAlt />

                <span>
                  {customer.date}
                </span>

              </div>

              <div className="feedback-review-like">

                <FaThumbsUp />

                <span>
                  Recommended
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* WHY US */}

      <div className="feedback-bottom-section">

        <h2 className="feedback-bottom-title">
          Why Customers Love Siventhra
        </h2>

        <div className="feedback-bottom-grid">

          <div className="feedback-bottom-card">
            <h3 className="feedback-bottom-card-title">
              Premium Quality
            </h3>

            <p className="feedback-bottom-card-description">
              We use high-quality materials with excellent finishing for
              every project.
            </p>
          </div>

          <div className="feedback-bottom-card">
            <h3 className="feedback-bottom-card-title">
              On-Time Delivery
            </h3>

            <p className="feedback-bottom-card-description">
              Every project is delivered within the promised timeline
              without compromising quality.
            </p>
          </div>

          <div className="feedback-bottom-card">
            <h3 className="feedback-bottom-card-title">
              Professional Team
            </h3>

            <p className="feedback-bottom-card-description">
              Experienced experts committed to customer satisfaction and
              premium workmanship.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}

      <div className="feedback-cta-section">

        <h2 className="feedback-cta-title">
          Ready To Transform Your Home?
        </h2>

        <p className="feedback-cta-description">
          Join hundreds of happy customers and experience premium
          interior solutions with Siventhra Interior & Decors.
        </p>

        <button className="feedback-cta-button">
          Book Free Consultation
        </button>

      </div>

      {/*======================================================
            SHARE YOUR EXPERIENCE
======================================================*/}

    </div>
  );
};

export default Feedback;