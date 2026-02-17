import { useState } from 'react';
import './Profile.css';

function Profile() {
  const [activeTab, setActiveTab] = useState('orders');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const goToCart = () => {
    window.location.href = 'cart.html';
  };

  const goToHome = () => {
    window.location.href = 'index.html';
  };

  return (
    <div className="profile-page">
      <header>
        <div className="container header-row">
          <a href="#" className="brand">
            <img src="logo (2).png" alt="Logo" />
          </a>

          <nav aria-label="Primary">
            <a href="index.html">Home</a>
            <a href="#">Categories</a>
            <a href="cart.html">Cart</a>
            <a href="#">Wishlist</a>
            <a href="Profile.html">Profile</a>
          </nav>

          <div className="actions">
            <button className="icon-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>
              </svg>
            </button>
            <button className="icon-btn" aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"/>
              </svg>
            </button>
            <button className="icon-btn" aria-label="Cart" onClick={goToCart}>
              <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"/>
              </svg>
            </button>

            <div className="avatar-sm" style={{backgroundImage: 'url("https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg")'}}></div>
          </div>
        </div>
      </header>

      <main>
        <div className="container stack-lg">
          <section className="card card-pad-lg">
            <div className="profile">
              <div className="avatar-lg" style={{backgroundImage: 'url("https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg")'}}></div>
              <div>
                <h2>Kumkum Kamthan</h2>
                <p className="muted">kumkum@email.com</p>
              </div>
            </div>
          </section>

          <section className="card">
            <nav className="tabs" role="tablist">
              <a
                href="#"
                className={`tab-link ${activeTab === 'orders' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === 'orders'}
                data-tab="orders"
                onClick={(e) => { e.preventDefault(); handleTabClick('orders'); }}
              >
                Orders
              </a>
              <a
                href="#"
                className={`tab-link ${activeTab === 'payment' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === 'payment'}
                data-tab="payment"
                onClick={(e) => { e.preventDefault(); handleTabClick('payment'); }}
              >
                Payment Methods
              </a>
              <a
                href="#"
                className={`tab-link ${activeTab === 'addresses' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === 'addresses'}
                data-tab="addresses"
                onClick={(e) => { e.preventDefault(); handleTabClick('addresses'); }}
              >
                Saved Addresses
              </a>
              <a
                href="#"
                className={`tab-link ${activeTab === 'wishlist' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === 'wishlist'}
                data-tab="wishlist"
                onClick={(e) => { e.preventDefault(); handleTabClick('wishlist'); }}
              >
                Wishlist
              </a>
              <a
                href="#"
                className={`tab-link ${activeTab === 'support' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === 'support'}
                data-tab="support"
                onClick={(e) => { e.preventDefault(); handleTabClick('support'); }}
              >
                Customer Support
              </a>
            </nav>

            <div className="card-pad" id="tab-panels">
              <section
                id="tab-orders"
                className={`tab-panel ${activeTab === 'orders' ? 'active' : ''}`}
                role="tabpanel"
                aria-labelledby="orders"
              >
                <div className="center" style={{padding: '48px 0'}}>
                  <div style={{maxWidth: '360px', margin: '0 auto 24px'}}>
                    <img
                      alt="No orders illustration"
                      className="mb-8"
                      src="https://plus.unsplash.com/premium_photo-1731998763294-c08eca2486e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  </div>
                  <h3 style={{fontSize: '22px', fontWeight: 800, margin: '0 0 8px'}}>No orders yet</h3>
                  <p className="muted" style={{maxWidth: '460px', margin: '0 auto 16px'}}>
                    Browse our latest collection and find something you love.
                  </p>
                  <button className="btn btn-primary" onClick={goToHome}>Shop Now</button>
                </div>
              </section>

              <section
                id="tab-payment"
                className={`tab-panel ${activeTab === 'payment' ? 'active' : ''}`}
                role="tabpanel"
                aria-labelledby="payment"
              >
                <h3 style={{fontSize: '22px', fontWeight: 800, margin: '0 0 16px'}}>Payment Methods</h3>
                <div className="grid-2 mb-8">
                  <div className="option-card">
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <img
                        alt="Visa"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAElyMWUrpFqNcldWMT93I62XOocqKwX16fxi7eWOe9D8qYNo_KRksGvzNnCWN9JHFxU33O_a8020m6doKLFatuHH7IJmDNq60mPVlMr5MrqRDcEtc4dYK-ORLkZyM2uuBY_GZXIBOrYokFrK5k7exxwgUn4d-9xN5RdexZSlBDp1HBUWNYuzpij2g-CxK3sX_f6cra8UVBFs-NG1D42V8lobzZeAA60AsfeBPY8DRuioknE6ujbdS3m1zCK7cFGmCGGe8BRXd9J00"
                        style={{height: '32px'}}
                      />
                      <div>
                        <p style={{margin: 0, fontWeight: 700}}>Visa ****4242</p>
                        <p className="muted" style={{margin: '4px 0 0', fontSize: '14px'}}>Expires 12/26</p>
                      </div>
                    </div>
                    <button className="icon-btn" aria-label="Remove card">
                      <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>

                  <div className="option-card">
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <img
                        alt="Mastercard"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqlC-gRaENhrNKKUdLurgnPEqwyeDpsjF-fx9zxDfKdokQj7dnb9ZLHCp8ovo-TbBV4lWnLC-Tn-tJoaKl9GdQi9FWP_qWEPIlpFinAUUIX_bL78SvrBpw84USmKibbP7EEuQ-pomLIWkrXFxPHteZuYCFlNEK99cGoQ4ILqIrAjfimqyt2WLNC8AL0_tDL-7btvb29Zu3zYzcIZkKgy9Vf8Zy6j-cl0qsSAntXsnnzNt9v02fFuC72VDOjN8_Nhaqzp75D8iWrhM"
                        style={{height: '32px'}}
                      />
                      <div>
                        <p style={{margin: 0, fontWeight: 700}}>Mastercard **** 5678</p>
                        <p className="muted" style={{margin: '4px 0 0', fontSize: '14px'}}>Expires 08/26</p>
                      </div>
                    </div>
                    <button className="icon-btn" aria-label="Remove card">
                      <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <button className="btn btn-secondary">Add New Payment Method</button>
              </section>

              <section
                id="tab-addresses"
                className={`tab-panel ${activeTab === 'addresses' ? 'active' : ''}`}
                role="tabpanel"
                aria-labelledby="addresses"
              >
                <h3 style={{fontSize: '22px', fontWeight: 800, margin: '0 0 16px'}}>Saved Addresses</h3>
                <div className="grid-2 mb-8">
                  <div className="option-card" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <p style={{margin: 0, fontWeight: 700}}>Home</p>
                    <p className="muted" style={{margin: '6px 0 0'}}>123 Maple Street, Springfield, IL 62704</p>
                    <div style={{display: 'flex', gap: '16px', paddingTop: '8px'}}>
                      <button className="btn" style={{padding: '6px 8px', background: 'none', color: '#f2db0d'}}>Edit</button>
                      <button className="btn" style={{padding: '6px 8px', background: 'none', color: '#ef4444'}}>Remove</button>
                    </div>
                  </div>

                  <div className="option-card" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <p style={{margin: 0, fontWeight: 700}}>Work</p>
                    <p className="muted" style={{margin: '6px 0 0'}}>456 Oak Avenue, Metropolis, IL 62960</p>
                    <div style={{display: 'flex', gap: '16px', paddingTop: '8px'}}>
                      <button className="btn" style={{padding: '6px 8px', background: 'none', color: '#f2db0d'}}>Edit</button>
                      <button className="btn" style={{padding: '6px 8px', background: 'none', color: '#ef4444'}}>Remove</button>
                    </div>
                  </div>
                </div>
                <button className="btn btn-secondary">Add New Address</button>
              </section>

              <section
                id="tab-wishlist"
                className={`tab-panel ${activeTab === 'wishlist' ? 'active' : ''}`}
                role="tabpanel"
                aria-labelledby="wishlist"
              >
                <div className="center" style={{padding: '48px 0'}}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#cccccc" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{margin: '0 auto 12px'}}>
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                  </svg>
                  <h3 style={{fontSize: '22px', fontWeight: 800, margin: '0 0 8px'}}>Your wishlist is empty</h3>
                  <p className="muted" style={{maxWidth: '460px', margin: '0 auto 16px'}}>
                    Add your favorite items to your wishlist to keep track of them.
                  </p>
                  <button className="btn btn-primary">Discover Products</button>
                </div>
              </section>

              <section
                id="tab-support"
                className={`tab-panel ${activeTab === 'support' ? 'active' : ''}`}
                role="tabpanel"
                aria-labelledby="support"
              >
                <h3 style={{fontSize: '22px', fontWeight: 800, margin: '0 0 16px'}}>Customer Support</h3>
                <div className="grid-2">
                  <a className="option-card" href="#" style={{textAlign: 'center', flexDirection: 'column', padding: '24px'}}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f2db0d" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{marginBottom: '12px'}}>
                      <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                    <h4 style={{margin: 0, fontSize: '18px', fontWeight: 700}}>FAQ</h4>
                  </a>

                  <a className="option-card" href="#" style={{textAlign: 'center', flexDirection: 'column', padding: '24px'}}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f2db0d" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{marginBottom: '12px'}}>
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                    <h4 style={{margin: 0, fontSize: '18px', fontWeight: 700}}>Contact Us</h4>
                  </a>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Profile;
