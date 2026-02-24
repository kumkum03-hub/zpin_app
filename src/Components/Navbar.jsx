import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ searchQuery: propSearchQuery, setSearchQuery: propSetSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  // Sync local state if prop is search query is provided
  useEffect(() => {
    if (propSearchQuery !== undefined) {
      setLocalSearchQuery(propSearchQuery);
    }
  }, [propSearchQuery]);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (localSearchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(localSearchQuery.trim())}`);
    } else if (location.pathname === "/products") {
      // Clear search if empty on products page
      navigate("/products");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    if (propSetSearchQuery) {
      propSetSearchQuery(value);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>

        {/* Search */}
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search fashion, trends, styles..."
            value={localSearchQuery}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn" onClick={handleSearch}>
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>

        {/* Right icons */}
        <div className="nav-actions">

          <Link to="/wishlist" className="nav-btn" id="favorite-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 
              5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 
              7.78l1.06 1.06L12 21.23l7.78-7.78 
              1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </Link>

          <Link to="/cart" className="nav-btn" id="cart-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </Link>

          <Link to="/profile" className="nav-btn" id="profile-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
