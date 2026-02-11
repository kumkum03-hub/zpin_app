import React, { useState } from "react";
import "./FormalShoes.css";
import { Link } from "react-router-dom";
import Navbar from "../../../../Components/Navbar.jsx";
import Footer from "../../../../Components/Footer.jsx";

const ProductCard = ({ image, title, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <div style={{ backgroundImage: `url('${image}')` }}></div>
        <button 
          className={`favorite-btn ${isFavorite ? 'clicked' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? 'favorite' : 'favorite_border'}
        </button>
      </div>
      <p className="product-title">{title}</p>
      <p className="product-price">{price}</p>
    </div>
  );
};

function FormalShoes() {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const toggleSortDropdown = () => {
    setSortDropdownOpen(!sortDropdownOpen);
  };

  return (
    <>
      <Navbar />
      <div className="layout-container">
        <main className="site-main" role="main">
          <div className="layout-content">
            <div className="page-header">
              <h1>Formal Shoes</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/Men">Men</Link>
                <span className="sep">/</span>
                <Link to="/WorkWear">Work Wear</Link>
                <span className="sep">/</span>
                <span>Formal Shoes</span>
              </div>
            </div>

            <div className="controls">
              <button className="btn">Filter</button>
              <div className="sort-btn" onClick={toggleSortDropdown}>
                Sort by
                <span>▼</span>
                <div className={`dropdown ${sortDropdownOpen ? 'open' : ''}`}>
                  <a href="#">Price: Low to High</a>
                  <a href="#">Price: High to Low</a>
                  <a href="#">Newest First</a>
                  <a href="#">Most Popular</a>
                </div>
              </div>
            </div>

            <div className="grid products">
              <ProductCard
                image="https://images.unsplash.com/photo-1635892465062-de290f48da4d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Oxford Dress Shoes"
                price="₹ 3499"
              />
              <ProductCard
                image="https://plus.unsplash.com/premium_photo-1697753121099-f2988a868ecf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Derby Formal Shoes"
                price="₹ 2999"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1630435663442-21d8a3acc431?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Brogue Shoes"
                price="₹ 4299"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Loafers"
                price="₹ 2799"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Monk Strap Shoes"
                price="₹ 3799"
              />
              <ProductCard
                image="https://plus.unsplash.com/premium_photo-1688497831535-120bd47d9f9c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Cap Toe Shoes"
                price="₹ 3299"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Wingtip Shoes"
                price="₹ 4599"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Chelsea Boots"
                price="₹ 3999"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default FormalShoes;