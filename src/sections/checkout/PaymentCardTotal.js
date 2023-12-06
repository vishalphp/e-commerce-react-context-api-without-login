import React, {useContext} from 'react';
import CartContext from '../../context/CartContext';
import {Link} from 'react-router-dom'


export default function PaymentCardTotal() {
  const cartContextData = useContext(CartContext);
  return (
    <>
      <section class="section section-sm section-last bg-default text-md-left">
        <div class="container">
          <div class="row row-50 justify-content-center">
            <div class="col-md-10 col-lg-6">
              <h3 class="font-weight-medium">Payment methods</h3>
              <div class="box-radio">
                <div class="radio-panel">
                  <label class="radio-inline active">
                    <input name="input-group-radio" value="checkbox-1" type="radio" checked="" class="radio-custom" /><span class="radio-custom-dummy"></span>Direct Bank Transfer
                  </label>
                  <div class="radio-panel-content">
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will be shipped right away.</p>
                  </div>
                </div>
                <div class="radio-panel">
                  <label class="radio-inline">
                    <input name="input-group-radio" value="checkbox-1" type="radio" class="radio-custom" /><span class="radio-custom-dummy"></span>PayPal
                  </label>
                  <div class="radio-panel-content">
                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                  </div>
                </div>
                <div class="radio-panel">
                  <label class="radio-inline">
                    <input name="input-group-radio" value="checkbox-1" type="radio" class="radio-custom" /><span class="radio-custom-dummy"></span>Cheque Payment
                  </label>
                  <div class="radio-panel-content">
                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-10 col-lg-6">
              <h3 class="font-weight-medium">Cart total</h3>
              <br/>
              <div class="table-custom-responsive">
                <table class="table-custom table-custom-primary table-checkout">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>${cartContextData.cartCtxData.cartTotalAmount}</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>${cartContextData.cartCtxData.cartTotalAmount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    </>
  )
}
