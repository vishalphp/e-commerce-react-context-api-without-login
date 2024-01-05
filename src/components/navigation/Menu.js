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
                    
                    </li>
                    <li className="vk-nav-item vk-navbar--has-dropdown vk-navbar-submenu"><Link className="vk-nav-link" to="http://localhost:3000">Pages</Link><span className="vk-navbar-submenu-toggle"></span>
                    
                    </li>
                    <li className="vk-nav-item vk-navbar--has-megamenu vk-navbar-submenu"><Link className="vk-nav-link" to="http://localhost:3000/document">Document</Link><span className="vk-navbar-submenu-toggle"></span>
                     
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>

    </>
  )
}
