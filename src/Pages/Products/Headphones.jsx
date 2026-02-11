import { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

import CategoryCarousel from '../../Components/CategoryCarousel';
import CategoryHeader from '../../Components/CategoryHeader';
import ProductsHeader from '../../Components/ProductsHeader';
import ProductsGrid from '../../Components/ProductsGrid';

// ================= DATA =================


const categories = [
  { id: 1, image: 'https://images.unsplash.com/photo-1713425884368-9079ba200325', label: 'Handbags' },
  { id: 2, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62', label: 'Backpacks' },
  { id: 3, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3', label: 'Tote Bags' },
  { id: 4, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7', label: 'Crossbody' },
  { id: 5, image: 'https://images.unsplash.com/photo-1713425884368-9079ba200325', label: 'Clutches' },
  { id: 6, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62', label: 'Travel Bags' },
];

const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1713425884368-9079ba200325', title: 'Designer Handbag', price: '₹ 1,299' },
  { id: 2, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62', title: 'Travel Backpack', price: '₹ 899' },
  { id: 3, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3', title: 'Canvas Tote', price: '₹ 599' },
  { id: 4, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7', title: 'Leather Crossbody', price: '₹ 799' },
  { id: 5, image: 'https://images.unsplash.com/photo-1713425884368-9079ba200325', title: 'Evening Clutch', price: '₹ 499' },
  { id: 6, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62', title: 'Laptop Bag', price: '₹ 1,099' },
  { id: 7, image: 'https://images.unsplash.com/photo-1713425884368-9079ba200325', title: 'Mini Handbag', price: '₹ 699' },
  { id: 8, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3', title: 'Shopping Tote', price: '₹ 399' },
];

// ================= PAGE =================

const Bags = () => {
  const [sortLabel, setSortLabel] = useState('Featured');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

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

  return (
    <>
      <Navbar />

      <div className="layout-container">
        <main className="site-main">
          <div className="layout-content">
           
            
          </div>
        </main>

        <section className="container">
          <ProductsHeader
           title="Headphones"
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

export default Bags;
