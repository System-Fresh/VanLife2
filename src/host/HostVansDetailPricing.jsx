import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVansDetailPricing = () => {
  const { currentVan } = useOutletContext()
  return (
    <div style={{marginLeft: '1.2rem'}}>
        <h3 >${currentVan.price}</h3>

    </div>
  )
}

export default HostVansDetailPricing