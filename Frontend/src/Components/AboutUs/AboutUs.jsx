import React from "react";
import "./AboutUs.css";

// Assets
import MissionIcon from "../../assets/Mission-icon.svg";
import VisionIcon from "../../assets/Vision-icon.svg";
import authorimg from "../../assets/child-1.webp";
import Bordershape from "../../assets/border-shape.png";
import lefthomeAboutimg from "../../assets/Home-About.webp";
import frame from "../../assets/frame.png";
import lineshape from "../../assets/line-shape.png";

const AboutUs = () => {
  return (
    <section className="aboutus">
      
      <img src={lineshape} alt="" className="aboutus-line" />

      <div className="aboutus-container">

        {/* LEFT */}
        <div className="aboutus-left">

          <img src={Bordershape} alt="" className="aboutus-border" />

          <div className="aboutus-imageWrap">
            <img src={lefthomeAboutimg} alt="" />
          </div>

        </div>


        {/* RIGHT */}
        <div className="aboutus-right">

          <img src={frame} alt="" className="aboutus-frame" />

          <span className="aboutus-subtitle">
            About Us
          </span>

         <h2 className="aboutus-title">
  Welcome To <br />
  <span>Bright Stars Montessori</span>
</h2>


          <p className="aboutus-desc">
            Founded in 2019, Bright Stars Montessori provides a
            nurturing and inclusive environment where students grow with
            confidence, creativity, and strong values.
          </p>


          {/* FEATURES */}
          <div className="aboutus-features">

            <div className="aboutus-feature">

              <div className="aboutus-icon">
                <img src={MissionIcon} alt="" />
              </div>

              <div>
                <h4>Our Mission</h4>
                <p>
                  To inspire lifelong learners through quality education.
                </p>
              </div>

            </div>


            <div className="aboutus-feature">

              <div className="aboutus-icon">
                <img src={VisionIcon} alt="" />
              </div>

              <div>
                <h4>Our Vision</h4>
                <p>
                  To empower students with knowledge and values.
                </p>
              </div>

            </div>

          </div>


          <hr className="aboutus-divider" />


          {/* AUTHOR */}
          <div className="aboutus-author">

            <div className="aboutus-authorInfo">

              <img src={authorimg} alt="" />

              <div>
                <h5>Katie Willmore</h5>
                <span>Principal And Manager</span>
              </div>

            </div>


            <a
              href="tel:7016201096"
              className="aboutus-call"
            >

              <div className="aboutus-callIcon">
                📞
              </div>

              <div>
                <span>Call Now </span>
                <strong>7016201096</strong>
              </div>

            </a>


          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutUs;