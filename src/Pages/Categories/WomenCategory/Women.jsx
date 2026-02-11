import React, { useRef } from "react";
import "./Women.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";






const Women = () => {

  const scrollRef = useRef(null);

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
              <h1>Women's Collection</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span>Women</span>
              </div>
            </div>

            {/* Horizontal scrollable categories with arrows */}
            <div className="category-row">
              <button className="arrow-btn left" aria-label="Scroll left" onClick={() => { const el = scrollRef.current; if (el) el.scrollBy({ left: -360, behavior: 'smooth' }); }}>&larr;</button>
              <div className="category-scroll" ref={scrollRef} role="list">
                {/* 1 */}
                <Link to="/WesternWear" className="card-link" role="listitem" aria-label="Western Wear">
                  <div className="card-media" style={{ backgroundImage: `url('https://user-gen-media-assets.s3.amazonaws.com/gemini_images/c7f34576-ddb5-4fad-9854-2aa4dcabea90.png')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Western Wear</div>
                </Link>

                {/* 2 */}
                <Link to="/EthnicWear" className="card-link" role="listitem" aria-label="Bottoms">
                  <div className="card-media" style={{ backgroundImage: `url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/e5dbe7bc-4a81-465f-9cf5-bc57c2b0da48.png')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Ethnic Wear</div>
                </Link>

                {/* 3 */}
                <Link to="/Women/FusionWear" className="card-link" role="listitem" aria-label="Fusion Wear">
                  <div className="card-media" style={{ backgroundImage: `url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/9d2f67ce-bd4e-49f5-bc3e-9911d27a1e1b.png')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Fusion</div>
                </Link>

                {/* 4 */}
                <Link to="/Women/Essentials" className="card-link" role="listitem" aria-label="Essentials">
                  <div className="card-media" style={{ backgroundImage: `url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/8c0d9b33-2932-49d2-b4d2-453e3419247b.png')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Essentials</div>
                </Link>

                {/* 5 */}
                <Link to="/Women/SportsWear" className="card-link" role="listitem" aria-label="Sports Wear">
                  <div className="card-media" style={{ backgroundImage: `url('https://user-gen-media-assets.s3.amazonaws.com/seedream_images/d71d3689-6074-456f-b1ed-94f22961c5c0.png')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Sports Wear</div>
                </Link>
                {/* 6 */}
                <Link to="/Women/FootWear" className="card-link" role="listitem" aria-label="Footwear">
                  <div className="card-media" style={{ backgroundImage: `url('https://user-gen-media-assets.s3.amazonaws.com/gemini_images/1b16a538-596c-4dce-a202-2b70b5c6aaef.png')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Footwear</div>
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

              <div className="card">
                <div className="trending-badge">Trending</div>
                <img src="https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <h1>The Classic Crew <br />T-shirt</h1>
                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Trending</div>
                <img src="https://media.istockphoto.com/id/1203543686/photo/handsome-guy-with-hat-is-on-the-beach.jpg?s=2048x2048&w=is&k=20&c=FK4hxmKyWc4GoFVECC1c8j454xyud8sEXvI93mgnTfA=" />
                <h1>AeroFlow Training<br /> Shorts</h1>
                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Trending</div>
                <img src="https://media.istockphoto.com/id/176405965/photo/facing-the-day-with-a-smile.jpg?s=2048x2048&w=is&k=20&c=fdyEn--vvqROp-VyCU4yTrIM7PeETn5JsI_ETDzor1g=" />
                <h1>The Maverick <br />Slim-Fit Jeans</h1>
                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Trending</div>
                <img src="https://media.istockphoto.com/id/1614454660/photo/male-model-posing-in-green-kurta.jpg?s=2048x2048&w=is&k=20&c=8_ZS_379Dpg8dYNaYkDhcyDKwnksOyNMs9iJvg6e1Os=" />
                <h1>Emerald Fusion <br />Kurta Set</h1>
                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Highly-Rated</div>
                <img src="https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <h1>Urban Explorer <br /> Tee</h1>
                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Highly-Rated</div>
                <img src="https://plus.unsplash.com/premium_photo-1682096794344-88b07b13ef3c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <h1>Soft-Touch V-Neck <br />T-shirt</h1>
                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Highly-Rated</div>
                <img src="https://plus.unsplash.com/premium_photo-1710107446916-1b0c67a99042?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <h1>CloudStride <br />Running Sneakers</h1>
                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
              </div>

              <div className="card">
                <div className="trending-badge">Highly-Rated</div>
                <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <h1>A durable, classic <br />leather wallet</h1>
                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
              </div>

            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default Women;
