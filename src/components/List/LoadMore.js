import React from 'react'

import Button from '../shared/Button'

function LoadMore ({ fetchState, onLoadMore }) {
  return (
    <div className='load-more-wrapper'>
      <Button
        className={`load-more white ${fetchState === 'LOADING' ? 'disabled' : ''}`}
        onClick={onLoadMore}
      >
        {fetchState === 'LOADING' ? 'Loading' : 'Load more'}
      </Button>
    </div>
  )
}

export default LoadMore
