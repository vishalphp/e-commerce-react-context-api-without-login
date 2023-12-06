import React, {useRef} from 'react';
import Breadcrumbs from '../sections/common/Breadcrumbs';
import CheckoutForm from '../sections/checkout/CheckoutForm';
import ShoppingCart from '../sections/checkout/ShoppingCart';
import PaymentCardTotal from '../sections/checkout/PaymentCardTotal';
import './checkout.scss';

export default function Checkout() {

  const submitClickRef = useRef();

  const submitRefButton = () =>{
    submitClickRef.current.click();
  }

  return (
    <>
     <Breadcrumbs />
     <CheckoutForm submitClickRefHandler={submitClickRef}/>
     <br/>
     <ShoppingCart />
     <br/> <br/>
     <PaymentCardTotal />
     <section class="section section-sm section-last bg-default text-md-left processbuttonbox">
        <div class="container">
          <div class="row row-50 justify-content-center">
             <button type='submit' class="button button-lg button-primary button-zakaria" onClick={submitRefButton} >Order Now</button>
          </div>
        </div>
      </section>
      <br/>
    </>
  )
}
