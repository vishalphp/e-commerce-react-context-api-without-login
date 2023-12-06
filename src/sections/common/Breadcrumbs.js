import React from 'react';
import bgfull from '../../asset/images/bg-image-1.jpg';
import './breadcrum.scss';
import { useLocation } from 'react-router-dom'

export default function Breadcrumbs({banner=true, leftalign=false}) {
  const location = useLocation();
  const locHistory = location.pathname.split('/');
  
  return (
    <>
       <section class="breadcrumbs-custom">
        {banner ? <div class="parallax-container"><div class="material-parallax parallax"><img src={bgfull} alt="" /></div>
          <div class="breadcrumbs-custom-body parallax-content">
            <div class="container">
              <h2 class="breadcrumbs-custom-title">{locHistory.join(" ")}</h2>
            </div>
          </div>
        </div> : ''}
        <div class={`breadcrumbs-custom-footer ${leftalign ? 'makeleft' : ''}`}>
          <div class="container">
            <ul class="breadcrumbs-custom-path">
              {
                locHistory.map(bread=> <li>{bread ===''? 'Home': bread}</li>)
              }
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
