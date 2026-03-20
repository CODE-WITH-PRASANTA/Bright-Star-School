import { useState } from "react";
import { FaBars, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [openProfile, setOpenProfile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    alert("Logout Clicked");
  };

  return (
    <header className="admin-navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <h2 className="navbar-title">Admin Dashboard</h2>
      </div>

      <div className="navbar-profile">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="profile-img"
          onClick={() => setOpenProfile(!openProfile)}
        />

        {openProfile && (
          <div className="profile-dropdown">
            <button className="dropdown-item">
              <FaUser /> Profile
            </button>

            <button className="dropdown-item">
              <FaCog /> Settings
            </button>

            <button onClick={handleLogout} className="dropdown-item logout">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}