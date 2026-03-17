import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import logo from "../../assets/BSM-removebg.png";

const Navbar = () => {
  const [navbarSidebar, setNavbarSidebar] = useState(false);

  const toggleNavbarSidebar = () => {
    setNavbarSidebar(!navbarSidebar);
  };

  // 🔥 Section IDs for scrolling
  const navItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Our History", id: "history" },
    { title: "Growing Stage", id: "learning" },
    { title: "Why choose us", id: "values" },
    { title: "Teachers", id: "teachers" },
    { title: "Programs", id: "programs" },
    { title: "Gallery", id: "gallery" },
    { title: "News", id: "news" },
    { title: "Contact", id: "admission" },
  ];

  // 🔥 Smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNavbarSidebar(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="navbar-logo" onClick={() => handleScroll("home")}>
          <img src={logo} alt="logo" />
        </div>

        {/* DESKTOP MENU */}
        <ul className="navbar-menu">
          {navItems.map((item, index) => (
            <li key={index} onClick={() => handleScroll(item.id)}>
              {item.title}
            </li>
          ))}
        </ul>

        {/* MOBILE ICON */}
        <div className="navbar-menuIcon" onClick={toggleNavbarSidebar}>
          <FiMenu />
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`navbar-overlay ${navbarSidebar ? "active" : ""}`}
        onClick={toggleNavbarSidebar}
      ></div>

      {/* SIDEBAR */}
      <div className={`navbar-sidebar ${navbarSidebar ? "active" : ""}`}>
        <div className="navbar-sidebarHeader">
          <img src={logo} alt="logo" />

          <div
            className="navbar-closeIcon"
            onClick={toggleNavbarSidebar}
          >
            <FiX />
          </div>
        </div>

        <ul className="navbar-sidebarMenu">
          {navItems.map((item, index) => (
            <li key={index} onClick={() => handleScroll(item.id)}>
              <span>
                <FiChevronRight />
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;