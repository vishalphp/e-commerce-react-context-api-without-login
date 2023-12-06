import React, {useContext} from 'react';
import './product.scss';
import { FaShoppingCart  } from "react-icons/fa";
import ProductContext from '../../context/ProductContext';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';


export default function Products(props) {

  const productContextData = useContext(ProductContext);
  const cartContextData = useContext(CartContext);

  const productsRangefilter = productContextData.productsList.products.filter(prod => {
   return (
           ((Number(prod.price) >=  Number(props.rangeSliderFilter.minimumvalue)) && (Number(prod.price) <=  Number(props.rangeSliderFilter.maximumValue))) &&
           (props.categoryFilter.length > 0 ? props.categoryFilter.indexOf(prod.category) !== -1 : prod.category )
          )    
});
 

  return (
    <>
       <div class="col-lg-8 col-xl-9">
              <div class="product-top-panel group-md">
                <p class="product-top-panel-title">Showing {productsRangefilter.length} results</p>
                <div>
                  <div class="group-sm group-middle">
                    <div class="product-top-panel-sorting">
                      <div class="select2-container" id="s2id_autogen3"><a href="javascript:void(0)" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-4">Sort by newness</span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><label for="s2id_autogen4" class="select2-offscreen"></label><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-4" id="s2id_autogen4" /><div class="select2-drop select2-display-none">   <div class="select2-search select2-search-hidden select2-offscreen">       <label for="s2id_autogen4_search" class="select2-offscreen"></label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-4" id="s2id_autogen4_search" placeholder="" />   </div>   <ul class="select2-results" role="listbox" id="select2-results-4">   </ul></div></div><select data-minimum-results-for-search="Infinity" tabindex="-1" title="">
                        <option value="1">Sort by newness</option>
                        <option value="2">Sort by popularity</option>
                        <option value="3">Sort by alphabet</option>
                      </select>
                    </div>
                    <div class="product-view-toggle">
                      <a class="mdi mdi-apps product-view-link product-view-grid active" href="http://localhost:3000/shop"></a>
                    <a class="mdi mdi-format-list-bulleted product-view-link product-view-list" href="http://localhost:3000/shop"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row row-30 row-lg-50 m30">
              
              {productsRangefilter.map((product, index) =>  <div key={index} className="col-sm-6 col-md-4 col-lg-3 isotope-item" data-filter="Type 1">
                
                <article className={`product product-${index} wow fadeInRight`} data-wow-delay=".1s">
                  <div className="product-body">
                    <div className="product-figure"><img src={product.image} alt={product.title} height="160"  />
                    </div>
                    <h5 className="product-title"><Link to={`/product/${product.id}`} >{product.title}</Link></h5>
                    <div className="product-price-wrap">
                      <div className="product-price product-price-old">${product.price}</div>
                    </div>
                  </div>
                  <div className="product-button-wrap">
                    <div className="product-button"><div className="zindexinc button button-primary button-zakaria fl-bigmug-line-shopping202" onClick={() => cartContextData.addToCart(product)} ><FaShoppingCart /></div></div>
                  </div>
                </article>
              </div>)}
            
             
              </div>
              {/* <div class="pagination-wrap">
                <nav aria-label="Page navigation">
                  <ul class="pagination">
                    <li class="page-item page-item-control disabled"><a class="page-link" href="http://localhost:3000/shop" aria-label="Previous"><span class="icon" aria-hidden="true"></span></a></li>
                    <li class="page-item active"><span class="page-link">1</span></li>
                    <li class="page-item"><a class="page-link" href="http://localhost:3000/shop">2</a></li>
                    <li class="page-item"><a class="page-link" href="http://localhost:3000/shop">3</a></li>
                    <li class="page-item page-item-control"><a class="page-link" href="http://localhost:3000/shop" aria-label="Next"><span class="icon" aria-hidden="true"></span></a></li>
                  </ul>
                </nav>
              </div>
              */}
            </div>
    </>
  )
}
