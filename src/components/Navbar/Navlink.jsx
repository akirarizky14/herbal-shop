import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/Navbar/Navlink.css'
function Navlink({ to, children }) {
  return (
    <NavLink 
      className='navlink' 
      to={to}
    >
      {children}
    </NavLink>
  )
}

export default Navlink
