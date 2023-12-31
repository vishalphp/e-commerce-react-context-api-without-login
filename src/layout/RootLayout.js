import React, {useContext, useState, useEffect} from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import {Outlet} from 'react-router-dom';
import CartContext from '../context/CartContext';
import loading from '../asset/images/loading.gif';

export default function RootLayout() {

  const cartContextData = useContext(CartContext);
  const [loader, setLoader] = useState(false);

  useEffect(()=>{

    setLoader(true);
     setTimeout(()=>{
        setLoader(false);
       }, 1000);
  
  },[cartContextData.cartCtxData.products]);
 

  return (
    <>
    { loader ? 
     <div className='loadingwithoutbg'>
      <div className='midloader'><img src={loading} alt='loading...' /></div>
      </div> : ''}
      <Header/>
         <Outlet />
      <Footer />
    </>
  )
}
