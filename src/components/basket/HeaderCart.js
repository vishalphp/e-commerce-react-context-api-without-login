import React, {useContext,useState} from 'react';
import '../../asset/styles/ui/headercart.scss';
import { BsCart3 } from "react-icons/bs";
import CartContext from '../../context/CartContext';
import {Link} from 'react-router-dom';
import { FaMinus, FaPlus } from "react-icons/fa6";


export default function HeaderCart() {

  const cartContextData = useContext(CartContext);
  const cartLength = cartContextData.cartCtxData.products.reduce((accu, currentQty)=> accu + currentQty.qty, 0);
  //const cartLength = 0;

  const [openCart, setOpenCart] = useState(false);

  const openCartInlineBox = () =>{
    setOpenCart(!openCart);
  }
 
  const plusDefaultCountHandler =(prod)=>{
    cartContextData.addToCart(prod);
  }
  const minusDefaultCountHandler=(prod)=>{
    cartContextData.addToCart(prod, 1, 0);
  }

  return (
    <>
      <div className="vk-navbar-basket-wrap">
                    <button className="vk-navbar-basket fl-bigmug-line-shopping202 toggle-original" onClick={openCartInlineBox}><BsCart3 /><span>{cartLength}</span></button>
                  {openCart ? 
                    <div className="cart-inline toggle-original-elements">
                      <div className="cart-inline-header">
                        <h5 className="cart-inline-title">In cart:<span> {cartLength} </span> Products</h5>
                        <h6 className="cart-inline-title">Total price:<span> ${cartContextData.cartCtxData.cartTotalAmount > 0 ? cartContextData.cartCtxData.cartTotalAmount : 0}</span></h6>
                      </div>
                      <div className="cart-inline-body">

                        {cartContextData?.cartCtxData?.products.map((prod, index) =>   <div className="cart-inline-item" key={index}>
                          <div className="unit unit-spacing-sm align-items-center">
                            <div className="unit-left"><a className="cart-inline-figure" href="http://localhost:3000/single-product.html"><img src={prod.image} alt={prod.title} width="100" /></a></div>
                            <div className="unit-body-cart">
                              <h6 className="cart-inline-name"><a href="http://localhost:3000/single-product.html">{prod.title}</a></h6>
                              <div>
                                <div className="group-xs group-middle">
                                <div class="table-product-stepper">
                                          <div class="stepper "><input class="form-input stepper-input" type="number" value={prod.qty} min="1" max="1000" /><span class="stepper-arrow up" onClick={()=>plusDefaultCountHandler(prod)}><FaPlus /></span><span class="stepper-arrow down"  onClick={()=>minusDefaultCountHandler(prod)}><FaMinus /></span></div>
                                </div>
                                  <h6 className="cart-inline-title">${prod.price}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>)}


                      </div>
                      <div className="cart-inline-footer">
                        <div className="group-sm-oo"><Link className="button button-default-outline-2 button-zakaria" to="cart">Go to cart</Link><Link className="button button-primary button-zakaria" to="checkout">Checkout</Link></div>
                      </div>
                    </div>
                   : ''}

                  </div>
    </>
  )
}
