import React, { useRef } from "react";
import "../Accessories/Handbags.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { products } from "../../../data/productsData";

const AudioDevices = () => {
  const scrollRef = useRef(null);

  // Filter products for Gadgets category
  const gadgetProducts = products.filter(p => p.category === 'Gadgets');

  return (
    <>
      <Navbar />

      <div className="layout-container page-handbags">
        <main className="site-main" role="main">
          <div className="layout-content">
            <div className="page-header">
              <h1>Audio Devices</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span>Audio Devices</span>
              </div>
            </div>

            <div className="category-row centered">
              <div className="category-scroll" ref={scrollRef} role="list">
                <Link to="#" className="card-link" role="listitem">
                  <div className="card-media" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=400')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Headphones</div>
                </Link>
                <Link to="#" className="card-link" role="listitem">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Speakers</div>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <section>
          <div className="box">
            <h1 className="tagline">Trending Now</h1>

            <div className="mainContainer">
              {gadgetProducts.map(product => (
                <div className="card" key={product.id}>
                  <div className="trending-badge">Trending</div>
                  <img src={product.image} alt={product.title} />
                  <h1>{product.title}</h1>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AudioDevices;
