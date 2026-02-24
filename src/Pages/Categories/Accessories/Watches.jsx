import React, { useRef } from "react";
import "./Handbags.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { products } from "../../../data/productsData";

const Watches = () => {
  const scrollRef = useRef(null);

  // Filter products for Watches (included in Accessories category in our data)
  // We'll search for "Watch" or "Timepiece" in the title
  const watchProducts = products.filter(p => p.title.toLowerCase().includes('watch') || p.title.toLowerCase().includes('timepiece') || p.title.toLowerCase().includes('tracker'));

  return (
    <>
      <Navbar />

      <div className="layout-container page-handbags">
        <main className="site-main" role="main">
          <div className="layout-content">
            <div className="page-header">
              <h1>Watches Collection</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span>Watches</span>
              </div>
            </div>

            <div className="category-row centered">
              <div className="category-scroll" ref={scrollRef} role="list">
                <Link to="#" className="card-link" role="listitem">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Analog</div>
                </Link>
                <Link to="#" className="card-link" role="listitem">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=400')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Digital</div>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <section>
          <div className="box">
            <h1 className="tagline">Trending Now</h1>

            <div className="mainContainer">
              {watchProducts.map(product => (
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

export default Watches;
