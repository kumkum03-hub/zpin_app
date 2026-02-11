import React, { useRef } from "react";
import "../Accessories/Handbags.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

const HeatingCoolingAppliances = () => {
  const scrollRef = useRef(null);

  // Helper function for horizontal scroll (if needed in future, but hidden for now)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
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
              <h1>Heating & Cooling Appliances</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span>Heating & Cooling Appliances</span>
              </div>
            </div>

            {/* Horizontal scrollable categories */}
            <div className="category-row centered">
              <div className="category-scroll" ref={scrollRef} role="list">
                {/* 1 */}
                <Link to="/Sunglasses" className="card-link" role="listitem" aria-label="Sunglasses">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Room Heater</div>
                </Link>

                {/* 2 */}
                <Link to="/Blue-Light" className="card-link" role="listitem" aria-label="Blue Light Glasses">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Geyser</div>
                </Link>

                {/* 3 */}
                <Link to="/Reading-Glasses" className="card-link" role="listitem" aria-label="Reading Glasses">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2070&auto=format&fit=crop')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Fans</div>
                </Link>

                {/* 4 */}
                <Link to="/Reading-Glasses" className="card-link" role="listitem" aria-label="Reading Glasses">
                  <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2070&auto=format&fit=crop')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Air Coolers</div>
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
                <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop" alt="Aviator" />
                <h1>Classic Aviator <br />Sunglasses</h1>
                <p>Rs.1,499 <span id="strikethrough">Rs.1,999</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Best Seller</div>
                <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop" alt="Wayfarer" />
                <h1>Timeless Wayfarer <br />Black</h1>
                <p>Rs.1,299 <span id="strikethrough">Rs.1,799</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">New Arrival</div>
                <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format&fit=crop" alt="Round" />
                <h1>Retro Round <br />Frames</h1>
                <p>Rs.999 <span id="strikethrough">Rs.1,499</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Premium</div>
                <img src="https://images.unsplash.com/photo-1622324357777-6f73747d9983?q=80&w=2070&auto=format&fit=crop" alt="Cat Eye" />
                <h1>Chic Cat-Eye <br />Sunglasses</h1>
                <p>Rs.2,499 <span id="strikethrough">Rs.3,499</span></p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default HeatingCoolingAppliances;
