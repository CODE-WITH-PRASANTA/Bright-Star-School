import React, { useEffect, useRef, useState } from "react";
import "./CoreValues.css";

const values = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    title: "Learning Through Play",
    desc: "At Bright Stars Montessori, we encourage children to learn through play-based activities that make learning enjoyable and engaging.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    title: "Experienced Educators",
    desc: "Our trained and caring teachers provide personal attention, helping every child grow with confidence and strong learning habits.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    title: "Safe & Friendly Environment",
    desc: "We offer a secure and welcoming environment where children feel comfortable, supported, and motivated to explore new ideas.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    title: "Structured Learning Programs",
    desc: "Our well-designed Montessori programs help children develop creativity, discipline, and essential skills for lifelong learning.",
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

        {/* HEADER */}
        <div className="core-header reveal">
          <div className="core-left">
            <span className="core-badge">WHY CHOOSE US</span>
            <h2>Why Parents Choose Bright Stars Montessori</h2>
          </div>

          <div className="core-right">
            <p>
              At Bright Stars Montessori, we focus on creating a nurturing
              environment where every child feels valued and encouraged to learn.
              Our approach supports early childhood development through guided
              activities, play-based learning, and individual attention.
            </p>

            <p>
              We understand that every child is unique. That’s why our programs
              are designed to build confidence, creativity, and strong
              foundational skills in a safe and positive learning space.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="core-grid"
          ref={gridRef}
          onScroll={handleScroll}
        >
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

        {/* PAGINATION */}
        <div
          className="core-pagination reveal"
          style={{ transitionDelay: "0.3s" }}
        >
          {values.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`core-page-dot ${
                activeIndex === index ? "active" : ""
              }`}
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