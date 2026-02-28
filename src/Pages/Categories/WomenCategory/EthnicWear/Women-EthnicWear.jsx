import React, { useEffect, useRef, useState } from "react";
import "./Women-EthnicWear.css";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../../../Components/Navbar.jsx";
import Footer from "../../../../Components/Footer.jsx";

const ProductCard = ({ image, title, price, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e?.stopPropagation?.();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card" onClick={onClick} style={onClick ? { cursor: 'pointer' } : undefined}>
      <div className="product-image">
        <div style={{ backgroundImage: `url('${image}')` }}></div>
        <button
          className={`favorite-btn ${isFavorite ? 'clicked' : ''}`}
          onClick={(e) => toggleFavorite(e)}
        >
          {isFavorite ? 'favorite' : 'favorite_border'}
        </button>
      </div>
      <p className="product-title">{title}</p>
      <p className="product-price">{price}</p>
    </div>
  );
};

function EthnicWear() {
  const carouselRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const navigate = useNavigate();

  const bestSellers = [
    { image: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D", title: "Elegant Maxi Dress", price: "₹ 1,299", oldPrice: "₹ 1,599" },
    { image: "https://plus.unsplash.com/premium_photo-1690038783854-ff651bc9d1d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvbWVuJTIwdGVlfGVufDB8fDB8fHww", title: "Classic White Blouse", price: "₹ 799", oldPrice: "₹ 999" },
    { image: "https://plus.unsplash.com/premium_photo-1673367751771-f13597abadf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwc2tpcnR8ZW58MHx8MHx8fDA%3D", title: "Flowy Midi Skirt", price: "₹ 899", oldPrice: "₹ 1,199" },
    { image: "https://images.unsplash.com/photo-1596596866830-f01857e2ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBjcm9wJTIwdG9wfGVufDB8fDB8fHww", title: "Stylish Crop Top", price: "₹ 599", oldPrice: "₹ 799" },
    { image: "https://images.unsplash.com/photo-1742980511651-b845fa826f33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwc2xpbSUyMGZpdCUyMGplYW5zfGVufDB8fDB8fHww", title: "Slim Fit Jeans", price: "₹ 1,099", oldPrice: "₹ 1,499" },
    { image: "https://plus.unsplash.com/premium_photo-1682095667341-349d44c12bad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVuJTIwamFja2V0fGVufDB8fDB8fHww", title: "Chic Leather Jacket", price: "₹ 2,499", oldPrice: "₹ 3,299" },
  ];

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
        <section className="women-ethnicwear-hero">
          <div>
            <h1>Embrace Tradition. Embrace Ethnic Wear.</h1>
            <p>Discover our new collection of ethnic wear, designed for elegance and versatility.</p>
            <a href="#category">Shop Now</a>
          </div>
        </section>

        <main className="site-main" role="main" id="category">
          <div className="layout-content">
            <div className="page-header">
              <h1>Ethnic Wear</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/Women">Women</Link>
                <span className="sep">/</span>
                <span>Ethnic Wear</span>
              </div>
            </div>

            <div className="grid" role="list">
              <div className="carousel-container">
                <button className="scroll-btn left" ref={leftBtnRef}>
                  &#10094;
                </button>
                <div className="carousel" ref={carouselRef}>
                  <div className="card-link" role="listitem" onClick={() => navigate('/EthnicWear/KurtaSets')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1687188210526-50610de047d8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Kurta Sets</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/EthnicWear/Sarees')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Sarees</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/EthnicWear/Lehengas')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1765615913131-24a7d44d779d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Lehengas</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/EthnicWear/CoOrdSets')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1766471524299-016b52512780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWVuJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Co-ord Sets</div>
                  </div>

                  <div className="card-link" role="listitem" onClick={() => navigate('/EthnicWear/Gowns')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1689371953070-10782471db47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Gowns</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/EthnicWear/DesignerWear')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1598554793905-075f7b355cd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjB0ZWV8ZW58MHx8MHx8fDA%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Designer Wear</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/EthnicWear/IndieWork')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661582059283-deda1273fe6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbWVuJTIwbG91bmdlJTIwYW5kJTIwbGluZ2VyaWV8ZW58MHx8MHx8fDA%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Indie Work</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/EthnicWear/IndieFusion')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1687188210526-50610de047d8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Indie Fusion</div>
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
            {bestSellers.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                onClick={() => navigate('/ProdLanding', { state: { product } })}
              />
            ))}
          </div>
          <div className="occasions">
            <h2>Shop by Occasion</h2>
            <div className="occasions-grid">
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/1316157239/photo/portrait-of-beautiful-young-asian-thai-girl-woman-model-with-traditional-india-costume-with.jpg?s=612x612&w=0&k=20&c=Q4LsmPMbCmVhus3WJmVf5XpIu7X6C0trOm-qcqm9F1Q=')" }}></div>
                <div className="occasion-overlay"><h3>Festive Flair</h3></div>
              </a>
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/1306441749/photo/indian-girl-wearing-indian-traditional-dress.jpg?s=612x612&w=0&k=20&c=mQtLkRIKjvRuGiU98PLqZ2hRChWfjjYV99ySYq6wA7I=')" }}></div>
                <div className="occasion-overlay"><h3>Family Functions</h3></div>
              </a>
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/1650859225/photo/beautiful-woman-dressed-in-a-traditional-indian-suit-lehenga-choli-and-silver-jewelry-set.jpg?s=612x612&w=0&k=20&c=g9urjwHC4N39R7f0X8p_3kMDNn9g8PAmuzAVcE2_TSU=')" }}></div>
                <div className="occasion-overlay"><h3>Wedding Season</h3></div>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default EthnicWear;
