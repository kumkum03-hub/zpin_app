import React, { useRef } from "react";
import "./Handbags.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

const Watches = () => {
  const scrollRef = useRef(null);

  // Helper function for horizontal scroll
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Adjust scroll amount as needed
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

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

            {/* Horizontal scrollable categories */}
            <div className="category-row centered">
              <div className="category-scroll" ref={scrollRef} role="list">
                {/* 1 */}
                <Link to="/Analog-Watches" className="card-link" role="listitem" aria-label="Analog Watches">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Analog</div>
                </Link>

                {/* 2 */}
                <Link to="/Digital-Watches" className="card-link" role="listitem" aria-label="Digital Watches">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Digital</div>
                </Link>

                {/* 3 */}
                <Link to="/Smart-Watches" className="card-link" role="listitem" aria-label="Smart Watches">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Smart Watches</div>
                </Link>

                {/* 4 */}
                <Link to="/Sports-Watches" className="card-link" role="listitem" aria-label="Sports Watches">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1612817288484-9291347748cb?q=80&w=2070&auto=format&fit=crop')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Sports Watches</div>
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* section 1 */}
        <section>
          <div className="box">
            <h1 className="tagline">Trending Now</h1>

            <div className="mainContainer">
              <div className="card">
                <div className="trending-badge">Trending</div>
                <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop" alt="Watch" />
                <h1>Classic Leather <br />Timepiece</h1>
                <p>Rs.2,499 <span id="strikethrough">Rs.3,999</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Best Seller</div>
                <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1894&auto=format&fit=crop" alt="Watch" />
                <h1>Golden Era <br />Analog</h1>
                <p>Rs.5,999 <span id="strikethrough">Rs.7,999</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">New Arrival</div>
                <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop" alt="Watch" />
                <h1>Smart Fitness <br />Tracker</h1>
                <p>Rs.1,999 <span id="strikethrough">Rs.3,499</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Premium</div>
                <img src="https://images.unsplash.com/photo-1619134778706-c27533cdcd7d?q=80&w=1887&auto=format&fit=crop" alt="Watch" />
                <h1>Chronograph <br />Sport</h1>
                <p>Rs.8,999 <span id="strikethrough">Rs.12,999</span></p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Watches;
