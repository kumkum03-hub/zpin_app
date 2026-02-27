import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => {
  const hasProducts = products && products.length > 0;

  return (
    <section>
      {hasProducts ? (
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
      ) : (
        <div style={{ padding: '40px 0', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '20px', fontWeight: 700 }}>
            No products found
          </h3>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Try a different search term or browse other categories.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProductsGrid;
