import Navbar from '../../../../Components/Navbar';
import Footer from '../../../../Components/Footer';
import FilterDropdown from '../../../../Components/FilterDropdown';
import ProductCard from '../../../../Components/ProductCard';
// import './Men-FootWear.css';

import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 3, image: 'https://images.unsplash.com/photo-1644846146183-1539a55de064?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoZWF0aCUyMGRyZXNzfGVufDB8fDB8fHww', label: 'Casual Shoes' },
  { id: 5, image: 'https://images.unsplash.com/photo-1759992878336-a5dd342ea245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1heGklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3Ds://user-gen-media-assets.s3.amazonaws.com/seedream_images/6374feb2-ae27-415e-a08b-6b698e2e0196.png', label: 'Sports Shoes' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1675107357990-b12bc39e95c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d3JhcCUyMGRyZXNzfGVufDB8fDB8fHww', label: 'Flip Flops' },
  { id: 7, image: 'https://plus.unsplash.com/premium_photo-1727427850318-35cb18b7836b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1pbmklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D', label: 'Sandals' },
  { id: 8, image: 'https://plus.unsplash.com/premium_photo-1664372388015-ec443ab9db68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnQlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D', label: 'Formal Shoes' },
  { id: 6, image: 'https://images.unsplash.com/photo-1762154057377-cc9d3dd6900c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pZGklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D', label: 'Boots' },
  { id: 2, image: 'https://images.unsplash.com/photo-1673936993367-b7cd74f26da5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBhJTIwbGluZSUyMGRyZXNzfGVufDB8fDB8fHww', label: 'Flats' },
  { id: 10, image: 'https://media.istockphoto.com/id/1709916570/photo/sitting-on-stairs.jpg?s=612x612&w=0&k=20&c=sZ07vaQjYB7siH5dFaVWxmZdbdBB0fhSASMoilUuLXI=', label: 'Crocs' },
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



const FootWear = () => {
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
                <Link to="/Men">Men</Link>
                <span className="sep">/</span>
                <span>FootWear</span>
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
            <h1 className="title">FootWear</h1>

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

export default FootWear;
