import React, { useState, useEffect } from "react";
import "./FloatingButtons.css";

import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="FloatingButtons">

      {/* CALL BUTTON */}
      <a
        href="tel:+919876543210"
        className="FloatingButtons-call"
      >
        <FaPhoneAlt />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="FloatingButtons-whatsapp"
      >
        <FaWhatsapp />
      </a>

      {/* SCROLL TO TOP */}
      {showTop && (
        <button
          className="FloatingButtons-top"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}

    </div>
  );
};

export default FloatingButtons;