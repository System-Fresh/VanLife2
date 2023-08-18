import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'


const HostVansDetailPhoto = () => {
      const { currentVan } = useOutletContext()
  
  return (
    <div style={{marginLeft: '1.2rem'}}>
        <img src={currentVan.imageUrl} alt=""  width={400}/>
    </div>
  )
}

export default HostVansDetailPhoto