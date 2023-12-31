import React, {useContext, useEffect} from 'react';
import './account.scss';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import LoginContext from '../../context/LoginContext';
import useFirebase from '../../useFirebase';

export default function Account() {

  const loginCtx = useContext(LoginContext);
  const navigate = useNavigate();
  const firBase = useFirebase();
  const location = useLocation();

  useEffect(()=>{
    if((loginCtx.logindata.token === null || loginCtx.logindata.token === '') && firBase.checkAuthToken() !==loginCtx.logindata.token){
      navigate("/login");
    }
  },[loginCtx.logindata.token, location.pathname]);

   
  return (
    <>
    <div className='container'>
      <div className='flexwrp'>
      <div className='leftsection'>
               <Link to="/account/profile">Profile</Link>
               <Link to="/account/orders">Orders</Link>
        </div>
        <div className='rightsection'>
             <Outlet />
        </div>
      </div>
      </div>
    </>
  )
}
