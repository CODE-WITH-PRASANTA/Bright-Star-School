import React, { useEffect, useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef(null);

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

  const handleScroll = () => {
    if (!gridRef.current || window.innerWidth > 640) return;

    const container = gridRef.current;
    const cards = container.querySelectorAll(".core-card");
    if (!cards.length) return;

    let closestIndex = 0;
    let closestDistance = Infinity;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToCard = (index) => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".core-card");
    if (!cards[index]) return;

    cards[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveIndex(index);
  };

  return (
    <section className="core-section">
      <div className="core-container">
        <div className="core-header reveal">
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

        <div className="core-grid" ref={gridRef} onScroll={handleScroll}>
          {values.map((item, index) => (
            <article
              className="core-card reveal"
              key={item.id}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="circle-ring">
                <img src={item.image} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="core-pagination reveal" style={{ transitionDelay: "0.3s" }}>
          {values.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`core-page-dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to core value ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;