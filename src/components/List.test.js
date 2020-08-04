import * as React from 'react'
import { Provider } from 'react-redux'
import { screen, cleanup, act, waitFor } from '@testing-library/react'
import render from 'test-utils'

import List from './List'
import mockData from '../__mocks__/search-for-tests.json'

// Mock fetch hook
import useYelpSearch from '../hooks/useYelpSearch'
jest.mock('../hooks/useYelpSearch')
// console.log(useYelpSearch())

// Mock router
jest.createMockFromModule('react-router-dom')

describe('<List />', () => {
  afterEach(cleanup)

  it('renders without errors', () => {
    useYelpSearch.mockReturnValue({
      state: 'SUCCESS',
      error: null,
      data: { businesses: [], total: 0 }
    })

    const { container, getAllByTestId } = render(<List />)

    expect.assertions(4)

    expect(getAllByTestId('list')).toHaveLength(1)
    expect(getAllByTestId('hero')).toHaveLength(1)
    expect(getAllByTestId('list-results')).toHaveLength(1)
    expect(getAllByTestId('list-filters')).toHaveLength(1)
  })

  it('renders list of fetched items without errors (async)', async () => {
    useYelpSearch.mockReturnValue({
      state: 'SUCCESS',
      error: null,
      data: { ...mockData }
    })

    const { container, getAllByTestId } = render(<List />)

    expect.assertions(4)

    expect(getAllByTestId('list')).toHaveLength(1)
    expect(container.querySelectorAll('.loading-animation')).toHaveLength(0)
    expect(container.querySelectorAll('.http-error')).toHaveLength(0)

    await waitFor(() => {
      expect(getAllByTestId('list-item')).toHaveLength(8)
    })
  })
})
