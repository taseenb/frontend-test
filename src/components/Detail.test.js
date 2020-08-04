import * as React from 'react'
import { Provider } from 'react-redux'
import { screen, cleanup, act, waitFor } from '@testing-library/react'
import render from 'test-utils'

import Detail from './Detail'
import mockData from '../__mocks__/details-for-tests.json'

// Mock fetch hook
import useYelpDetails from '../hooks/useYelpDetails'
jest.mock('../hooks/useYelpDetails')
// console.log(useYelpDetails())

// Mock React Router
const mockMatchObj = { params: { id: mockData.id } }

describe('<Detail />', () => {
  afterEach(cleanup)

  it('renders without errors', () => {
    useYelpDetails.mockReturnValue({
      state: 'SUCCESS',
      error: null,
      data: { ...mockData }
    })

    const { container, getAllByTestId, getByTestId } = render(
      <Detail match={mockMatchObj} />
    )

    expect(useYelpDetails).toBeCalledWith(mockData.id)
    expect(getAllByTestId('detail')).toHaveLength(1)
    expect(getByTestId('headline')).toHaveTextContent(mockData.name)
    expect(container.querySelectorAll('.review')).toHaveLength(0)
  })
})
