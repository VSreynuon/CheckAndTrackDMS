import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>App Logo</h3>
      </div>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="sidebar-link">
            <i className="bi bi-house-door sidebar-icon"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="sidebar-link">
            <i className="bi bi-briefcase sidebar-icon"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/user-permission" className="sidebar-link">
            <i className="bi bi-person-circle sidebar-icon"></i> User Permission
          </Link>
        </li>
        <li>
          <Link to="/settings" className="sidebar-link">
            <i className="bi bi-gear-fill sidebar-icon"></i> Settings
          </Link>
        </li>
        <li>
          <Link to="/login" className="sidebar-link">
            <i className="bi bi-box-arrow-right sidebar-icon"></i> Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
