import React from 'react'

import Button from '../shared/Button'

function LoadMore ({ loading, onLoadMore }) {
  return (
    <div className='load-more-wrapper row flex'>
      <Button
        className={`load-more white ${loading ? 'disabled' : ''}`}
        onClick={onLoadMore}
      >
        {loading ? 'Loading' : 'Load more'}
      </Button>
    </div>
  )
}

export default LoadMore
