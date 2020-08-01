import React from 'react'
import Hero from './shared/Hero'
import Filters from './List/Filters'
import Results from './List/Results'

export default function List () {
  return (
    <div className='list'>
      <Hero
        headline='Restaurants'
        sub='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.'
      />
      <Filters />
      <Results />
    </div>
  )
}
