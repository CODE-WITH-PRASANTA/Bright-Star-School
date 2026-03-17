import React from "react";
import "./Footer.css";

import logo from "../../assets/BSM-removebg.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SECTION */}
        <div className="footer-about">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>

          <p>
            We are constantly expanding the range of services offered, taking
            care of children of all ages.
          </p>
        </div>

        {/* MAIN CAMPUS */}

        <div className="footer-campus">
          <h3>Main Campus</h3>

          <div className="footer-line"></div>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            Plot No. 657/1094, Haridaspur <br />
            Naharakanta, Bhubaneswar <br />
            Odisha - 752101, India
          </p>

          <p className="footer-phone">
            <FaPhoneAlt className="footer-icon" />
            7016201096
          </p>
        </div>

        {/* NATIONAL CAMPUS */}

        <div className="footer-campus">
          <h3>National Campus</h3>

          <div className="footer-line"></div>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            Plot No. 657/1094, Haridaspur <br />
            Naharakanta, Bhubaneswar <br />
            Odisha - 752101, India
          </p>

          <p className="footer-phone">
            <FaPhoneAlt className="footer-icon" />
            7016201096
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}

      <div className="footer-bottom">
        <p className="footer-copy">
          © 2026 <strong>Bright Stars Montessori - Bhubaneswar</strong>. All
          Rights Reserved. | Powered by Bright Stars Montessori | Developed by{" "}
          <span>PR WEBSTOCK</span>
        </p>

        <div className="footer-social">
          <div className="footer-socialIcon">
            <FaFacebookF />
          </div>

          <div className="footer-socialIcon">
            <FaTwitter />
          </div>

          <div className="footer-socialIcon">
            <FaLinkedinIn />
          </div>

          <div className="footer-socialIcon">
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* SCROLL BUTTON */}

      {/* <div className="footer-scrollTop" onClick={scrollTop}>
        <FaArrowUp/>
      </div> */}
    </footer>
  );
};

export default Footer;
