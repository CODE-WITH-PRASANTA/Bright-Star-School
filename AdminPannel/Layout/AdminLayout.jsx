import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./AdminLayout.css";

export default function AdminLayout() {

  const [sidebarOpen,setSidebarOpen] = useState(true);

  return (

    <div className="admin-layout">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="admin-content">

        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="admin-main">
          <Outlet/>
        </main>

      </div>

    </div>

  );

}