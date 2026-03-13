import React from "react";
import "./Footer.css";

import logo from "../../assets/Logo.webp";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import { FaArrowUp } from "react-icons/fa";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-about">

          <div className="footer-logo">

            <img src={logo} alt="logo"/>

           

          </div>

          <p>
            We are constantly expanding the range of services
            offered, taking care of children of all ages.
          </p>

        </div>


        {/* MAIN CAMPUS */}

        <div className="footer-campus">

          <h3>Main Campus</h3>

          <div className="footer-line"></div>

          <p>
            <FaMapMarkerAlt className="footer-icon"/>
            First Floor, 10A Chandos Street London
            New Town W1G 9LE
          </p>

          <p className="footer-phone">
            <FaPhoneAlt className="footer-icon"/>
            +44 (0) 207 689 7888
          </p>

        </div>


        {/* NATIONAL CAMPUS */}

        <div className="footer-campus">

          <h3>National Campus</h3>

          <div className="footer-line"></div>

          <p>
            <FaMapMarkerAlt className="footer-icon"/>
            Unit 6G/j Red Rose Court Sunnyhurst Road
            Blackburn, Manchester
          </p>

          <p className="footer-phone">
            <FaPhoneAlt className="footer-icon"/>
            +44 (0) 207 689 7634
          </p>

        </div>

      </div>


      {/* BOTTOM BAR */}

      <div className="footer-bottom">

        <p>
          Copyright © 2025 <strong>Kiddino</strong>. 
          All Rights Reserved By <span>Vecuro</span>
        </p>

        <div className="footer-social">

          <div className="footer-socialIcon">
            <FaFacebookF/>
          </div>

          <div className="footer-socialIcon">
            <FaTwitter/>
          </div>

          <div className="footer-socialIcon">
            <FaLinkedinIn/>
          </div>

          <div className="footer-socialIcon">
            <FaYoutube/>
          </div>

        </div>

      </div>


      {/* SCROLL BUTTON */}

      {/* <div className="footer-scrollTop" onClick={scrollTop}>
        <FaArrowUp/>
      </div> */}

    </footer>
  )
}

export default Footer