import React from 'react'
import { Provider } from 'react-redux'
import { screen, cleanup, act, waitFor } from '@testing-library/react'
import render from 'test-utils'

import data from '../../__mocks__/search-for-tests.json'

import Results from './Results'

const items = data.businesses
const len = items.length

// The json file contains:
// items (8)
// is_closed === true (3)
// is_closed === false (5)
// price === "$" (1)
// price === "$$" (5)
// price === "$$$" (2)
// price === "$$$$" (0)
// category === "newamerican" (3)
// category === "tapas" (1)
// category === "southern" (1)
// category === "japanese" (1)
// category === "mexican" (1)
// category === "steak" (1)

const DEFAULT_PROPS = Object.freeze({
  items,
  fetchState: 'SUCCESS',
  error: null,
  clientFilters: Object.freeze({ openNow: false, price: 0 })
})

describe('<Results />', () => {
  afterEach(cleanup)

  it('renders with default client filters', async () => {
    const { container, getAllByTestId, getAllByText } = render(
      <Results {...DEFAULT_PROPS} />
    )
    expect(getAllByTestId('list-item')).toHaveLength(len)
  })

  it('applies Price filter (client)', () => {
    const clientFilters = { ...DEFAULT_PROPS.clientFilters }
    const props = {
      ...DEFAULT_PROPS
    }

    clientFilters.price = 1
    const { rerender, getAllByTestId } = render(
      <Results {...props} clientFilters={clientFilters} />
    )
    expect(getAllByTestId('list-item')).toHaveLength(1)

    clientFilters.price = 2
    rerender(<Results {...props} clientFilters={clientFilters} />)
    expect(getAllByTestId('list-item')).toHaveLength(5)

    clientFilters.price = 3
    rerender(<Results {...props} clientFilters={clientFilters} />)
    expect(getAllByTestId('list-item')).toHaveLength(2)
  })

  it('applies Open Now filter (client)', () => {
    const clientFilters = { ...DEFAULT_PROPS.clientFilters }
    const props = {
      ...DEFAULT_PROPS
    }

    clientFilters.openNow = true
    const { rerender, getAllByTestId } = render(
      <Results {...props} clientFilters={clientFilters} />
    )
    expect(getAllByTestId('list-item')).toHaveLength(5)
  })
})
