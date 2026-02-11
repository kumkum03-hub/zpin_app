import React, { useEffect, useRef, useState } from "react";
import "../FusionWear/Fusion.css";
import { useNavigate, Link } from "react-router-dom";
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

function FusionWear() {
  const carouselRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const navigate = useNavigate();

  // Scroll logic
  useEffect(() => {
    const carousel = carouselRef.current;
    const leftBtn = leftBtnRef.current;
    const rightBtn = rightBtnRef.current;

    if (!carousel || !leftBtn || !rightBtn) return;

    const getCardWidth = () => {
      const card = carousel.querySelector(".card-link");
      return card ? card.offsetWidth + 16 : 300;
    };

    const goLeft = () => {
      const step = getCardWidth();
      carousel.scrollBy({ left: -step, behavior: "smooth" });
      setTimeout(updateButtons, 200);
    };

    const goRight = () => {
      const step = getCardWidth();
      carousel.scrollBy({ left: step, behavior: "smooth" });
      setTimeout(updateButtons, 200);
    };

    const updateButtons = () => {
      leftBtn.style.display = carousel.scrollLeft <= 0 ? "none" : "block";
      rightBtn.style.display =
        carousel.scrollWidth - carousel.scrollLeft <= carousel.clientWidth + 2
          ? "none"
          : "block";
    };

    leftBtn.onclick = goLeft;
    rightBtn.onclick = goRight;
    carousel.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);
    updateButtons();

    return () => {
      carousel.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

 

  return (
    <>
      <Navbar />
      <div className="layout-container">
        <section className="women-fusionwear-hero">
          <div>
            <h1>Embrace Fusion. Embrace Fusion Wear.</h1>
            <p>Discover our new collection of fusion wear, designed for elegance and versatility.</p>
            <a href="#category">Shop Now</a>
          </div>
        </section>

        <main className="site-main" role="main" id="category">
          <div className="layout-content">
            <div className="page-header">
              <h1>Fusion Wear</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/Women">Women</Link>
                <span className="sep">/</span>
                <span>Fusion Wear</span>
              </div>
            </div>

            <div className="grid" role="list">
              <div className="carousel-container">
                <button className="scroll-btn left" ref={leftBtnRef}>
                  &#10094;
                </button>
                <div className="carousel" ref={carouselRef}>
                  <div className="card-link" role="listitem" onClick={() => navigate('/EthnicWear/IndieFusion')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1687188210526-50610de047d8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Indie Fusion</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Women/FusionWear/BohoFusion')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Boho Fusion</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/EthnicWear/IndieWork')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1765615913131-24a7d44d779d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Indie Work</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Women/FusionWear/StreetFusion')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1766471524299-016b52512780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWVuJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Street Fusion</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Women/FusionWear/FestiveFusion')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1689371953070-10782471db47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Festive Fusion</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Women/FusionWear/ContemporaryFusion')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1598554793905-075f7b355cd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjB0ZWV8ZW58MHx8MHx8fDA%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Contemporary Fusion</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Women/FusionWear/LuxuryFusion')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661582059283-deda1273fe6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbWVuJTIwbG91bmdlJTIwYW5kJTIwbGluZ2VyaWV8ZW58MHx8MHx8fDA%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Luxury Fusion</div>
                  </div>
                </div>
                <button className="scroll-btn right" ref={rightBtnRef}>
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        </main>

        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <h2>Best Sellers</h2>
            <div className="header-label"></div>
          </div>
          <div className="grid best-sellers">
            <ProductCard
              image="https://plus.unsplash.com/premium_photo-1687188210526-50610de047d8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Indie Fusion Kurta Set"
              price="₹ 1,299"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D"
              title="Boho Fusion Dress"
              price="₹ 1,499"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1765615913131-24a7d44d779d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Indie Work Fusion Top"
              price="₹ 899"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1766471524299-016b52512780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWVuJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D"
              title="Street Fusion Jacket"
              price="₹ 1,799"
            />
            <ProductCard
              image="https://plus.unsplash.com/premium_photo-1689371953070-10782471db47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D"
              title="Festive Fusion Lehenga"
              price="₹ 2,999"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1598554793905-075f7b355cd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjB0ZWV8ZW58MHx8MHx8fDA%3D"
              title="Contemporary Fusion Skirt"
              price="₹ 1,199"
            />
          </div>
          <div className="occasions">
            <h2>Shop by Occasion</h2>
            <div className="occasions-grid">
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/1316157239/photo/portrait-of-beautiful-young-asian-thai-girl-woman-model-with-traditional-india-costume-with.jpg?s=612x612&w=0&k=20&c=Q4LsmPMbCmVhus3WJmVf5XpIu7X6C0trOm-qcqm9F1Q=')" }}></div>
                <div className="occasion-overlay"><h3>Fusion Festive Events</h3></div>
              </a>
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/1306441749/photo/indian-girl-wearing-indian-traditional-dress.jpg?s=612x612&w=0&k=20&c=mQtLkRIKjvRuGiU98PLqZ2hRChWfjjYV99ySYq6wA7I=')" }}></div>
                <div className="occasion-overlay"><h3>Modern Fusion Gatherings</h3></div>
              </a>
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/1650859225/photo/beautiful-woman-dressed-in-a-traditional-indian-suit-lehenga-choli-and-silver-jewelry-set.jpg?s=612x612&w=0&k=20&c=g9urjwHC4N39R7f0X8p_3kMDNn9g8PAmuzAVcE2_TSU=')" }}></div>
                <div className="occasion-overlay"><h3>Contemporary Fusion Celebrations</h3></div>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FusionWear;
