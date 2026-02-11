import React, { useRef } from "react";
import "../Accessories/Handbags.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

const FragrancesDeodorants = () => {
    const scrollRef = useRef(null);

    // Helper function for horizontal scroll if needed, hidden for now
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <>
            <Navbar />

            <div className="layout-container page-handbags">
                <main className="site-main" role="main">
                    <div className="layout-content">
                        <div className="page-header">
                            <h1>Fragrances & Deodorants Collection</h1>
                            <div className="breadcrumb" aria-label="Breadcrumb">
                                <Link to="/">Home</Link>
                                <span className="sep">/</span>
                                <span>Fragrances & Deodorants</span>
                            </div>
                        </div>

                        {/* Horizontal scrollable categories */}
                        <div className="category-row centered">
                            <div className="category-scroll" ref={scrollRef} role="list">
                                {/* 1 */}
                                <Link to="/Earrings" className="card-link" role="listitem" aria-label="Earrings">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Perfumes</div>
                                </Link>

                                {/* 2 */}
                                <Link to="/Necklaces" className="card-link" role="listitem" aria-label="Necklaces">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2070&auto=format&fit=crop')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Body Sprays</div>
                                </Link>

                                {/* 3 */}
                                <Link to="/Bangles-Bracelets" className="card-link" role="listitem" aria-label="Bangles & Bracelets">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Roll-Ons</div>
                                </Link>

                                {/* 4 */}
                                <Link to="/Rings" className="card-link" role="listitem" aria-label="Rings">
                                    <div className="card-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Gift Sets</div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </main>

                {/* section 1 */}
                <section>
                    <div className="box">
                        <h1 className="tagline">Trending Now</h1>

                        <div className="mainContainer">
                            <div className="card">
                                <div className="trending-badge">Trending</div>
                                <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc5e?q=80&w=2070&auto=format&fit=crop" alt="Gold Earrings" />
                                <h1>Gold Plated <br />Hoop Earrings</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.1,499</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Best Seller</div>
                                <img src="https://images.unsplash.com/photo-1602751584552-8ba420552259?q=80&w=2070&auto=format&fit=crop" alt="Diamond Necklace" />
                                <h1>Crystal Pendant <br />Necklace</h1>
                                <p>Rs.1,299 <span id="strikethrough">Rs.1,999</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">New Arrival</div>
                                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" alt="Bracelet" />
                                <h1>Silver Charm <br />Bracelet</h1>
                                <p>Rs.999 <span id="strikethrough">Rs.1,599</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Premium</div>
                                <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop" alt="Ring" />
                                <h1>Solitaire Engagement <br />Ring</h1>
                                <p>Rs.2,499 <span id="strikethrough">Rs.3,999</span></p>
                            </div>
                            <div className="card">
                                <div className="trending-badge">Trending</div>
                                <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc5e?q=80&w=2070&auto=format&fit=crop" alt="Gold Earrings" />
                                <h1>Gold Plated <br />Hoop Earrings</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.1,499</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Best Seller</div>
                                <img src="https://images.unsplash.com/photo-1602751584552-8ba420552259?q=80&w=2070&auto=format&fit=crop" alt="Diamond Necklace" />
                                <h1>Crystal Pendant <br />Necklace</h1>
                                <p>Rs.1,299 <span id="strikethrough">Rs.1,999</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">New Arrival</div>
                                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" alt="Bracelet" />
                                <h1>Silver Charm <br />Bracelet</h1>
                                <p>Rs.999 <span id="strikethrough">Rs.1,599</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Premium</div>
                                <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop" alt="Ring" />
                                <h1>Solitaire Engagement <br />Ring</h1>
                                <p>Rs.2,499 <span id="strikethrough">Rs.3,999</span></p>
                            </div>
                            <div className="card">
                                <div className="trending-badge">New Arrival</div>
                                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" alt="Bracelet" />
                                <h1>Silver Charm <br />Bracelet</h1>
                                <p>Rs.999 <span id="strikethrough">Rs.1,599</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Premium</div>
                                <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop" alt="Ring" />
                                <h1>Solitaire Engagement <br />Ring</h1>
                                <p>Rs.2,499 <span id="strikethrough">Rs.3,999</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default FragrancesDeodorants;
