import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Host = () => {
 const activeHost = {
   color: "crimson",
    fontWeight: "bold",
    textDecoration: "underline",
 }
  return (
    <>
    <nav className='host-nav'>
        <NavLink style={({ isActive }) =>
          isActive
            ? {
                color: '#161616',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }
            : { color: '#161616' }
        }  to='host'>Dashboard</NavLink>
        <NavLink style={({ isActive }) =>
          isActive
            ? {
                color: '#161616',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }
            : { color: '#161616' }
        }  to='income'>Income</NavLink>
        <NavLink style={({ isActive }) =>
          isActive
            ? {
                color: '#161616',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }
            : { color: '#161616' }
        }  to='reviews'>Reviews</NavLink>
        <NavLink style={({ isActive }) =>
          isActive
            ? {
                color: '#161616',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }
            : { color: '#161616' }
        }  to='hostVans'>Vans</NavLink>
    </nav>

    <Outlet />  
    </>
  )
}

export default Host