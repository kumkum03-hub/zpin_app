import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <img src="/logo.png" alt="logo" />
        </div>

        {/* Search */}
        <div className="nav-search">
          <input type="text" placeholder="Search fashion, trends, styles..." />
          <button className="search-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none"strokeWidth="2" >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>

        {/* Right icons */}
        <div className="nav-actions">

          <button className="nav-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none"strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 
              5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 
              7.78l1.06 1.06L12 21.23l7.78-7.78 
              1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <button className="nav-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none"strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>

          <button className="nav-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none"strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
