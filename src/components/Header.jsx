import React from 'react'
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
       <header>
      <Link to='/' className='site-logo'>#VanLife</Link>
      <nav>
        <NavLink className={({isActive}) => isActive ? "active-link" : null} to='/about'>About</NavLink>
        <NavLink className={({isActive}) => isActive ? "active-link" : null}  to='/vans'>Vans</NavLink>
        <NavLink className={({isActive}) => isActive ? "active-link" : null}  to='/host'>Host</NavLink>
       

      </nav>
    </header>

  )
}

export default Header