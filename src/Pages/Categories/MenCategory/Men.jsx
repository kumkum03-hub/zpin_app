import React, { useRef } from "react";
import "./Men.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";




const TRENDING_PRODUCTS = [
  { image: "https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "The Classic Crew T-shirt", price: "Rs.899", oldPrice: "Rs.999", badge: "Trending" },
  { image: "https://media.istockphoto.com/id/1203543686/photo/handsome-guy-with-hat-is-on-the-beach.jpg?s=2048x2048&w=is&k=20&c=FK4hxmKyWc4GoFVECC1c8j454xyud8sEXvI93mgnTfA=", title: "AeroFlow Training Shorts", price: "Rs.899", oldPrice: "Rs.999", badge: "Trending" },
  { image: "https://media.istockphoto.com/id/176405965/photo/facing-the-day-with-a-smile.jpg?s=2048x2048&w=is&k=20&c=fdyEn--vvqROp-VyCU4yTrIM7PeETn5JsI_ETDzor1g=", title: "The Maverick Slim-Fit Jeans", price: "Rs.899", oldPrice: "Rs.999", badge: "Trending" },
  { image: "https://media.istockphoto.com/id/1614454660/photo/male-model-posing-in-green-kurta.jpg?s=2048x2048&w=is&k=20&c=8_ZS_379Dpg8dYNaYkDhcyDKwnksOyNMs9iJvg6e1Os=", title: "Emerald Fusion Kurta Set", price: "Rs.899", oldPrice: "Rs.999", badge: "Trending" },
  { image: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Urban Explorer Tee", price: "Rs.899", oldPrice: "Rs.999", badge: "Highly-Rated" },
  { image: "https://plus.unsplash.com/premium_photo-1682096794344-88b07b13ef3c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Soft-Touch V-Neck T-shirt", price: "Rs.899", oldPrice: "Rs.999", badge: "Highly-Rated" },
  { image: "https://plus.unsplash.com/premium_photo-1710107446916-1b0c67a99042?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "CloudStride Running Sneakers", price: "Rs.899", oldPrice: "Rs.999", badge: "Highly-Rated" },
  { image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "A durable, classic leather wallet", price: "Rs.899", oldPrice: "Rs.999", badge: "Highly-Rated" },
];

const Men = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const goToCart = () => {
    window.location.href = "cart.html";
  };

  const goToProfile = () => {
    window.location.href = "Profile.html";
  };

  const goToHome = () => {
    window.location.href = "index.html";
  };

  const goToProd = () => {
    window.location.href = "prodlanding.html";
  };

  const goToMen = () => {
    window.location.href = "menCat.html";
  };

  return (
    <>
     <Navbar />

      <div className="layout-container">

        <main className="site-main" role="main">
          <div className="layout-content">
            <div className="page-header">
              <h1>Men's Collection</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span>Men</span>
              </div>
            </div>

            {/* Horizontal scrollable categories with arrows */}
            <div className="category-row">
              <button className="arrow-btn left" aria-label="Scroll left" onClick={() => { const el = scrollRef.current; if (el) el.scrollBy({ left: -360, behavior: 'smooth' }); }}>&larr;</button>
              <div className="category-scroll" ref={scrollRef} role="list">
                {/* 1 */}
                <Link to="/CasualWear" className="card-link" role="listitem" aria-label="Casual Wear">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCh3Ve9Kv3XJUbNqWzlN6SjYV-TehCuRrlvYrTCtcd-ejlWs7MkZewHJkOVmLMLHdXH3iE8mbCOGbumeWhvp4sCfU09M2ICxnMszynjiJr8sjOG_JOa8Y8CVH8QaSgtVyg477O_vdjoUQvwHANktd6YONXKNWB61zSilhgNXVCGN0wYbb3Bk191n8YhgsOM0R_GDc4WqK44kB9mJbq5L-XQH_1Q4JsKD7P-6U9IrmUCR6muYuJQhuUQQoc965rBXrH7tP1qW8bhrus')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Casual Wear</div>
                </Link>

                {/* 2 */}
                <Link to="/Men-EthnicWear" className="card-link" role="listitem" aria-label="Ethnic Wear">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzO3O3cByBmrz0aCVo5z_vSM78414Mu74WS1f1acKkUmfjRQBJuPfV-J_-2jxhNBbl54-XTHILTx2bk7KoTx70hAmE_aDlxAZagSVBNeQ1mWzkNGZUHdgzK4uXi9-iT5GxJlszwDOc1CXyY5IlejfKeF5j2mSndVF1RTJMFrOJu0l4afvPGrK6-pEkB5pYpiG5y-KYgq5z2NmQwQXKqlWWBMOCabhhPnvSMdPux-UN3VrsfAx1ADkZYt2zvnw4AHf3DhQvvsVB-JQ')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Ethnic Wear</div>
                </Link>

                {/* 3 */}
                <Link to="/SportsWear" className="card-link" role="listitem" aria-label="Sports Wear">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbqkTAk1xn2-YROEVy8Px_QRQkmz-lB3RQubj2YGtzSzj3dNdKcLzafBPXSgkw5akm81eCI19Olj4dU485igCe0GDysNaVYEH9jSXB1aElK6euLJpSdBcgmcDz2WbNwJzX_wQkMPF1KMIKYDBNLAIsKtiYr-gaViJ7oDXFYMqoIgbobDKUvbQJCBkaZyD-3Yg7p7hRh2xtfykkaJ7mMpLNIrf1OO2nH8vb6am4S_YVBdrp_1PRZx-9rzghGQ0CFSRJJf1EpDlzLYA')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Sports Wear</div>
                </Link>

                {/* 4 */}
                <Link to="/WorkWear" className="card-link" role="listitem" aria-label="Work Wear">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfngB8DpcpJrGERfTy0I968wRSgY_ffwdO-pJUjyAATc61IMfJ9LcFmDIJtYAb0ljtZiQzTCEhWvW1OjnpyyoIzf3V6itQuJpABzRIONHrKAICdkl1XczyqhmNDT9pIsNns2aFA-3T3xmsOArtxa-EldCWazt5I9TNkUsm4FSr4PeCT70YmjZ7c6DtAKkK5lziLcJCpAE0W0CdwmyFJPJGXP4yZlI2izg3HF0CFNqjFFRRFSRyE23dgPlSMILU1yJlOXN6qAK4Ipg')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Work Wear</div>
                </Link>

                {/* 5 */}
                <Link to="/Essentials" className="card-link" role="listitem" aria-label="Essentials">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQ536pM2tgAkOCgK6W_V0qlTp4PoiOSj8vWiyUORWM0VD-6y7pRMQLxzZTIt3k-3RhNLHXRfJs6Dj-UY1b5CWgKSi5SuR7QY1arWVAIYg7T5LxXGla5yMM8zjJk71-7BHhqUeo4F6Z2m4umxwwbK23xyfnreZxe6tVl2qxFVIPdI_Au7uZgevKJ3RWlfDRoYYSKh3MAi8T-euZgHAqognO2Sm5Gs-EanIadli289DtxigCxvuLIfTOWdGHnVqY4bOde6DGJ33wYms')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Essentials</div>
                </Link>
              </div>
              <button className="arrow-btn right" aria-label="Scroll right" onClick={() => { const el = scrollRef.current; if (el) el.scrollBy({ left: 360, behavior: 'smooth' }); }}>&rarr;</button>
            </div>
          </div>
        </main>

        {/* section 1 */}
        <section>
          <div className="box">
            <h1 className="tagline">Trending Now</h1>

            <div className="mainContainer">
              {TRENDING_PRODUCTS.map((product) => (
                <div
                  key={product.title}
                  className="card"
                  onClick={() => navigate('/ProdLanding', { state: { product } })}
                  style={{ cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate('/ProdLanding', { state: { product } })}
                >
                  <div className="trending-badge">{product.badge}</div>
                  <img src={product.image} alt={product.title} />
                  <h1>{product.title}</h1>
                  <p>{product.price} <span id="strikethrough">{product.oldPrice}</span></p>
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

export default Men;
