import React, {useContext} from 'react';
import './cart.scss';
import CartContext from '../../context/CartContext';
import {Link} from 'react-router-dom';
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function CartSection() {
  const cartContextData = useContext(CartContext);
  const cartLength = cartContextData.cartCtxData.products.reduce((accu, currentQty)=> accu + currentQty.qty, 0);
 

  const plusDefaultCountHandler =(prod)=>{
    cartContextData.addToCart(prod);
  }
  const minusDefaultCountHandler=(prod)=>{
    cartContextData.addToCart(prod, 1, 0);
  }

  return (
    <>
         <section class="section section-xl bg-default">
        <div class="container">
          <div class="table-custom-responsive">
            <table class="table-custom table-cart">
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
              {cartContextData?.cartCtxData?.products.map((prod, index) => <tr key={index}>
                  <td><a class="table-cart-figure" href="/single-product.html">
                    <img src={prod.image} alt={prod.title} />
                    </a>
                  </td>
                  <td>
                  <Link class="table-cart-link" to={`/product/${prod.id}`}>{prod.title}</Link>
                  </td>
                  <td>${prod.price}</td>
                  <td>
                  <div class="table-product-stepper">
                                          <div class="stepper "><input class="form-input stepper-input" type="number" value={prod.qty} min="1" max="1000" /><span class="stepper-arrow up" onClick={()=>plusDefaultCountHandler(prod)}><FaPlus /></span><span class="stepper-arrow down"  onClick={()=>minusDefaultCountHandler(prod)}><FaMinus /></span></div>
                    </div>
                  </td>
                  <td>${prod.totalprice}</td>
                </tr>)}
                
               
              </tbody>
            </table>
          </div>
          <div class="cartcoupon group-xl group-justify justify-content-center justify-content-md-between">
            <div class="lineonecart">
              <form class="rd-form rd-mailform rd-form-inline rd-form-coupon" novalidate="novalidate">
                <div class="form-wrap">
                  <input class="form-input form-input-inverse" id="coupon-code" type="text" name="text" />
                  <label class="form-label rd-input-label" for="coupon-code">Coupon code</label>
                </div>
                <div class="form-button">
                  <button class="button button-lg button-default-outline-2 button-zakaria" type="submit">Apply</button>
                </div>
              </form>
            </div>
            <div class="linetwocart">
              <div class="group-xl group-middle">
                <div>
                  <div class="group-md group-middle">
                    <div class="heading-5 font-weight-medium text-gray-500">Total</div>
                    <div class="heading-3 font-weight-normal">${cartContextData.cartCtxData.cartTotalAmount}</div>
                  </div>
                </div><Link class="button button-lg button-primary button-zakaria" to="/checkout">Proceed to checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
