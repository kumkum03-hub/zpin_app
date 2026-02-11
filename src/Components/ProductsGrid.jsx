import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => {
  return (
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
  );
};

export default ProductsGrid;
