import { useState, useEffect } from 'react';
import './ShoppingCart.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Silk Evening Dress',
      description: 'Midnight Blue | Premium Collection',
      price: 2500,
      quantity: 1,
      size: 'S',
      checked: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKGxbk-6tJ_h6QUT7zuvrqEFuZF8T8fcVBrJfxicsF9YpFbtTRDP5S9g0WUxO1yrsje7NN7cjrbciQekF6O9TIdYfC3PB8VlPDl0Ym-qm3eTdlsi6-X2VmAfZtrZrthkmDqJ77uRntKEcZBp8A7vkbDymallvr7tZz7UDfbc-EODWH1KFhiY0MS3vGf-2QPG3_6JQdqL4PC_0kD6a6W4rokdQq3PL0hQj1u6y7z5NC2gOaRIHyrQbCuRsv3MSej0r7z73FUt-0glk',
      sizeOptions: ['XS', 'S', 'M', 'L']
    },
    {
      id: 2,
      name: 'Tailored Linen Top',
      description: 'Ivory | Sustainable Series',
      price: 799,
      quantity: 1,
      size: 'M',
      checked: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcPkiqpX7njq4Js0INqBlbtEq0v8Z-BLn2VEsCR2NGlDe7g5-FNG54ytI4mfJHHjueB0BywLUyrg85eQwL-9rVeVQQuBYZSS64e7ciJBcR49qbVTkbk87nFcVLw-EVKANkHXgAVuL6RzfgMxYU0roXVmzmdTSj4NnfMJtu1x7ZvnGXn9f7U25ry75EeUMAZx1NVucNylR2W9_hgyBj6TuAoJRNqvIgduQoI-dAjNQ4ps0ujo4VCccv3xlS-VpITc7dt9Ppij2CB7M',
      sizeOptions: ['S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      name: 'Leather Pointed Heels',
      description: 'Tan Brown | Italian Leather',
      price: 999,
      quantity: 1,
      size: '38',
      checked: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxdTYglv21fZBLs9AcMQ-6kXOB_pec2L9e7Qf3WbVHNKCyA2r1xOlDeTx5ibZWIEYpvczSWBeuPH6jrh2XIlsffM4sQPVOKMD4gAsWPndPrbIMlWxtX6hj1USQPDBzWyaS8NxSj5I35AKhxgy8pJ4U5vV0p5MPDaQTLs6D9AfreAa0dKWnppQ5cQ1yhz1OVCbs-FDfAVZrFrU6menLRSpcR1A5DZeMM8wyqvohai9JtOQUEzLf4D64cr3DoJ4SvSCH0IZlSky6jhc',
      sizeOptions: ['37', '38', '39', '40']
    }
  ]);

  const [recommendedItems] = useState([
    {
      id: 4,
      name: 'Minimalist Gold Necklace',
      price: 399,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd98TyIoImnX4yVB1yqpS_vw-JLYHe0n1Af9G7O65shKkWTouac_i3hv3DLOKf3qHly7XuZfjdhnw474aoXcdbdB5vzSSkZp-KR9JcWg0rrxEgo8MN88uYCZIVz6PIHZcK7P-yNQVbS3j69j8VCY5O5iBQCIv-kjigsBI7El0Fn4_JCZzMNl6y9tG04sdBYY8aZMHPMaLMY93vHrfnatOe_sT7mEuO7H28vNGSFhxoiRI2GaKML7betPGSJA3SObGp0BJ0B7wHy-w'
    },
    {
      id: 5,
      name: 'Tortoise Oversized Frames',
      price: 599,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7rfY7y0kOjwR4EBYvxut2mvR6UBqf77Xtqipgk7QUPLA7mWmnw863w0z4S3RkftJG3_1VWOoo1mfc93CEV03HqDWOXur-_5cJpB6uVLOWYh8I5Calulz9Sx2B4zNZJIWn_NsIwTqqZwS4Q8OU09NOZeh1EE8g_FOFs6FnrffKPUMRAJlkopENuwSFW11YUU-_NbLLOE8soOzprRyulQbmxaePHd4HSBciAGehArGuAxoCsa1ard_IVHfNUQGEGkbZ22KrL1V4foA'
    },
    {
      id: 6,
      name: 'Leather Crossbody Clutch',
      price: 999,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQHYjM-3K2uAUGd6jMqFSVvL0wXOJGy2uxKq6bqbdn6lZs_Gjgko_vCi_bOgqWGEReOMaa1tp3ga3tLRrPWmfak8wArqJdnsB1gQ4HD8bCd1Rv4ea2IDVTEWj0NW7KHwUa0ly0CbP40LiD6fQF5q8jkhn9EVl8wK5hf24EPdCiHJDPcIY_hWD5MAAzvGg96kdTpCbXAEFir7pVjR7dl1PtP2d7qfAaTQunEhUnE7ctRiqUIRCA716DNmLIDAKJ9RV_mgSphUZwl6w'
    },
    {
      id: 7,
      name: 'Pure Cashmere Wrap',
      price: 1999,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATZXSb-8_ML34WssEweRgCsvQLSRk13fojm9M9gYfpOGS3fMgb0ub4iiZ4Pj-HAZ1nWPl8StqJYys8-3Uq4lJcVaLqeNHbOhlJY2Yll9akdNQn_Jquzt0vmC0l3v1nqhUNoYZ43X_k82Lt3LH02pG_c6JTrFlnlcQjQ_djltaWKaHwfTndtXUp-G0aiNkMSzWXn-SBE9Hbiv7exkn8UoRV4d7vCq0Z9rH6UqI-umMibos1x-wGsWLJkmLo2L_s7WfXlWqAKfOpOuA'
    }
  ]);

  const [summary, setSummary] = useState({
    subtotal: 0,
    discount: 0,
    tax: 0,
    total: 0,
    itemCount: 0
  });

  useEffect(() => {
    calculateSummary();
  }, [cartItems]);

  const calculateSummary = () => {
    let subtotal = 0;
    let count = 0;

    cartItems.forEach(item => {
      if (item.checked) {
        subtotal += item.price * item.quantity;
        count += 1;
      }
    });

    const discount = subtotal * 0.1;
    const tax = subtotal > 0 ? 99 : 0;
    const total = subtotal - discount + tax;

    setSummary({
      subtotal,
      discount,
      tax,
      total,
      itemCount: count
    });
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleCheckboxChange = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSizeChange = (id, size) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, size } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  };

  return (
    <div className="shoppingcart-page">
      
      <Navbar/>

      <main className="main-content">
        <div className="content-grid">
          <div className="cart-section">
            <div className="section-header">
              <h1 className="section-title">Shopping Bag</h1>
              <span className="item-count">{summary.itemCount} Items</span>
            </div>

            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={item.id} className={`cart-item ${index === cartItems.length - 1 ? 'last-item' : ''}`}>
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      className="item-checkbox"
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </div>
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <div className="item-info">
                      <div className="item-text">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-description">{item.description}</p>
                        <div className="item-options">
                          <div className="option-group">
                            <span className="option-label">Size:</span>
                            <select
                              className="option-select"
                              value={item.size}
                              onChange={(e) => handleSizeChange(item.id, e.target.value)}
                            >
                              {item.sizeOptions.map(size => (
                                <option key={size} value={size}>{size}</option>
                              ))}
                            </select>
                          </div>
                          <div className="option-group">
                            <span className="option-label">Qty:</span>
                            <div className="qty-controls">
                              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-price">
                        <p>{formatPrice(item.price)}</p>
                      </div>
                    </div>
                    <div className="item-actions">
                      <button className="action-btn wishlist-btn">
                        <span className="material-symbols-outlined">favorite</span> Move to wishlist
                      </button>
                      <button className="action-btn remove-btn" onClick={() => handleRemoveItem(item.id)}>
                        <span className="material-symbols-outlined">delete</span> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="summary-section">
            <div className="sticky-summary">
              <div className="summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="promo-section">
                  <label className="promo-label">Promo Code</label>
                  <div className="promo-input-group">
                    <input type="text" className="promo-input" placeholder="Enter code" />
                    <button className="promo-btn">Apply</button>
                  </div>
                </div>

                <div className="price-details">
                  <div className="price-row">
                    <span>Subtotal</span>
                    <span className="price-value">{formatPrice(summary.subtotal)}</span>
                  </div>
                  <div className="price-row discount-row">
                    <span>Discount (WELCOME10)</span>
                    <span className="price-value">-{formatPrice(summary.discount)}</span>
                  </div>
                  <div className="price-row">
                    <span>Estimated Shipping</span>
                    <span className="price-value">FREE</span>
                  </div>
                  <div className="price-row">
                    <span>Estimated Tax</span>
                    <span className="price-value">{summary.subtotal > 0 ? formatPrice(summary.tax) : 'FREE'}</span>
                  </div>
                  <div className="total-row">
                    <span className="total-label">Total</span>
                    <span className="total-value">{formatPrice(summary.total)}</span>
                  </div>
                </div>

                <button className="place-order-btn">
                  Place Order
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>

                <div className="trust-signals">
                  <div className="trust-item">
                    <span className="material-symbols-outlined">verified_user</span>
                    <p>Secure Payment</p>
                  </div>
                  <div className="trust-item">
                    <span className="material-symbols-outlined">restart_alt</span>
                    <p>Easy 30-Day Returns</p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        <section className="recommended-section">
          <h2 className="recommended-title">Complete the Look</h2>
          <div className="recommended-grid">
            {recommendedItems.map(item => (
              <div key={item.id} className="recommended-item">
                <div className="recommended-image">
                  <img src={item.image} alt={item.name} />
                  
                </div>
                <h4 className="recommended-name">{item.name}</h4>
                <p className="recommended-price">{formatPrice(item.price)}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default ShoppingCart;
