import React, { useEffect, useRef, useState } from "react";
import "./SportsWear.css";
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

function SportsWear() {
  const carouselRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const navigate = useNavigate();

  const bestSellers = [
    { image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Relaxed Fit Tee", price: "₹ 599", oldPrice: "₹ 799" },
    { image: "https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Classic Denim Jeans", price: "₹ 899", oldPrice: "₹ 1,199" },
    { image: "https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Comfortable Jogger", price: "₹ 599", oldPrice: "₹ 799" },
    { image: "https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Versatile Hoodie", price: "₹ 799", oldPrice: "₹ 999" },
    { image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Everyday Sneakers", price: "₹ 699", oldPrice: "₹ 899" },
    { image: "https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Casual Button-Down Shirt", price: "₹ 999", oldPrice: "₹ 1,299" },
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
        <section className="sportswear-hero">
          <div>
            <h1>Power Your Performance. Elevate Your Game.</h1>
            <p>Discover our premium sportswear collection, engineered for peak performance and comfort.</p>
            <a href="#category">Shop Now</a>
          </div>
        </section>

        <main className="site-main" role="main" id="category">
          <div className="layout-content">
            <div className="page-header">
              <h1>Sports Wear</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/Men">Men</Link>
                <span className="sep">/</span>
                <span>Sports Wear</span>
              </div>
            </div>

            <div className="grid" role="list">
              <div className="carousel-container">
                <button className="scroll-btn left" ref={leftBtnRef}>
                  &#10094;
                </button>
                <div className="carousel" ref={carouselRef}>
                  <div className="card-link" role="listitem" onClick={() => navigate('/tshirts')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1697753121099-f2988a868ecf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">T-shirts</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/track-pants')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Track Pants</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/shorts')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1617953644310-e690da9be982?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Shorts</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/jackets')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Jackets</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/sweatshirts')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1635892465062-de290f48da4d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Sweatshirts</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/tracksuits')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1661352754488-4776516fcf31?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Tracksuits</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/trunks')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1688497831535-120bd47d9f9c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Trunk</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/sports-trousers')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Trousers</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/innerwear-vests')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1752047763304-df3b84798b37?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Innerwear Vests</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/swim-bottoms')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1617953644310-e690da9be982?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Swim Bottoms</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/shirts')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1630435663442-21d8a3acc431?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Shirts</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/tights')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Tights</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/briefs')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1752047763304-df3b84798b37?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Briefs</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/co-ords')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1661352754488-4776516fcf31?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Co-ords</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/rain-jacket')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Rain Jacket</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/sports-jacket')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Sports Jacket</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/sweaters')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Sweaters</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/thermal-tops')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1697753121099-f2988a868ecf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Thermal Tops</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/lounge-tshirts')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1697753121099-f2988a868ecf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Lounge T-shirts</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/boxers')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1752047763304-df3b84798b37?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Boxers</div>
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
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                <div className="occasion-overlay"><h3>Gym & Training</h3></div>
              </a>
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506629905607-d9c297d3d45b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                <div className="occasion-overlay"><h3>Running & Cardio</h3></div>
              </a>
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                <div className="occasion-overlay"><h3>Outdoor Sports</h3></div>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default SportsWear;