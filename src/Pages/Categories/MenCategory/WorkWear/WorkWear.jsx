import React, { useEffect, useRef, useState } from "react";
import "./WorkWear.css";
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

function WorkWear() {
  const carouselRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const navigate = useNavigate();

  const bestSellers = [
    { image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Professional Blazer", price: "₹ 2999", oldPrice: "₹ 3999" },
    { image: "https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Formal Trousers", price: "₹ 1899", oldPrice: "₹ 2499" },
    { image: "https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Business Shirt", price: "₹ 1299", oldPrice: "₹ 1599" },
    { image: "https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Executive Jacket", price: "₹ 2499", oldPrice: "₹ 2999" },
    { image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Formal Shoes", price: "₹ 3499", oldPrice: "₹ 4299" },
    { image: "https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Office Kurta", price: "₹ 1799", oldPrice: "₹ 2299" },
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

  // Favorite button logic - removed since using ProductCard component now

  return (
    <>
      <Navbar />
      <div className="layout-container">
        <section className="workwear-hero">
          <div>
            <h1>Professional. Polished. Perfect.</h1>
            <p>Discover our new collection of work wear, designed for professionalism and style.</p>
            <a href="#category">Shop Now</a>
          </div>
        </section>

        <main className="site-main" role="main" id="category">
          <div className="layout-content">
            <div className="page-header">
              <h1>Work Wear</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/Men">Men</Link>
                <span className="sep">/</span>
                <span>Work Wear</span>
              </div>
            </div>

            <div className="grid" role="list">
              <div className="carousel-container">
                <button className="scroll-btn left" ref={leftBtnRef}>
                  &#10094;
                </button>
                <div className="carousel" ref={carouselRef}>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Shirts')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1630435663442-21d8a3acc431?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Shirts</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Blazers')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1622497170185-5d668f816a56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhemVyfGVufDB8fDB8fHww')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Blazers</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Tshirts')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1697753121099-f2988a868ecf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">T-Shirts</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Trousers')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Trousers</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Jeans')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1688497831535-120bd47d9f9c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Jeans</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/sweatshirts')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1635892465062-de290f48da4d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Sweatshirts</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Sweaters')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Sweaters</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Jackets')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Jackets</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/Kurtas')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1727835523550-18478cacefa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VydGElMjBtZW58ZW58MHx8MHx8fDA%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Kurtas</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/ClothingFabric')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1759736767043-2a5751bb8704?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Clothing Fabric</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/FormalShoes')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1664505504065-31f8937d2261?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvcm1hbCUyMHNob2VzJTIwbWVufGVufDB8fDB8fHww')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Formal Shoes</div>
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
            {bestSellers.map((product) => (
              <ProductCard
                key={product.title}
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
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1674907683352-267e2ab6ba50?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                <div className="occasion-overlay"><h3>Office Essentials</h3></div>
              </a>
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/1327307674/photo/man-pulls-trolley-on-wooden-pier-in-tropical-destination.jpg?s=1024x1024&w=is&k=20&c=4hIYBWF1OTodYhw4mi1LWRymDYeAljwZU_f1LSW4DCE=')" }}></div>
                <div className="occasion-overlay"><h3>Business Casual</h3></div>
              </a>
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1741709847645-48d1807640e8?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                <div className="occasion-overlay"><h3>Formal Meetings</h3></div>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default WorkWear;