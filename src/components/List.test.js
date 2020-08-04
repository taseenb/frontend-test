import * as React from 'react'
import { Provider } from 'react-redux'
import { screen, cleanup, act, waitFor } from '@testing-library/react'
import render from 'test-utils'

// Get the store
import store from '../redux/store'

import List from './List'

// Mock router
jest.createMockFromModule('react-router-dom')

describe('<List />', () => {
  // Mock fetch hook
  const useYelpSearch = jest.mock('../hooks/useYelpSearch', () => ({
    __esModule: true,
    default: jest.fn(() => ({
      state: 'SUCCESS',
      error: null,
      data: { businesses: [], total: 0 }
    }))
  }))

  // beforeEach(() => {})
  afterEach(cleanup)

  it('renders without errors', async () => {
    const { container, getAllByTestId } = render(<List />)

    expect(getAllByTestId('list')).toHaveLength(1)
    expect(getAllByTestId('hero')).toHaveLength(1)
    expect(getAllByTestId('list-results')).toHaveLength(1)
    expect(getAllByTestId('list-filters')).toHaveLength(1)
  })
})
