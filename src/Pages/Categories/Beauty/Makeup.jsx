import React, { useRef } from "react";
import "../Accessories/Handbags.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { products } from "../../../data/productsData";

const Makeup = () => {
    const scrollRef = useRef(null);

    // Filter products for the Beauty category
    const beautyProducts = products.filter(p => p.category === 'Beauty');

    return (
        <>
            <Navbar />

            <div className="layout-container page-handbags">
                <main className="site-main" role="main">
                    <div className="layout-content">
                        <div className="page-header">
                            <h1>Makeup Collection</h1>
                            <div className="breadcrumb" aria-label="Breadcrumb">
                                <Link to="/">Home</Link>
                                <span className="sep">/</span>
                                <span>Makeup</span>
                            </div>
                        </div>

                        {/* Horizontal scrollable categories */}
                        <div className="category-row centered">
                            <div className="category-scroll" ref={scrollRef} role="list">
                                <Link to="#" className="card-link" role="listitem">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Face Makeup</div>
                                </Link>
                                <Link to="#" className="card-link" role="listitem">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=400')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Eye Makeup</div>
                                </Link>
                                <Link to="#" className="card-link" role="listitem">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=400')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Lip Makeup</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>

                {/* section 1 */}
                <section>
                    <div className="box">
                        <h1 className="tagline">Trending in Beauty</h1>

                        <div className="mainContainer">
                            {beautyProducts.map(product => (
                                <div className="card" key={product.id}>
                                    <div className="trending-badge">Trending</div>
                                    <img src={product.image} alt={product.title} />
                                    <h1>{product.title}</h1>
                                    <p>{product.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default Makeup;
