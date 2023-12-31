import React from 'react';
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function HeaderAccount() {
  return (
    <div className='headeraccount'>
        <Link to="login" className='vk-navbar-search-toggle vk-navbar-fixed-element-3 toggle-original accountlin'><RiAccountCircleFill /></Link>
    </div>
  )
}
