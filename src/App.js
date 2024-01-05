import { Route, Routes, useLocation } from 'react-router-dom';
import './asset/styles/style.scss'
//import RootLayout from './layout/RootLayout';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Productdetails from './pages/ProductDetails';
import { useContext, useEffect } from 'react';
import ProductContext from './context/ProductContext';
import useFirebase from './useFirebase';
import loading from './asset/images/loading.gif';
import NotFound from './pages/NotFound';
import Account from './components/account/Account';
import Profile from './components/account/users/Profile';
import Orders from './components/account/users/Orders';
import Common from './components/account/users/Common';
import LoginRegister from './components/account/LoginRegister';
import Document from './pages/Document';


const RootLayoutLazy = lazy(()=> import("./layout/RootLayout"));

function App() {

  const firebaseData = useFirebase();
  const productContextData = useContext(ProductContext);

  const {pathname} = useLocation();

  useEffect(()=>{
    window.scroll(0,0);
  },[pathname]);

  useEffect(()=>{
    firebaseData.getProductsList();
    //productContextData.setProductsList(getProducts(db));
  },[firebaseData.getProductsList]);


  return (
    <div className="App">
      {productContextData.productsList.response === 1 ?
      <Routes>
        <Route path='/' element={<Suspense fallback={<div className="loadingbg"><div className='midloader'><img src={loading} alt="loading..." /></div></div>} ><RootLayoutLazy /></Suspense>}>
             <Route index element={<Home />} />
             <Route path='shop' element={<Shop />} />
             <Route path="product/:id" element={<Productdetails />} />
             <Route path='cart' element={<Cart />} />
             <Route path='checkout' element={<Checkout />} />
             <Route path='thankyou' element={<ThankYou />} />
             <Route path="login" element={<LoginRegister />} />
             <Route path="document" element={<Document />} />
            
             <Route path="account" element={<Account />} >
               <Route path='profile' element={<Profile />} />
               <Route path='orders' element={<Orders />} />
             </Route>
             <Route path='*' element={<NotFound />} />

        </Route>
      </Routes>
      : <div className='loadingbg'><div className='midloader'><img src={loading} alt='loading...' /></div></div>
      } 
    </div>
  );
}

export default App;
