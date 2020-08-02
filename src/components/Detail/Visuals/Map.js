import React from 'react'

function formatAddress (displayAddress) {
  let a = null

  if (Array.isArray(displayAddress)) {
    a = displayAddress.join(', ')
  }

  return a
}

export default function Map ({ coordinates, location }) {
  console.log(coordinates, location)

  const address = formatAddress(location.display_address)

  return (
    <div className='map-container'>
      <div className='map'>
        Render MAP here
        {address && <div className='address'>{address}</div>}
        <div className='coords'>
          Coords: {coordinates.latitude.toFixed(2)},
          {coordinates.longitude.toFixed(2)}
        </div>
      </div>
    </div>
  )
}
