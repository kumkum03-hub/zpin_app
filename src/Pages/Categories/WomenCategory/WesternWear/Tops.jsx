import Navbar from '../../../../Components/Navbar';
import Footer from '../../../../Components/Footer';
import FilterDropdown from '../../../../Components/FilterDropdown';
import './Tops.css';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww', label: 'T-shirt' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1727943107098-a0fff32b9382?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvbWVuJTIwY3JvcCUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D', label: 'crop top' },
  { id: 3, image: 'https://plus.unsplash.com/premium_photo-1664478139186-1cbcfdfdbd87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwdGFuayUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D', label: 'tank top' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1725914369274-d02f702689d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVuJTIwY2FtaXNvbGUlMjB0b3B8ZW58MHx8MHx8fDA%3D', label: 'camisole top' },
  { id: 5, image: 'https://plus.unsplash.com/premium_photo-1691622500885-0f616b3f72f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHR1YmUlMjB0b3B8ZW58MHx8MHx8fDA%3D', label: 'tube top' },
  { id: 6, image: 'https://images.unsplash.com/photo-1577922087876-3563c607db32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0JTIwdG9wfGVufDB8fDB8fHww', label: 'shirt top' },
  { id: 7, image: 'https://images.unsplash.com/photo-1590588503756-08a4b2be5eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdvbWVuJTIwYmxvdXNlfGVufDB8fDB8fHww', label: 'blouse' },
  { id: 8, image: 'https://plus.unsplash.com/premium_photo-1726843237998-95c947a8f49a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVwbHVtJTIwdG9wfGVufDB8fDB8fHww', label: 'peplum top' },
  { id: 9, image: 'https://media.istockphoto.com/id/2180142954/photo/charming-woman-in-cozy-sweater-enjoying-autumn-nature-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=yaexTY0Z_6BV4WKuG7reL859kT4YYMphGYfG74dYXr0=', label: 'wrap top' },
  { id: 10, image: 'https://media.istockphoto.com/id/1125691944/photo/portrait-of-smiling-fashionable-woman-against-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=sVfa_Qc76JOUvM8E9E8Q2MOo1loEPddhep07jc0CVTU=', label: 'off shoulder top' },
  { id: 11, image: 'https://media.istockphoto.com/id/2180142954/photo/charming-woman-in-cozy-sweater-enjoying-autumn-nature-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=yaexTY0Z_6BV4WKuG7reL859kT4YYMphGYfG74dYXr0=', label: 'one shoulder top' },
  { id: 12, image: 'https://media.istockphoto.com/id/1469227682/photo/beautiful-young-woman-is-sitting-with-her-eyes-closed-on-coastal-cliffs-against-sunset.jpg?s=612x612&w=0&k=20&c=uU7T_KNqhGCmo1DSqXkgHITmK6e6T5Q_qjOahvxDkN8=', label: 'smocked top' },
  { id: 13, image: 'https://media.istockphoto.com/id/1459408199/photo/black-beauty.jpg?s=612x612&w=0&k=20&c=AFAM6rW7sEdOzJU3fS-Hm3diZzPFSls55ET9VZ1W5AE=', label: 'assymetrical top' },
  { id: 14, image: 'https://media.istockphoto.com/id/2173865248/photo/female-model-wearing-beige-cotton-shirt-and-smart-casual-black-tousers-fashion-studio-shot.jpg?s=612x612&w=0&k=20&c=xxFP5gUOW_OjLlctlRnjJEqjB-ybJbJ_HT6xz3zMojU=', label: 'v neck top' },
  { id: 15, image: 'https://media.istockphoto.com/id/823680340/photo/japanese-women-in-the-sea.jpg?s=612x612&w=0&k=20&c=BDIuIFF7EkbAijmC7aU79KThURh0StHsZtfoJBXGAWw=', label: 'tankini top' },
  { id: 16, image: 'https://images.unsplash.com/photo-1763844073320-6078a576d596?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFsdGVyJTIwbmVjayUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D', label: 'halter neck top' },
  { id: 17, image: 'https://media.istockphoto.com/id/2239963132/photo/unhappy-black-woman-with-sad-face-expression-in-beige-studio-background-frustration-unhappy.jpg?s=612x612&w=0&k=20&c=Oh9US9GYfOobTJqfhiEZ2M2H_rWU2uYGeSmCxZyXHCM=', label: 'high neck/turtle neck' },
  { id: 18, image: 'https://media.istockphoto.com/id/2241619913/photo/confident-young-woman-in-white-corset-top-and-ruffled-shorts-posing-on-sunny-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=c1K43Wi0nPDOEhx3F79pVUrKrz0IAedpQKf1Nl4ZB7E=', label: 'corset top' },
  { id: 19, image: 'https://media.istockphoto.com/id/1288466387/photo/a-beautiful-woman-standing-in-the-street-holding-her-smartphone.webp?a=1&b=1&s=612x612&w=0&k=20&c=n8Vv05bNrlHu-VOhfmXdvOm8core6jjSHNT3c55qI_4=', label: 'Blazers' },
];

const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Relaxed Fit Tee', price: '₹ 599' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Classic Denim Jeans', price: '₹ 899' },
  { id: 3, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Comfortable Jogger', price: '₹ 599' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Versatile Hoodie', price: '₹ 799' },
  { id: 5, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Everyday Sneakers', price: '₹ 699' },
  { id: 6, image: 'https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Casual Button-Down Shirt', price: '₹ 999' },
  { id: 7, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Comfortable Jogger', price: '₹ 599' },
  { id: 8, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Versatile Hoodie', price: '₹ 799' },
  { id: 9, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Everyday Sneakers', price: '₹ 699' },
  { id: 10, image: 'https://images.unsplash.com/photo-1688573156881-c6ae02ef0a32?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Casual Button-Down Shirt', price: '₹ 999' },
  { id: 11, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Comfortable Jogger', price: '₹ 599' },
  { id: 12, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Versatile Hoodie', price: '₹ 799' },
];

const ProductCard = ({ image, title, price, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card" onClick={onClick} style={{ cursor: 'pointer' }}>
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

const Tops = () => {
  const navigate = useNavigate();
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
        {/* MAIN */}
        <main className="site-main" role="main" id="category">
          <div className="layout-content">
            <div className="page-header">
              <h1>Browse Categories</h1>
              <div className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">/</span>
                <a href="/Women">Women</a>
                <span className="sep">/</span>
                <a href="/WesternWear">Western Wear</a>
                <span className="sep">/</span>
                <span>Tops</span>
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
            <h1 className="title">Tops</h1>

            <div className="controls" ref={controlsRef}>
              <FilterDropdown label="Size" options={sizeOptions} />
              <FilterDropdown label="Color" options={colorOptions} />
              <FilterDropdown label="Price" options={priceOptions} />
              <FilterDropdown
                label="Sort by"
                options={sortOptions}
                onSelect={handleSortChange}
                selectedValue={sortLabel}
                showSelectedInLabel={true}
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

export default Tops;
