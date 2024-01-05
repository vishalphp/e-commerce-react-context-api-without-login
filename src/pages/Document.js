import React from 'react'

export default function Document() {
  return (
    <>
    <div className='container'>
        <br/>
    <h1>Ecommerce Store With Context API With Firebase</h1>
    

    <h3 className='morereduceti'>Project Goals and Objectives:</h3>

    <p>The project is designed with Sass and context API used to store current product, cart, and logged-in user data to manage applications.</p> 

    <p>The project has a home page, shop page, product single page, cart, checkout, and login page.</p>

    <p>From the shop page, we can filter products and change product quantities to add products to the cart. From the checkout, we can send the complete process to buy products that have been in the cart using login conditions or not logged in.</p>

    <p>To store the data here I used the Firebase database where we have product data and orders based on users' checkout.</p>

    <h3 className='morereduceti'>Project Scope:</h3>

<p>The common section covers the navigation, logo, footer, and root layout for all pages.</p> 
<ul>
<li>The home page covers two components one banner and a second product. From the product section we can see the latest product and on the cart button click add one product in the cart at a time. </li>
<li>Shop page covers price filters, and category filters to filter products by range. From here we can add at a time one product in the cart.</li>
<li>The product page has detailed data on products with quantity increase and decrease options.</li> 
<li>To show the list of products or to manage, use separate product context API.</li>
<li>Add to cart process, product increase and decrease have own context API.</li>
<li>The Auth/Login process has its context API to manage logged-in users.</li>
<li>firebase uses different custom hook files where all data is fetched, inserted, and managed like operations are done and sent to respective context API.</li> 
</ul>

<h3 className='morereduceti'>How to run code locally:</h3>

<b>Frontend-</b>

<ul>
<li>Need to make a clone of the branch "login-with-context-api-firebase" from https://github.com/vishalphp/e-commerce-react-context-api-without-login.git</li>
<li>Fire the command npm i locally to install all dependencies.</li>
<li>Fire the command npm run start to start the server.</li>
<li>Fire the URL (http://localhost:3000/) on the browser.</li>
</ul>
<br/>
<b>Backend-</b>

<p>No backend setup is required to run but if want to set your firebase just need to change keys and other respective details in the env file.</p>
<br/>
<br/>
<br/>
    </div>
    </>
  )
}
