import reducer, { INITIAL_STATE } from './reducer'
import types from './action-types'

const { UPDATE_CLIENT_FILTERS, RESET_CLIENT_FILTERS } = types

describe('client filters reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should update the state (price)', () => {
    expect(
      reducer(undefined, {
        type: UPDATE_CLIENT_FILTERS,
        payload: {
          price: 3
        }
      })
    ).toEqual({ ...INITIAL_STATE, price: 3 })
  })

  it('should update the state (openNow)', () => {
    expect(
      reducer(undefined, {
        type: UPDATE_CLIENT_FILTERS,
        payload: {
          openNow: true
        }
      })
    ).toEqual({ ...INITIAL_STATE, openNow: true })
  })

  it('should reset to initial state', () => {
    const modifiedState = { openNow: true, price: 3 }
    expect(
      reducer(modifiedState, {
        type: RESET_CLIENT_FILTERS
      })
    ).toEqual(INITIAL_STATE)
  })
})
