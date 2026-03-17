import React, { useRef, useState } from "react";
import "./QualifiedTeachers.css";
import { FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const QualifiedTeachers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const teachersRef = useRef(null);

  const teacherData = [
    {
      name: "Anita Sharma",
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136",
    },
    {
      name: "Riya Mehta",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  const handleScroll = () => {
    if (!teachersRef.current || window.innerWidth > 560) return;

    const container = teachersRef.current;
    const cards = container.querySelectorAll(".teacher-card");
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

  const scrollToTeacher = (index) => {
    if (!teachersRef.current) return;
    const cards = teachersRef.current.querySelectorAll(".teacher-card");
    if (!cards[index]) return;

    cards[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveIndex(index);
  };

  return (
    <section className="qt-section">
      <div className="qt-container">

        {/* HEADER ICON */}
        <div className="qt-logo">
          <span className="dot purple"></span>
          <span className="dot pink"></span>
          <span className="dot yellow"></span>
        </div>

        {/* HEADER */}
        <div className="qt-header">
          <h2>Meet Our Experienced Teachers at Bright Stars Montessori</h2>
          <p>
            Our dedicated team of educators is committed to guiding children with
            care, patience, and a passion for early childhood development.
          </p>
        </div>

        <div className="qt-layout">

          {/* PRINCIPAL CARD */}
          <div className="qt-principal-card">
            <div className="qt-principal-img">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Bright Stars Montessori Principal"
              />
            </div>

            <div className="qt-principal-content">
              <h3>Mrs. Kavita Sharma</h3>
              <span className="role">Principal & Academic Head</span>

              <p className="desc">
                With years of experience in early childhood education, she leads
                Bright Stars Montessori with a strong focus on nurturing young
                minds in a safe, positive, and engaging environment. Her vision
                is to help every child grow with confidence, curiosity, and a
                love for learning.
              </p>

              <div className="line"></div>

              <p className="phone">+91 98765 43210</p>

              <div className="socials">
                <button><FaFacebookF /></button>
                <button><FaInstagram /></button>
                <button><FaEnvelope /></button>
                <button><FaWhatsapp /></button>
              </div>
            </div>
          </div>

          {/* TEACHERS */}
          <div className="qt-teachers-wrap">
            <div
              className="qt-teachers"
              ref={teachersRef}
              onScroll={handleScroll}
            >
              {teacherData.map((teacher, index) => (
                <div className="teacher-card" key={index}>
                  <img
                    src={`${teacher.img}?auto=format&fit=crop&w=500&q=80`}
                    alt={`${teacher.name} - Teacher at Bright Stars Montessori`}
                  />

                  <div className="teacher-overlay">
                    <div className="overlay-icons">
                      <FaFacebookF />
                      <FaInstagram />
                      <FaEnvelope />
                      <FaWhatsapp />
                    </div>
                  </div>

                  <div className="teacher-name">
                    <h4>{teacher.name}</h4>
                    <p>Montessori Teacher</p>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="qt-pagination">
              {teacherData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`qt-page-dot ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => scrollToTeacher(index)}
                  aria-label={`Go to teacher ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QualifiedTeachers;