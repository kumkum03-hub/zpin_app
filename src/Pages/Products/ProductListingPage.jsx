import { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import CategoryCarousel from '../../Components/CategoryCarousel';
import CategoryHeader from '../../Components/CategoryHeader';
import ProductsHeader from '../../Components/ProductsHeader';
import ProductsGrid from '../../Components/ProductsGrid';
import './ProductListingPage.css';

// ================= DATA =================


const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb', title: 'Relaxed Fit Tee', price: '₹ 599' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100', title: 'Classic Denim Jeans', price: '₹ 899' },
  { id: 3, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94', title: 'Comfortable Jogger', price: '₹ 599' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e', title: 'Versatile Hoodie', price: '₹ 799' },
{ id: 1, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb', title: 'Relaxed Fit Tee', price: '₹ 599' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100', title: 'Classic Denim Jeans', price: '₹ 899' },
  { id: 3, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94', title: 'Comfortable Jogger', price: '₹ 599' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e', title: 'Versatile Hoodie', price: '₹ 799' },
{ id: 1, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb', title: 'Relaxed Fit Tee', price: '₹ 599' },
  { id: 2, image: 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100', title: 'Classic Denim Jeans', price: '₹ 899' },
  { id: 3, image: 'https://images.unsplash.com/photo-1728718248311-2fdb76913d94', title: 'Comfortable Jogger', price: '₹ 599' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e', title: 'Versatile Hoodie', price: '₹ 799' },
];

// ================= PAGE =================

const ProductListingPage = () => {
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

export default ProductListingPage;
