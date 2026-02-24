import React, { useRef } from "react";
import "./Handbags.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { products } from "../../../data/productsData";

const Jewellery = () => {
    const scrollRef = useRef(null);

    // Filter products for Jewellery (included in Accessories category)
    const jewelleryProducts = products.filter(p =>
        p.title.toLowerCase().includes('earrings') ||
        p.title.toLowerCase().includes('necklace') ||
        p.title.toLowerCase().includes('bracelet') ||
        p.title.toLowerCase().includes('ring')
    );

    return (
        <>
            <Navbar />

            <div className="layout-container page-handbags">
                <main className="site-main" role="main">
                    <div className="layout-content">
                        <div className="page-header">
                            <h1>Jewellery Collection</h1>
                            <div className="breadcrumb" aria-label="Breadcrumb">
                                <Link to="/">Home</Link>
                                <span className="sep">/</span>
                                <span>Jewellery</span>
                            </div>
                        </div>

                        <div className="category-row centered">
                            <div className="category-scroll" ref={scrollRef} role="list">
                                <Link to="#" className="card-link" role="listitem">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Earrings</div>
                                </Link>
                                <Link to="#" className="card-link" role="listitem">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=400')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Necklaces</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>

                <section>
                    <div className="box">
                        <h1 className="tagline">Trending Now</h1>

                        <div className="mainContainer">
                            {jewelleryProducts.map(product => (
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

export default Jewellery;
