import Navbar from '../../../../Components/Navbar';
import Footer from '../../../../Components/Footer';
import FilterDropdown from '../../../../Components/FilterDropdown';

import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, image: 'https://media.istockphoto.com/id/2172528926/photo/sexy-girl-in-red-dress-beautiful-slim-model-in-silk-spaghetti-strap-gown-fashion-woman-over.jpg?s=612x612&w=0&k=20&c=XfUMOLUqR4C_O6dTMQpTeZKuMtzNc4xMpaHdUAc2iZQ=', label: 'Designer saree' },
  { id: 2, image: 'https://images.unsplash.com/photo-1673936993367-b7cd74f26da5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBhJTIwbGluZSUyMGRyZXNzfGVufDB8fDB8fHww', label: 'Designer lehengas' },
  { id: 3, image: 'https://images.unsplash.com/photo-1644846146183-1539a55de064?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoZWF0aCUyMGRyZXNzfGVufDB8fDB8fHww', label: 'Designer kurta sets' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1675107357990-b12bc39e95c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d3JhcCUyMGRyZXNzfGVufDB8fDB8fHww', label: 'Designer anarkali' },
  { id: 5, image: 'https://images.unsplash.com/photo-1759992878336-a5dd342ea245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1heGklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3Ds://user-gen-media-assets.s3.amazonaws.com/seedream_images/6374feb2-ae27-415e-a08b-6b698e2e0196.png', label: 'Designer gowns(ethnic)' },
  { id: 6, image: 'https://images.unsplash.com/photo-1762154057377-cc9d3dd6900c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pZGklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D', label: 'Cape style' },
  { id: 7, image: 'https://plus.unsplash.com/premium_photo-1727427850318-35cb18b7836b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1pbmklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D', label: 'Bridal couture' },
  { id: 8, image: 'https://plus.unsplash.com/premium_photo-1664372388015-ec443ab9db68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnQlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D', label: 'Fusion designer wear' },
  { id: 9, image: 'https://images.unsplash.com/photo-1666933545854-7e556d05faf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNrYXRlciUyMGRyZXNzfGVufDB8fDB8fHww', label: 'Jacket style' },
  { id: 10, image: 'https://media.istockphoto.com/id/1709916570/photo/sitting-on-stairs.jpg?s=612x612&w=0&k=20&c=sZ07vaQjYB7siH5dFaVWxmZdbdBB0fhSASMoilUuLXI=', label: 'Ruffle & layered' },
  { id: 11, image: 'https://media.istockphoto.com/id/1699038012/photo/young-beautiful-woman-in-summer-dress-standing-against-old-door.jpg?s=612x612&w=0&k=20&c=ktXPCEzCJhe2tHqXvxrvjiXpdUbTqazXD1sNbzyvnDU=', label: 'Pre-draped' },
  { id: 12, image: 'https://media.istockphoto.com/id/2172528926/photo/sexy-girl-in-red-dress-beautiful-slim-model-in-silk-spaghetti-strap-gown-fashion-woman-over.jpg?s=612x612&w=0&k=20&c=XfUMOLUqR4C_O6dTMQpTeZKuMtzNc4xMpaHdUAc2iZQ=', label: 'High-slit designer kurtas' },
  { id: 13, image: 'https://images.unsplash.com/photo-1673936993367-b7cd74f26da5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBhJTIwbGluZSUyMGRyZXNzfGVufDB8fDB8fHww', label: 'Handcrafted designer pieces' },
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

const Gowns = () => {
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
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/Women">Women</Link>
                <span className="sep">/</span>
                <Link to="/EthnicWear">Ethnic Wear</Link>
                <span className="sep">/</span>
                <span>Designer Wear</span>
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
            <h1 className="title">Designer Wear </h1>

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

export default Gowns;
