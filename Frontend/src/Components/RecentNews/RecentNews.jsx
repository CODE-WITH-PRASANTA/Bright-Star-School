import React, { useEffect, useRef, useState } from "react";
import "./RecentNews.css";
import { FaCalendarAlt } from "react-icons/fa";
import API, { IMAGE_URL } from "../../api/axios";

const RecentNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); // ✅ responsive
  const sliderRef = useRef(null);

  /* ================= RESPONSIVE ================= */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1); // 📱 mobile
      } else {
        setItemsPerPage(3); // 💻 desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await API.get("/news");

        const formatted = (res.data.data || []).map((item) => ({
          img: IMAGE_URL + item.image,
          date: new Date(item.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          title: item.title,
          desc: item.description,
        }));

        setNewsData(formatted);
      } catch (err) {
        console.error("FETCH ERROR:", err);
      }
    };

    fetchNews();
  }, []);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentNews = newsData.slice(startIndex, startIndex + itemsPerPage);

  /* ================= REVEAL ================= */
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
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentNews]);

  return (
    <section className="recentnews-section">
      {/* HEADER */}
      <div className="recentnews-header reveal">
        <h2 className="recentnews-title">
          Latest News & Updates from Bright Stars Montessori
        </h2>

        <p className="recentnews-subtitle">
          Stay updated with our school activities, events, and important
          announcements for parents and students.
        </p>
      </div>

      {/* NEWS CARDS */}
      <div className="recentnews-container" ref={sliderRef}>
        {currentNews.map((item, index) => (
          <div
            className="recentnews-card reveal"
            style={{ transitionDelay: `${index * 0.2}s` }}
            key={index}
          >
            <div className="recentnews-image-wrapper">
              <img src={item.img} alt={item.title} />
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

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="recentnews-pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`recentnews-dot ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentNews;
