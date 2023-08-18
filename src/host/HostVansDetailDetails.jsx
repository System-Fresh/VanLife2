import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
const HostVansDetailDetails = () => {
    const { currentVan } = useOutletContext()
  
  return (
    <div style={{marginLeft: '1.2rem'}}>
       <h4>Name: {currentVan.name}</h4>
       <h5 style={{textTransform: 'capitalize'}}>Category: {currentVan.type}</h5>
       <p>Description: {currentVan.description}</p>
       <h4>Visibility: Public</h4>

    </div>
  )
}

export default HostVansDetailDetails