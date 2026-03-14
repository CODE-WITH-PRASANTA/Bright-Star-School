import React from "react";
import "./QualifiedTeachers.css";

const QualifiedTeachers = () => {
  return (
    <section className="qt-section">
      <div className="qt-container">
        <div className="qt-logo">
          <span className="dot purple"></span>
          <span className="dot pink"></span>
          <span className="dot yellow"></span>
        </div>

        <div className="qt-header">
          <h2>Qualified Teachers</h2>
          <p>We are constantly expanding the range of services offered</p>
        </div>

        <div className="qt-layout">
          <div className="qt-principal-card">
            <div className="qt-principal-img">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                alt="Principal"
              />
            </div>

            <div className="qt-principal-content">
              <h3>Katie Willmore</h3>
              <span className="role">Principal And Manager</span>

              <div className="line"></div>

              <p className="phone">+44 (0) 207 689 7888</p>

              <div className="socials">
                <button>𝕏</button>
                <button>f</button>
              </div>
            </div>
          </div>

          <div className="qt-teachers">
            <div className="teacher-card">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Nomina Leone"
              />
              <div className="teacher-name">
                <h4>Nomina Leone</h4>
              </div>
            </div>

            <div className="teacher-card">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80"
                alt="Jessica Levis"
              />
              <div className="teacher-name">
                <h4>Jessica Levis</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifiedTeachers;