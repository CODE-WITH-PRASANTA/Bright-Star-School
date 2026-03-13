import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";

import logo from "../../assets/Logo.webp"; // import your logo

const Navbar = () => {

  const [navbarSidebar,setNavbarSidebar] = useState(false)

  const toggleNavbarSidebar = () =>{
    setNavbarSidebar(!navbarSidebar)
  }

  const navItems = [
    {title:"Home",path:"/"},
    {title:"About",path:"/about"},
    {title:"Teacher",path:"/teacher"},
    {title:"Event",path:"/event"},
    {title:"Class",path:"/class"},
    {title:"Pricing",path:"/pricing"},
    {title:"Gallery",path:"/gallery"},
    {title:"Contact",path:"/contact"}
  ]

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* logo */}
        <div className="navbar-logo">
          <img src={logo} alt="logo"/>
        </div>

        {/* desktop menu */}
        <ul className="navbar-menu">
          {navItems.map((item,index)=>(
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* mobile menu icon */}
        <div className="navbar-menuIcon" onClick={toggleNavbarSidebar}>
          <FiMenu/>
        </div>

      </div>


      {/* overlay */}
      <div 
      className={`navbar-overlay ${navbarSidebar ? "active":""}`}
      onClick={toggleNavbarSidebar}
      ></div>


      {/* mobile sidebar */}
      <div className={`navbar-sidebar ${navbarSidebar ? "active":""}`}>

        <div className="navbar-sidebarHeader">

          <img src={logo} alt="logo"/>

          <div 
          className="navbar-closeIcon"
          onClick={toggleNavbarSidebar}
          >
            <FiX/>
          </div>

        </div>


        <ul className="navbar-sidebarMenu">

          {navItems.map((item,index)=>(
            <li key={index} onClick={()=>setNavbarSidebar(false)}>
              <Link to={item.path}>
                <FiChevronRight/>
                {item.title}
              </Link>
            </li>
          ))}

        </ul>

      </div>

    </nav>
  )
}

export default Navbar