import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='headerContainer'>
        <NavLink to='/' >HomePage</NavLink>
        <NavLink to='/favorites' >Favorites</NavLink>
        <NavLink to='/cart' >Cart</NavLink>
        
    </div>
  )
}

export default Header