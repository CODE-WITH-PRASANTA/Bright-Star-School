import React, { useState } from "react";
import "./Topbar.css";

import { FiMenu, FiX } from "react-icons/fi";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import img1 from "../../assets/Gal-11.webp";
import img2 from "../../assets/Gal-22.webp";
import img3 from "../../assets/Gal_33.webp";

import news1 from "../../assets/Gal-44.webp";
import news2 from "../../assets/Gal-55.webp";
import news3 from "../../assets/Gal-66.webp";

const Topbar = () => {

  const [topbarSidebar, setTopbarSidebar] = useState(false);

  const toggleTopbarSidebar = () => {
    setTopbarSidebar(!topbarSidebar);
  };

  return (
    <div className="topbar">

      {/* TOPBAR */}
      <div className="topbar-container">

        <div className="topbar-left">

          <div className="topbar-item">
            <FaEnvelope />
            <span>user@example.com</span>
          </div>

          <div className="topbar-item">
            <FaPhoneAlt />
            <span>+44 (0) 207 689 7888</span>
          </div>

        </div>

        <div className="topbar-right">

          <button className="topbar-contactBtn">
            <FaPhoneAlt />
            +44 (0) 207 689 7888
          </button>

          <div className="topbar-menuIcon" onClick={toggleTopbarSidebar}>
            <FiMenu />
          </div>

        </div>

      </div>


      {/* overlay */}
      <div
        className={`topbar-overlay ${topbarSidebar ? "active" : ""}`}
        onClick={toggleTopbarSidebar}
      ></div>


      {/* SIDEBAR */}
      <div className={`topbar-sidebar ${topbarSidebar ? "active" : ""}`}>

        {/* Sidebar Header */}
        <div className="topbar-sidebarHeader">

          <h2>Giving your child the best start in life</h2>

          <div className="topbar-closeIcon" onClick={toggleTopbarSidebar}>
            <FiX />
          </div>

        </div>


        <div className="topbar-sidebarContent">

          {/* ADDRESS */}
          <div className="topbar-address">

            <FaMapMarkerAlt className="topbar-locationIcon"/>

            <p>
              First Floor, 10A Chandos Street London
              <br/>
              New Town W1G 9LE
            </p>

          </div>


          {/* GALLERY */}
          <div className="topbar-gallery">

            <div className="topbar-galleryItem">
              <img src={img1} alt="gallery"/>
            </div>

            <div className="topbar-galleryItem">
              <img src={img2} alt="gallery"/>
            </div>

            <div className="topbar-galleryItem">
              <img src={img3} alt="gallery"/>
            </div>

          </div>


          {/* CONTACT SECTION */}
          <div className="topbar-contact">

            <h3>Get In Touch</h3>

            <div className="topbar-line"></div>

            <p>Monday to Friday: <strong>8.30am – 02.00pm</strong></p>
            <p>Saturday, Sunday: <strong>Close</strong></p>


            <div className="topbar-contactItem">

              <div className="topbar-iconCircle">
                <FaEnvelope />
              </div>

              <span>Email: user@domainname.com</span>

            </div>


            <div className="topbar-contactItem">

              <div className="topbar-iconCircle">
                <FaPhoneAlt />
              </div>

              <span>Phone: +44 (0) 207 689 7888</span>

            </div>

          </div>


          {/* LATEST NEWS */}
          <div className="topbar-news">

            <h3>Latest News</h3>

            <div className="topbar-newsItem">

              <img src={news1} alt="news"/>

              <div>
                <span className="topbar-newsDate">
                  <FaCalendarAlt /> 26 September 2023
                </span>

                <p>How to Keep Children Safe Online In</p>
              </div>

            </div>


            <div className="topbar-newsItem">

              <img src={news2} alt="news"/>

              <div>
                <span className="topbar-newsDate">
                  <FaCalendarAlt /> 09 August 2023
                </span>

                <p>Baby school and other secrets is yourfamily</p>
              </div>

            </div>


            <div className="topbar-newsItem">

              <img src={news3} alt="news"/>

              <div>
                <span className="topbar-newsDate">
                  <FaCalendarAlt /> 09 August 2023
                </span>

                <p>Easy steps for choosing to the learning</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Topbar;