import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Common() {
  return (
    <>
        <div className='leftsection'>
               <Link to="/account">Profile</Link>
               <Link to="/orders">Orders</Link>
        </div>
        <div className='rightsection'>
             <Outlet />
        </div>
    </>
  )
}
