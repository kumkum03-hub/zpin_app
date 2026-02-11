import React, { useRef } from "react";
import "../Accessories/Handbags.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";




const BeddingLinen = () => {

    const scrollRef = useRef(null);

    const goToCart = () => {
        window.location.href = "cart.html";
    };

    const goToProfile = () => {
        window.location.href = "Profile.html";
    };

    const goToHome = () => {
        window.location.href = "index.html";
    };

    const goToProd = () => {
        window.location.href = "prodlanding.html";
    };

    const goToMen = () => {
        window.location.href = "menCat.html";
    };

    return (
        <>
            <Navbar />

            <div className="layout-container page-handbags">

                <main className="site-main" role="main">
                    <div className="layout-content">
                        <div className="page-header">
                            <h1>Bedding & Linen </h1>
                            <div className="breadcrumb" aria-label="Breadcrumb">
                                <Link to="/">Home</Link>
                                <span className="sep">/</span>
                                <span>Bedding & Linen</span>
                            </div>
                        </div>

                        {/* Horizontal scrollable categories without arrows */}
                        <div className="category-row centered">
                            <div className="category-scroll" ref={scrollRef} role="list">
                                {/* 1 */}
                                <Link to="/Wallets" className="card-link" role="listitem" aria-label="Wallets">
                                    <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCh3Ve9Kv3XJUbNqWzlN6SjYV-TehCuRrlvYrTCtcd-ejlWs7MkZewHJkOVmLMLHdXH3iE8mbCOGbumeWhvp4sCfU09M2ICxnMszynjiJr8sjOG_JOa8Y8CVH8QaSgtVyg477O_vdjoUQvwHANktd6YONXKNWB61zSilhgNXVCGN0wYbb3Bk191n8YhgsOM0R_GDc4WqK44kB9mJbq5L-XQH_1Q4JsKD7P-6U9IrmUCR6muYuJQhuUQQoc965rBXrH7tP1qW8bhrus')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Bedsheets</div>
                                </Link>

                                {/* 2 */}
                                <Link to="/Belts" className="card-link" role="listitem" aria-label="Belts">
                                    <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzO3O3cByBmrz0aCVo5z_vSM78414Mu74WS1f1acKkUmfjRQBJuPfV-J_-2jxhNBbl54-XTHILTx2bk7KoTx70hAmE_aDlxAZagSVBNeQ1mWzkNGZUHdgzK4uXi9-iT5GxJlszwDOc1CXyY5IlejfKeF5j2mSndVF1RTJMFrOJu0l4afvPGrK6-pEkB5pYpiG5y-KYgq5z2NmQwQXKqlWWBMOCabhhPnvSMdPux-UN3VrsfAx1ADkZYt2zvnw4AHf3DhQvvsVB-JQ')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Blankets & Quilts</div>
                                </Link>

                                {/* 3 */}
                                <Link to="/Card-Holders" className="card-link" role="listitem" aria-label="Card Holders">
                                    <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbqkTAk1xn2-YROEVy8Px_QRQkmz-lB3RQubj2YGtzSzj3dNdKcLzafBPXSgkw5akm81eCI19Olj4dU485igCe0GDysNaVYEH9jSXB1aElK6euLJpSdBcgmcDz2WbNwJzX_wQkMPF1KMIKYDBNLAIsKtiYr-gaViJ7oDXFYMqoIgbobDKUvbQJCBkaZyD-3Yg7p7hRh2xtfykkaJ7mMpLNIrf1OO2nH8vb6am4S_YVBdrp_1PRZx-9rzghGQ0CFSRJJf1EpDlzLYA')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Pillow Covers</div>
                                </Link>

                                {/* 4 */}
                                <Link to="/Coin-Pouches" className="card-link" role="listitem" aria-label="Coin Pouches">
                                    <div className="card-media" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfngB8DpcpJrGERfTy0I968wRSgY_ffwdO-pJUjyAATc61IMfJ9LcFmDIJtYAb0ljtZiQzTCEhWvW1OjnpyyoIzf3V6itQuJpABzRIONHrKAICdkl1XczyqhmNDT9pIsNns2aFA-3T3xmsOArtxa-EldCWazt5I9TNkUsm4FSr4PeCT70YmjZ7c6DtAKkK5lziLcJCpAE0W0CdwmyFJPJGXP4yZlI2izg3HF0CFNqjFFRRFSRyE23dgPlSMILU1yJlOXN6qAK4Ipg')` }}>
                                        <div className="card-overlay">Shop Now</div>
                                    </div>
                                    <div className="card-label">Towels</div>
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
                                <img src="https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h1>The Classic Crew <br />T-shirt</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Trending</div>
                                <img src="https://media.istockphoto.com/id/1203543686/photo/handsome-guy-with-hat-is-on-the-beach.jpg?s=2048x2048&w=is&k=20&c=FK4hxmKyWc4GoFVECC1c8j454xyud8sEXvI93mgnTfA=" />
                                <h1>AeroFlow Training<br /> Shorts</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Trending</div>
                                <img src="https://media.istockphoto.com/id/176405965/photo/facing-the-day-with-a-smile.jpg?s=2048x2048&w=is&k=20&c=fdyEn--vvqROp-VyCU4yTrIM7PeETn5JsI_ETDzor1g=" />
                                <h1>The Maverick <br />Slim-Fit Jeans</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Trending</div>
                                <img src="https://media.istockphoto.com/id/1614454660/photo/male-model-posing-in-green-kurta.jpg?s=2048x2048&w=is&k=20&c=8_ZS_379Dpg8dYNaYkDhcyDKwnksOyNMs9iJvg6e1Os=" />
                                <h1>Emerald Fusion <br />Kurta Set</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Highly-Rated</div>
                                <img src="https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h1>Urban Explorer <br /> Tee</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Highly-Rated</div>
                                <img src="https://plus.unsplash.com/premium_photo-1682096794344-88b07b13ef3c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h1>Soft-Touch V-Neck <br />T-shirt</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Highly-Rated</div>
                                <img src="https://plus.unsplash.com/premium_photo-1710107446916-1b0c67a99042?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h1>CloudStride <br />Running Sneakers</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Highly-Rated</div>
                                <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h1>A durable, classic <br />leather wallet</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
                            </div>

                            <div className="card">
                                <div className="trending-badge">Highly-Rated</div>
                                <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h1>A durable, classic <br />leather wallet</h1>
                                <p>Rs.899 <span id="strikethrough">Rs.999</span></p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </>
    );
};

export default BeddingLinen;
