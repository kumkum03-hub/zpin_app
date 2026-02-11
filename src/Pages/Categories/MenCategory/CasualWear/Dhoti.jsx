import Navbar from '../../../../Components/Navbar';
import Footer from '../../../../Components/Footer';
import './Dhoti.css';
import { useRef, useState, useEffect } from 'react';

const categories = [
  { id: 1, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop', label: 'Cotton' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop', label: 'silk' },
  { id: 3, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', label: 'festive' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', label: 'partywear' },
  { id: 5, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop', label: 'printed' },
  { id: 6, image: 'https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop', label: 'patterned' },
  { id: 7, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop', label: 'designer' },
  { id: 8, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop', label: 'dhoti with kurta set' },
  { id: 9, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', label: 'ready to wear/ draped style' },
  { id: 10, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', label: 'Handloom/ traditional dhoti' },
];

const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop', title: 'Cotton Dhoti', price: '₹ 899' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop', title: 'Silk Dhoti', price: '₹ 1599' },
  { id: 3, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', title: 'Festive Dhoti', price: '₹ 1299' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', title: 'Party Wear Dhoti', price: '₹ 1799' },
  { id: 5, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop', title: 'Printed Dhoti', price: '₹ 999' },
  { id: 6, image: 'https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop', title: 'Patterned Dhoti', price: '₹ 1199' },
  { id: 7, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', title: 'Designer Dhoti', price: '₹ 2199' },
  { id: 8, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', title: 'Dhoti with Kurta Set', price: '₹ 2499' },
  { id: 9, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop', title: 'Ready to Wear Dhoti', price: '₹ 1399' },
  { id: 10, image: 'https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop', title: 'Handloom Traditional Dhoti', price: '₹ 1899' },
  { id: 11, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', title: 'Premium Dhoti', price: '₹ 2799' },
  { id: 12, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', title: 'Luxury Dhoti', price: '₹ 3199' },
];

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



const Dhoti = () => {
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
        {/* MAIN */}
        <main className="site-main" role="main" id="category">
          <div className="layout-content">
            <div className="page-header">
              <h1>Browse Categories</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">/</span>
                <a href="/EthnicWear">Ethnic Wear</a>
                <span className="sep">/</span>
                <span>Dhoti</span>
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

        {/* Products Section */}
        <section className="container">
          <div className="page-header">
            <h1 className="title">Dhoti</h1>

            <div className="controls" id="controls" ref={controlsRef}>
              {/* Size dropdown */}
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

              {/* Color dropdown */}
              <div style={{ position: 'relative' }}>
                <button 
                  className="btn" 
                  onClick={(e) => { e.stopPropagation(); toggleDropdown('color'); }}
                >
                  Color <span style={{ transform: 'translateY(1px)' }}>▼</span>
                </button>
                <div className={`dropdown ${openDropdown === 'color' ? 'open' : ''}`}>
                  <a href="#">White</a>
                  <a href="#">Cream</a>
                  <a href="#">Gold</a>
                  <a href="#">Maroon</a>
                </div>
              </div>

              {/* Price dropdown */}
              <div style={{ position: 'relative' }}>
                <button 
                  className="btn" 
                  onClick={(e) => { e.stopPropagation(); toggleDropdown('price'); }}
                >
                  Price <span style={{ transform: 'translateY(1px)' }}>▼</span>
                </button>
                <div className={`dropdown ${openDropdown === 'price' ? 'open' : ''}`}>
                  <a href="#">Rs.500 - Rs.1500</a>
                  <a href="#">Rs.1500 - Rs.3000</a>
                  <a href="#">Rs.3000+</a>
                </div>
              </div>

              {/* Sort dropdown */}
              <div style={{ position: 'relative' }}>
                <button 
                  className="sort-btn" 
                  id="sortButton"
                  onClick={(e) => { e.stopPropagation(); toggleDropdown('sort'); }}
                >
                  Sort by: <strong id="sortLabel" style={{ marginLeft: '6px', fontWeight: 700 }}>{sortLabel}</strong>
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

          {/* Products grid */}
          <section>
            <div className="grid products">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>
          </section>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Dhoti;
