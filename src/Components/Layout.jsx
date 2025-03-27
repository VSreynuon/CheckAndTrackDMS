import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        {/* <Sidebar /> */}

        {/* Main content area */}
        <div className="main-content" style={{ flexGrow: 1, padding: '20px' }}>
          {children}  {/* The content passed to the layout component */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
