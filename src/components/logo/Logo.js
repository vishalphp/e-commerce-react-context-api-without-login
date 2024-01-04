import React from 'react';
import '../../asset/styles/ui/logo.scss';
import { Link } from 'react-router-dom';
import logo from '../../asset/images/demoscsslogo.PNG';

export default function Logo() {
  return (
    <>
    <div className="vk-navbar-panel">
                  <button className="vk-navbar-toggle toggle-original" data-vk-navbar-toggle=".vk-navbar-nav-wrap"><span></span></button>
                  <div className="vk-navbar-brand">
                    <Link className="brand" to="/"><img src={logo} alt="logo" /></Link>
                  </div>
                </div>
    </>
  )
}
