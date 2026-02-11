import { useRef, useState, useEffect } from 'react';

const CategoryCarousel = ({ categories }) => {
  const carouselRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const getCardWidth = () => {
    if (!carouselRef.current) return 300;
    const card = carouselRef.current.querySelector('.card-link');
    return card ? card.offsetWidth + 16 : 300;
  };

  const updateButtons = () => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;

    setShowLeftBtn(carousel.scrollLeft > 0);
    setShowRightBtn(
      carousel.scrollWidth - carousel.scrollLeft >
        carousel.clientWidth + 2
    );
  };

  const goLeft = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: -getCardWidth(),
      behavior: 'smooth',
    });
    setTimeout(updateButtons, 200);
  };

  const goRight = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: getCardWidth(),
      behavior: 'smooth',
    });
    setTimeout(updateButtons, 200);
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
    <div className="grid" role="list">
      <div className="carousel-container">
        <button
          className={`scroll-btn left ${!showLeftBtn ? 'hidden' : ''}`}
          onClick={goLeft}
        >
          &#10094;
        </button>

        <div className="carousel" ref={carouselRef}>
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
  );
};

export default CategoryCarousel;
