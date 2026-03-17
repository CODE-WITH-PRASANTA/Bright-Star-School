import React from "react";
import "./StudentKnowledgeSection.css";

// IMPORT IMAGES
import treeImg from "../../assets/image-55.webp";
import turtleImg from "../../assets/image-60.webp";

const StudentKnowledgeSection = () => {
  return (
    <section
      className="StudentKnowledgeSection"
      id="bright-school-montessori-learning"
    >
      <div className="StudentKnowledgeSection-container">

        {/* LEFT CONTENT */}
        <div className="StudentKnowledgeSection-left">

          <img
            src={treeImg}
            alt="Bright School Montessori learning growth tree illustration"
            className="StudentKnowledgeSection-tree"
          />

          <div className="StudentKnowledgeSection-content">
            <p className="StudentKnowledgeSection-subtitle">
              Student Learning & Growth
            </p>

            <h2 className="StudentKnowledgeSection-title">
              Bright School Montessori <br />
              Building Strong Foundations <br />
              for Every Child
            </h2>

            <p className="StudentKnowledgeSection-desc">
              At Bright School Montessori, we believe every child learns best
              through curiosity and real experiences. Our approach focuses on
              building confidence, creativity, and strong thinking skills from
              an early age. We create a positive environment where children
              enjoy learning and grow at their own pace.
            </p>

            <button className="StudentKnowledgeSection-btn">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT BOXES */}
        <div className="StudentKnowledgeSection-right">

          <img
            src={turtleImg}
            alt="Bright School Montessori fun learning for children"
            className="StudentKnowledgeSection-turtle"
          />

          <div className="StudentKnowledgeSection-box box-large">
            <span>Learning Stages</span>
          </div>

          <div className="StudentKnowledgeSection-box box-1">
            <span>3-5<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-2">
            <span>6-8<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-3">
            <span>9-11<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-4">
            <span>12-15<br />Years</span>
          </div>

          <div className="StudentKnowledgeSection-box box-5">
            <span>16-18<br />Years</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudentKnowledgeSection;