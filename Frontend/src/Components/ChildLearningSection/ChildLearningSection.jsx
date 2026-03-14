import React from "react";
import "./ChildLearningSection.css";

import mainImg from "../../assets/emoji-2.webp";

import { PiStudentFill } from "react-icons/pi";
import { TbBook2 } from "react-icons/tb";

const ChildLearningSection = () => {
  return (
    <section className="ChildLearningSection">

      {/* HEADING SECTION */}

      <div className="ChildLearningSection-heading">

        <p className="ChildLearningSection-topText">
          PART OF THE FAMILY SINCE 2001,
        </p>

        <h2 className="ChildLearningSection-title">
          Your Child Will Take The Lead In Their Learning
        </h2>

      </div>

      {/* MAIN CONTENT */}

      <div className="ChildLearningSection-container">

        {/* IMAGE */}

        <div className="ChildLearningSection-imageWrapper">

          <div className="ChildLearningSection-badge">
            <span>100%</span>
            <p>A+ Results</p>
          </div>

          <img
            src={mainImg}
            alt="kids learning"
            className="ChildLearningSection-image"
          />

        </div>

        {/* TEXT CONTENT */}

        <div className="ChildLearningSection-content">

          <p className="ChildLearningSection-description">
            We are constantly expanding the range of services offered, taking
            care of children of all ages. Our goal is to carefully educate and
            develop children in a fun way. We strive to turn the learning
            process into a bright one.
          </p>

          {/* SESSION */}

          <div className="ChildLearningSection-session">

            <h4>SESSIONS: MONDAY – FRIDAY</h4>

            <div className="ChildLearningSection-sessionTimes">

              <div>
                <h5>Morning:</h5>
                <p>9am – 12noon</p>
              </div>

              <div>
                <h5>Lunch:</h5>
                <p>12noon – 1 pm</p>
              </div>

              <div>
                <h5>Afternoon:</h5>
                <p>1 pm – 3.30 pm</p>
              </div>

            </div>

          </div>

          {/* FEATURES */}

          <div className="ChildLearningSection-features">

            <div className="ChildLearningSection-featureCard">

              <div className="ChildLearningSection-icon">
                <PiStudentFill />
              </div>

              <h3>Personalized Learning</h3>

              <p>
                Our goal is to carefully educate and develop children in a fun
                way. We strive learning process into a bright.
              </p>

            </div>

            <div className="ChildLearningSection-featureCard">

              <div className="ChildLearningSection-icon">
                <TbBook2 />
              </div>

              <h3>Empower Teachers</h3>

              <p>
                Our goal is to carefully educate and develop children in a fun
                way. We strive learning process into a bright.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ChildLearningSection;