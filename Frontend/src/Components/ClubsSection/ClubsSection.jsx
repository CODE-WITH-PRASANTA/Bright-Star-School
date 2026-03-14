import React from "react";
import "./ClubsSection.css";

import mainImg from "../../assets/Main-img.webp";
import earlyImg from "../../assets/C-3.webp";
import lunchImg from "../../assets/C-4.webp";
import afternoonImg from "../../assets/C-2.webp";
import musicImg from "../../assets/C-1.webp";

const clubsLeft = [
  {
    title: "Early Club",
    image: earlyImg,
    points: [
      "Help parents get to work on time",
      "Near the station",
      "Children settled and ready to work",
    ],
  },
  {
    title: "Lunch Club",
    image: lunchImg,
    points: [
      "Healthy meals and care",
      "Near the station",
      "Children settled and ready to work",
    ],
  },
];

const clubsRight = [
  {
    title: "Afternoon Club",
    image: afternoonImg,
    points: [
      "Help parents get to work on time",
      "Near the station",
      "Children settled and ready to work",
    ],
  },
  {
    title: "Music Club",
    image: musicImg,
    points: [
      "Creative rhythm sessions",
      "Near the station",
      "Children settled and ready to work",
    ],
  },
];

function ClubCard({ title, image, points }) {
  return (
    <div className="club-card">
      <div className="club-thumb-wrap">
        <img src={image} alt={title} className="club-thumb" />
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
  return (
    <section className="clubs-section">
      <div className="clubs-bg-shape clubs-bg-shape-1"></div>
      <div className="clubs-bg-shape clubs-bg-shape-2"></div>

      <div className="clubs-header">
        <span className="clubs-badge">Our Programs</span>
        <h2>Available Clubs</h2>
        <p>We are constantly expanding the range of services offered</p>
      </div>

      <div className="clubs-layout">
        <div className="clubs-column">
          {clubsLeft.map((club, i) => (
            <ClubCard key={i} {...club} />
          ))}
        </div>

        <div className="clubs-center">
          <div className="orbit orbit-1">
            <span className="orbit-dot"></span>
          </div>

          <div className="orbit orbit-2">
            <span className="orbit-dot"></span>
          </div>

          <div className="orbit orbit-3">
            <span className="orbit-dot"></span>
          </div>

          <div className="center-image-wrap">
            <img src={mainImg} alt="Happy child" className="center-image" />
          </div>
        </div>

        <div className="clubs-column">
          {clubsRight.map((club, i) => (
            <ClubCard key={i} {...club} />
          ))}
        </div>
      </div>
    </section>
  );
}