import React from "react";
import "./News.css";
import { FaBullhorn } from "react-icons/fa";

const News = () => {
  const newsItems = [
    "Admission Open 2026-27",
    "New Batch Starting Soon",
    "Limited Seats Available",
    "Enroll Now for Early Benefits",
  ];

  return (
    <section className="newsBar">
      <div className="newsBar__overlay"></div>

      <div className="newsBar__container">
        <div className="newsBar__label">
          <span className="newsBar__labelIcon">
            <FaBullhorn />
          </span>
          <span className="newsBar__labelText">Latest Updates</span>
        </div>

        <div className="newsBar__marquee">
          <div className="newsBar__track">
            {[...newsItems, ...newsItems].map((item, index) => (
              <div className="newsBar__item" key={index}>
                <span className="newsBar__badge">NEW</span>
                <span className="newsBar__text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;