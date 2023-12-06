import React from 'react';
import '../asset/styles/ui/footer.scss';
import { FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle } from "react-icons/fa";



export default function Footer() {
  return (
    <>
    
    <footer className="section footer-creative footer-creative-2">
        <div className="footer-classNameic-body section-lg section-inset-4 context-dark">
          <div className="container">
            <div className="row row-40 row-md-50 justify-content-sm-between">
              <div className="col-lg-5 wow fadeInRight" >
                <div className="inset-xl-right-55">
                  <h4 className="footer-creative-title">About us</h4>
                  <p>Our store is more than just another average online cosmetic shop. We sell not only top quality perfumes, but give our customers positive online shopping experience. We will be glad to become your No. 1 cosmetic retailer.</p>
                 
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 wow fadeInRight" data-wow-delay=".1s">
                <h4 className="footer-creative-title">Contacts</h4>
                <ul className="contacts-holly">
                  <li>
                    <div className="contacts-holly-title">Phone</div>
                    <div className="contacts-holly-text"><a href="tel:#">+1 (x4x) 1xx 2x4 99</a></div>
                  </li>
                  <li>
                    <div className="contacts-holly-title">Address</div>
                    <div className="contacts-holly-text"><a href="http://localhost:3000/index.html#">453 Ave, 2th Floor<br />CA 9xxx1 USA</a></div>
                  </li>
                  <li>
                    <div className="contacts-holly-title">E-mail</div>
                    <div className="contacts-holly-text"><a href="mailto:#">info@demomail.org</a></div>
                  </li>
                </ul>
              </div>
              <div className="col-sm-5 col-lg-2 wow fadeInRight" data-wow-delay=".2s">
                <h4 className="footer-creative-title">Menu</h4>
                <ul className="footer-creative-list">
                  <li><a href="http://localhost:3000/index.html#">History</a></li>
                  <li><a href="http://localhost:3000/our-team.html">Our Team</a></li>
                  <li><a href="http://localhost:3000/index.html#">FAQ</a></li>
                  <li><a href="http://localhost:3000/index.html#">Products</a></li>
                  <li><a href="http://localhost:3000/index.html#">Events</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-creative-panel">
          <div className="container">
            <div className="row row-10 align-items-center justify-content-sm-between">
              <div className="col-sm-auto">
                <p className="rights"><span>©&nbsp; </span><span className="copyright-year">2023</span><span>&nbsp;</span><span>Cosmetic</span><span>.&nbsp; All rights reserved.</span><span>&nbsp;</span><a href="http://localhost:3000/terms-of-use.html">Privacy Policy</a></p>
              </div>
              <div className="col-sm-auto">
                <ul className="list-inline list-social list-inline-sm socialsm">
                  <li><FaFacebook /></li>
                  <li><FaTwitter /></li>
                  <li><FaInstagram /></li>
                  <li><FaGoogle /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
