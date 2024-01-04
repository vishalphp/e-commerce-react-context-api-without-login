import React from 'react';
import '../../asset/styles/ui/menu.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <>
     <div className="vk-navbar-main-outer">
              <div className="vk-navbar-main">
                <div className="vk-navbar-nav-wrap toggle-original-elements">
                  <ul className="vk-navbar-nav">
                    <li className="vk-nav-item active"><Link className="vk-nav-link" to="/">Home</Link>
                    </li>
                    <li className="vk-nav-item vk-navbar--has-dropdown vk-navbar-submenu"><Link className="vk-nav-link" to="/shop">Shop</Link><span className="vk-navbar-submenu-toggle"></span>
                      <ul className="vk-menu vk-navbar-dropdown">
                        <li className="vk-dropdown-item"><Link className="vk-dropdown-link" to="http://localhost:3000">Ecwid Shop</Link></li>
                        <li className="vk-dropdown-item"><Link className="vk-dropdown-link" to="http://localhost:3000">Grid Shop</Link></li>
                        <li className="vk-dropdown-item"><Link className="vk-dropdown-link" to="http://localhost:3000">Shop List</Link></li>
                        <li className="vk-dropdown-item"><Link className="vk-dropdown-link" to="http://localhost:3000">Single Product</Link></li>
                        <li className="vk-dropdown-item"><Link className="vk-dropdown-link" to="http://localhost:3000">Cart Page</Link></li>
                        <li className="vk-dropdown-item"><Link className="vk-dropdown-link" to="http://localhost:3000">Checkout</Link></li>
                      </ul>
                    </li>
                    <li className="vk-nav-item vk-navbar--has-dropdown vk-navbar-submenu"><Link className="vk-nav-link" to="http://localhost:3000">Pages</Link><span className="vk-navbar-submenu-toggle"></span>
                      <ul className="vk-menu vk-navbar-dropdown">
                        <li className="vk-dropdown-item"><Link className="vk-dropdown-link" to="http://localhost:3000">What We Offer</Link></li>
                        <li className="vk-dropdown-item"><Link className="vk-dropdown-link" to="http://localhost:3000">Our Team</Link></li>
                        <li className="vk-dropdown-item"><Link className="vk-dropdown-link" to="http://localhost:3000">Testimonials</Link></li>
                      </ul>
                    </li>
                    <li className="vk-nav-item vk-navbar--has-megamenu vk-navbar-submenu"><Link className="vk-nav-link" to="http://localhost:3000">Elements</Link><span className="vk-navbar-submenu-toggle"></span>
                      <ul className="vk-menu vk-navbar-megamenu vk-navbar-open-left">
                        <li className="vk-megamenu-item">
                          <div className="vk-megamenu-title"><span className="vk-megamenu-icon mdi mdi-apps"></span><span className="vk-megamenu-text">Elements</span></div>
                          <ul className="vk-megamenu-list vk-megamenu-list-2">
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000/">Typography</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000/">Icon lists</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000">Progress bars</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000/">Calls to action</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000">Tabs &amp; accordions</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000">Buttons</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000">Tables</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000">Forms</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000">Counters</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000/">Grid system</Link></li>
                          </ul>
                        </li>
                        <li className="vk-megamenu-item flex-grow-1 flex-shrink-0">
                          <div className="vk-megamenu-title"><span className="vk-megamenu-icon mdi mdi-layers"></span><span className="vk-megamenu-text">Additional pages</span></div>
                          <ul className="vk-megamenu-list">
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000/">404 Page</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000/">Coming Soon</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000">Contact Us</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000">Privacy Policy</Link></li>
                            <li className="vk-megamenu-list-item"><Link className="vk-megamenu-list-link" to="http://localhost:3000">Search Results</Link></li>
                          </ul>
                        </li>
                        <li className="vk-megamenu-item vk-megamenu-banner">
                          <div className="vk-megamenu-title"><span className="vk-megamenu-icon mdi mdi-flower"></span><span className="vk-megamenu-text">welcome to our store</span></div><Link className="banner-classNameic" to="http://localhost:3000/"><img src="./Home_files/banner-1-300x202.jpg" alt="" width="300" height="202" /></Link>
                        </li>
                      </ul>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>

    </>
  )
}
