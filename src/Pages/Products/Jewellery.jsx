import { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './Accessories.css';

import CategoryCarousel from '../../Components/CategoryCarousel';
import CategoryHeader from '../../Components/CategoryHeader';
import ProductsHeader from '../../Components/ProductsHeader';
import ProductsGrid from '../../Components/ProductsGrid';

// ================= DATA =================

const categories = [
  { id: 1, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338', label: 'Necklaces' },
  { id: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908', label: 'Earrings' },
  { id: 3, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d', label: 'Rings' },
  { id: 4, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d', label: 'Bracelets' },
  { id: 5, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338', label: 'Bangles' },
  { id: 6, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908', label: 'Anklets' },
];

const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338', title: 'Gold Chain Necklace', price: '₹ 2,999' },
  { id: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908', title: 'Diamond Stud Earrings', price: '₹ 4,599' },
  { id: 3, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d', title: 'Silver Ring Set', price: '₹ 1,899' },
  { id: 4, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d', title: 'Pearl Bracelet', price: '₹ 3,299' },
  { id: 5, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338', title: 'Traditional Bangles', price: '₹ 1,599' },
  { id: 6, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908', title: 'Crystal Drop Earrings', price: '₹ 2,199' },
  { id: 7, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d', title: 'Gold Anklet Chain', price: '₹ 1,799' },
  { id: 8, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338', title: 'Statement Necklace', price: '₹ 3,999' },
];

// ================= PAGE =================

const Jewellery = () => {
  const [sortLabel, setSortLabel] = useState('Featured');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
    { label: 'Adjustable', value: 'adjustable' },
  ];

  const colorOptions = [
    { label: 'Gold', value: 'gold' },
    { label: 'Silver', value: 'silver' },
    { label: 'Rose Gold', value: 'rose-gold' },
    { label: 'Platinum', value: 'platinum' },
  ];

  const priceOptions = [
    { label: 'Rs.0 - Rs.2000', value: '0-2000' },
    { label: 'Rs.2000 - Rs.5000', value: '2000-5000' },
    { label: 'Rs.5000 - Rs.10000', value: '5000-10000' },
    { label: 'Rs.10000+', value: '10000+' },
  ];

  const sortOptions = [
    { label: 'Featured', value: 'Featured' },
    { label: 'Newest', value: 'Newest' },
    { label: 'Price: Low to High', value: 'Price: Low to High' },
    { label: 'Price: High to Low', value: 'Price: High to Low' },
  ];

  return (
    <>
      <Navbar />

      <div className="layout-container">
        <main className="site-main">
          <div className="layout-content">
            <div className="page-header">
              <h1>Browse Categories</h1>
            </div>
            <CategoryCarousel categories={categories} />
          </div>
        </main>

        <section className="container">
          <ProductsHeader
            title="Jewellery"
            sortLabel={sortLabel}
            onSortSelect={setSortLabel}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            sizeOptions={sizeOptions}
            colorOptions={colorOptions}
            priceOptions={priceOptions}
            sortOptions={sortOptions}
          />

          <ProductsGrid products={products} />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Jewellery;