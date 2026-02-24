import { useState } from 'react';
import './Wishlist.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIE0oXMj0bgH3ru17J5BA87X_ylQQtpr6qoG6Vlvpm4zcvtIBdWOXGCuHqABgbjRJPLVLsg-U0UCtZ7z5CjHtd7aSSX4Y3eGQ7EHLUDJ1e_OjkAM1r2Wsn3xrWHA3aXmptSwIQVeHCv2hhkbyMc--RMEcWnB-cwVwCuVyW862CmpsoMjgy7iKak6lD5yTra3iVOzuxcMqdF_w-F_Gf_tJ6nPKnK7FIABN3gtNJ5PBi5W4S10AGr6dQslgkTV9D0yFethyed2gTB50',
      alt: 'High-end wireless noise-canceling headphones in black',
      title: 'SonicMax Wireless Over-Ear',
      price: '₹299.00',
      description: 'Space Black • Premium Audio'
    },
    {
      id: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGPbArglqskxI5oLii9IqZUFU9PJoPV8zRQLf3tYXG9oBJ1pLGSuB0XFIWUDhWB3Tf9mnTbk5FRokD-PZEE0ZlkfdeCTRLM1UJTGnueKMrojnNUkZG1pm1-C44ERhw9uQfopCArmZU_aKMpoJ0QgMFj3a3EGLKQ7phRYOVxjvRMI3hLaXxjLRq_Huipn5RRJrdmQpTUctGDlaKcT8A7pCeOVx5QIb1pVtqD1z20otYOcMrrvdEIB3OZFU2VB2R78qDJSlx_jpGXts',
      alt: 'Minimalist white and silver wristwatch',
      title: 'Horizon Classic Watch',
      price: '₹185.00',
      description: 'Silver Mesh • 40mm Dial'
    },
    {
      id: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlUDZ6MFpGbEtIjaISLN2houMB_DtVJ_3TUgvaXptI4bo9WW93q5MgBPtNGwYDy8XGqQFc3bs_LumyHLOSr05Mm3XOTXEoxbcMlujy1QRhs2p0q-xBA5Jddm-yGRbNii9z_p1aRJ3HCv7AQ8_w7Cn08iBodI7u1wu91WAfFMAQFPGHhPbdt8vYCIScqGuznFkJr0gfJCDt1SiQP4GbYfHjK54Uu5xWFHKHLPNFWPlaEs_IjhZCt-t-94JOMJIinoJdNyAUWam1HGw',
      alt: 'Retro style vintage digital camera',
      title: 'Vintage 35mm Digital',
      price: '₹450.00',
      description: 'Limited Edition • Brown Leather'
    },
    {
      id: 4,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3TV3VYx0464Bto96DHbyt4jRrYVpGdQtDVS9vDhEwSzGojzrcIQ4cYutFQ-LvujXS_rxlQCzw4qge-cy_OriTqjdbhPOch3RBmA6QBLrtB63Os-h6v8EqqmCEeGPmDWHZDthpBiz9eInQjqDhzGt1kUb8QouFMz5HquNvc5j63z9M09YT-JPJ9qNGha4HUUkGn3LExSq4qzZMQBsy3HL4FJKSWt6CcImqXbvXsnZIPUKN1U1PBsamO6bId4YpLllCCgppkTnseuo',
      alt: 'Luxury leather travel backpack',
      title: 'Nomad Leather Backpack',
      price: '₹320.00',
      description: 'Genuine Leather • Tan'
    },
    {
      id: 5,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWfHurwHdCYL0kiCAZGlWshlE5HaKcxRLNTS1s6ERpjCvF3K5E6p7YpKeFvChSWGcSOAbBJ-WePCW2lrI-WkRdmaJDkymVwp1Os8Oj6tZ7aNgwSj2E0BEyUSpVKamYl7DJEr_gcpHAO3tCpCsZemB8Ecl3ljy75o6KQHCCJAXLPDfZ_wcgTxnhKrOJgq6XHoKrv_tpuw_Uc5tXg5FeSqiuN5CzsbiHFbeRm47e1RwWbRsdTXSYhPddYzsYR957lYarcDuT4-1nTZ0',
      alt: 'Vibrant red lifestyle sneakers',
      title: 'TurboRun Lifestyle',
      price: '₹140.00',
      description: 'Crimson Red • Lightweight'
    },
    {
      id: 6,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFtJKyP31Dhk-3qvowFn35SVoTh4TWCorCspL2DIIx_0hz9YTjxZhQlvautqiM2nEYqxJIw1u1rx-QpgxNto1V42DtmIq_DoYXhvRVuUzv4I3P-vVuawiOJUfQKzYPkK9Fuwk7geJc4CcaHniIe76kePzOO8rkC65B6jWDM1-dADp7tXIfy8_lAFezmOt3YYJ9bo_ct69hjuiOoWYtJHRazC000rtg3a59_-q04V_eNmL2wSUewvOBTnHdFuCiKIPihbkDREWUWrE',
      alt: 'Modern professional studio microphone',
      title: 'Studio Pro Microphone',
      price: '₹215.00',
      description: 'Matte Black • XLR/USB'
    }
  ]);

  const [removingId, setRemovingId] = useState(null);

  const removeItem = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      setItems(items.filter(item => item.id !== id));
      setRemovingId(null);
    }, 300);
  };

  return (
    <div className="wishlist">
      <div className="app-container">
     <Navbar/>

      <main className="main-content">
        <div className="page-title-section">
          <nav className="breadcrumb">
            <a href="#" className="breadcrumb-link">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Wishlist</span>
          </nav>
          <div className="title-header">
            <div>
              <h2 className="page-title">Your Favorites</h2>
              <p className="page-subtitle">You have {items.length} items saved for later. Ready to make them yours?</p>
            </div>
        
          </div>
        </div>

        <div className="items-grid">
          {items.map(item => (
            <div
              key={item.id}
              className={`item-card ${removingId === item.id ? 'fade-out' : ''}`}
            >
              <div className="item-image-container">
                <img
                  className="item-image"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
              <div className="item-details">
                <div className="item-header">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">{item.price}</p>
                </div>
                <p className="item-description">{item.description}</p>
                <div className="item-actions">
                  <button className="add-to-cart-button">
                    Add to Cart
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => removeItem(item.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="recommendation-section">
          <div className="recommendation-content">
            <div>
              <h3 className="recommendation-title">Based on your favorites</h3>
              <p className="recommendation-subtitle">Complete the look with these curated picks.</p>
            </div>
            <button className="explore-button">
              Explore Recommendations
            </button>
          </div>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}

export default App;
