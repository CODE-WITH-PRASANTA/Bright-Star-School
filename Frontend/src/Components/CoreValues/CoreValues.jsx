import React from "react";
import "./CoreValues.css";

const values = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    title: "Learn And Play",
    desc: "We create joyful learning experiences that help children explore and grow with confidence.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    title: "Great Teachers",
    desc: "Our caring teachers guide children with patience and meaningful learning.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    title: "Family Environment",
    desc: "A warm and welcoming place where children feel safe and inspired.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    title: "Excellent Programmes",
    desc: "Thoughtfully designed programmes that build creativity and confidence.",
  },
];

const CoreValues = () => {
  return (
    <section className="core-section">
      <div className="core-container">
        <div className="core-header">
          <div className="core-left">
            <span className="core-badge">WHY CHOOSE US</span>
            <h2>Our Core Values</h2>
          </div>

          <div className="core-right">
            <p>
              We continuously improve our standards to ensure every child
              experiences a safe, inspiring, and nurturing learning environment.
            </p>

            <p>
              Our goal is to guide children through joyful education while
              developing creativity, confidence, and strong life foundations.
            </p>
          </div>
        </div>

        <div className="core-grid">
          {values.map((item) => (
            <article className="core-card" key={item.id}>
              <div className="circle-ring">
                <img src={item.image} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;