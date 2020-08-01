import React, { memo } from 'react'
import PropTypes from 'prop-types'

import NotFound from './shared/NotFound'

import Visual from './Detail/Visual'
import Reviews from './Detail/Reviews'

import Hero from './shared/Hero'

import data from '../__mocks__/data.json'

const items = data.businesses

function Detail ({ match }) {
  const { restaurantId } = match.params

  const item = items.find(item => item.id === restaurantId)

  if (!item) {
    return <NotFound />
  }

  return (
    <div className='detail'>
      <Hero headline={item.name} {...item} />
      <Visual />
      <Reviews />
    </div>
  )
}

Detail.propTypes = {}

export default memo(Detail)
