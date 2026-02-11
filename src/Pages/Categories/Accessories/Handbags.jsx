import React, { useRef, useState, useEffect } from "react";
import "./Handbags.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import FilterDropdown from "../../../Components/FilterDropdown";
import ProductCard from "../../../Components/ProductCard";




const Handbags = () => {

  const scrollRef = useRef(null);
  const [sortLabel, setSortLabel] = useState('Featured');
  const [openDropdown, setOpenDropdown] = useState(null);
  const controlsRef = useRef(null);
  const carouselRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  // Filter options
  const sizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'xl', label: 'X-Large' }
  ];

  const colorOptions = [
    { value: 'black', label: 'Black' },
    { value: 'gray', label: 'Gray' },
    { value: 'navy', label: 'Navy' },
    { value: 'red', label: 'Red' }
  ];

  const priceOptions = [
    { value: '0-1000', label: 'Rs.0 - Rs.1000' },
    { value: '1000-5000', label: 'Rs.1000 - Rs.5000' },
    { value: '5000+', label: 'Rs.5000+' }
  ];

  const sortOptions = [
    { value: 'Featured', label: 'Featured' },
    { value: 'Newest', label: 'Newest' },
    { value: 'Price: Low to High', label: 'Price: Low to High' },
    { value: 'Price: High to Low', label: 'Price: High to Low' }
  ];

  const products = [
    { id: 1, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'High Heels', price: '₹ 1599' },
    { id: 2, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Comfortable Flats', price: '₹ 899' },
    { id: 3, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Casual Sneakers', price: '₹ 1299' },
    { id: 4, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Beach Flip Flops', price: '₹ 499' },
    { id: 5, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Running Sports Shoes', price: '₹ 1999' },
    { id: 6, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Stylish Boots', price: '₹ 2499' },
    { id: 7, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Summer Sandals', price: '₹ 799' },
    { id: 8, image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Formal Oxfords', price: '₹ 1799' },
    { id: 9, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Party Heels', price: '₹ 2199' },
    { id: 10, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Classic Crocs', price: '₹ 999' },
    { id: 11, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Ballet Flats', price: '₹ 699' },
    { id: 12, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Walking Shoes', price: '₹ 1499' },
  ];

  const handleSortChange = (value) => {
    setSortLabel(value);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSortSelect = (value) => {
    setSortLabel(value);
    setOpenDropdown(null);
  };

  const getCardWidth = () => {
    if (!carouselRef.current) return 300;
    const card = carouselRef.current.querySelector('.card-link');
    return card ? card.offsetWidth + 16 : 300;
  };

  const goLeft = () => {
    if (!carouselRef.current) return;
    const step = getCardWidth();
    carouselRef.current.scrollBy({ left: -step, behavior: 'smooth' });
    setTimeout(updateButtons, 200);
  };

  const goRight = () => {
    if (!carouselRef.current) return;
    const step = getCardWidth();
    carouselRef.current.scrollBy({ left: step, behavior: 'smooth' });
    setTimeout(updateButtons, 200);
  };

  const updateButtons = () => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    setShowLeftBtn(carousel.scrollLeft > 0);
    setShowRightBtn(carousel.scrollWidth - carousel.scrollLeft > carousel.clientWidth + 2);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (controlsRef.current && !controlsRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    updateButtons();

    return () => {
      carousel.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, []);

  return (
    <>
     <Navbar />

      <div className="layout-container">

        <main className="site-main" role="main">
          <div className="layout-content">
            <div className="page-header">
              <h1>Handbags Collection</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span>Handbags</span>
              </div>
            </div>

            {/* Horizontal scrollable categories with arrows */}
            <div className="category-row">
              <button className="arrow-btn left" aria-label="Scroll left" onClick={() => { const el = scrollRef.current; if (el) el.scrollBy({ left: -360, behavior: 'smooth' }); }}>&larr;</button>
              <div className="category-scroll" ref={scrollRef} role="list">
                {/* 1 */}
                <Link to="/Handbags" className="card-link" role="listitem" aria-label="Handbags">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCh3Ve9Kv3XJUbNqWzlN6SjYV-TehCuRrlvYrTCtcd-ejlWs7MkZewHJkOVmLMLHdXH3iE8mbCOGbumeWhvp4sCfU09M2ICxnMszynjiJr8sjOG_JOa8Y8CVH8QaSgtVyg477O_vdjoUQvwHANktd6YONXKNWB61zSilhgNXVCGN0wYbb3Bk191n8YhgsOM0R_GDc4WqK44kB9mJbq5L-XQH_1Q4JsKD7P-6U9IrmUCR6muYuJQhuUQQoc965rBXrH7tP1qW8bhrus')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Handbags</div>
                </Link>

                {/* 2 */}
                <Link to="/Backpacks" className="card-link" role="listitem" aria-label="Backpacks">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzO3O3cByBmrz0aCVo5z_vSM78414Mu74WS1f1acKkUmfjRQBJuPfV-J_-2jxhNBbl54-XTHILTx2bk7KoTx70hAmE_aDlxAZagSVBNeQ1mWzkNGZUHdgzK4uXi9-iT5GxJlszwDOc1CXyY5IlejfKeF5j2mSndVF1RTJMFrOJu0l4afvPGrK6-pEkB5pYpiG5y-KYgq5z2NmQwQXKqlWWBMOCabhhPnvSMdPux-UN3VrsfAx1ADkZYt2zvnw4AHf3DhQvvsVB-JQ')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Backpacks</div>
                </Link>

                {/* 3 */}
                <Link to="/Laptop-Bags" className="card-link" role="listitem" aria-label="Laptop Bags">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbqkTAk1xn2-YROEVy8Px_QRQkmz-lB3RQubj2YGtzSzj3dNdKcLzafBPXSgkw5akm81eCI19Olj4dU485igCe0GDysNaVYEH9jSXB1aElK6euLJpSdBcgmcDz2WbNwJzX_wQkMPF1KMIKYDBNLAIsKtiYr-gaViJ7oDXFYMqoIgbobDKUvbQJCBkaZyD-3Yg7p7hRh2xtfykkaJ7mMpLNIrf1OO2nH8vb6am4S_YVBdrp_1PRZx-9rzghGQ0CFSRJJf1EpDlzLYA')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Laptop Bags</div>
                </Link>

                {/* 4 */}
                <Link to="/School-Bags" className="card-link" role="listitem" aria-label="School bags">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfngB8DpcpJrGERfTy0I968wRSgY_ffwdO-pJUjyAATc61IMfJ9LcFmDIJtYAb0ljtZiQzTCEhWvW1OjnpyyoIzf3V6itQuJpABzRIONHrKAICdkl1XczyqhmNDT9pIsNns2aFA-3T3xmsOArtxa-EldCWazt5I9TNkUsm4FSr4PeCT70YmjZ7c6DtAKkK5lziLcJCpAE0W0CdwmyFJPJGXP4yZlI2izg3HF0CFNqjFFRRFSRyE23dgPlSMILU1yJlOXN6qAK4Ipg')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">School bags</div>
                </Link>

                {/* 5 */}
                <Link to="/Travel-Gym-Bags" className="card-link" role="listitem" aria-label="Travel/Gym Bags">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQ536pM2tgAkOCgK6W_V0qlTp4PoiOSj8vWiyUORWM0VD-6y7pRMQLxzZTIt3k-3RhNLHXRfJs6Dj-UY1b5CWgKSi5SuR7QY1arWVAIYg7T5LxXGla5yMM8zjJk71-7BHhqUeo4F6Z2m4umxwwbK23xyfnreZxe6tVl2qxFVIPdI_Au7uZgevKJ3RWlfDRoYYSKh3MAi8T-euZgHAqognO2Sm5Gs-EanIadli289DtxigCxvuLIfTOWdGHnVqY4bOde6DGJ33wYms')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Travel/Gym Bags</div>
                </Link>

                {/* 6 */}
                <Link to="/Sling-Clutch-Bags" className="card-link" role="listitem" aria-label="Sling & Clutch Bags">
                  <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQ536pM2tgAkOCgK6W_V0qlTp4PoiOSj8vWiyUORWM0VD-6y7pRMQLxzZTIt3k-3RhNLHXRfJs6Dj-UY1b5CWgKSi5SuR7QY1arWVAIYg7T5LxXGla5yMM8zjJk71-7BHhqUeo4F6Z2m4umxwwbK23xyfnreZxe6tVl2qxFVIPdI_Au7uZgevKJ3RWlfDRoYYSKh3MAi8T-euZgHAqognO2Sm5Gs-EanIadli289DtxigCxvuLIfTOWdGHnVqY4bOde6DGJ33wYms')` }}>
                    <div className="card-overlay">Shop Now</div>
                  </div>
                  <div className="card-label">Sling & Clutch Bags</div>
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

export default Handbags;
