import React from "react";
import "./AboutUs.css";

// Assets
import MissionIcon from "../../assets/Mission-icon.svg";
import VisionIcon from "../../assets/Vision-icon.svg";
import authorimg from "../../assets/BrightPrincipal.webp";
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
            <img
              src={lefthomeAboutimg}
              alt="Bright Stars Montessori classroom in Bhubaneswar"
            />
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
            Bright Stars Montessori is recognized as one of the best schools in Bhubaneswar,
            offering a safe, nurturing, and engaging environment for young learners. Since our
            journey began, we have focused on building strong foundations through a balanced
            Montessori approach that supports creativity, confidence, and overall development.
            As a top Montessori school in Bhubaneswar, we are committed to helping every child
            grow academically, socially, and emotionally.
          </p>


          {/* FEATURES */}
          <div className="aboutus-features">

            <div className="aboutus-feature">

              <div className="aboutus-icon">
                <img src={MissionIcon} alt="School mission icon" />
              </div>

              <div>
                <h4>Our Mission</h4>
                <p>
                  To provide quality early education that inspires curiosity, builds confidence,
                  and nurtures a lifelong love for learning in every child.
                </p>
              </div>

            </div>


            <div className="aboutus-feature">

              <div className="aboutus-icon">
                <img src={VisionIcon} alt="School vision icon" />
              </div>

              <div>
                <h4>Our Vision</h4>
                <p>
                  To be a leading and trusted Montessori school in Bhubaneswar, shaping young minds
                  with strong values, creativity, and a passion for knowledge.
                </p>
              </div>

            </div>

          </div>


          <hr className="aboutus-divider" />


          {/* AUTHOR */}
          <div className="aboutus-author">

            <div className="aboutus-authorInfo">

              <img
                src={authorimg}
                alt="Principal of Bright Stars Montessori"
              />

              <div>
                <h5>Mrs. Banaja Khuntia </h5>
                <span>Director and principal </span>
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