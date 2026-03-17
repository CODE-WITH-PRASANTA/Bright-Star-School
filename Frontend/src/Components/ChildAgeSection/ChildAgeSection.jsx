import React, { useEffect, useState } from "react";
import "./ChildAgeSection.css";

import preschool from "../../assets/emoji-5.webp";
import younger from "../../assets/emoji-6.webp";
import babies from "../../assets/emoji-7.webp";
import toddler from "../../assets/emoji-8.webp";

const ChildAgeSlider = () => {
  const slides = [
    {
      title: "Preschool",
      age: "3 - 4+ YEARS",
      img: preschool
    },
    {
      title: "Younger",
      age: "5 - 8+ YEARS",
      img: younger
    },
    {
      title: "Babbies",
      age: "FROM 6 MONTHS",
      img: babies
    },
    {
      title: "Toddlers",
      age: "18 - 24 MONTHS",
      img: toddler
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const prevIndex = (index - 1 + slides.length) % slides.length;
  const nextIndex = (index + 1) % slides.length;

  return (
    <section className="ChildAgeSlider">
      <div className="ChildAgeSlider-heading reveal">
        <h2>How Old Is Your Child?</h2>
        <p>What type of education is best for my child</p>
      </div>

      <div className="ChildAgeSlider-slider">
        <div className="ChildAgeSlider-card reveal" style={{ transitionDelay: "0.1s" }}>
          <img src={slides[prevIndex].img} alt="child" />

          <div className="ChildAgeSlider-info">
            <h3>{slides[prevIndex].title}</h3>
            <span>{slides[prevIndex].age}</span>
          </div>
        </div>

        <div className="ChildAgeSlider-card active reveal" style={{ transitionDelay: "0.2s" }}>
          <img src={slides[index].img} alt="child" />

          <div className="ChildAgeSlider-info">
            <h3>{slides[index].title}</h3>
            <span>{slides[index].age}</span>
          </div>
        </div>

        <div className="ChildAgeSlider-card reveal" style={{ transitionDelay: "0.3s" }}>
          <img src={slides[nextIndex].img} alt="child" />

          <div className="ChildAgeSlider-info">
            <h3>{slides[nextIndex].title}</h3>
            <span>{slides[nextIndex].age}</span>
          </div>
        </div>
      </div>

      <div className="ChildAgeSlider-pagination reveal" style={{ transitionDelay: "0.4s" }}>
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`ChildAgeSlider-pageDot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ChildAgeSlider;