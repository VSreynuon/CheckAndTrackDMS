import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 text-white min-vh-100" style={{backgroundColor: "#17c3b2"}}>
      {/* Title */}
      {/* <h2 className="text-center mb-4">Dashboard</h2> */}
      
      {/* Sidebar Menu */}
      <ul className="list-unstyled flex-grow-1">
        <li className="mb-3">
          <Link to="/" className="sidebar-link text-white d-flex align-items-center">
            <i className="bi bi-house-door sidebar-icon me-2"></i> Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/dashboard" className="sidebar-link text-white d-flex align-items-center">
            <i className="bi bi-briefcase sidebar-icon me-2"></i> Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/user-permission" className="sidebar-link text-white d-flex align-items-center">
            <i className="bi bi-person-circle sidebar-icon me-2"></i> User Permission
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/settings" className="sidebar-link text-white d-flex align-items-center">
            <i className="bi bi-gear-fill sidebar-icon me-2"></i> Settings
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/login" className="sidebar-link text-white d-flex align-items-center">
            <i className="bi bi-box-arrow-right sidebar-icon me-2"></i> Log Out
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;
