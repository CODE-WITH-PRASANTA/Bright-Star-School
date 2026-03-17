import React, { useEffect } from "react";
import "./ClubsSection.css";

import mainImg from "../../assets/Main-img.webp";
import earlyImg from "../../assets/C-3.webp";
import lunchImg from "../../assets/C-4.webp";
import afternoonImg from "../../assets/C-2.webp";
import musicImg from "../../assets/C-1.webp";

const clubsLeft = [
  {
    title: "Early Learning Club",
    image: earlyImg,
    points: [
      "Flexible early drop-off for working parents",
      "Calm and guided morning activities",
      "Helps children settle comfortably into their day",
    ],
  },
  {
    title: "Lunch & Care Club",
    image: lunchImg,
    points: [
      "Nutritious meals in a safe environment",
      "Supervised care and rest time",
      "Encourages healthy eating habits",
    ],
  },
];

const clubsRight = [
  {
    title: "Afternoon Activity Club",
    image: afternoonImg,
    points: [
      "Engaging after-school activities and games",
      "Creative play in a safe and friendly setting",
      "Supports social and emotional development",
    ],
  },
  {
    title: "Music & Creativity Club",
    image: musicImg,
    points: [
      "Fun music and rhythm-based sessions",
      "Introduction to basic instruments",
      "Builds confidence and creative expression",
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
        <h2>Explore Our Learning Programs at Bright Stars Montessori</h2>
        <p>
          We offer thoughtfully designed programs that support early childhood
          development, helping children learn, explore, and grow in a safe and
          engaging environment.
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