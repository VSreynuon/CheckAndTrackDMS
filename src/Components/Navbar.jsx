import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/logo.jpg";
import profile from "../assets/profile.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-2 ">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo & Title */}
        <div className="d-flex align-items-center">
          <img
            src={logo} 
            alt="Logo"
            className="rounded-circle me-2"
            style={{ width: "50px", height: "50px" }}
          />
          <div>
            <h6 className="m-0 text-dark fw-bold">Check & Track Document</h6>
          </div>
        </div>

        {/* Search Bar */}
        <div className="position-relative">
          <input
            type="text"
            className="form-control rounded-pill ps-4 pe-5"
            placeholder="Search here"
            style={{ width: "250px" }}
          />
          <i className="bi bi-search position-absolute top-50 end-0 translate-middle text-secondary me-3"></i>
        </div>

        {/* Language & Profile */}
        <div className="d-flex align-items-center gap-3">
          {/* Language Dropdown */}
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Kh
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item">Kh</button>
              </li>
              <li>
                <button className="dropdown-item">En</button>
              </li>
            </ul>
          </div>

          {/* Notifications */}
          <i className="bi bi-bell text-secondary fs-4"></i>

          {/* Profile Icon */}
          <img
            src={profile} // Use the imported profile image
            alt="Profile"
            className="rounded-circle"
            style={{ width: "45px", height: "45px", objectFit: "cover" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
