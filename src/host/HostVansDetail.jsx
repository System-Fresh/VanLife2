import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import HostVansDetailDetails from './HostVansDetailDetails'

const HostVansDetail = () => {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
    }, [])
    if (!currentVan) {
        return <h1>Loading...</h1>
    }
  return (
    <section>
        <Link
        to='../hostVans'
        className='back-button'
        >&larr; <span>Back to all vans</span>
        </Link>
        <div style={{display: 'flex', gap: '1.5rem', backgroundColor: 'white', margin: '1rem', width: '20rem'}}>
        <img src={currentVan.imageUrl} width={100} />
        <div>
            <span style={{textTransform: 'capitalize'}}>{currentVan.type}</span>
            <h4>{currentVan.name}</h4>
            <span>${currentVan.price}/day</span>
        </div>

        </div>
        
        <div className='host-nav'>
            <NavLink style={({ isActive }) =>
          isActive
            ? {
                color: '#161616',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }
            : { color: '#161616' }
        } to='.' end>
                Details
            </NavLink>

            <NavLink style={({ isActive }) =>
          isActive
            ? {
                color: '#161616',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }
            : { color: '#161616' }
        } to='detailsPricing'>
                Pricing
            </NavLink>

            <NavLink style={({ isActive }) =>
          isActive
            ? {
                color: '#161616',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }
            : { color: '#161616' }
        } to='detailsPhoto'>
                Photo
            </NavLink>

        </div>
        <Outlet context={{ currentVan }} />

    </section>
  )
}

export default HostVansDetail