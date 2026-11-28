
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Homepage.css";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=90",
        eyebrow: "01 / CURTAIN COLLECTION",
        title: "Spaces that\nfeel like you.",
        description: "Thoughtfully chosen interiors. Beautifully finished spaces. A feeling that stays.",
        link: "/Pages/Curtains",
        label: "Curtains",
    },
    {
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=90",
        eyebrow: "02 / WALL DESIGN",
        title: "A wall can\nchange everything.",
        description: "Bring your walls to life with textures, tones and patterns that tell your story.",
        link: "/Pages/Wallpapers",
        label: "Wallpapers",
    },
    {
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90",
        eyebrow: "03 / LIGHT & LIVING",
        title: "Let the light\nfind its place.",
        description: "Beautiful window solutions that balance light, privacy and everyday comfort.",
        link: "/Pages/Blinds",
        label: "Window Blinds",
    },
];

const collections = [
    {
        number: "01",
        title: "Curtains",
        category: "FABRIC / LIGHT / ELEGANCE",
        description: "Make every window a statement with beautifully tailored curtains and textures.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
        link: "/Pages/CurtainExplorer",
        style: "collection-large",
    },
    {
        number: "02",
        title: "Wallpapers",
        category: "PATTERN / PERSONALITY / DEPTH",
        description: "Walls with character. Explore designs that bring personality into every corner.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
        link: "/Pages/Wallpapers",
        style: "collection-small",
    },
    {
        number: "03",
        title: "Window Blinds",
    category: "CONTROL / COMFORT / STYLE",
        description: "A smarter way to shape sunlight, privacy and the mood of your room.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        link: "/Pages/Blinds",
        style: "collection-small",
    },
    {
        number: "04",
        title: "Flooring",
        category: "FOUNDATION / WARMTH / DETAIL",
        description: "Understated flooring that brings the whole space together.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85",
        link: "/Pages/CeilingHangers",
        style: "collection-large",
    },
];

const services = [
    { number: "01", title: "Curtains", detail: "Custom fabric & finishing", link: "/Pages/CurtainExplorer" },
    { number: "02", title: "Wallpapers", detail: "Patterns & wall textures", link: "/Pages/Wallpapers" },
    { number: "03", title: "Window Blinds", detail: "Roller, zebra & roman", link: "/Pages/Blinds" },
    { number: "04", title: "Wooden Flooring", detail: "SPC & laminate flooring", link: "/Pages/Flooring" },
    { number: "05", title: "PVC Wall Panels", detail: "Decorative wall solutions", link: "/Pages/PVC" },
    { number: "06", title: "Room Partitions", detail: "Space & privacy design", link: "/Pages/Partitions" },
    { number: "07", title: "Mosquito Mesh", detail: "Protection with a clear view", link: "/Pages/Mesh" },
    { number: "08", title: "Ceiling Hangers", detail: "Modern drying systems", link: "/Pages/CeilingHangers" },
];

const testimonials = [
    {
        name: "Karthik Thakkolu",
        location: "Homeowner · Nellore",
        image: "https://i.pravatar.cc/150?img=12",
        review: "Excellent work by Siventhra Interiors. Wallpaper installation and mosquito mesh quality exceeded my expectations. The finishing was premium, the staff were professional, and the project was completed on time. Highly recommended for home interiors.",
    },
    {
        name: "Our Happy Customer",
        location: "Homeowner",
        image: "https://i.pravatar.cc/150?img=47",
        review: "Beautiful quality and excellent finishing. The team helped us choose the right designs for our home. Everything looks elegant and feels comfortable.",
    },
    {
        name: "Our Happy Customer",
        location: "Homeowner",
        image: "https://i.pravatar.cc/150?img=32",
        review: "A wonderful experience from choosing the materials to the final installation. The design, attention to detail and overall work were impressive.",
    },
];

const Homepage = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const [reviewIndex, setReviewIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 6500);
        return () => clearInterval(timer);
    }, [nextSlide]);

    useEffect(() => {
        const elements = document.querySelectorAll(".home-reveal");

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("home-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("home-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const nextReview = () => {
        setReviewIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevReview = () => {
        setReviewIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const activeReview = testimonials[reviewIndex];

    return (
        <main className="sv-homepage">

            {/* ================= HERO ================= */}

            <section className="sv-hero">

                <div className="sv-hero-slides">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.eyebrow}
                            className={`sv-hero-slide ${index === current ? "sv-active" : ""}`}
                        >
                            <img
                                src={slide.image}
                                alt={slide.label}
                                className="sv-hero-image"
                            />

                            <div className="sv-hero-shade"></div>
                        </div>
                    ))}
                </div>

                <div className="sv-hero-content">

                    <div className="sv-hero-left">

                        <span className="sv-hero-eyebrow" key={slides[current].eyebrow}>
                            {slides[current].eyebrow}
                        </span>

                        <h1 className="sv-hero-title" key={`title-${current}`}>
                            {slides[current].title.split("\n").map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index === 0 && <br />}
                                </span>
                            ))}
                        </h1>

                        <p className="sv-hero-description" key={`description-${current}`}>
                            {slides[current].description}
                        </p>

                        <button
                            className="sv-hero-cta"
                            onClick={() => navigate(slides[current].link)}
                        >
                            <span>Explore collection</span>
                            <span className="sv-cta-arrow">↗</span>
                        </button>

                    </div>

                    <div className="sv-hero-bottom">

                        <div className="sv-hero-note">
                            <span className="sv-hero-note-line"></span>
                            <span>Interiors made meaningful</span>
                        </div>

                        <div className="sv-hero-controls">

                            <span className="sv-hero-counter">
                                <span>{String(current + 1).padStart(2, "0")}</span>
                                <span className="sv-counter-divider">/</span>
                                <span>{String(slides.length).padStart(2, "0")}</span>
                            </span>

                            <button
                                className="sv-hero-arrow"
                                onClick={prevSlide}
                                aria-label="Previous slide"
                            >
                                ←
                            </button>

                            <button
                                className="sv-hero-arrow"
                                onClick={nextSlide}
                                aria-label="Next slide"
                            >
                                →
                            </button>

                        </div>

                    </div>

                </div>

                <div className="sv-hero-side-label">
                    SIVENTHRA / INTERIOR & DECORS
                </div>

                <div className="sv-hero-progress">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.label}
                            className={`sv-progress-item ${index === current ? "sv-progress-active" : ""}`}
                            onClick={() => setCurrent(index)}
                            aria-label={`Go to ${slide.label}`}
                        >
                            <span></span>
                        </button>
                    ))}
                </div>

            </section>


            {/* ================= MOVING TICKER ================= */}

            <section className="sv-ticker" aria-label="Interior design categories">

                <div className="sv-ticker-track">
                    {[0, 1, 2, 3].map((group) => (
                        <div className="sv-ticker-group" key={group}>
                            <span>DESIGN</span>
                            <span className="sv-ticker-star">✳</span>
                            <span>TEXTURE</span>
                            <span className="sv-ticker-star">✳</span>
                            <span>COMFORT</span>
                            <span className="sv-ticker-star">✳</span>
                            <span>DETAIL</span>
                            <span className="sv-ticker-star">✳</span>
                        </div>
                    ))}
                </div>

            </section>


            {/* ================= INTRO ================= */}

            <section className="sv-intro home-reveal">

                <div className="sv-intro-label">
                    <span className="sv-section-number">01 — OUR WORLD</span>
                    <span className="sv-label-line"></span>
                    <span>More than decoration</span>
                </div>

                <div className="sv-intro-main">

                    <h2>
                        Your home is a feeling.
                        <br />
                        <span>We make it visible.</span>
                    </h2>

                    <div className="sv-intro-description">

                        <p>
                            Every room has a story waiting to unfold.
                            We bring together beautiful materials, thoughtful
                            details and functional design to create spaces
                            that feel unmistakably yours.
                        </p>

                        <Link to="/About" className="sv-text-link">
                            <span>Get to know us</span>
                            <span>↗</span>
                        </Link>

                    </div>

                </div>

                <div className="sv-intro-bottom">

                    <div className="sv-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
                            alt="Warm modern interior designed with thoughtful details"
                        />
                    </div>

                    <div className="sv-intro-stats">

                        <div className="sv-stat">
                            <strong>500<span>+</span></strong>
                            <span>Happy customers</span>
                        </div>

                        <div className="sv-stat">
                            <strong>30<span>+</span></strong>
                            <span>Interior solutions</span>
                        </div>

                        <div className="sv-stat">
                            <strong>5<span>+</span></strong>
                            <span>Years of experience</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= COLLECTIONS ================= */}

            <section className="sv-collections">

                <div className="sv-collections-heading home-reveal">

                    <div>
                        <span className="sv-section-number">02 — THE COLLECTIONS</span>

                        <h2>
                            Pieces that make
                            <br />
                            <span>a space yours.</span>
                        </h2>
                    </div>

                    <p>
                        Explore our collection of textures, materials
                        and designs. Find the details that make a house
                        feel like home.
                    </p>

                </div>

                <div className="sv-collections-grid">

                    {collections.map((item, index) => (
                        <Link
                            to={item.link}
                            className={`sv-collection-card ${item.style} home-reveal`}
                            key={item.number}
                            style={{ "--reveal-delay": `${index * 100}ms` }}
                        >

                            <div className="sv-collection-image">
                                <img src={item.image} alt={item.title} />

                                <div className="sv-collection-image-shade"></div>

                                <span className="sv-collection-number">
                                    {item.number}
                                </span>

                                <span className="sv-collection-open">
                                    ↗
                                </span>
                            </div>

                            <div className="sv-collection-info">

                                <div>
                                    <span className="sv-collection-category">
                                        {item.category}
                                    </span>

                                    <h3>{item.title}</h3>
                                </div>

                                <p>{item.description}</p>

                            </div>

                        </Link>
                    ))}

                </div>

                <div className="sv-collections-footer">

                    <span>DESIGNED FOR YOUR EVERYDAY</span>

                    <Link to="/Services" className="sv-round-link">
                        <span>Explore everything</span>
                        <span>↗</span>
                    </Link>

                </div>

            </section>


            {/* ================= SERVICES ================= */}

            <section className="sv-services">

                <div className="sv-services-heading home-reveal">

                    <span className="sv-section-number">03 — WHAT WE DO</span>

                    <h2>
                        Thoughtful design.
                        <br />
                        <span>Every little detail.</span>
                    </h2>

                    <p>
                        From the first layer to the final finish,
                        we bring the right solutions together for your space.
                    </p>

                </div>

                <div className="sv-services-list">

                    {services.map((service, index) => (
                        <Link
                            to={service.link}
                            className="sv-service-row home-reveal"
                            key={service.number}
                            style={{ "--reveal-delay": `${index * 45}ms` }}
                        >

                            <span className="sv-service-number">
                                {service.number}
                            </span>

                            <span className="sv-service-name">
                                {service.title}
                            </span>

                            <span className="sv-service-detail">
                                {service.detail}
                            </span>

                            <span className="sv-service-arrow">
                                ↗
                            </span>

                        </Link>
                    ))}

                </div>

                <div className="sv-services-footer">
                    <span>MADE TO FIT YOUR SPACE</span>

                    <Link to="/Services" className="sv-text-link">
                        <span>View all services</span>
                        <span>↗</span>
                    </Link>
                </div>

            </section>


            {/* ================= SIGNATURE BANNER ================= */}

            <section className="sv-signature">

                <img
                    className="sv-signature-image"
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90"
                    alt="Beautifully styled contemporary home interior"
                />

                <div className="sv-signature-shade"></div>

                <div className="sv-signature-content home-reveal">

                    <span className="sv-signature-eyebrow">
                        SIVENTHRA INTERIOR & DECORS
                    </span>

                    <h2>
                        Not just a space.
                        <br />
                        <span>A place to belong.</span>
                    </h2>

                    <p>
                        Good design isn't just seen.
                        It's experienced every single day.
                    </p>

                    <Link to="/About" className="sv-signature-button">
                        <span>Discover our story</span>
                        <span>↗</span>
                    </Link>

                </div>

                <span className="sv-signature-caption">
                    MADE WITH INTENTION / MADE FOR LIVING
                </span>

            </section>


            {/* ================= TESTIMONIALS ================= */}

            <section className="sv-testimonials">

                <div className="sv-testimonials-heading home-reveal">

                    <span className="sv-section-number">04 — WORDS THAT MATTER</span>

                    <h2>
                        Loved by the people
                        <br />
                        <span>who live in it.</span>
                    </h2>

                </div>

                <div className="sv-review-layout home-reveal">

                    <div className="sv-review-side">
                        <span className="sv-review-quote-mark">“</span>
                        <span>REAL EXPERIENCES.</span>
                        <span>REAL SPACES.</span>
                    </div>

                    <div className="sv-review-main" key={reviewIndex}>

                        <div className="sv-review-stars">
                            ★★★★★
                        </div>

                        <p className="sv-review-text">
                            {activeReview.review}
                        </p>

                        <div className="sv-review-person">

                            <img
                                src={activeReview.image}
                                alt={activeReview.name}
                            />

                            <div>
                                <strong>{activeReview.name}</strong>
                                <span>{activeReview.location}</span>
                            </div>

                        </div>

                        <div className="sv-review-controls">

                            <span className="sv-review-count">
                                {String(reviewIndex + 1).padStart(2, "0")}
                                <span> / </span>
                                {String(testimonials.length).padStart(2, "0")}
                            </span>

                            <button onClick={prevReview} aria-label="Previous testimonial">
                                ←
                            </button>

                            <button onClick={nextReview} aria-label="Next testimonial">
                                →
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="sv-home-contact home-reveal">

                <span className="sv-section-number">
                    05 — LET'S MAKE IT BEAUTIFUL
                </span>

                <h2>
                    Your space.
                    <br />
                    <span>Your story.</span>
                    <br />
                    Let's begin.
                </h2>

                <Link to="/Contact" className="sv-home-contact-button">
                    <span>Start your project</span>
                    <span>↗</span>
                </Link>

                <div className="sv-home-contact-bottom">
                    <span>SIVENTHRA INTERIOR & DECORS</span>
                    <span>DESIGN WITH FEELING.</span>
                </div>

            </section>

        </main>
    );
};

export default Homepage;
