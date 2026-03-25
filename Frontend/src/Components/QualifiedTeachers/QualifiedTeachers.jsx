import React, { useRef, useState, useEffect } from "react";
import "./QualifiedTeachers.css";
import API, { IMAGE_URL } from "../../api/axios";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import principalImg from "../../assets/BrightPrincipal.webp";

const QualifiedTeachers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [teacherData, setTeacherData] = useState([]); // ✅ from backend
  const teachersRef = useRef(null);
  const intervalRef = useRef(null);

  /* ================= FETCH TEACHERS ================= */
  const fetchTeachers = async () => {
    try {
      const res = await API.get("/teachers");

      // only active teachers
      const data = (res.data.data || []).filter((t) => t.status === "Active");

      setTeacherData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  useEffect(() => {
    if (!teacherData.length) return;

    startAutoScroll();

    return () => stopAutoScroll();
  }, [teacherData, activeIndex]);

  const startAutoScroll = () => {
    stopAutoScroll(); // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      const nextIndex =
        activeIndex === teacherData.length - 1 ? 0 : activeIndex + 1;

      scrollToTeacher(nextIndex);
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  /* ================= SCROLL ================= */
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
          {/* ===== PRINCIPAL (STATIC - NO CHANGE) ===== */}
          <div className="qt-principal-card">
            <div className="qt-principal-img">
              <img src={principalImg} alt="Principal" />
            </div>

            <div className="qt-principal-content">
              <span className="qt-tag">Lead Mentor</span>
              <h3>Mrs. Banaja Khuntia</h3>
              <span className="role">Director and Principal</span>

              <p className="desc">
                MA in English and Early Childhood Care Education and
                Administration Course.
              </p>

              <div className="line"></div>

              <p className="phone">+91 7016201096</p>

              <div className="socials">
                <button>
                  <FaFacebookF />
                </button>
                <button>
                  <FaInstagram />
                </button>
                <button>
                  <FaEnvelope />
                </button>
                <button>
                  <FaWhatsapp />
                </button>
              </div>
            </div>
          </div>

          {/* ===== TEACHERS ===== */}
          <div className="qt-teachers-wrap">
            <div className="qt-teachers-head">
              <h3>Our Teaching Experts</h3>
              <p>Skilled mentors building bright young minds every day.</p>
            </div>

            <div
              className="qt-teachers"
              ref={teachersRef}
              onScroll={handleScroll}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
            >
              {teacherData.map((teacher, index) => (
                <div className="teacher-card" key={teacher._id}>
                  <img
                    src={
                      teacher.image
                        ? IMAGE_URL + teacher.image
                        : "https://images.unsplash.com/photo-1544717305-2782549b5136"
                    }
                    alt={teacher.name}
                  />

                  <div className="teacher-overlay">
                    <div className="overlay-icons">
                      <span>
                        <FaFacebookF />
                      </span>
                      <span>
                        <FaInstagram />
                      </span>
                      <span>
                        <FaEnvelope />
                      </span>
                      <span>
                        <FaWhatsapp />
                      </span>
                    </div>
                  </div>

                  <div className="teacher-name">
                    <h4>{teacher.name}</h4>
                    <p>{teacher.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== PAGINATION ===== */}
            <div className="qt-pagination">
              {teacherData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`qt-page-dot ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => scrollToTeacher(index)}
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
