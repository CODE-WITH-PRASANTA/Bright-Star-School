import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaNewspaper,
  FaImages,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUserTie,
  FaCommentDots,
} from "react-icons/fa";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const menu = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
     { name: "News Posting", path: "/admin/newsposting", icon: <FaHome /> },
    
    { name: "Teacher Posting", path: "/admin/teacherposting", icon: <FaNewspaper /> },
    { name: "Testimonial", path: "/admin/testimonial", icon: <FaNewspaper /> },
    
    
    { name: "Blog Posting", path: "/admin/blogposting", icon: <FaNewspaper /> },

    {
      name: "Gallery",
      icon: <FaImages />,
      submenu: [
        { name: "Gallery Post", path: "/admin/gallery-post" },
        { name: "Gallery View", path: "/admin/gallery-view" },
      ],
    },

    { name: "Event", path: "/admin/event", icon: <FaCalendarAlt /> },
    { name: "Classes", path: "/admin/classes", icon: <FaChalkboardTeacher /> },
    { name: "Teacher Post", path: "/admin/teachers", icon: <FaUserTie /> },

    {
      name: "Testimonials Post",
      path: "/admin/testimonials",
      icon: <FaCommentDots />,
    },

    { name: "Contact", path: "/admin/contact", icon: <FaNewspaper /> },
    { name: "Admission", path: "/admin/admission", icon: <FaNewspaper /> },
    { name: "Fees", path: "/admin/fees", icon: <FaNewspaper /> },
  ];

  const [openMenu, setOpenMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const handleMenuClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {sidebarOpen && isMobile && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`admin-sidebar ${sidebarOpen ? "open" : "close"}`}>
        <div className="sidebar-header">
          {sidebarOpen ? "Admin Panel" : "AP"}
        </div>

        <nav className="sidebar-menu">
          {menu.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <button
                  className="menu-btn"
                  onClick={() => toggleMenu(item.name)}
                >
                  <span className="menu-icon">{item.icon}</span>
                  {sidebarOpen && <span>{item.name}</span>}
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={handleMenuClick}
                  className={({ isActive }) =>
                    `menu-link ${isActive ? "active" : ""}`
                  }
                >
                  <span className="menu-icon">{item.icon}</span>
                  {sidebarOpen && item.name}
                </NavLink>
              )}

              {item.submenu && openMenu === item.name && sidebarOpen && (
                <div className="submenu">
                  {item.submenu.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      onClick={handleMenuClick}
                      className={({ isActive }) =>
                        `submenu-link ${isActive ? "active" : ""}`
                      }
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}