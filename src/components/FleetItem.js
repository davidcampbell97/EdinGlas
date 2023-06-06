import React from 'react'

function FleetItem({image, type,}) {
  return (
    <div className='fleetItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{type}</h1>

    </div>
  )
}

export default FleetItem