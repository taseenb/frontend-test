import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

// Mock router
jest.mock('./Router', () => ({
  __esModule: true,
  default: jest.fn(() => null)
}))

describe('<App />', () => {
  test('renders without errors', () => {
    const { container, getByTestId } = render(<App />)

    expect(getByTestId('app')).toHaveProperty('id', 'frontend-test')
  })
})
