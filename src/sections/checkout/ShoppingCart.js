import React, {useContext} from 'react';
import CartContext from '../../context/CartContext';

export default function ShoppingCart() {
  const cartContextData = useContext(CartContext);
  return (
    <>
          <section class="section section-sm bg-default text-md-left">
        <div class="container">
          <h3 class="font-weight-medium">Your shopping cart</h3>
          <br/>
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
                  <a class="table-cart-link" href="/single-product.html">{prod.title}</a>
                  </td>
                  <td>${prod.price}</td>
                  <td>
                    <div class="table-cart-stepper">
                      <div class="stepper "><input class="form-input stepper-input" type="number" data-zeros="true" value={prod.qty} min="1" max="1000" /></div>
                    </div>
                  </td>
                  <td>${prod.totalprice}</td>
                </tr>)}
               
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
