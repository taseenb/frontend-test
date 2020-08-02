import React from 'react'

import Map from './Visuals/Map'

export default function Visual ({ photos, location, coordinates }) {
  return (
    <div className='detail-visuals row with-separator'>
      <Map location={location} coordinates={coordinates} />

      <div className='photos'>
        {photos
          .filter((p, i) => i < 2)
          .map(url => (
            <div key={url} className='photo-wrapper'>
              <div
                className='img photo'
                style={{ backgroundImage: `url(${url})` }}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
