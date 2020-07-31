import React from 'react'

export default function Detail ({ match }) {
  const { restaurantId } = match.params

  return <div>Restaurant details {restaurantId}</div>
}
