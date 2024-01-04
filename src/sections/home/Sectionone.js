import React from 'react';
import bgfull from '../../asset/images/bg-image-1.jpg';
import '../../asset/styles/pages/home/sectionone.scss';

export default function Sectionone() {
  return (
     <>
     
     <section class="section parallax-container section-custom-1" ><div class="material-parallax parallax"><img src={bgfull} alt="banner imagess" /></div>
        <div class="parallax-content section-md text-left section-first-2 title-parallax">
          <div class="container">
            <div class="box-info-renee-decor"></div>
            <div class="box-info-renee-subtitle wow fadeInLeft">Most Popular Cosmetic &amp; Cologne Brands</div>
            <h2 class="box-info-renee-title wow fadeScale">Best Fragrances</h2>
            <p class="box-info-renee-text wow fadeInRight">Cosmetics is the place where you can get high-quality fragrances from certified consultants, who are not just professionals but also talented masters.</p><a class="link-classic box-info-renee-link wow fadeInUp" href="#" >view collection</a>
          </div>
        </div>
      </section>
     
     </>
  )
}
