import React from "react";


const Footer = () => {
  return (
   <footer className="site-footer">
      <div className="footer-container">
    
        {/* <!-- Brand + About --> */}
        <div className="footer-section about">
          <h2 className="footer-logo">ZPIN</h2>
          <p>Style at your door, in just 12 hours. Because waiting is so last season.</p>
        </div>
    
        {/* <!-- Quick Links --> */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories </a></li>
            <li><a href="#">Top Picks</a></li>
            <li><a href="AboutUs.html">About Us</a></li>
          </ul>
        </div>
    
        {/* <!-- Support --> */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help & FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Shipping Info</a></li>
          </ul>
        </div>
    
       
        <div className="footer-section">
          <div className="fs-logo">
            <img src="/logo 2.png"/>
            <p>Pune, Maharashtra<br/>
              +91 12345 54321  <br/>
              support@support.in</p>
          </div>
         
          
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
    
      </div>
    
      {/* <!-- Bottom Bar --> */}
      <div className="footer-bottom">
        <p>&copy; 2025 Zpin. All rights reserved.</p>
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </footer>
    
  );
};

export default Footer;
