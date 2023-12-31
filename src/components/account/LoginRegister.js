import React from 'react'
import Login from './Login';
import Register from './Register';
import './account.scss';

export default function LoginRegister() {
  return (
    <div className='container beforeloginwrap'>
    <div className='equalspace'>
         <Login />
     </div>
     <div className='equalspace'>
         <Register />
     </div>
</div>
  )
}
