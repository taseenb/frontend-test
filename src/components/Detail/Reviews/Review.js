import React, { memo } from 'react'
import PropTypes from 'prop-types'

import User from './User'
import Content from './Content'

function Review ({ id, url, text, rating, time_created: timeCreated, user }) {
  return (
    <div className='review'>
      <User {...user} date={timeCreated} />


      <Content rating={rating} text={text} />

    </div>
  )
}

Review.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
  timeCreated: PropTypes.string,
  user: PropTypes.object
}

export default memo(Review)
