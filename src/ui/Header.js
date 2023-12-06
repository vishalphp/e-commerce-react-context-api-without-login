import React from 'react';
import '../asset/styles/ui/header.scss';
import Logo from '../components/logo/Logo';
import HeaderAbout from '../components/headerabout/HeaderAbout';
import HeaderSearch from '../components/search/HeaderSearch';
import HeaderCart from '../components/basket/HeaderCart';
import HeaderLang from '../components/langauge/HeaderLang';
import Menu from '../components/navigation/Menu';

export default function Header() {
  return (
    <>
    
    <header className="section page-header header-creative-wrap">
        <div className="vk-navbar-wrap" >
          <nav className="vk-navbar vk-navbar-creative vk-navbar-logo-mobile vk-navbar-original vk-navbar-static" data-layout="vk-navbar-fixed" data-sm-layout="vk-navbar-fixed" data-md-layout="vk-navbar-fixed" data-md-device-layout="vk-navbar-fixed" data-lg-layout="vk-navbar-static" data-lg-device-layout="vk-navbar-fixed" data-xl-layout="vk-navbar-static" data-xl-device-layout="vk-navbar-static" data-xxl-layout="vk-navbar-static" data-xxl-device-layout="vk-navbar-static" data-lg-stick-up-offset="100px" data-xl-stick-up-offset="112px" data-xxl-stick-up-offset="132px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
            <div className="vk-navbar-collapse-toggle vk-navbar-fixed-element-1 toggle-original" data-vk-navbar-toggle=".vk-navbar-collapse"><span></span></div>
            <div className="vk-navbar-aside-outer">
              <div className="vk-navbar-aside">
                <Logo />
                <HeaderAbout />
                <div className="vk-navbar-aside-element">
                   <HeaderSearch />
                   <HeaderCart />
                   <HeaderLang />
                </div>
              </div>
            </div>
            <Menu />
          </nav>
        </div>
      </header>
    
    </>
  )
}
