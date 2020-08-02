import React from 'react'

export default function User ({
  id,
  profile_url: profileUrl,
  image_url: imageUrl,
  name,
  date
}) {
  const formattedDate = new Date(date).toLocaleDateString()

  return (
    <div className='review-user'>
      <div
        className='img avatar'
        style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : null }}
      />

      <div className='review-user-details'>
        <div className='name'>{name}</div>
        <div className='date'>{formattedDate}</div>
      </div>
    </div>
  )
}
