import Navbar from '../../../../Components/Navbar';
import Footer from '../../../../Components/Footer';
import FilterDropdown from '../../../../Components/FilterDropdown';
import './Jackets.css';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const sizeOptions = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
  { label: 'X-Large', value: 'xlarge' },
];

const colorOptions = [
  { label: 'Black', value: 'black' },
  { label: 'Gray', value: 'gray' },
  { label: 'Navy', value: 'navy' },
  { label: 'Red', value: 'red' },
];

const priceOptions = [
  { label: 'Rs.0 - Rs.1000', value: '0-1000' },
  { label: 'Rs.1000 - Rs.5000', value: '1000-5000' },
  { label: 'Rs.5000+', value: '5000+' },
];

const sortOptions = [
  { label: 'Featured', value: 'Featured' },
  { label: 'Newest', value: 'Newest' },
  { label: 'Price: Low to High', value: 'Price: Low to High' },
  { label: 'Price: High to Low', value: 'Price: High to Low' },
];

const categories = [
  { id: 1, image: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/4a1194a5-a695-4255-9dea-0be5c4ddf9ee.png', label: 'Solid' },
  { id: 2, image: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/7c932d5e-e6ba-40a6-93b9-c9d97bfbbca6.png', label: 'Printed' },
  { id: 3, image: 'https://i.pinimg.com/1200x/53/2d/da/532dda866af4943b687d40e4fdffadea.jpg', label: 'Embroidered' },
  { id: 4, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/9e399b15-f65d-43ae-bf1a-ce520af2008b.png', label: 'Denim' },
  { id: 5, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/78f3b512-af6a-4906-aef6-85f27ccc28a8.png', label: 'Bomber' },
  { id: 6, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/0eb6e200-908f-4a0d-85d4-3c89615343d5.png', label: 'Oversized' },
  { id: 7, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/608bb9b3-a69c-4365-8927-7367094c7940.png', label: 'Lightweight' },
  { id: 8, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/08995762-077a-4a0e-82c4-5eb46f25b6bf.png', label: 'Varsity jacket' },
  { id: 9, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/85ec80b0-73d2-4e75-aaed-89559db96bf0.png', label: 'Sports' },
  { id: 10, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/462f2cb1-b190-434c-8c28-bd3f9770c5f9.png', label: 'Graphic jacket' },
  { id: 11, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/88aad30d-b4e5-4185-b2ea-5338ec95169d.png', label: 'Typography' },
  { id: 12, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/db7e1db1-9706-4ead-a0ea-d5ce05a1d8a0.png', label: 'Tailored' },
  { id: 13, image: 'https://user-gen-media-assets.s3.amazonaws.com/gemini_images/ea3f2390-80ab-40eb-8e18-be07ad318717.png', label: 'Abstract' },
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
                <span>Jackets</span>
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
            <h1 className="title">Jackets</h1>

            <div className="controls">
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