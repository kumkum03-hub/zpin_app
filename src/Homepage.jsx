import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import { Link, useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  // Simple portal to ensure dropdowns render above other stacking contexts
  useEffect(() => {
    const portal = document.createElement('div');
    portal.className = 'dropdown-portal';
    document.body.appendChild(portal);

    const listeners = [];
    let active = null;
    let closeTimer = null;

    const closeAll = (exceptDropdown) => {
      // Restore any dropdowns whether they're still under .category-item or moved into the portal
      document.querySelectorAll('.dropdown').forEach((dd) => {
        if (dd === exceptDropdown) return;
        const inPortal = dd.parentNode === portal;
        const inCategory = dd.parentElement && dd.parentElement.classList && dd.parentElement.classList.contains('category-item');
        if (inPortal || inCategory) {
          const origParent = dd.__origParent;
          const origNext = dd.__origNext;
          if (origParent) origParent.insertBefore(dd, origNext);
          dd.style.position = '';
          dd.style.left = '';
          dd.style.top = '';
          dd.style.zIndex = '';
          // keep hidden when restored
          dd.style.display = 'none';
          dd.style.visibility = '';
          dd.style.opacity = '';
          dd.style.transform = '';
          dd.style.transition = '';
        }
      });
      // clear active if it's not the exception
      if (active && (!exceptDropdown || active.dropdown !== exceptDropdown)) active = null;
    };

    document.querySelectorAll('.category-item').forEach((item) => {
      const dropdown = item.querySelector('.dropdown');
      if (!dropdown) return;

      // store original pointers for restoration
      dropdown.__origParent = dropdown.parentNode;
      dropdown.__origNext = dropdown.nextSibling;

      const placeBelow = () => {
        const rect = item.getBoundingClientRect();
        
        const dropdownWidth = Math.min(720, window.innerWidth - 32);

        portal.appendChild(dropdown);
        dropdown.style.position = 'fixed';
        dropdown.style.zIndex = '2147483647';
        dropdown.style.visibility = 'visible';
        dropdown.style.display = 'block';
        dropdown.style.width = dropdownWidth + 'px';
        dropdown.style.opacity = '1';
        dropdown.style.transform = 'none';
        dropdown.style.transition = 'none';

        let left = rect.left + rect.width / 2 - dropdownWidth / 2;
        // Ensure it stays within viewport bounds (16px padding from edges)
        left = Math.max(16, Math.min(left, window.innerWidth - dropdownWidth - 16));
        const top = rect.bottom + 6;
        dropdown.style.left = left + 'px';
        dropdown.style.top = top + 'px';

        // mark this dropdown as active and cancel any pending close
        active = { item, dropdown };
        if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
        // attach portal hover handlers so leaving the portaled dropdown closes it immediately
        const portalEnter = () => {
          if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
        };
        const portalLeave = () => {
          // immediate restore when mouse leaves the portaled dropdown
          restore();
        };
        // store handlers so they can be removed on restore
        dropdown.__portalEnter = portalEnter;
        dropdown.__portalLeave = portalLeave;
        dropdown.addEventListener('mouseenter', portalEnter);
        dropdown.addEventListener('mouseleave', portalLeave);
      };

      const restore = () => {
        if (dropdown.__origParent) {
          dropdown.__origParent.insertBefore(dropdown, dropdown.__origNext);
        }
        // clear any pending close timer and clear active
        if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
        if (active && active.dropdown === dropdown) active = null;
        // remove any portal listeners attached when placed into portal
        if (dropdown.__portalEnter) {
          dropdown.removeEventListener('mouseenter', dropdown.__portalEnter);
          delete dropdown.__portalEnter;
        }
        if (dropdown.__portalLeave) {
          dropdown.removeEventListener('mouseleave', dropdown.__portalLeave);
          delete dropdown.__portalLeave;
        }
        dropdown.style.position = '';
        dropdown.style.left = '';
        dropdown.style.top = '';
        dropdown.style.zIndex = '';
        dropdown.style.display = 'none';
        dropdown.style.visibility = '';
        dropdown.style.opacity = '';
        dropdown.style.transform = '';
        dropdown.style.transition = '';
      };

      const onEnter = (e) => {
        // ensure any other open dropdowns are closed first
        closeAll(dropdown);
        // show immediately and mark active
        placeBelow();
      };
      const onLeave = (e) => {
        // short delay before closing to allow pointer to move into the dropdown
        if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
        const related = e.relatedTarget;
        // if the relatedTarget is inside the dropdown, do nothing (user is entering dropdown)
        if (related && dropdown.contains && dropdown.contains(related)) {
          return;
        }

        closeTimer = setTimeout(() => {
          const m = window._lastMouse || { x: -1, y: -1 };
          const itRect = item.getBoundingClientRect();
          let ddRect;
          try { ddRect = dropdown.getBoundingClientRect(); } catch (err) { ddRect = { left: -1, right: -1, top: -1, bottom: -1 }; }
          const insideItem = m.x >= itRect.left && m.x <= itRect.right && m.y >= itRect.top && m.y <= itRect.bottom;
          const insideDd = m.x >= ddRect.left && m.x <= ddRect.right && m.y >= ddRect.top && m.y <= ddRect.bottom;
          if (!insideItem && !insideDd) restore();
          closeTimer = null;
        }, 120);
      };

      item.addEventListener('mouseenter', onEnter);
      item.addEventListener('mouseleave', onLeave);

      listeners.push({ item, onEnter, onLeave });
    });

    const onDocClick = (e) => {
      // close any portal dropdowns when clicking outside
      document.querySelectorAll('.category-item .dropdown').forEach((dd) => {
        if (dd.parentNode === portal) {
          const isInside = dd.contains(e.target) || (e.target.closest && e.target.closest('.category-item'));
          if (!isInside) {
            if (dd.__origParent) dd.__origParent.insertBefore(dd, dd.__origNext);
            dd.style.position = '';
            dd.style.left = '';
            dd.style.top = '';
            dd.style.zIndex = '';
            dd.style.display = '';
            dd.style.visibility = '';
            dd.style.opacity = '';
            dd.style.transform = '';
            dd.style.transition = '';
          }
        }
      });
    };

    // track last mouse position globally so leave handlers can check it (helps across portal)
    const onMouseMove = (ev) => { window._lastMouse = { x: ev.clientX, y: ev.clientY }; };
    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('click', onDocClick);
    // cleanup mousemove listener on return
    const cleanup = () => { document.removeEventListener('mousemove', onMouseMove); };

    return () => {
      listeners.forEach(({ item, onEnter, onLeave }) => {
        item.removeEventListener('mouseenter', onEnter);
        item.removeEventListener('mouseleave', onLeave);
      });
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onDocClick);
      if (portal.parentNode) portal.parentNode.removeChild(portal);
    };
  }, []);

  useEffect(() => {
    document.title = "ZPIN - Home";

    const adjustDropdownEdges = () => {
      document.querySelectorAll('.category-item').forEach((item, index) => {
        item.classList.remove('left-edge', 'right-edge');

        const dropdown = item.querySelector('.dropdown');
        if (!dropdown) return;

        if (index === 4 || index === 5) {
          const itemRect = item.getBoundingClientRect();
          const viewportCenter = window.innerWidth / 2;

          if (itemRect.left < viewportCenter) {
            item.classList.add('left-edge');
          } else {
            item.classList.add('right-edge');
          }
          return;
        }

        const wasHidden = dropdown.style.visibility === "hidden" || dropdown.style.opacity === "0";
        const origStyle = {
          visibility: dropdown.style.visibility,
          display: dropdown.style.display,
          opacity: dropdown.style.opacity
        };

        dropdown.style.visibility = "visible";
        dropdown.style.display = "block";
        dropdown.style.opacity = "1";

        const dropdownRect = dropdown.getBoundingClientRect();
        const siteLeft = 0;
        const siteRight = window.innerWidth;

        if (dropdownRect.right > siteRight - 50) {
          item.classList.add('right-edge');
        }
        if (dropdownRect.left < siteLeft + 50) {
          item.classList.add('left-edge');
        }

        dropdown.style.visibility = origStyle.visibility;
        dropdown.style.display = origStyle.display;
        dropdown.style.opacity = origStyle.opacity;
      });
    };

    window.addEventListener('resize', adjustDropdownEdges);
    window.addEventListener('scroll', adjustDropdownEdges);

    const categoryWrapper = document.querySelector('.category-scroll-wrapper');
    if (categoryWrapper) {
      categoryWrapper.addEventListener('scroll', adjustDropdownEdges);
    }

    setTimeout(adjustDropdownEdges, 100);

    return () => {
      window.removeEventListener('resize', adjustDropdownEdges);
      window.removeEventListener('scroll', adjustDropdownEdges);
      if (categoryWrapper) {
        categoryWrapper.removeEventListener('scroll', adjustDropdownEdges);
      }
    };
  }, []);



  const offerWrapperRef = useRef(null);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const navigate = useNavigate();
  const goToCart = () => navigate("/cart");
  const goToProfile = () => navigate("/profile");
  const goToHome = () => navigate("/");
  const goToBags = () => navigate("/bags");
  const goToMen = () => navigate("/Men");
  const goToWomen = () => navigate("/Women");

  const scrollOffer = (direction) => {
    if (!offerWrapperRef.current) return;

    const banners = offerWrapperRef.current.querySelectorAll(".offer-banner");
    let newIndex = currentOfferIndex + direction;

    if (newIndex < 0) newIndex = banners.length - 1;
    if (newIndex >= banners.length) newIndex = 0;

    const scrollAmount = offerWrapperRef.current.clientWidth * newIndex;

    offerWrapperRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    setCurrentOfferIndex(newIndex);
  };

  const scroll62 = (direction) => {
    const container = document.getElementById("discountScroll");
    const scrollAmount = 300;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  };

  const scroll63 = (direction) => {
    const container = document.getElementById("discountScroll2");
    const scrollAmount = 300;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  };

  const scroll64 = (direction) => {
    const container = document.getElementById("nearbyScroll");
    const scrollAmount = 300;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.png" alt="logo" />
          </div>

          <div className="nav-search">
            <input type="text" placeholder="Search fashion, trends, styles..." id="searchInput" />
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>

          <div className="nav-actions">
            <button className="nav-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            <button className="nav-btn" onClick={goToCart}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>

            <button className="nav-btn profile-btn" onClick={goToProfile}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="category-scroll-container">
        <div className="category-scroll-wrapper">

          <div className="category-content">
            <div className="category-item" id="women-cat">
              <img src="https://plus.unsplash.com/premium_photo-1727943458940-ba9653405f9a?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fashion" className="cat-img" />

              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/Women" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg" alt="Women" />
                    <span>Women</span>
                  </Link>
                  <Link to="/Men" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/06/93/03/069303241620cf54cb3808d160e666ae.jpg" alt="Men" />
                    <button onClick={goToMen}>Men</button>
                  </Link>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/2c/da/89/2cda891e82081f087d659dd226710bf0.jpg" alt="Kids" />
                    <span>Kids</span>
                  </a>

                </div>
              </div>
            </div>
            <div className="category-label">Fashion</div>
          </div>

          <div className="category-content">
            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Footwear" className="cat-img" />

              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/Men/FootWear" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/06/93/03/069303241620cf54cb3808d160e666ae.jpg" alt="Men's Footwear" />
                    <span>Men's Footwear</span>
                  </Link>
                  <Link to="/Women/FootWear" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg" alt="Women's Footwear" />
                    <span>Women's Footwear</span>
                  </Link>

                </div>
              </div>
            </div>
            <div className="category-label">Footwear</div>
          </div>

          <div className="category-content">
            <div className="category-item">
              <img src="https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accessories" className="cat-img" />

              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/Handbags" className="dropdown-item">
                    <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62" alt="Handbags" />
                    <span>Clips & Pins</span>
                  </Link>
                  <Link to="/Wallets-Belts" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg" alt="Women" />
                    <span>Hair Bands & Scrunchies</span>
                  </Link>
                  <Link to="/Watches" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/2c/da/89/2cda891e82081f087d659dd226710bf0.jpg" alt="Kids" />
                    <span>Watches</span>
                  </Link>
                  <Link to="/Sunglasses" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/f7/38/25/f7382542648a417ae5f4a222c25bd962.jpg" alt="Sports" />
                    <span>Sunglasses & Frames</span>
                  </Link>

                  <Link to="/Jewellery" className="dropdown-item">
                    <img src="https://i.pinimg.com/originals/25/0e/6f/250e6ffd67f955d81db1f3297533af20.gif" alt="Bags" />
                    <span>Jewellery</span>
                  </Link>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/originals/25/0e/6f/250e6ffd67f955d81db1f3297533af20.gif" alt="Bags" />
                    <span>Hair Accessories </span>
                  </a>
                 
                </div>
              </div>
            </div>
            <div className="category-label">Accessories</div>
          </div>

          <div className="category-content">
            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Beauty" className="cat-img" />

              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/Skincare" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/06/93/03/069303241620cf54cb3808d160e666ae.jpg" alt="Skincare" />
                    <span>Skincare</span>
                  </Link>
                  <Link to="/Haircare" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg" alt="Haircare" />
                    <span>Haircare</span>
                  </Link>
                  <Link to="/Makeup" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/2c/da/89/2cda891e82081f087d659dd226710bf0.jpg" alt="Makeup" />
                    <span>Makeup</span>
                  </Link>
                  <Link to="/PersonalCare" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/f7/38/25/f7382542648a417ae5f4a222c25bd962.jpg" alt="Personal Care" />
                    <span>Personal Care</span>
                  </Link>
                  <Link to="/Grooming" className="dropdown-item">
                    <img src="https://i.pinimg.com/736x/26/92/a8/2692a8eb41ab94ad4ddf71adaa41d7b4.jpg" alt="Grooming" />
                    <span>Grooming </span>
                  </Link>
                  <Link to="/FragrancesDeodorants" className="dropdown-item">
                    <img src="https://i.pinimg.com/originals/25/0e/6f/250e6ffd67f955d81db1f3297533af20.gif" alt="Fragrances & Deodorants" />
                    <span>Fragrances & Deodorants</span>
                  </Link>
                  <Link to="/BeautyTools" className="dropdown-item">
                    <img src="https://i.pinimg.com/originals/25/0e/6f/250e6ffd67f955d81db1f3297533af20.gif" alt="Beauty Tools & Appliances" />
                    <span>Beauty Tools & Appliances</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="category-label">Beauty</div>
          </div>

          <div className="category-content">
            <div className="category-item">
              <img src="https://plus.unsplash.com/premium_photo-1682259920062-d30783ac0375?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Home&living" className="cat-img" />

              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/Kitchenware" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/06/93/03/069303241620cf54cb3808d160e666ae.jpg" alt="Kitchenware" />
                    <span>Kitchenware</span>
                  </Link>
                  <Link to="/DiningEssentials" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg" alt="Dining Essentials" />
                    <span>Dining Essentials</span>
                  </Link>
                  <Link to="/StorageOrganizers" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/2c/da/89/2cda891e82081f087d659dd226710bf0.jpg" alt="Storage & Organizers" />
                    <span>Storage & Organizers</span>
                  </Link>
                  <Link to="/CleaningUtility" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/f7/38/25/f7382542648a417ae5f4a222c25bd962.jpg" alt="Cleaning & Utility" />
                    <span>Cleaning & Utility</span>
                  </Link>
                  <Link to="/BeddingLinen" className="dropdown-item">
                    <img src="https://i.pinimg.com/736x/26/92/a8/2692a8eb41ab94ad4ddf71adaa41d7b4.jpg" alt="Bedding & Linen" />
                    <span>Bedding & Linen</span>
                  </Link>
                  <Link to="/BathroomAccessories" className="dropdown-item">
                    <img src="https://i.pinimg.com/originals/25/0e/6f/250e6ffd67f955d81db1f3297533af20.gif" alt="Bathroom Accessories" />
                    <span>Bathroom Accessories</span>
                  </Link>
                  <Link to="/HomeImprovement" className="dropdown-item">
                    <img src="https://i.pinimg.com/originals/25/0e/6f/250e6ffd67f955d81db1f3297533af20.gif" alt="Home Improvement Items" />
                    <span>Home Improvement Items</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="category-label">Home&living</div>
          </div>

          <div className="category-content">
            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Furniture" className="cat-img" />

              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/Men" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/06/93/03/069303241620cf54cb3808d160e666ae.jpg" alt="Men" />
                    <button onClick={goToMen}>Men</button>
                  </Link>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg" alt="Women" />
                    <span>Women</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/2c/da/89/2cda891e82081f087d659dd226710bf0.jpg" alt="Kids" />
                    <span>Kids</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/f7/38/25/f7382542648a417ae5f4a222c25bd962.jpg" alt="Sports" />
                    <span>Sports</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/736x/26/92/a8/2692a8eb41ab94ad4ddf71adaa41d7b4.jpg" alt="Ethnic" />
                    <span>Ethnic</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/originals/25/0e/6f/250e6ffd67f955d81db1f3297533af20.gif" alt="Bags" />
                    <span>Bags</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="category-label">Furniture</div>
          </div>

          <div className="category-content">
            <div className="category-item">
              <img src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gadgets" className="cat-img" />

              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/MobileAccessories" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/06/93/03/069303241620cf54cb3808d160e666ae.jpg" alt="Mobile Accessories" />
                    <span>Mobile Accessories</span>
                  </Link>
                  <Link to="/AudioDevices" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg" alt="Audio Devices" />
                    <span>Audio Devices</span>
                  </Link>
                  <Link to="/SmartDevices" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/2c/da/89/2cda891e82081f087d659dd226710bf0.jpg" alt="Smart Devices" />
                    <span>Smart Devices</span>
                  </Link>
                  <Link to="/ComputerAccessories" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/f7/38/25/f7382542648a417ae5f4a222c25bd962.jpg" alt="Computer Accessories" />
                    <span>Computer Accessories</span>
                  </Link>
                  <Link to="/GamingAccessories" className="dropdown-item">
                    <img src="https://i.pinimg.com/736x/26/92/a8/2692a8eb41ab94ad4ddf71adaa41d7b4.jpg" alt="Gaming Accessories" />
                    <span>Gaming Accessories</span>
                  </Link>
                  <Link to="/ChargersPowerBanks" className="dropdown-item">
                    <img src="https://i.pinimg.com/originals/25/0e/6f/250e6ffd67f955d81db1f3297533af20.gif" alt="Chargers & Power Banks" />
                    <span>Chargers & Power Banks</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="category-label">Gadgets</div>
          </div>

          <div className="category-content">
            <div className="category-item">
              <img src="https://plus.unsplash.com/premium_photo-1675937428926-985c55809ac9?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Electrical appliances" className="cat-img" />

              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/LargeAppliances" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/06/93/03/069303241620cf54cb3808d160e666ae.jpg" alt="Large Appliances" />
                    <span>Large Appliances</span>
                  </Link>
                  <Link to="/SmallAppliances" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg" alt="Small Appliances" />
                    <span>Small Appliances </span>
                  </Link>
                  <Link to="/KitchenAppliances" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/2c/da/89/2cda891e82081f087d659dd226710bf0.jpg" alt="Kitchen Appliances" />
                    <span>Kitchen Appliances</span>
                  </Link>
                  <Link to="/HeatingCoolingAppliances" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/f7/38/25/f7382542648a417ae5f4a222c25bd962.jpg" alt="Heating & Cooling Appliances" />
                    <span>Heating & Cooling Appliances</span>
                  </Link>
                  <Link to="/PersonalAppliances" className="dropdown-item">
                    <img src="https://i.pinimg.com/736x/26/92/a8/2692a8eb41ab94ad4ddf71adaa41d7b4.jpg" alt="Personal Appliances" />
                    <span>Personal Appliances</span>
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="category-label">Electrical</div>
          </div>

          <div className="category-content">
            <div className="category-item">
              <img src="https://plus.unsplash.com/premium_photo-1684445034864-5a9c6756d099?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hardware & sanitary" className="cat-img" />

              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/Men" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/06/93/03/069303241620cf54cb3808d160e666ae.jpg" alt="Men" />
                    <button onClick={goToMen}>Men</button>
                  </Link>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg" alt="Women" />
                    <span>Women</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/2c/da/89/2cda891e82081f087d659dd226710bf0.jpg" alt="Kids" />
                    <span>Kids</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/f7/38/25/f7382542648a417ae5f4a222c25bd962.jpg" alt="Sports" />
                    <span>Sports</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/736x/26/92/a8/2692a8eb41ab94ad4ddf71adaa41d7b4.jpg" alt="Ethnic" />
                    <span>Ethnic</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/originals/25/0e/6f/250e6ffd67f955d81db1f3297533af20.gif" alt="Bags" />
                    <span>Bags</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="category-label">Hardware</div>
          </div>

          <div className="category-content">
            <div className="category-item">
              <img src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pharmacy" className="cat-img" />

              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/Men" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/06/93/03/069303241620cf54cb3808d160e666ae.jpg" alt="Men" />
                    <button onClick={goToMen}>Men</button>
                  </Link>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg" alt="Women" />
                    <span>Women</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/2c/da/89/2cda891e82081f087d659dd226710bf0.jpg" alt="Kids" />
                    <span>Kids</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/1200x/f7/38/25/f7382542648a417ae5f4a222c25bd962.jpg" alt="Sports" />
                    <span>Sports</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/736x/26/92/a8/2692a8eb41ab94ad4ddf71adaa41d7b4.jpg" alt="Ethnic" />
                    <span>Ethnic</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <img src="https://i.pinimg.com/originals/25/0e/6f/250e6ffd67f955d81db1f3297533af20.gif" alt="Bags" />
                    <span>Bags</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="category-label">Pharmacy</div>
          </div>

        </div>
      </div>

      <section className="heroSection">
        <div className="contain">
          <div className="content">
            <h1 className="desc">
              Fashion at<br />
              <span className="gradient-text"><em>Lightning Speed</em></span>
            </h1>

            <p className="hero-subtitle">Get your favorite styles delivered in just 2-12 hours. Fast, trendy, and always fresh.</p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2-12</span>
                <span className="stat-label">Hours</span>
              </div>
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat">
                <span className="stat-number">99%</span>
                <span className="stat-label">Happy</span>
              </div>
            </div>

            <button className="cta-button" id="heroCtaBtn">
              <span>Shop Latest Looks</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12,5 19,12 12,19"></polyline>
              </svg>
            </button>
          </div>

          <div className="hero-visual" data-aos="fade-left" data-aos-delay="150">
            <div className="floating-card card-1">
              <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" alt="Fashion Item" />
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, rgba(0,0,0,0.4))', padding: '16px', zIndex: '9999' }}>
                <div style={{ color: 'white', fontSize: '12px', fontWeight: '500', marginBottom: '4px' }}>Premium</div>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>₹2,999</div>
              </div>
            </div>
            <div className="floating-card card-2">
              <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" alt="Fashion Item" />
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, rgba(0,0,0,0.4))', padding: '16px', zIndex: '9999' }}>
                <div style={{ color: 'white', fontSize: '12px', fontWeight: '500', marginBottom: '4px' }}>Trendy</div>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>₹1,599</div>
              </div>
            </div>
            <div className="floating-card card-3">
              <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" alt="Fashion Item" />
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, rgba(0,0,0,0.4))', padding: '16px', zIndex: '9999' }}>
                <div style={{ color: 'white', fontSize: '12px', fontWeight: '500', marginBottom: '4px' }}>Casual</div>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>₹899</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="offer-banner-section" style={{ marginTop: '60px' }} data-aos="zoom-in">
          <button className="offerarrow left" onClick={() => scrollOffer(-1)}>&#10094;</button>

          <div className="offer-banner-wrapper" ref={offerWrapperRef}>
            <div className="offer-banner">
              <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/e06db242-2a7c-476f-a4b7-43090fa7eb1d.png" className="offerimg" alt="Offer 2" />
            </div>
            <div className="offer-banner">
              <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/1b9d513d-baa0-4763-ae53-7aacea30120d.png" className="offerimg" alt="Offer 1" />
            </div>
            <div className="offer-banner">
              <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/d013769c-b6bf-4210-95f0-7db2fb58eac3.png" className="offerimg" alt="Offer 3" />
            </div>
            <div className="offer-banner">
              <img src="/offers4.jpg" className="offerimg" alt="Offer 4" />
            </div>
            <div className="offer-banner">
              <img src="/offers5.jpg" className="offerimg" alt="Offer 5" />
            </div>
          </div>

          <button className="offerarrow right" onClick={() => scrollOffer(1)}>&#10095;</button>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h2 className="section-title">Recommended</h2>

        <div className="grid-4">
          <Link to="/bags" className="ui-card" data-aos="fade-up" data-aos-delay="100">
            <div className="ui-img">
              <img src="https://images.unsplash.com/photo-1713425884368-9079ba200325?q=80&w=411&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bags" />
            </div>
            <h4>Bags</h4>
            <p>Starting from ₹399</p>
          </Link>

          <Link to="/headphones" className="ui-card" data-aos="fade-up" data-aos-delay="200">
            <div className="ui-img">
              <img src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Headphones" />
            </div>
            <h4>Headphones</h4>
            <p>Up to 40% OFF</p>
          </Link>

          <Link to="/accessories" className="ui-card" data-aos="fade-up" data-aos-delay="300">
            <div className="ui-img">
              <img src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accessories" />
            </div>
            <h4>Accessories</h4>
            <p>Extra 10% OFF</p>
          </Link>

          <div className="ui-card" data-aos="fade-up" data-aos-delay="400">
            <div className="ui-img">
              <img src="https://plus.unsplash.com/premium_photo-1705554330163-2e0ccc1808e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHNob2VzfGVufDB8fDB8fHww" alt="Footwear" />
            </div>
            <h4>Footwear</h4>
            <p>Min. 50% OFF</p>
          </div>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h2 className="section-title">Fresh Arrivals</h2>

        <div className="fresh-grid">
          <Link to="/Women/EthnicWear" className="fresh-card">
            <div className="fresh-img">
              <img src="https://user-gen-media-assets.s3.amazonaws.com/gemini_images/8d3cae13-18cf-42e1-89cb-b8b9f1ac189a.png" alt="Ethnic Wear" />
            </div>
            <h4>Ethnic Wear</h4>
            <p>30% - 70% OFF</p>
          </Link>

          <Link to="/CasualWear" className="fresh-card">
            <div className="fresh-img">
              <img src="https://plus.unsplash.com/premium_photo-1690338237128-b32fedb44d55?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Casual Wear" />
            </div>
            <h4>Casual Wear</h4>
            <p>30% - 70% OFF</p>
          </Link>

          <Link to="/SportsWear" className="fresh-card">
            <div className="fresh-img">
              <img src="https://images.unsplash.com/photo-1643622782660-30dedcd8d75a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Active Wear" />
            </div>
            <h4>Active Wear</h4>
            <p>30% - 70% OFF</p>
          </Link>

          <Link to="/WesternWear" className="fresh-card">
            <div className="fresh-img">
              <img src="https://plus.unsplash.com/premium_photo-1673757110542-e2ce512bf60e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Western Wear" />
            </div>
            <h4>Western Wear</h4>
            <p>30% - 70% OFF</p>
          </Link>

          <Link to="/Men-EthnicWear" className="fresh-card">
            <div className="fresh-img">
              <img src="https://plus.unsplash.com/premium_photo-1682090768709-b00ac36f72de?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Men's Ethnic Wear" />
            </div>
            <h4>Men&apos;s Ethnic Wear</h4>
            <p>30% - 70% OFF</p>
          </Link>

          <Link to="/WorkWear" className="fresh-card">
            <div className="fresh-img">
              <img src="https://plus.unsplash.com/premium_photo-1661293826416-298937de5d26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Formal Wear" />
            </div>
            <h4>Formal Wear</h4>
            <p>30% - 70% OFF</p>
          </Link>
        </div>
      </section>

      <section className="nearby-section" data-aos="fade-up">
        <h2 className="section-title">Nearby Availabilities</h2>

        <div className="nearby-container">
          <button className="arrow6 left nearby-arrow" onClick={() => scroll64(-1)}>&#10094;</button>

          <div className="nearby-grid" id="nearbyScroll">
            <Link to="/Men" className="nearby-card">
              <div className="nearby-img">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvtIoCLK2u7cayMFiQOtfF-VfaEMcokW-YlCOc_HbkUU5CaluTxOOEncxpS90HQnldap9Lb0m5KxTDdlAjMWfnIMh5QrS3vsRHShAaH2U0_vqhoRG4URn9yOqZJHaO8zKNxavCL3kpSponeFLEnoGXNdX6raGeifIDcgtU_2yYXHPAInP-TDt2cc-IK4r-fS1fYGwipJ9MBdSluj6ypx3hzrSy71x7-RXMi-dUV5G57qM1dgzo02uqNIbPwEIVjvtYmgnHn2k6Uw" alt="Men" />
              </div>
              <p>Men</p>
            </Link>

            <Link to="/Women" className="nearby-card">
              <div className="nearby-img">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAip5cnIu9BqpCshSJg-bvY8RiDGM8hbLglb8qlJ8sCgftrSOLMYn-DF8Q7n8MmhYhO_TS2ZP09ZdsIfwKFicSlgeaSjE8X1W7JaRcN9AaYglLQEWMA-M9YMBaGyj122LYov0XAXdG7AHvJMI5-v_wDe_w8XAhnQwp-9l0GYflPEzy8RtXLMk7a8v3gJ7tacvwR5wbMDEv70l3H4z81QBBt1azkx2YxnMIHmjV-dZKKLDpaFlazADmkW5Wnmv058AxufhaSS7AGfQ" alt="Women" />
              </div>
              <p>Women</p>
            </Link>

            <div className="nearby-card">
              <div className="nearby-img">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBySPFBYwpkgIbt1_XykvVZ2fa6PT21ouvaOs2lkHW-7FFMNxn5SH3be5Mc9cHvQyk0MqZmxrjlULaMOoARkq0nKEGzo2uy0Tt7PZxCKZE_Cdbv5u3c4v3ZO9MyUTHaufKx46KKJ4GIct2_FCCPSsSB4fCrycCXCr7lX8vsnJcIK-oXtB6_RBPj7_hbKAGMKzU03NYNiibNccpb38qoPVIAnqepylkyTtso7VBB1EIiW275mZ21fs6rl7FU6lq9L6bNDrrAWkG2jg" alt="Kids" />
              </div>
              <p>Kids</p>
            </div>

            <Link to="/Makeup" className="nearby-card">
              <div className="nearby-img">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJYNIeD4tcwAdLv1dzIOlQDX2TmvcARN3vwWdcr-SnFSMMOb9if8rB1Um5NLIrsqvi9ZGfjMUKeztPYBXmgKbCkDE0eKPygjasmt3yRY-nyWky8Cl4CikbJGfZFIFT9DtdlZOuXJX3m5nWgWrD70bC6Nbe59vlFKE05iDhf9ph8x-UAaYCjagGE1bnft3orVQezgWEE_oQig1Yk0edE-91AmVp0hM7PBN-B1__MjhtDbA8NqmN8mtxA1itzj3y-vdf8EUAVb0MMA" alt="Makeup" />
              </div>
              <p>Makeup</p>
            </Link>

            <Link to="/Kitchenware" className="nearby-card">
              <div className="nearby-img">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuADsEya7vVpkHWhTzGLdBRX8ldQhHRD9fLhQV4zcrC8xB9s5-Sc3eekP9SGuyVATKIw363QC1FrwrBAkWkH6U4ZvSmyDvsAm80oBpPNX-Ih1_jqaCToIVWVmXKJbapm5O6kJM1cx3flREDGdhY3cPNwxe-B7sBffaJbojuQs4sW4xWFOJuLpwKYd3cpo3EexTUhvwoyTMN6ikdZ3p_FCCIqbiq3FlizZOXXvm4youo3TyJ-XpC18jMuPXM2i-SWXAXbubdeY1jHFw" alt="Home" />
              </div>
              <p>Home</p>
            </Link>

            <Link to="/WesternWear" className="nearby-card">
              <div className="nearby-img">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuArrGD7vcpKUieq7MjbhAMBo9FeKNB2gQ3e82I7KQfmoROA6COELoF_pGye_6j24HKKCV0V2rysL5uT-kGd7RUsY3NpPR1SNVHJVHyG1qum4ox1Dsk5nm-sb4riNIWdfD3W9LzZxCrU211xHLZIMdQDnrxydq17mPY8avvsFAbA3XOU6q4e_gwrv7NIiNJ7apw5lSiQ_sG5BeOz5NWWFdV-xbqFTo9WNFQBfOsjyTff8-B9GDCt8gPi-2YIBfVidi5lMq-ZzX6ECQ" alt="Gen-Z" />
              </div>
              <p>Gen-Z</p>
            </Link>

            <Link to="/AudioDevices" className="nearby-card">
              <div className="nearby-img">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9TrkWsImVyCyfGBHR7sBIhSNa9_x4OcWNzoFKgcYg9TeUoGrxWYGta958LT6vwuPTRNG5djHRKD7Di1SWpHsTc9uU99OR120T-fRw5tiutKas8DeoGzFgntwU27rd-J5KPm2cRgM-zHOKcxtgAvcB5qS_TOiEUCeRRRmBGOZfO0p5dqRg1yjaJyvvZi4rWC1cyjrzjlhcbJMxY8uJXNWIf4IBc-4qoyB4ms1ryJJ3KPTepFNW1Ke_h_Vu3XSwIOra2-4Dsv03xA" alt="Electronics" />
              </div>
              <p>Electronics</p>
            </Link>

            <Link to="/Women/FootWear" className="nearby-card">
              <div className="nearby-img">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm7hWJl8b_vwlXAZWeVCAGbRcaQyBBeQaiNTnluBK-9NXN4R5u9aBd3BMd52qzqwYWxCk-K_M2ghIlIJ1rdQsOMlKBt2G2fmNxfLOvf4lE7hQVZSVHEKmY1Mzm-ag3GnSwNiI8Um2j25jdAnFDfc5gsiesRBzNwxbgHNDYfSBuILrIwjztZvLtj2ec0GTYltjrtgHBK8XWG-BiX5Su3CDgyTzTgRA4UuVmlgsYSTnWutJDCECtkfvG7F-MXNPBw0-_KgPkGmwk5A" alt="Heels" />
              </div>
              <p>Heels</p>
            </Link>
          </div>

          <button className="arrow6 right nearby-arrow" onClick={() => scroll64(1)}>&#10095;</button>
        </div>
      </section>

      <section id="section6" data-aos="fade-right" style={{ background: "#F3F4F6", padding: "56px 0", position: "relative" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", margin: "0 0 24px 40px", color: "#111827" }}>
          Discounts
        </h2>

        <div style={{ position: "relative", marginBottom: "40px" }}>
          <button className="arrow6 left" onClick={() => scroll62(-1)}>&#10094;</button>

          <div className="discount-scroll" id="discountScroll">
            <div className="card6" data-aos="fade-up" data-aos-delay="100">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA54y1cIbMRisecxn_rPwuQMT9uwb1pAOAEY-NdFme0ey06sMzRB0j8QQyN3EdhcG-pkjRUKFA5LLz2Rhi1gAjpqVrrJzg3hPJKwx26rifITX4jRe2VAS_zPKRCw-mQm6z1z0vXP0gC2VBbFRGx473iaFJT59lGpd9DrlnEk9YyCJnwFqUzbbfcLf9Co5KQnykYm2upgMiQNQGtacWQZX9sNaNnbpFvU9Ld-21jp42aZpTeO9uPd8TkQke7CPps5Ly8LI8HwOWVJw" alt="Sneaker" />
              <h3>Sneaker Steals</h3>
              <p>Grab a pair before it's gone!</p>
            </div>

            <div className="card6" data-aos="fade-up" data-aos-delay="200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1-jC9X44q2s4fUNWktIASj2lVAzW_1KmTnet5owkXDVoPDkMS4--3LjAhdzP-sRXiQmCkGFxXv4KKnlJkjDtgzaziLpujOQwPYje-NaSDMiJenwEpC6PXXhte8c7eZ9y3CYXBpAjNU4yaWQ2_rHyBfC774T_5bqJdcFWRpf_fnLyH-CN_N7YO0WCmQLDUYr7lC9cxDteOpi8BeKKZWEWUgOxyIEKdTsCuAxwWOu-7QOHLgpG1K0PNqe0VaDqs69YMsocuIGHEuQ" alt="Winter" />
              <h3>Winter Clearance</h3>
              <p>Up to 60% off</p>
            </div>

            <div className="card6" data-aos="fade-up" data-aos-delay="300">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1S53W06omoQuM01y48U0Ngd7Z1tqarhD_VhMmsxJGxmAota3Nq7PHCDSDnabxIV6WSbU05TlTASgmbNpHDWMxk37Du2HJrzPojE29rNUxY9yHcPZHl0eeJAcMCmxAVC_ypM7Im1NsTq83O174pR6Mu-RjHDZEhX4S_FlMmHZp8Kvp1CsYFGI-kKTaxcJswcAcLg_Kak-W-6LRJhesBaCHhVvNa_FUaUx_cTrn1id9-3zMdZb96aSYAUq1G0-0ziiPeOPabH6dQA" alt="Ethnic" />
              <h3>Ethnic Treasure</h3>
              <p>Handpicked styles</p>
            </div>

            <div className="card6" data-aos="fade-up" data-aos-delay="400">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8XDApRhLMXEf3Mor62JoIMQr-FsK2xjg-5vOx18TASQE8AQqUf3CBCV3Gr75B4FS9VdV46_BTJC_gP7nzSb8VxaQeHeKUH_9kFdyaXZrlmuQyMeNPab7RM_B6pZXbLQBFEUO4-n4eQwwKtutFboixNngzvLbq-qvuPubzRa_KrSVorCxOoun2vb0qDM96HcdUn0dFu208gbcTHXJKuVLufFJpMg1MvZRWKzmn_IxOLs3BbiW41t4O6exSjlkrDlgasrqM_jmKIA" alt="Denim" />
              <h3>Denim Days</h3>
              <p>Min. 40% off</p>
            </div>

            <div className="card6" data-aos="fade-up" data-aos-delay="500">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvqJ2XXdzYNUKQtvXj7hC0zh-CS0YODpDx1lC3V-hiOQlUfs8qsq_15JDP6NJCzvyAiekyGO8efHjKVB9fjQGbuh70LIf3ruLYsxelbuZ6LT9Qz-vWR5vfdpqlopHNcDh3w8Dv8sgPLnqKO2nhV5Jy3kkprfxzqSz7MzeuuTgG0BJJDKsS8XJc8YDNqoL18rZwzU86RbSrPpB01MXSzRcPm5s-4hO53p2GERTcF8vm1C3LnZhZf6G58VhEoHIuZrfgTEO1yYBzgQ" alt="Lipstick" />
              <h3>Lipstick Love</h3>
              <p>Flat 20% off</p>
            </div>

            <div className="card6" data-aos="fade-up" data-aos-delay="600">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7j8OT0Nh0otaG4m0yFOy1jQiQraKWgdcVYXodBFdDDHZuQpT_D5gtwkV2RgnK4AX2dj6c_pIg5yT5c1nnk9AgNGqyMMFwM0yw3_4hJGhp9F9lP-CIZ-chrDK9CLeWfaWkwqq0MWrFHd_YRN9yglQI9ubmI4a7BRFk39Ulaij9w1DkwRq2bHzDHzpvce4jW1MWa6cogT6qDiZWFL51fH0-JHrYvn_4_qDc2AQsQQO9CJsX-vATyYEvfKdeNYJW9ALqWBaX8clsIQ" alt="Skincare" />
              <h3>Skincare Essentials</h3>
              <p>Starting at ₹199</p>
            </div>
          </div>

          <button className="arrow6 right" onClick={() => scroll62(1)}>&#10095;</button>
        </div>

        <div style={{ position: "relative" }}>
          <button className="arrow6 left" onClick={() => scroll63(-1)}>&#10094;</button>

          <div className="discount-scroll" id="discountScroll2">
            <div className="card6" data-aos="fade-up" data-aos-delay="100">
              <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/02ed9626-876b-41b7-8b48-7c760c6bd9a7.png" alt="Tech" />
              <h3>Tech Deals</h3>
              <p>Up to 50% off gadgets</p>
            </div>

            <div className="card6" data-aos="fade-up" data-aos-delay="200">
              <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/ae87a5cd-64a8-4185-be93-1e8ecd797982.png" alt="Fashion" />
              <h3>Fashion Forward</h3>
              <p>Trendy styles 30% off</p>
            </div>

            <div className="card6" data-aos="fade-up" data-aos-delay="300">
              <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/5e3bdbb7-ca25-44b6-bf40-1650f6b3fb73.png" alt="Home" />
              <h3>Home Decor</h3>
              <p>Refresh your space</p>
            </div>

            <div className="card6" data-aos="fade-up" data-aos-delay="400">
              <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/098148b8-4781-4e1a-92a6-82675cb62105.png" alt="Sports" />
              <h3>Sports Gear</h3>
              <p>Fitness essentials</p>
            </div>

            <div className="card6" data-aos="fade-up" data-aos-delay="500">
              <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/56c05a2a-6523-43a4-ba6f-7d736978d488.png" alt="Beauty" />
              <h3>Beauty Box</h3>
              <p>Glow up deals</p>
            </div>

            <div className="card6" data-aos="fade-up" data-aos-delay="600">
              <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/e3de0046-43f4-4b0d-84e3-8fd0dc869640.png" alt="Books" />
              <h3>Book Corner</h3>
              <p>Knowledge at discount</p>
            </div>
          </div>

          <button className="arrow6 right" onClick={() => scroll63(1)}>&#10095;</button>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h2 className="footer-logo">ZPIN</h2>
            <p>Style at your door, in just 12 hours. Because waiting is so last season.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Top Picks</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

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
              <img src="/logo 2.png" alt="logo" />
              <p>Pune, Maharashtra<br />
                +91 12345 54321<br />
                support@support.in</p>
            </div>

            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Zpin. All rights reserved.</p>
          <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
