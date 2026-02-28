import Navbar from '../../../../Components/Navbar';
import Footer from '../../../../Components/Footer';
import './KurtaSet.css';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop', title: 'Classic Cotton Kurta Set', price: '₹ 1899' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop', title: 'Silk Kurta Pajama Set', price: '₹ 2499' },
  { id: 3, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', title: 'Linen Kurta Set', price: '₹ 2199' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', title: 'Embroidered Kurta Set', price: '₹ 1999' },
  { id: 5, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop', title: 'Festive Kurta Set', price: '₹ 2299' },
  { id: 6, image: 'https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop', title: 'Printed Kurta Set', price: '₹ 1799' },
  { id: 7, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', title: 'Designer Kurta Set', price: '₹ 2699' },
  { id: 8, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', title: 'Wedding Kurta Set', price: '₹ 2899' },
  { id: 9, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop', title: 'Casual Kurta Set', price: '₹ 2399' },
  { id: 10, image: 'https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop', title: 'Premium Kurta Set', price: '₹ 3199' },
  { id: 11, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop', title: 'Traditional Kurta Set', price: '₹ 3499' },
  { id: 12, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop', title: 'Luxury Kurta Set', price: '₹ 3999' },
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

const KurtaSet = () => {
  const navigate = useNavigate();
  const [sortLabel, setSortLabel] = useState('Featured');
  const [openDropdown, setOpenDropdown] = useState(null);
  const controlsRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSortSelect = (value) => {
    setSortLabel(value);
    setOpenDropdown(null);
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

  return (
    <>
      <Navbar />
      
      <div className="layout-container">
        <main className="site-main" role="main" id="category">
          <div className="layout-content">
            <div className="page-header">
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/Men">Men</Link>
                <span className="sep">/</span>
                <Link to="/EthnicWear">Categories</Link>
                <span className="sep">/</span>
                <Link to="/EthnicWear">Ethnic Wear</Link>
                <span className="sep">/</span>
                <Link to="/kurta-set">Kurta Set</Link>
              </div>
            </div>
          </div>
        </main>

        <section className="container">
          <div className="page-header">
            <h1 className="title">Kurta Set</h1>

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
                  <a href="#">White</a>
                  <a href="#">Cream</a>
                  <a href="#">Blue</a>
                  <a href="#">Pink</a>
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
                  <a href="#">Rs.1500 - Rs.3000</a>
                  <a href="#">Rs.3000 - Rs.6000</a>
                  <a href="#">Rs.6000+</a>
                </div>
              </div>

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

export default KurtaSet;