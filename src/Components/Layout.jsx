import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar with sidebar toggle */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar & Main Content */}
      <div className="d-flex flex-column flex-md-row">
        {/* Sidebar - It will go below the navbar on small screens */}
        <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="main-content flex-grow-1 p-3">
          {children}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
