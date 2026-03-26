import React, { useState, useEffect } from "react";
import "./Topbar.css";

import { FiMenu, FiX } from "react-icons/fi";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import API, { IMAGE_URL } from "../../api/axios";
const Topbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topbarSidebar, setTopbarSidebar] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const [gallery, setGallery] = useState([]);
  const [news, setNews] = useState([]);

  const toggleTopbarSidebar = () => {
    setTopbarSidebar(!topbarSidebar);
  };

  useEffect(() => {
    if (gallery.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= gallery.length - 3 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [gallery]);

  // ✅ FETCH GALLERY
  const fetchGallery = async () => {
    try {
      const res = await API.get("/gallery");
      setGallery(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ FETCH NEWS (LATEST 3)
  const fetchNews = async () => {
    try {
      const res = await API.get("/news");

      const latestNews = (res.data.data || []).slice(0, 3); // 🔥 latest 3

      setNews(latestNews);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGallery();
    fetchNews();
  }, []);

  return (
    <div className="topbar">
      {/* TOPBAR */}
      <div className="topbar-container">
        <div className="topbar-left">
          <div className="topbar-item">
            <FaEnvelope />
            <span>brightstarsmontessori26@gmail.com</span>
          </div>

          <div className="topbar-item">
            <FaPhoneAlt />
            <span>7016201096</span>
          </div>
        </div>

        <div className="topbar-right">
          <button
            className="topbar-contactBtn"
            onClick={() => (window.location.href = "tel:7016201096")}
          >
            <FaPhoneAlt />
            +91 7016201096
          </button>

          <div className="topbar-menuIcon" onClick={toggleTopbarSidebar}>
            <FiMenu />
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        className={`topbar-overlay ${topbarSidebar ? "active" : ""}`}
        onClick={toggleTopbarSidebar}
      ></div>

      {/* SIDEBAR */}
      <div className={`topbar-sidebar ${topbarSidebar ? "active" : ""}`}>
        {/* HEADER */}
        <div className="topbar-sidebarHeader">
          <h2>
            Best Montessori School in Bhubaneswar – Bright Stars Montessori
          </h2>

          <div className="topbar-closeIcon" onClick={toggleTopbarSidebar}>
            <FiX />
          </div>
        </div>

        <div className="topbar-sidebarContent">
          {/* ADDRESS */}
          <div className="topbar-address">
            <FaMapMarkerAlt className="topbar-locationIcon" />
            <p>
              Plot No. 657/1094, Haridaspur <br />
              Naharakanata, Bhubaneswar <br />
              Odisha - 752101, India
            </p>
          </div>

          <div className="topbar-gallery" style={{ position: "relative" }}>
            {/* IMAGE ROW */}
            <div style={{ display: "flex", gap: "8px" }}>
              {gallery.slice(currentIndex, currentIndex + 3).map((img, i) => (
                <div key={i} className="topbar-galleryItem">
                  <img
                    src={`${IMAGE_URL}${img.image}`}
                    alt=""
                    onClick={() => setSelectedImg(`${IMAGE_URL}${img.image}`)}
                  />
                </div>
              ))}
            </div>

            {/* 🔥 PAGINATION (BOTTOM OVERLAY) */}
            <div
              style={{
                position: "absolute",
                bottom: "-15px",
                left: "38%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "6px",
                background: "rgba(0,0,0,0.4)",
                padding: "4px 8px",
                borderRadius: "20px",
                // margin:"18px 0px"
              }}
            >
              {gallery.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    background: currentIndex === i ? "#3b82f6" : "#ddd",
                  }}
                />
              ))}
            </div>
          </div>

          {/* MODAL */}
          {selectedImg && (
            <div className="imgModal">
              <FaTimes
                className="closeBtn"
                onClick={() => setSelectedImg(null)}
              />
              <img src={selectedImg} alt="" className="modalImg" />
            </div>
          )}

          {/* CONTACT */}
          <div className="topbar-contact">
            <h3>Get In Touch</h3>
            <div className="topbar-line"></div>

            <p>
              Monday – Saturday: <strong>09:00 AM – 06:00 PM</strong>
            </p>
            <p>
              Sunday: <strong>Closed</strong>
            </p>

            <div className="topbar-contactItem">
              <div className="topbar-iconCircle">
                <FaEnvelope />
              </div>
              <span>Email: brightstarsmontessori26@gmail.com</span>
            </div>

            <div className="topbar-contactItem">
              <div className="topbar-iconCircle">
                <FaPhoneAlt />
              </div>
              <span>Phone:7016201096</span>
            </div>
          </div>

          {/* 🔥 LATEST NEWS (DYNAMIC) */}
          <div className="topbar-news">
            <h3>Latest News</h3>

            {news.map((item, i) => (
              <div key={i} className="topbar-newsItem">
                <img src={`${IMAGE_URL}${item.image}`} alt="news" />
                <div>
                  <span className="topbar-newsDate">
                    <FaCalendarAlt />{" "}
                    {item.date
                      ? new Date(item.date).toLocaleDateString("en-IN")
                      : "No Date"}
                  </span>

                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
