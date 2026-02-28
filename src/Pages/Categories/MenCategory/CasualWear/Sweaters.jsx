import Navbar from '../../../../Components/Navbar';
import Footer from '../../../../Components/Footer';
import FilterDropdown from '../../../../Components/FilterDropdown';
import './Sweaters.css';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/e7fd39f0-886f-479e-ab3a-3c1064fde206.png', label: 'Mock neck' },
  { id: 2, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/d9514ad6-bb42-4c6c-837a-4cfe797bb314.png', label: 'V-Neck' },
  { id: 3, image: 'https://i.pinimg.com/1200x/53/2d/da/532dda866af4943b687d40e4fdffadea.jpg', label: 'High Neck' },
  { id: 4, image: 'https://i.pinimg.com/736x/0a/48/1a/0a481adeacc55d82ac0c249468d51cea.jpg', label: 'Solid' },
  { id: 5, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/290702c2-e71d-4467-b2bc-b029c3e5d92d.png', label: 'Cardigan' },
  { id: 6, image: 'https://i.pinimg.com/1200x/2c/df/86/2cdf860a232db0a338b427ed5b9c0e5d.jpg', label: 'Pullover' },
  { id: 7, image: 'https://i.pinimg.com/1200x/92/ca/70/92ca70c7605ec9d02572aa5d6fddae7f.jpg', label: 'Vest' },
  { id: 8, image: 'https://i.pinimg.com/1200x/db/64/22/db6422c9eca82b1d8fd73e78fb01185d.jpg', label: 'Shirt Collar' },
  { id: 9, image: 'https://i.pinimg.com/736x/86/be/90/86be90549bb2cc28cbc3a07e14e85c26.jpg', label: 'Striped' },
  { id: 10, image: 'https://i.pinimg.com/1200x/2c/df/86/2cdf860a232db0a338b427ed5b9c0e5d.jpg', label: 'Printed' },
  { id: 11, image: 'https://i.pinimg.com/1200x/92/ca/70/92ca70c7605ec9d02572aa5d6fddae7f.jpg', label: 'Sleeveless' },
  { id: 12, image: 'https://i.pinimg.com/1200x/db/64/22/db6422c9eca82b1d8fd73e78fb01185d.jpg', label: 'Turtle Neck' },
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

const Index = () => {
  const navigate = useNavigate();
  const [sortLabel, setSortLabel] = useState('Featured');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const carouselRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  // Filter options
  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
    { label: 'X-Large', value: 'xlarge' }
  ];

  const colorOptions = [
    { label: 'Black', value: 'black' },
    { label: 'Gray', value: 'gray' },
    { label: 'Navy', value: 'navy' },
    { label: 'Red', value: 'red' }
  ];

  const priceOptions = [
    { label: 'Rs.0 - Rs.1000', value: '0-1000' },
    { label: 'Rs.1000 - Rs.5000', value: '1000-5000' },
    { label: 'Rs.5000+', value: '5000+' }
  ];

  const sortOptions = [
    { label: 'Featured', value: 'Featured' },
    { label: 'Newest', value: 'Newest' },
    { label: 'Price: Low to High', value: 'Price: Low to High' },
    { label: 'Price: High to Low', value: 'Price: High to Low' }
  ];

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
                <a href="/CasualWear">Casual Wear</a>
                <span className="sep">/</span>
                <span>Sweaters</span>
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
            <h1 className="title">Sweaters</h1>

            <div className="controls" id="controls">
              <FilterDropdown
                label="Size"
                options={sizeOptions}
                selectedValue={selectedSize}
                onSelect={setSelectedSize}
              />
              <FilterDropdown
                label="Color"
                options={colorOptions}
                selectedValue={selectedColor}
                onSelect={setSelectedColor}
              />
              <FilterDropdown
                label="Price"
                options={priceOptions}
                selectedValue={selectedPrice}
                onSelect={setSelectedPrice}
              />
              <FilterDropdown
                label={`Sort by: ${sortLabel}`}
                options={sortOptions}
                selectedValue={sortLabel}
                onSelect={handleSortSelect}
                isSort={true}
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

export default Index;