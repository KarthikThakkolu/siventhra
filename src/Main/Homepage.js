import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);

    const images = [
        {
            url: "https://i.pinimg.com/736x/59/3c/17/593c1764523530d5f3e0f2ff8fd6b06d.jpg",
            title: "Modern Interior Design",
            subtitle: "Advanced Locking Systems for Your Safety",
            link: "/services/ss-automation",
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYMwrqifrlc7dbWzvWvpzA9qkisti67LVtM7D_j_Xeg&s=10",
            title: "Floor Designers",
            subtitle: "Transforms Your Space with Elegance",
            link: "/services/floor-designers",
        },
        {
            url: "https://img.freepik.com/premium-photo/stylish-modern-living-room-interior-design-3d-render-8k-image_901408-22328.jpg",
            title: "The Best Interior Products",
            subtitle: "Create Your Dream Living Space",
            link: "/services/the-best",
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3qgmfPqSDCwbDhClJqxnQq-55WTKvZAJDRzCmFTadw&s=10",
            title: "Pest Control Services",
            subtitle: "Protect your home from unwanted guests",
            link: "/services/pest-control",
        },
    ];

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div>
            <div className="slider-wrapper">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`slider-slide ${index === current ? "active" : ""}`}
                    >
                        {index === current && (
                            <>
                                <img src={img.url} alt={img.title} />

                                <div className="slider-overlay">
                                    <h1 className="slider-overlay-title">{img.title}</h1>

                                    <p className="slider-overlay-subtitle">
                                        {img.subtitle}
                                    </p>

                                    <button
                                        className="slider-overlay-button"
                                        onClick={() => navigate(img.link)}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}

                <button className="slider-arrow-prev" onClick={prevSlide}>
                    ❮
                </button>

                <button className="slider-arrow-next" onClick={nextSlide}>
                    ❯
                </button>

                <div className="slider-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`slider-dot ${index === current ? "active" : ""
                                }`}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}


                </div>

                {/* <div className="client-section">
                <div className="clients-container">

                    <div className="client-box">
                        <h2 className="client-box-h2">500+</h2>
                        <p className="client-box-p">Happy Clients</p>
                    </div>

                    <div className="client-box">
                        <h2 className="client-box-h2">30+</h2>
                        <p className="client-box-p">Services Offered</p>
                    </div>

                    <div className="client-box">
                        <h2 className="client-box-h2">24/7</h2>
                        <p className="client-box-p">Days Support</p>
                    </div>

                    <div className="client-box">
                        <h2 className="client-box-h2">5+</h2>
                        <p className="client-box-p">Years Experienced Persons</p>
                    </div>

                </div>
            </div> */}


                {/* <div className="homepage-container">

                <div className="homepage-row">

                    <div className="homepage-card">
                        <div className="homepage-card-image">
                            <img
                                className="homepage-card-img"
                                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                                alt=""
                            />
                        </div>

                        <div className="homepage-card-content">
                            <div className="homepage-card-title">
                                Premium Curtains
                            </div>

                            <div className="homepage-card-description">
                                Elegant curtain collections for homes, offices and commercial spaces.
                            </div>

                            <button className="homepage-card-button">
                                View More
                            </button>
                        </div>
                    </div>

                    <div className="homepage-card">
                        <div className="homepage-card-image">
                            <img
                                className="homepage-card-img"
                                src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
                                alt=""
                            />
                        </div>

                        <div className="homepage-card-content">
                            <div className="homepage-card-title">
                                PVC Wall Panels
                            </div>

                            <div className="homepage-card-description">
                                Stylish waterproof decorative wall panels for modern interiors.
                            </div>

                            <button className="homepage-card-button">
                                View More
                            </button>
                        </div>
                    </div>

                    <div className="homepage-card">
                        <div className="homepage-card-image">
                            <img
                                className="homepage-card-img"
                                src="https://images.unsplash.com/photo-1494526585095-c41746248156"
                                alt=""
                            />
                        </div>

                        <div className="homepage-card-content">
                            <div className="homepage-card-title">
                                Wooden Flooring
                            </div>

                                <div className="homepage-card-description">
                                    Premium flooring solutions with elegant finishes.
                                </div>

                                <button className="homepage-card-button">
                                    View More
                                </button>
                            </div>
                        </div>

                    </div> */}

                {/* </div> */}

            </div>

            <div className="client-section">
                <div className="clients-container">

                    <div className="client-box">
                        <h2 className="client-box-h2">500+</h2>
                        <p className="client-box-p">Happy Clients</p>
                    </div>

                    <div className="client-box">
                        <h2 className="client-box-h2">30+</h2>
                        <p className="client-box-p">Services Offered</p>
                    </div>

                    <div className="client-box">
                        <h2 className="client-box-h2">24/7</h2>
                        <p className="client-box-p">Days Support</p>
                    </div>

                    <div className="client-box">
                        <h2 className="client-box-h2">5+</h2>
                        <p className="client-box-p">Years Experienced Persons</p>
                    </div>

                </div>
            </div>
            <div className="small-under-container">
                <div className="small-under-content">
                    <h3 className="small-under-container-heading">Discover</h3>

                    <h1 className="small-under-container-title">
                        Explore Our Collections
                    </h1>

                    <p className="small-under-container-paragraph">
                        Browse our curated interior categories crafted for modern Indian homes.
                    </p>
                </div>
            </div>


            <div className="homepage-container">

                <div className="homepage-row">

                    <div className="homepage-card">
                        <div className="homepage-card-image">
                            <img
                                className="homepage-card-img"
                                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                                alt=""
                            />
                        </div>

                        <div className="homepage-card-content">
                            <div className="homepage-card-title">
                                Premium Curtains
                            </div>

                            <div className="homepage-card-description">
                                Elegant curtain collections for homes, offices and commercial spaces.
                            </div>
<Link to="/Pages/Curtains">
    <button className="homepage-card-button">
        View More
    </button>
</Link>
                        </div>
                    </div>

                    <div className="homepage-card">
                        <div className="homepage-card-image">
                            <img
                                className="homepage-card-img"
                                src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
                                alt=""
                            />
                        </div>

                        <div className="homepage-card-content">
                            <div className="homepage-card-title">
                                PVC Wall Panels
                            </div>

                            <div className="homepage-card-description">
                                Stylish waterproof decorative wall panels for modern interiors.
                            </div>

                            <button className="homepage-card-button">
                                View More
                            </button>
                        </div>
                    </div>

                    <div className="homepage-card">
                        <div className="homepage-card-image">
                            <img
                                className="homepage-card-img"
                                src="https://images.unsplash.com/photo-1494526585095-c41746248156"
                                alt=""
                            />
                        </div>

                        <div className="homepage-card-content">
                            <div className="homepage-card-title">
                                Wooden Flooring
                            </div>

                            <div className="homepage-card-description">
                                Premium flooring solutions with elegant finishes.
                            </div>

                            <button className="homepage-card-button">
                                View More
                            </button>
                        </div>

                    </div>





                </div>

                <div className="button-container">
                    <button className="specialization-btn">
                        See All Specializations
                    </button>
                </div>

            </div>

            <div className="specialization-section">

                <div className="specialization-grid">

                    <div className="specialization-card">

                        <div className="specialization-image">
                            <img
                                className="specialization-img"
                                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
                                alt="Wallpapers"
                            />
                        </div>

                        <div className="specialization-content">
                            <h3 className="specialization-title">Wallpapers</h3>

                            <p className="specialization-description">
                                Premium imported wallpapers for homes, offices and commercial interiors.
                            </p>
                        </div>

                    </div>

                    <div className="specialization-card">

                        <div className="specialization-image">
                            <img
                                className="specialization-img"
                                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600"
                                alt="Blinds"
                            />
                        </div>

                        <div className="specialization-content">
                            <h3 className="specialization-title">Window Blinds</h3>

                            <p className="specialization-description">
                                Stylish Zebra, Roller, Roman and Venetian blinds for every space.
                            </p>
                        </div>

                    </div>

                    <div className="specialization-card">

                        <div className="specialization-image">
                            <img
                                className="specialization-img"
                                src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=600"
                                alt="Flooring"
                            />
                        </div>

                        <div className="specialization-content">
                            <h3 className="specialization-title">Wooden Flooring</h3>

                            <p className="specialization-description">
                                Elegant laminate and SPC flooring with premium finish.
                            </p>
                        </div>

                    </div>

                    <div className="specialization-card">

                        <div className="specialization-image">
                            <img
                                className="specialization-img"
                                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
                                alt="PVC Partition"
                            />
                        </div>

                        <div className="specialization-content">
                            <h3 className="specialization-title">PVC Room Partition</h3>

                            <p className="specialization-description">
                                Modern decorative partition screens for homes and offices.
                            </p>
                        </div>

                    </div>

                    <div className="specialization-card">

                        <div className="specialization-image">
                            <img
                                className="specialization-img"
                                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600"
                                alt="AC Partition"
                            />
                        </div>

                        <div className="specialization-content">
                            <h3 className="specialization-title">AC Partition</h3>

                            <p className="specialization-description">
                                PVC strip curtains and industrial AC partitions for cooling efficiency.
                            </p>
                        </div>

                    </div>

                    <div className="specialization-card">

                        <div className="specialization-image">
                            <img
                                className="specialization-img"
                                src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=600"
                                alt="Mosquito Mesh"
                            />
                        </div>

                        <div className="specialization-content">
                            <h3 className="specialization-title">Mosquito Mesh</h3>

                            <p className="specialization-description">
                                Invisible mosquito protection with durable mesh systems.
                            </p>
                        </div>

                    </div>

                    <div className="specialization-card">

                        <div className="specialization-image">
                            <img
                                className="specialization-img"
                                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600"
                                alt="Ceiling Hanger"
                            />
                        </div>

                        <div className="specialization-content">
                            <h3 className="specialization-title">Ceiling Hangers</h3>

                            <p className="specialization-description">
                                Automatic ceiling cloth drying hangers with modern designs.
                            </p>
                        </div>

                    </div>

                    <div className="specialization-card">

                        <div className="specialization-image">
                            <img
                                className="specialization-img"
                                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600"
                                alt="Ceiling Hanger"
                            />
                        </div>

                        <div className="specialization-content">
                            <h3 className="specialization-title">Ceiling Hangers</h3>

                            <p className="specialization-description">
                                Automatic ceiling cloth drying hangers with modern designs.
                            </p>
                        </div>

                    </div>

 <div className="specialization-card">

                        <div className="specialization-image">
                            <img
                                className="specialization-img"
                                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600"
                                alt="Ceiling Hanger"
                            />
                        </div>

                        <div className="specialization-content">
                            <h3 className="specialization-title">Ceiling Hangers</h3>

                            <p className="specialization-description">
                                Automatic ceiling cloth drying hangers with modern designs.
                            </p>
                        </div>

                    </div>

                </div>

            </div>



            {/* ================= Testimonials Section ================= */}

            <div className="testimonial-section">

                <div className="testimonial-heading">

                    <p className="testimonial-subtitle">
                        TESTIMONIALS
                    </p>

                    <h2 className="testimonial-title">
                        What Our Customers Say
                    </h2>

                </div>

                <div className="testimonial-card">

                    <div className="quote-icon">
                        ❝
                    </div>

                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="Customer"
                        className="testimonial-image"
                    />

                    <div className="testimonial-stars">
                        ★★★★★
                    </div>

                    <p className="testimonial-review">
                        Excellent work by Siventhra Interiors. Wallpaper installation
                        and mosquito mesh quality exceeded my expectations. The
                        finishing was premium, the staff were professional, and the
                        project was completed on time. Highly recommended for home
                        interiors.
                    </p>

                    <h3 className="testimonial-name">
                        Karthik Thakkolu
                    </h3>

                    <p className="testimonial-location">
                        Homeowner • Nellore
                    </p>

                    <div className="testimonial-buttons">

                        <button className="testimonial-btn">
                            ←
                        </button>

                        <button className="testimonial-btn">
                            →
                        </button>

                    </div>

                    <div className="testimonial-dots">
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

            </div>

            {/* ================= End Testimonials ================= */}

        </div>


    );
};

export default Homepage;
