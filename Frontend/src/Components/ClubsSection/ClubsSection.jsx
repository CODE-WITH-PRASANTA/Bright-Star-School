import React, { useEffect } from "react";
import "./ClubsSection.css";

import mainImg from "../../assets/Main-img.webp";
import earlyImg from "../../assets/C-3.webp";
import lunchImg from "../../assets/C-4.webp";
import afternoonImg from "../../assets/C-2.webp";
import musicImg from "../../assets/C-1.webp";

const clubsLeft = [
  {
    title: "Our Early Learning Club focuses on:",
    image: earlyImg,
    points: [
      "Providing flexible early drop-off for working parents",
      "Creating a calm, safe, and supportive environment",
      "Engaging children in guided and meaningful morning activities",
      "Helping children settle comfortably and confidently into their day",
    ],
  },
  {
    title: "🍽️ Lunch & Care Club",
    image: lunchImg,
    points: [
      "Providing nutritious, hygienic, and balanced meals",
      "Offering safe and supervised care during lunch hours",
      "Ensuring rest and relaxation time for overall well-being",
      "Encouraging healthy eating habits and social skills",
    ],
  },
];

const clubsRight = [
  {
    title: "🎨 Afternoon Activity Club",
    image: afternoonImg,
    points: [
      "Providing engaging after-school activities and interactive games",
      "Encouraging creative play and imagination",
      "Creating a safe, friendly, and joyful environment",
      "Supporting social, emotional, and communication development",
    ],
  },
  {
    title: "🎵 Music & Creativity Club",
    image: musicImg,
    points: [
      "Engaging children in fun music and rhythm-based activities",
      "Introducing basic musical instruments and sound exploration",
      "Encouraging creativity, imagination, and self-expression",
      "Supporting cognitive, emotional, and sensory development",
    ],
  },
];

function ClubCard({ title, image, points, delay }) {
  return (
    <div className="club-card reveal" style={{ transitionDelay: delay }}>
      <div className="club-thumb-wrap">
        <img
          src={image}
          alt={`${title} at Bright Stars Montessori`}
          className="club-thumb"
        />
      </div>

      <div className="club-info">
        <h3>{title}</h3>
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ClubsSection() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="clubs-section">

      <div className="clubs-bg-shape clubs-bg-shape-1"></div>
      <div className="clubs-bg-shape clubs-bg-shape-2"></div>

      {/* HEADER */}
      <div className="clubs-header reveal">
        <span className="clubs-badge">Our Programs</span>
        <h2>🌟 Explore Our Learning Programs at Bright Stars Montessori</h2>
        <p>
          At Bright Stars Montessori, we offer thoughtfully designed early childhood programs that nurture curiosity, creativity, and confidence in every child. Our curriculum is built on proven Montessori principles, helping children learn through hands-on activities, exploration, and interactive experiences.

We provide a safe, engaging, and stimulating environment where young learners can develop essential life skills, strong academic foundations, and a lifelong love for learning. Each program is carefully structured to support holistic development — including cognitive, social, emotional, and physical growth.
        </p>
      </div>

      <div className="clubs-layout">

        {/* LEFT */}
        <div className="clubs-column">
          {clubsLeft.map((club, i) => (
            <ClubCard key={i} {...club} delay={`${i * 0.2}s`} />
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="clubs-center reveal">

          <div className="orbit orbit-1"><span className="orbit-dot"></span></div>
          <div className="orbit orbit-2"><span className="orbit-dot"></span></div>
          <div className="orbit orbit-3"><span className="orbit-dot"></span></div>

          <div className="center-image-wrap">
            <img
              src={mainImg}
              alt="Children learning and playing at Bright Stars Montessori"
              className="center-image"
            />
          </div>

        </div>

        {/* RIGHT */}
        <div className="clubs-column">
          {clubsRight.map((club, i) => (
            <ClubCard key={i} {...club} delay={`${i * 0.2}s`} />
          ))}
        </div>

      </div>

    </section>
  );
}