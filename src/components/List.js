import React from 'react'
import Header from './List/Header'
import Filters from './List/Filters'
import Results from './List/Results'

export default function List () {
  return (
    <div className='list'>
      <Header />
      <Filters />
      <Results />
    </div>
  )
}
