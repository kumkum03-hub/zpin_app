import { useState } from 'react';

const ProductCard = ({ image, title, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <div style={{ backgroundImage: `url('${image}')` }}></div>

        <button
          className={`favorite-btn ${isFavorite ? 'clicked' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? 'favorite' : 'favorite_border'}
        </button>
      </div>

      <p className="product-title">{title}</p>
      <p className="product-price">{price}</p>
    </div>
  );
};

export default ProductCard;
