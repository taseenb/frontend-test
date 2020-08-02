import React from 'react'

import Button from '../shared/Button'

function LoadMore ({ state, onLoadMore }) {
  return (
    <div className='load-more-wrapper'>
      <Button
        className={`load-more white ${state === 'LOADING' ? 'disabled' : ''}`}
        onClick={onLoadMore}
      >
        {state === 'LOADING' ? 'Loading' : 'Load more'}
      </Button>
    </div>
  )
}

export default LoadMore
