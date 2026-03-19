import React, { useRef, useState } from "react";
import "./QualifiedTeachers.css";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const QualifiedTeachers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const teachersRef = useRef(null);

  const teacherData = [
    {
      name: "Anita Sharma",
      role: "Senior Montessori Teacher",
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136",
    },
    {
      name: "Riya Mehta",
      role: "Creative Learning Teacher",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      name: "Neha Verma",
      role: "Early Childhood Educator",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      name: "Pooja Sinha",
      role: "Activity & Learning Teacher",
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    },
  ];

  const handleScroll = () => {
    if (!teachersRef.current) return;

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

    const container = teachersRef.current;
    const card = cards[index];

    const left =
      card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;

    container.scrollTo({
      left,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section className="qt-section">
      <div className="qt-container">
        <div className="qt-logo">
          <span className="dot purple"></span>
          <span className="dot pink"></span>
          <span className="dot yellow"></span>
        </div>

        <div className="qt-header">
          <h2>Meet Our Experienced Teachers at Bright Stars Montessori</h2>
          <p>
            Our dedicated educators guide children with care, patience,
            creativity, and a strong passion for joyful learning.
          </p>
        </div>

        <div className="qt-layout">
          <div className="qt-principal-card">
            <div className="qt-principal-img">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
                alt="Bright Stars Montessori Principal"
              />
            </div>

            <div className="qt-principal-content">
              <span className="qt-tag">Lead Mentor</span>
              <h3>Mrs. Kavita Sharma</h3>
              <span className="role">Principal & Academic Head</span>

              <p className="desc">
                She leads Bright Stars Montessori with a nurturing vision that
                helps every child grow with confidence, curiosity, discipline,
                and a lifelong love for learning.
              </p>

              <div className="line"></div>

              <p className="phone">+91 7016201096</p>

              <div className="socials">
                <button aria-label="Facebook">
                  <FaFacebookF />
                </button>
                <button aria-label="Instagram">
                  <FaInstagram />
                </button>
                <button aria-label="Email">
                  <FaEnvelope />
                </button>
                <button aria-label="WhatsApp">
                  <FaWhatsapp />
                </button>
              </div>
            </div>
          </div>

          <div className="qt-teachers-wrap">
            <div className="qt-teachers-head">
              <h3>Our Teaching Experts</h3>
              <p>Skilled mentors building bright young minds every day.</p>
            </div>

            <div
              className="qt-teachers"
              ref={teachersRef}
              onScroll={handleScroll}
            >
              {teacherData.map((teacher, index) => (
                <div className="teacher-card" key={index}>
                  <img
                    src={`${teacher.img}?auto=format&fit=crop&w=900&q=80`}
                    alt={`${teacher.name} - Teacher at Bright Stars Montessori`}
                  />

                  <div className="teacher-overlay">
                    <div className="overlay-icons">
                      <span><FaFacebookF /></span>
                      <span><FaInstagram /></span>
                      <span><FaEnvelope /></span>
                      <span><FaWhatsapp /></span>
                    </div>
                  </div>

                  <div className="teacher-name">
                    <h4>{teacher.name}</h4>
                    <p>{teacher.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="qt-pagination">
              {teacherData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`qt-page-dot ${activeIndex === index ? "active" : ""}`}
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