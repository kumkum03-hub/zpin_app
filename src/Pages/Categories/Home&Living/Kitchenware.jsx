import React, { useRef } from "react";
import "../Accessories/Handbags.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { products } from "../../../data/productsData";

const Kitchenware = () => {
    const scrollRef = useRef(null);

    // Filter products for Home & Living category
    const homeProducts = products.filter(p => p.category === 'HomeLiving');

    return (
        <>
            <Navbar />

            <div className="layout-container page-handbags">
                <main className="site-main" role="main">
                    <div className="layout-content">
                        <div className="page-header">
                            <h1>Kitchenware Collection</h1>
                            <div className="breadcrumb" aria-label="Breadcrumb">
                                <Link to="/">Home</Link>
                                <span className="sep">/</span>
                                <span>Kitchenware</span>
                            </div>
                        </div>

                        <div className="category-row centered">
                            <div className="category-scroll" ref={scrollRef} role="list">
                                <Link to="#" className="card-link" role="listitem">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?q=80&w=400')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Cookware</div>
                                </Link>
                                <Link to="#" className="card-link" role="listitem">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=400')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Kitchen Tools</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>

                <section>
                    <div className="box">
                        <h1 className="tagline">Trending Now</h1>

                        <div className="mainContainer">
                            {homeProducts.map(product => (
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

export default Kitchenware;
