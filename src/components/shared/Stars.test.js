import React from 'react'
import { render } from '@testing-library/react'

import Stars from './Stars'

describe('<Stars />', () => {
  it('renders <Stars /> with 5 characters', () => {
    const { container, getByTestId } = render(<Stars rating={2.5} />)

    expect(getByTestId('stars').textContent).toHaveLength(5)
  })

  it('renders the right number of stars and half stars', () => {
    const { getAllByTestId } = render(
      <>
        <Stars rating={2.5} />
        <Stars rating={4} />
        <Stars rating={0.5} />
        <Stars rating={0} />
      </>
    )
    const result = ['●●◐○○', '●●●●○', '◐○○○○', '○○○○○']

    getAllByTestId('stars').forEach((s, i) => {
      expect(s.textContent).toEqual(result[i])
    })
  })
})
