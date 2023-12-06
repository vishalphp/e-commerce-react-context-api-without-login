import React from 'react';
import '../../asset/styles/ui/headerabout.scss';

export default function HeaderAbout() {
  return (
    <>
       <div className="vk-navbar-collapse toggle-original-elements">
                  <ul className="contacts-classNameic">
                    <li><span className="contacts-classic-title">Call us:</span> <a href="tel:#">+1 (x9x) 1xx 4x6 34</a>
                    </li>
                    <li><a className="link-primary-2" href="mailto:#">info@demoscss.org</a></li>
                  </ul><a className="vk-navbar-basket vk-navbar-basket-mobile fl-bigmug-line-shopping202" href="http://localhost:3000/cart-page.html"><span>2</span></a>
                </div>
    </>
  )
}
