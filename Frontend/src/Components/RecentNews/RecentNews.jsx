import React, { useEffect, useRef, useState } from "react";
import "./RecentNews.css";
import { FaCalendarAlt } from "react-icons/fa";

import news1 from "../../assets/Grp-1.webp";
import news2 from "../../assets/Grp-2.webp";
import news3 from "../../assets/Grp-3.webp";

const RecentNews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

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

  const newsData = [
    {
      img: news1,
      date: "9. August 2023",
      title: "A very warm welcome to our new Treasurer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      img: news2,
      date: "9. August 2023",
      title: "Easy steps for choosing to the cearnin",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      img: news3,
      date: "9. August 2023",
      title: "You should know education always best",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
  ];

  const handleScroll = () => {
    if (!sliderRef.current || window.innerWidth > 768) return;

    const container = sliderRef.current;
    const cards = container.querySelectorAll(".recentnews-card");
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
    if (!sliderRef.current) return;

    const cards = sliderRef.current.querySelectorAll(".recentnews-card");
    if (!cards[index]) return;

    cards[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveIndex(index);
  };

  return (
    <section className="recentnews-section">
      <div className="recentnews-header reveal">
        <h2 className="recentnews-title">Recent News</h2>

        <p className="recentnews-subtitle">
          We are constantly expanding the range of services offered
        </p>
      </div>

      <div
        className="recentnews-container"
        ref={sliderRef}
        onScroll={handleScroll}
      >
        {newsData.map((item, index) => (
          <div
            className="recentnews-card reveal"
            style={{ transitionDelay: `${index * 0.2}s` }}
            key={index}
          >
            <div className="recentnews-image-wrapper">
              <img src={item.img} alt="news" />
            </div>

            <div className="recentnews-content">
              <div className="recentnews-date">
                <FaCalendarAlt />
                <span>{item.date}</span>
              </div>

              <h3 className="recentnews-heading">{item.title}</h3>

              <p className="recentnews-desc">{item.desc}</p>
            </div>

            <div className="recentnews-readmore">Read More →</div>
          </div>
        ))}
      </div>

      <div className="recentnews-pagination">
        {newsData.map((_, index) => (
          <button
            key={index}
            className={`recentnews-dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => scrollToCard(index)}
            aria-label={`Go to news ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentNews;