import reducer, { INITIAL_STATE } from './reducer'
import types from './action-types'

const { UPDATE_API_PARAMS, RESET_API_PARAMS } = types

describe('api params reducer (server filter)', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should update the state (offset)', () => {
    expect(
      reducer(undefined, {
        type: UPDATE_API_PARAMS,
        payload: {
          offset: 16
        }
      })
    ).toEqual({ ...INITIAL_STATE, offset: 16 })
  })

  it('should update the state (categories)', () => {
    expect(
      reducer(undefined, {
        type: UPDATE_API_PARAMS,
        payload: {
          categories: 'chinese'
        }
      })
    ).toEqual({ ...INITIAL_STATE, categories: 'chinese' })
  })

  it('should reset to initial state', () => {
    const modifiedState = { offset: 16, categories: 'chinese' }
    expect(
      reducer(modifiedState, {
        type: RESET_API_PARAMS
      })
    ).toEqual(INITIAL_STATE)
  })
})
