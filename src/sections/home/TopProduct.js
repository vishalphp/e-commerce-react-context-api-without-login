import React, {useContext} from 'react';
import '../shop/product.scss';
import { FaShoppingCart  } from "react-icons/fa";
import ProductContext from '../../context/ProductContext';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function TopProduct() {

  const productContextData = useContext(ProductContext);
  const cartContextData = useContext(CartContext);


  return (
    <>
    
    <section className="section section-xxl bg-gray-1">
        <div className="container">
          <h2 className="title-style-8 wow fadeScale">Top Products</h2>
          <div className="isotope-wrap">
            <div className="row row-30 row-lg-50 isotope">

              {productContextData.productsList.products.map((product, index) =>  <div key={index} className="col-sm-6 col-md-4 col-lg-3 isotope-item" data-filter="Type 1">
                
                <article className={`product product-${index} wow fadeInRight`} data-wow-delay=".1s">
                  <div className="product-body">
                    <div className="product-figure"><img src={product.image} alt={product.title} height="160"  />
                    </div>
                    <h5 className="product-title"><Link to={`product/${product.id}`}>{product.title}</Link></h5>
                    <div className="product-price-wrap">
                      <div className="product-price product-price-old">${product.price}</div>
                    </div>
                  </div>
                  <div className="product-button-wrap">
                    <div className="product-button"><div className="zindexinc button button-primary button-zakaria fl-bigmug-line-shopping202" onClick={() => cartContextData.addToCart(product)}><FaShoppingCart /></div></div>
                  </div>
                </article>
  </div>)}
            
             
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}
