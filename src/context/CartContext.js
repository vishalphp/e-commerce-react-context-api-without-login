import React, { useState } from "react";

const CartContext = React.createContext({});

export default CartContext;

export const CartContextProvider = ({children}) =>{

    const [cartCtxData, setCartCtxData ] = useState({
        products: [],
        cartTotalAmount: 0
    });

    const removeCart = ()=>{
        const updatedCartBox = {
            products: [],
            cartTotalAmount: 0,
           };
    
        setCartCtxData(updatedCartBox);
    }

    const addToCart = (product, count=1, mathstep=1) =>{ 
        //console.log(product); 
        const { products } = cartCtxData;

      const checkIncludeData =  products.includes(product);
       if(checkIncludeData){
        const proIndex = products.findIndex(cartProd => cartProd.id === product.id);
        products[proIndex]['qty'] = mathstep ===1 ? Number(products[proIndex]['qty']) + count : products[proIndex]['qty'] > 1 ? products[proIndex]['qty'] - count : products[proIndex]['qty'];
        products[proIndex]['totalprice'] = products[proIndex]['price'] * products[proIndex]['qty'];
  
        const cartCtxDataCatAmount = products.reduce((accumulator, prodCart) => accumulator + prodCart.totalprice, 0);
        
       const updatedCartBox = {
        products: products,
        cartTotalAmount: cartCtxDataCatAmount,
       };

        setCartCtxData(updatedCartBox);

      
       }else{
         product['qty'] = count;
         product['totalprice'] = product['price'] * product['qty'];

        const cartCtxDataCatAmount = products.reduce((accumulator, prodCart) => accumulator + prodCart.totalprice, 0);
        
       // const currentProducts = Array.isArray(products) ? products : [];
            const updatedProducts = [ ...products, product];
             // Create the updated cart box
            const updatedCartBox = {
                products: updatedProducts,
                cartTotalAmount: cartCtxDataCatAmount + product['totalprice'],
            };
        
        setCartCtxData(updatedCartBox);        
        
 
       }
       
    }

    return <CartContext.Provider value={{cartCtxData, addToCart, removeCart}}>{children}</CartContext.Provider>

}