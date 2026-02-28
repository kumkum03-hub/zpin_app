import Navbar from '../../../../Components/Navbar';
import Footer from '../../../../Components/Footer';
import './Briefs.css';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, image: 'https://images.unsplash.com/photo-1635892465062-de290f48da4d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Innerwear Vests' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1697753121099-f2988a868ecf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Trunk' },
  { id: 3, image: 'https://images.unsplash.com/photo-1630435663442-21d8a3acc431?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Boxers' },
  { id: 4, image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Thermal Tops' },
  { id: 5, image: 'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Thermal Bottoms' },
  { id: 6, image: 'https://images.unsplash.com/photo-1661352754488-4776516fcf31?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Thermal Set' },
  { id: 7, image: 'https://images.unsplash.com/photo-1617953644310-e690da9be982?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Shapewear' },
];

const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1635892465062-de290f48da4d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Cotton Briefs', price: '₹ 299' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1697753121099-f2988a868ecf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Comfort Fit Briefs', price: '₹ 349' },
  { id: 3, image: 'https://images.unsplash.com/photo-1630435663442-21d8a3acc431?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Premium Briefs', price: '₹ 399' },
  { id: 4, image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Seamless Briefs', price: '₹ 449' },
  { id: 5, image: 'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Moisture-Wicking Briefs', price: '₹ 379' },
  { id: 6, image: 'https://images.unsplash.com/photo-1661352754488-4776516fcf31?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Classic Briefs', price: '₹ 279' },
  { id: 7, image: 'https://images.unsplash.com/photo-1617953644310-e690da9be982?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Stretch Briefs', price: '₹ 329' },
];

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

const Index = () => {
  const navigate = useNavigate();
  const [sortLabel, setSortLabel] = useState('Featured');
  const [openDropdown, setOpenDropdown] = useState(null);
  const controlsRef = useRef(null);
  const carouselRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

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

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
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
        <main className="site-main" role="main" id="category">
          <div className="layout-content">
            <div className="page-header">
              <h1>Browse Categories</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/Men">Men</Link>
                <span className="sep">/</span>
                <Link to="/Essentials">Essentials</Link>
                <span className="sep">/</span>
                <span>Briefs</span>
              </div>
            </div>

            <div className="grid" role="list">
              <div className="carousel-container">
                <button 
                  className={`scroll-btn left ${!showLeftBtn ? 'hidden' : ''}`} 
                  onClick={goLeft}
                >
                  &#10094;
                </button>
                
                <div className="carousel" id="carousel" ref={carouselRef}>
                  {categories.map((category) => (
                    <a 
                      key={category.id} 
                      className="card-link" 
                      href="#" 
                      role="listitem"
                    >
                      <div 
                        className="card-media" 
                        style={{ backgroundImage: `url('${category.image}')` }}
                      >
                        <div className="card-overlay">Shop Now</div>
                      </div>
                      <div className="card-label">{category.label}</div>
                    </a>
                  ))}
                </div>

                <button 
                  className={`scroll-btn right ${!showRightBtn ? 'hidden' : ''}`} 
                  onClick={goRight}
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        </main>

        <section className="container">
          <div className="page-header">
            <h1 className="title">Briefs</h1>

            <div className="controls" id="controls" ref={controlsRef}>
              <div style={{ position: 'relative' }}>
                <button 
                  className="btn" 
                  onClick={(e) => { e.stopPropagation(); toggleDropdown('size'); }}
                >
                  Size <span style={{ transform: 'translateY(1px)' }}>▼</span>
                </button>
                <div className={`dropdown ${openDropdown === 'size' ? 'open' : ''}`}>
                  <a href="#">Small</a>
                  <a href="#">Medium</a>
                  <a href="#">Large</a>
                  <a href="#">X-Large</a>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <button 
                  className="btn" 
                  onClick={(e) => { e.stopPropagation(); toggleDropdown('color'); }}
                >
                  Color <span style={{ transform: 'translateY(1px)' }}>▼</span>
                </button>
                <div className={`dropdown ${openDropdown === 'color' ? 'open' : ''}`}>
                  <a href="#">Black</a>
                  <a href="#">Gray</a>
                  <a href="#">Navy</a>
                  <a href="#">Red</a>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <button 
                  className="btn" 
                  onClick={(e) => { e.stopPropagation(); toggleDropdown('price'); }}
                >
                  Price <span style={{ transform: 'translateY(1px)' }}>▼</span>
                </button>
                <div className={`dropdown ${openDropdown === 'price' ? 'open' : ''}`}>
                  <a href="#">Rs.0 - Rs.1000</a>
                  <a href="#">Rs.1000 - Rs.5000</a>
                  <a href="#">Rs.5000+</a>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <button 
                  className="sort-btn" 
                  onClick={(e) => { e.stopPropagation(); toggleDropdown('sort'); }}
                >
                  Sort by: <strong style={{ marginLeft: '6px', fontWeight: 700 }}>{sortLabel}</strong>
                  <span style={{ transform: 'translateY(1px)' }}>▼</span>
                </button>
                <div className={`dropdown ${openDropdown === 'sort' ? 'open' : ''}`}>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleSortSelect('Featured'); }}>Featured</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleSortSelect('Newest'); }}>Newest</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleSortSelect('Price: Low to High'); }}>Price: Low to High</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleSortSelect('Price: High to Low'); }}>Price: High to Low</a>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="grid products">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  onClick={() => navigate('/ProdLanding', { state: { product } })}
                />
              ))}
            </div>
          </section>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;