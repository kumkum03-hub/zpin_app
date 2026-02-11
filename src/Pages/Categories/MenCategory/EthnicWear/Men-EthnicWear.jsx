import React, { useEffect, useRef, useState } from "react";
import "./Men-EthnicWear.css";
import { useNavigate } from "react-router-dom";
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

function EthnicWear() {
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

  // Favorite button logic - removed since using ProductCard component now

  return (
    <>
      <Navbar />
      <div className="layout-container">
        <section className="ethnicwear-hero">
          <div>
            <h1>Tradition, Made Effortless.</h1>
            <p>Explore ethnic wear designed for comfort, culture, and confidence.</p>
            <a href="#category">Shop Now</a>
          </div>
        </section>

        <main className="site-main" role="main" id="category">
          <div className="layout-content">
            <div className="page-header">
              <h1>Ethnic Wear</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">/</span>
                <a href="/Men">Men</a>
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
                  <div className="card-link" role="listitem" onClick={() => navigate('/kurtas')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/6a8b43f8-c31f-4eb1-8214-07e74bab481d.png')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Kurtas</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/fusion-shirts')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/1e952fcb-4d56-4c24-8c17-d3ff77794f43.png')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Fusion Shirts</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/sherwani')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/1b4424e3-7636-4c8d-8468-a19a447a2e2a.png')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Sherwani</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/short-kurtas')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/bb6abd3d-fe1f-48e9-8c2b-97f760738b41.png')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Short Kurtas</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/kurta-set')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/a17ece61-32a4-4c90-af6b-ffbd013c243b.png')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Kurta Set</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/blazers')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/4c5b648d-37a5-4085-bad1-54cba02db6c1.png')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Blazers</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/nehru-jackets')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/ad9daa1b-9d97-4b44-988d-04c2c92ce88d.png')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Nehru Jackets</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/dhoti')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/a77836e0-7075-4165-9eaa-319f498e52fd.png')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">Dhoti</div>
                  </div>
                  <div className="card-link" role="listitem" onClick={() => navigate('/3-piece-set')} style={{ cursor: 'pointer' }}>
                    <div className="card-media" style={{
                      backgroundImage: "url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/874bfec5-2477-4246-9b80-8f78bdeb26e9.png')"
                    }}>
                      <div className="card-overlay">Shop Now</div>
                    </div>
                    <div className="card-label">3 Piece Set</div>
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
              image="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Relaxed Fit Tee"
              price="₹ 599"
            />
            <ProductCard
              image="https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Classic Denim Jeans"
              price="₹ 899"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Comfortable Jogger"
              price="₹ 599"
            />
            <ProductCard
              image="https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Versatile Hoodie"
              price="₹ 799"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Everyday Sneakers"
              price="₹ 699"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Casual Button-Down Shirt"
              price="₹ 999"
            />
          </div>
          <div className="occasions">
            <h2>Shop by Occasion</h2>
            <div className="occasions-grid">
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1674907683352-267e2ab6ba50?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                <div className="occasion-overlay"><h3>College Casuals</h3></div>
              </a>
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/1327307674/photo/man-pulls-trolley-on-wooden-pier-in-tropical-destination.jpg?s=1024x1024&w=is&k=20&c=4hIYBWF1OTodYhw4mi1LWRymDYeAljwZU_f1LSW4DCE=')" }}></div>
                <div className="occasion-overlay"><h3>Weekend Vibes</h3></div>
              </a>
              <a href="#" className="occasion-card">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1741709847645-48d1807640e8?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                <div className="occasion-overlay"><h3>Party Ready</h3></div>
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