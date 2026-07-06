import React from "react";
import {
  FaComments,
  FaPencilRuler,
  FaTools,
  FaKey,
  FaCheck,
} from "react-icons/fa";

import "./About.css";

const About = () => {
  const processData = [
    {
      id: "01",
      icon: <FaComments />,
      title: "Consultation",
      text: "Share your ideas and we plan together",
    },
    {
      id: "02",
      icon: <FaPencilRuler />,
      title: "Design",
      text: "Custom 3D designs tailored for you",
    },
    {
      id: "03",
      icon: <FaTools />,
      title: "Execution",
      text: "Expert team brings it to life on time",
    },
    {
      id: "04",
      icon: <FaKey />,
      title: "Handover",
      text: "Walk into your dream space",
    },
  ];

  const featureData = [
    "Custom Solutions",
    "Fast Delivery",
    "Budget Friendly",
    "Expert Team",
    "24/7 Support",
    "Quality Materials",
  ];

  return (
    <div className="about-page">

      <div className="about-container">

        {/* ================= LEFT ================= */}

        <div className="about-left-column">

          <div className="about-process-card">

            <div className="about-process-header">

              <img
                src="/logo192.png"
                alt="logo"
                className="about-process-logo"
              />

              <div className="about-process-heading">
                How We Work
              </div>

            </div>

            <div className="about-process-divider"></div>

            {processData.map((item) => (

              <div className="about-process-item" key={item.id}>

                <div className="about-process-number">
                  {item.id}
                </div>

                <div className="about-process-icon">
                  {item.icon}
                </div>

                <div className="about-process-content">

                  <div className="about-process-title">
                    {item.title}
                  </div>

                  <div className="about-process-text">
                    {item.text}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="about-right-column">

          <div className="about-small-title">
            ABOUT SIVENTHRA
          </div>

          <div className="about-main-title">
            Creative Spaces, Happy Faces
          </div>

          <div className="about-description">

            At <strong>Siventhra Interior & Decors</strong>, we believe every
            space has the power to inspire comfort, style, and happiness.
            Our mission is to transform ordinary spaces into elegant and
            functional environments that truly reflect your lifestyle.

            <br /><br />

            Our tagline —
            <strong> Creative Spaces, Happy Faces </strong>
            — is simple to live by: we make every wall, every window,
            and every corner uniquely beautiful.

            <br /><br />

            Founded by
            <strong> T. Karthik </strong>
            (B.Tech Electronics & Communication Engineering),
            Siventhra was built on passion and bold decision making.

            <br /><br />

            From a small beginning in Nellore,
            Siventhra has grown into a trusted name for

            <strong>
              {" "}
              curtains,
              blinds,
              wallpapers,
              mosquito mesh,
              ceiling hangers,
              wall panels,
              false ceilings,
              modular interiors
            </strong>

            and many more premium interior services.

          </div>

          <div className="about-feature-grid">

            {featureData.map((item, index) => (

              <div
                className="about-feature-card"
                key={index}
              >

                <div className="about-feature-icon">
                  <FaCheck />
                </div>

                <div className="about-feature-title">
                  {item}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ================================================= */}

      {/* FOUNDER */}

      {/* ================================================= */}

      <div className="about-founder-section">

        <div className="about-founder-small-title">
          THE FOUNDER
        </div>

        <div className="about-founder-main-title">
          From Code to Craft
        </div>

        <div className="about-founder-description">

          After graduating with a B.Tech in
          <strong> Electronics & Communication Engineering </strong>
          from Bapatla Engineering College (2018–2022),
          T. Karthik spent two years as a Full Stack Developer
          in website design.

          <br /><br />

          But his heart wasn't in code —
          it was in creating beautiful,
          functional spaces that bring joy to people's lives.

          <br /><br />

          Armed with analytical thinking and
          relentless passion for design,
          he founded
          <strong> Siventhra Interior & Decors </strong>
          to deliver premium interior solutions with
          honesty, creativity and quality.

          <br /><br />

          Today,
          Siventhra proudly serves hundreds of happy
          clients across Nellore with more than
          40 premium services.

        </div>

        <div className="about-stats-container">

          <div className="about-stat-card">

            <div className="about-stat-number">
              500+
            </div>

            <div className="about-stat-title">
              HAPPY CLIENTS
            </div>

          </div>

          <div className="about-stat-card">

            <div className="about-stat-number">
              40+
            </div>

            <div className="about-stat-title">
              SERVICES
            </div>

          </div>

          <div className="about-stat-card">

            <div className="about-stat-number">
              5+
            </div>

            <div className="about-stat-title">
              YEARS VISION
            </div>

          </div>

          <div className="about-stat-card">

            <div className="about-stat-number">
              24/7
            </div>

            <div className="about-stat-title">
              SUPPORT
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;