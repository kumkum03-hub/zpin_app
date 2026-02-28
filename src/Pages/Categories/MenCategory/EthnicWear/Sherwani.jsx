import Navbar from '../../../../Components/Navbar';
import Footer from '../../../../Components/Footer';
import FilterDropdown from '../../../../Components/FilterDropdown';
import './Sherwani.css';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop', label: 'Achkan Sherwani' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop', label: 'Indo-western shervani' },
  { id: 3, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', label: 'Jodhpuri shervani' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', label: 'Angrakha shervani' },
  { id: 5, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop', label: 'anarkali shervani' },
  { id: 6, image: 'https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop', label: 'jacket style sherwani' },
  { id: 7, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop', label: 'Printed sherwani' },
  { id: 8, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop', label: 'embroidered shervani' },
  { id: 9, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', label: 'Velvet Shervani' },
  { id: 10, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', label: 'Designer sherwani' },
];

const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop', title: 'Achkan Sherwani', price: '₹ 2999' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop', title: 'Indo-western Shervani', price: '₹ 3499' },
  { id: 3, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', title: 'Jodhpuri Shervani', price: '₹ 2799' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', title: 'Angrakha Shervani', price: '₹ 3199' },
  { id: 5, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop', title: 'Anarkali Shervani', price: '₹ 2899' },
  { id: 6, image: 'https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop', title: 'Jacket Style Sherwani', price: '₹ 3799' },
  { id: 7, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', title: 'Printed Sherwani', price: '₹ 2599' },
  { id: 8, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', title: 'Embroidered Shervani', price: '₹ 4199' },
  { id: 9, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop', title: 'Velvet Shervani', price: '₹ 4599' },
  { id: 10, image: 'https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop', title: 'Designer Sherwani', price: '₹ 5999' },
  { id: 11, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', title: 'Premium Sherwani', price: '₹ 3999' },
  { id: 12, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', title: 'Royal Sherwani', price: '₹ 6999' },
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



const Sherwani = () => {
  const navigate = useNavigate();
  const [sortLabel, setSortLabel] = useState('Featured');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const carouselRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const handleSortSelect = (value) => {
    setSortLabel(value);
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
                <span>Sherwani</span>
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
            <h1 className="title">Sherwani</h1>

            <div className="controls" id="controls" ref={controlsRef}>
              <FilterDropdown
                label="Size"
                options={sizeOptions}
                selected={selectedSize}
                onSelect={setSelectedSize}
              />
              <FilterDropdown
                label="Color"
                options={colorOptions}
                selected={selectedColor}
                onSelect={setSelectedColor}
              />
              <FilterDropdown
                label="Price"
                options={priceOptions}
                selected={selectedPrice}
                onSelect={setSelectedPrice}
              />
              <FilterDropdown
                label={`Sort by: ${sortLabel}`}
                options={sortOptions}
                selected={sortLabel}
                onSelect={handleSortSelect}
              />
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
                  onClick={() => navigate('/ProdLanding', { state: { product } })}
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

export default Sherwani;
