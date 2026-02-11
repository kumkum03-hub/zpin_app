import React, { useState } from 'react';
import './ProdLanding.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';


const Index = () => {
    const [mainImage, setMainImage] = useState('https://lh3.googleusercontent.com/aida-public/AB6AXuBcvGxOUEHqF18oTaOsA4PAQwuFI7i2AycHMxyaracpEOP4AFc1bvbKcF6whr3u6yNytlcxHaJuHyiOFfHf-fiMtIy3BGu_VbEiTZ88g1_pnSXLPB8tT5UKcDPHcjbppr419RZmG_5EyfsSYqvUuxeAlTodfnFAiMh0HV-Rbp538Hy-zj_uUi69e1DtuznQhe1T7CbpeKUq6Zwg_uTSlxB2PmBaBjmqp3K9NNWDgKj49N7aNuK88nVYxaovSWnpPMbtDi9r5WFzlAY');
    const [selectedSize, setSelectedSize] = useState('');

    const handleThumbnailClick = (src) => {
        setMainImage(src);
    };

    const goToCart = () => {
        window.location.href = "cart.html";
    };

    const goToProfile = () => {
        window.location.href = "Profile.html";
    };

    const thumbnails = [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCcqNrgVWXwwI-OFwk8H7nV2SGCSrbo4i6XMu_oixZNHYibp30sAfilt1seUVzBl8AaMs0xaqYIh4c7cIS6uE36GQuWqMWxMEoLV7_Ku3dajUTUYPzujSNPt51wEqtUII_imRJf4ZUD78gEWsG30F4AvcAW-Xr6ZB0BhERu_kJw4fU3PBYOvgJZ0flHf9qVb6LYwSIP27r9hReS5VY5IcHjSc0bfCs5EnKMwXeNixqCCaOn27ec2FOeOEy0u7xqQtY6BKbaE9cMdds',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDYWLtLLv69aSF1vlMorUu4Z-JXTqXdAzNk_6UsEG5rXhJEJSUde3h0H-htN6w6vKp6FOMb7JkT5ZBDdWcqAUFcNmydgRAdHwEyBB1upfuZD_11dtfAKzFC2fyLrah-hdEDzkDBwh7Ri70RbgtMO4f_Zt8DWPjbABEcUv0-u1JTxRXqgwGuQmJZDHxz6-DjwJQbWd9OaYCFaAX5U7IIltBuB9XcbszpaEuCBvQG9m3x6itpBLWHig5-YBYlqBIWl_jjnSMrQ4fFCsc',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBcvGxOUEHqF18oTaOsA4PAQwuFI7i2AycHMxyaracpEOP4AFc1bvbKcF6whr3u6yNytlcxHaJuHyiOFfHf-fiMtIy3BGu_VbEiTZ88g1_pnSXLPB8tT5UKcDPHcjbppr419RZmG_5EyfsSYqvUuxeAlTodfnFAiMh0HV-Rbp538Hy-zj_uUi69e1DtuznQhe1T7CbpeKUq6Zwg_uTSlxB2PmBaBjmqp3K9NNWDgKj49N7aNuK88nVYxaovSWnpPMbtDi9r5WFzlAY',
    ];

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.prodLandingPage}>

            <div className={styles.page}>
                <div className={styles.row}>
                    <div className={styles.half}>
                        <img
                            id="main-image"
                            className={styles.mainImg}
                            src={mainImage}
                            alt="Main product"
                        />

                        <div className={styles.thumbs} id="thumbs">
                            {thumbnails.map((thumb, index) => (
                                <img
                                    key={index}
                                    className={`${styles.thumb} ${mainImage === thumb ? styles.selected : ''}`}
                                    src={thumb}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => handleThumbnailClick(thumb)}
                                    tabIndex={0}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.half}>
                        <h1 className="shop-name">Shop Name</h1>
                        <p className="subtitle">Silk-Like Romantic Casual Resort Cream</p>

                        <p className="price-row">
                            799/- <span className="price-old">999/-</span>
                        </p>

                        <div className="sizes">
                            <form id="sizeform">
                                <input type="radio" id="size-xs" name="size" onChange={() => setSelectedSize('XS')} />
                                <label htmlFor="size-xs">XS</label>

                                <input type="radio" id="size-s" name="size" onChange={() => setSelectedSize('S')} />
                                <label htmlFor="size-s">S</label>

                                <input type="radio" id="size-m" name="size" onChange={() => setSelectedSize('M')} />
                                <label htmlFor="size-m">M</label>

                                <input type="radio" id="size-l" name="size" onChange={() => setSelectedSize('L')} />
                                <label htmlFor="size-l">L</label>

                                <input type="radio" id="size-xl" name="size" onChange={() => setSelectedSize('XL')} />
                                <label htmlFor="size-xl">XL</label>
                            </form>
                        </div>

                        <div className="section">
                            <h2 className="section-title">Product Details</h2>
                            <div className="detail-item">
                                <span className="detail-label">Design:</span>
                                <span className="detail-value">Elegant blouse with intricate motifs. Pure silk fabric in aesthetic colorways. Statement sleeves and unique neckline for added style.</span>
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="section-title">Lace Detail Disclaimer</h2>
                            <div className="detail-item">
                                <p className="muted">Top comes with varied lace accents. Top worn by the model may be styled for presentational purpose. Check images for close-up views of lace detail.</p>
                                <p className="muted">Check the image of the blouse piece to understand how the actual blouse piece looks like.</p>
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="section-title">Size & Fit</h2>
                            <div className="detail-item">
                                <span className="detail-label">Length:</span>
                                <span className="detail-value">55cm (approx)</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Bust:</span>
                                <span className="detail-value">XS - 84cm | S - 88cm | M - 92cm | L - 96cm | XL - 100cm (approx)</span>
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="section-title">Material & Care</h2>
                            <div className="detail-item">
                                <span className="detail-label">Material:</span>
                                <span className="detail-value">Pure Silk</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Care:</span>
                                <span className="detail-value">Dry Clean</span>
                            </div>
                        </div>

                        <div className="cta-row">
                            <button className="btn">Add To Cart</button>
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="section-gap">
                    <h2 className="grid-title">Similar products</h2>

                    <div className="product-grid">
                        <div className="card">
                            <img className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcqNrgVWXwwI-OFwk8H7nV2SGCSrbo4i6XMu_oixZNHYibp30sAfilt1seUVzBl8AaMs0xaqYIh4c7cIS6uE36GQuWqMWxMEoLV7_Ku3dajUTUYPzujSNPt51wEqtUII_imRJf4ZUD78gEWsG30F4AvcAW-Xr6ZB0BhERu_kJw4fU3PBYOvgJZ0flHf9qVb6LYwSIP27r9hReS5VY5IcHjSc0bfCs5EnKMwXeNixqCCaOn27ec2FOeOEy0u7xqQtY6BKbaE9cMdds" alt="Striped t-shirt." />
                            <p className="card-brand">CORSICA</p>
                            <p className="card-name">Women Striped Cotton T-shirt</p>
                            <p className="card-price-row"><span className="card-price">Rs. 329</span> <span className="card-old">Rs. 999</span> <span className="card-off">(67% OFF)</span></p>
                        </div>

                        <div className="card">
                            <img className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYWLtLLv69aSF1vlMorUu4Z-JXTqXdAzNk_6UsEG5rXhJEJSUde3h0H-htN6w6vKp6FOMb7JkT5ZBDdWcqAUFcNmydgRAdHwEyBB1upfuZD_11dtfAKzFC2fyLrah-hdEDzkDBwh7Ri70RbgtMO4f_Zt8DWPjbABEcUv0-u1JTxRXqgwGuQmJZDHxz6-DjwJQbWd9OaYCFaAX5U7IIltBuB9XcbszpaEuCBvQG9m3x6itpBLWHig5-YBYlqBIWl_jjnSMrQ4fFCsc" alt="Pink wrap top." />
                            <p className="card-brand">CORSICA</p>
                            <p className="card-name">Women Striped Cotton T-shirt</p>
                            <p className="card-price-row"><span className="card-price">Rs. 329</span> <span className="card-old">Rs. 999</span> <span className="card-off">(67% OFF)</span></p>
                        </div>

                        <div className="card">
                            <img className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKUhfak0vjxdDTy2ahBj7mvSEBOd-Pjd5bpOT7uTpXRkvbMLr-n1SFp0HXxtyJc3jrRNgR77feJ0H0o6DO74f-9n1Hgjnu0dh1qic3mNdhvlT__-1akya2pBMwuLNw7o1UBYMYH2v5GmsxHVoi67f-nGQP4WjfDGwYzZLmFNkaVUe0TvYWuYgrmyzAlAUZmfzvi9R9M-P-TJG1GD5Ao6VFsyxtqdqMM4vMzznDeveKVojL8pnU6F9a6ew57qLNNQCujEGG1gWcvrE" alt="Green tie-front top." />
                            <p className="card-brand">CORSICA</p>
                            <p className="card-name">Women Striped Cotton T-shirt</p>
                            <p className="card-price-row"><span className="card-price">Rs. 329</span> <span className="card-old">Rs. 999</span> <span className="card-off">(67% OFF)</span></p>
                        </div>

                        <div className="card">
                            <img className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5EPmaCXssLjgsFED_g4n6Rk3I9gOMHjY5P9WbQkzlAqxBqISZXwBNAOWLVwLS7cLGlk4rGp2T9-hLySJDey1w6VD6mbaVcyqzd6czRBqAUJrHusOT6JoT1IXw_9QJTXbDKh8gFCsbAzd3R9ibC1C0R8ndM0PRBO5jyo4lgLWq_J7Xf9QPxvncj9W4BfTTobwuSba8rEL6j-aL2ILqr-n-GBi-9hoYrw7ytd2AoYKC-U6VLQXH3Ag9TH4elmL25YCTvcZNEKN24JQ" alt="Pink draped neck top." />
                            <p className="card-brand">CORSICA</p>
                            <p className="card-name">Women Striped Cotton T-shirt</p>
                            <p className="card-price-row"><span className="card-price">Rs. 329</span> <span className="card-old">Rs. 999</span> <span className="card-off">(67% OFF)</span></p>
                        </div>
                    </div>
                </div>

                <div className="section-gap">
                    <h2 className="grid-title">Customers Also Liked</h2>
                    <div className="product-grid">
                        <div className="card">
                            <img className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcvGxOUEHqF18oTaOsA4PAQwuFI7i2AycHMxyaracpEOP4AFc1bvbKcF6whr3u6yNytlcxHaJuHyiOFfHf-fiMtIy3BGu_VbEiTZ88g1_pnSXLPB8tT5UKcDPHcjbppr419RZmG_5EyfsSYqvUuxeAlTodfnFAiMh0HV-Rbp538Hy-zj_uUi69e1DtuznQhe1T7CbpeKUq6Zwg_uTSlxB2PmBaBjmqp3K9NNWDgKj49N7aNuK88nVYxaovSWnpPMbtDi9r5WFzlAY" alt="Cream colored top." />
                            <p className="card-brand">CORSICA</p>
                            <p className="card-name">Women Striped Cotton T-shirt</p>
                            <p className="card-price-row"><span className="card-price">Rs. 329</span> <span className="card-old">Rs. 999</span> <span className="card-off">(67% OFF)</span></p>
                        </div>

                        <div className="card">
                            <img className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_1Vuxqmgtg0n1YM1ckIfwR5mPauTie6FHT0V5SZZtGz_qDUPZKTp-VHntg9YPs7V_jVk2hgPQRCeOeMAdCg4tfr__Aw24fft0KBa94bwAAIKazjaxeOL5ZL2Ny6Yw-jsNR-jOFMitOi1ATI8xLMTA5k0sZLc4qK0nqVwPmKjTj3TyQkXzwwpm6EolKb2o7Djd3Qhr77iqI3LMOeFyGInRIRANPNicYC2FkMbPXv_WzgjtgquIIftYIp8qaYBtvA-vUojzzJYIO8" alt="Dark green cropped hoodie." />
                            <p className="card-brand">CORSICA</p>
                            <p className="card-name">Women Striped Cotton T-shirt</p>
                            <p className="card-price-row"><span className="card-price">Rs. 329</span> <span className="card-old">Rs. 999</span> <span className="card-off">(67% OFF)</span></p>
                        </div>

                        <div className="card">
                            <img className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgg8zerEpg9a8o40aplsavtNu7_EuZYjyTLeSkRL7ACiyndiNkmiS5KjA9118gYpf1uGCHNDfPntNiHiF6drG4eECKYhxG5bRw9M5aAU2-4tTN82pbNTK_4-1njfMD0n9VcXToIMKb27ZuCaqdNdx5VR0JafaOdn8M1_Gs4Lwtv-qybVfUV3UhvE_TEMrq53lfz2D6kd9my2IlyFenaCzYsVGd2xr07kRKN--z5vJzar4vwyqL5e8pyL2lwE0RUqdrYN0cVudsa94" alt="White ruffled top." />
                            <p className="card-brand">CORSICA</p>
                            <p className="card-name">Women Striped Cotton T-shirt</p>
                            <p className="card-price-row"><span className="card-price">Rs. 329</span> <span className="card-old">Rs. 999</span> <span className="card-off">(67% OFF)</span></p>
                        </div>

                        <div className="card">
                            <img className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC8Dus4feygnRo7NA26EuVh2-F5owUPhWf4PO8Csl0zNZfFPL1xxLo9enjFLgL6D2IJl1MfhhBcR9sHl5phDxMemwZgczvEctBNtwUXaiTG7nHw85IB6_cZEkMd2b6GIAd9QTOv5tiGRV-gxZK97bO50R7eC599gtmKXJE6eLU3C05udF2YLsUj7vSDlY7ctP75fw1ukSlkBMOmsfpDFQJDhH9qKu7W1DRpCXAsFgn5XWfRPNJYb9qV43DfYnHSX10-PvAFlp37_U" alt="Light wash cargo jeans." />
                            <p className="card-brand">CORSICA</p>
                            <p className="card-name">Women Striped Cotton T-shirt</p>
                            <p className="card-price-row"><span className="card-price">Rs. 329</span> <span className="card-old">Rs. 999</span> <span className="card-off">(67% OFF)</span></p>
                        </div>
                    </div>
                </div>

                <div className="reviews">
                    <h2>Customer Reviews</h2>

                    <div className="review-summary">
                        <div className="review-score">4.1</div>
                        <div className="stars">★★★★☆</div>
                        <div className="based-on">Based on 1,234 reviews</div>
                    </div>

                    <div className="review-item">
                        <div className="review-title">
                            <div className="stars">★★★★★</div>
                            Beautiful Blouse!
                        </div>
                        <div className="review-meta"><strong>Ananya S.</strong> on May 15, 2024</div>
                        <div className="review-text">
                            The silk fabric is so luxurious and feels amazing on the skin. The color is a beautiful cream, just as pictured. It fits true to size. I received so many compliments when I wore it!
                        </div>
                    </div>

                    <div className="review-item">
                        <div className="review-title">
                            <div className="stars">★★★★☆</div>
                            Lovely, but a bit sheer
                        </div>
                        <div className="review-meta"><strong>Priya K.</strong> on May 10, 2024</div>
                        <div className="review-text">
                            This is a very elegant top. The design is unique and chic. My only complaint is that it's slightly transparent, so I have to wear a camisole underneath. Otherwise, it's perfect.
                        </div>
                    </div>

                    <div className="review-item">
                        <div className="review-title">
                            <div className="stars">★★★☆☆</div>
                            Sizing is off
                        </div>
                        <div className="review-meta"><strong>Ritu M.</strong> on April 28, 2024</div>
                        <div className="review-text">
                            I ordered my usual size (M) but it was a bit tight around the bust. I would recommend sizing up. The material and design are nice, but I had to return it due to the fit.
                        </div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button className="review-btn">Write a review</button>
                    </div>
                </div>

            </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Index;