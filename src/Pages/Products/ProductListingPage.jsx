import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import CategoryCarousel from '../../Components/CategoryCarousel';
import CategoryHeader from '../../Components/CategoryHeader';
import ProductsHeader from '../../Components/ProductsHeader';
import ProductsGrid from '../../Components/ProductsGrid';
import './ProductListingPage.css';
import { products } from '../../data/productsData';

// ================= PAGE =================

const ProductListingPage = () => {
  console.log('=== ProductListingPage RENDERED ===');
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [sortLabel, setSortLabel] = useState('Featured');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Sync searchQuery with URL params
  useEffect(() => {
    const query = searchParams.get('search') || '';
    setSearchQuery(query);
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const query = searchQuery.toLowerCase();
    return product.title.toLowerCase().includes(query);
  });

  const hasProducts = filteredProducts.length > 0;

  console.log('Search Query:', searchQuery);
  console.log('Filtered Products:', filteredProducts.length);

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
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="layout-container">
        <main className="site-main">
          <div className="layout-content">

          </div>
        </main>

        <section className="container">
          {hasProducts && (
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
          )}

          <ProductsGrid products={filteredProducts} />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProductListingPage;
