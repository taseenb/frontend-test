import reducer, { INITIAL_STATE } from './reducer'
import types from './action-types'

const { ADD_ITEMS } = types

// Mock items (restaurants) already in the state
const mockExistingItems = Object.freeze([
  { existingItem: 1 },
  { existingItem: 2 },
  { existingItem: 3 },
  { existingItem: 4 },
  { existingItem: 5 },
  { existingItem: 6 },
  { existingItem: 7 },
  { existingItem: 8 }
])

// Mock new items received from Yelp's API
const mockFetchedItems = Object.freeze([
  { newItem: 1 },
  { newItem: 2 },
  { newItem: 3 },
  { newItem: 4 },
  { newItem: 5 },
  { newItem: 6 },
  { newItem: 7 },
  { newItem: 8 }
])

describe('client filters reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should update initial/empty state with new restaurants', () => {
    const payload = Object.freeze({
      offset: 0,
      limit: 8,
      categories: null,
      items: [...mockFetchedItems]
    })

    expect(
      reducer(undefined, {
        type: ADD_ITEMS,
        payload
      })
    ).toEqual({ all: [...mockFetchedItems] })
  })

  it('should update existing items with new ones (add)', () => {
    const payload = Object.freeze({
      offset: 8,
      limit: 8,
      categories: null,
      items: [...mockFetchedItems]
    })

    const state = Object.freeze({ all: [...mockExistingItems] })
    const result = [...mockExistingItems, ...mockFetchedItems]

    expect(
      reducer(state, {
        type: ADD_ITEMS,
        payload
      })
    ).toEqual({ all: result })
  })

  it('should add or replace existing items based on offset', () => {
    const offset = 4 // will start replacing existing items from item 4

    const payload = Object.freeze({
      offset,
      limit: 8,
      categories: null,
      items: [...mockFetchedItems]
    })
    const state = Object.freeze({ all: [...mockExistingItems] })

    // Filter out items < offset
    const remainingItems = mockExistingItems.filter((item, i) => i < offset)
    const result = [...remainingItems, ...mockFetchedItems]

    expect(
      reducer(state, {
        type: ADD_ITEMS,
        payload
      })
    ).toEqual({ all: result })
  })

  it('should create a new category with new items', () => {
    const payload = Object.freeze({
      offset: 0,
      limit: 8,
      categories: 'japanese',
      items: [...mockFetchedItems]
    })

    expect(
      reducer(undefined, {
        type: ADD_ITEMS,
        payload
      })
    ).toEqual({ ...INITIAL_STATE, japanese: [...mockFetchedItems] })
  })

  it('should update a specific category while others are already populated', () => {
    const payload = Object.freeze({
      offset: 0,
      limit: 8,
      categories: 'mexican',
      items: [...mockFetchedItems]
    })

    const state = Object.freeze({
      all: [...mockExistingItems],
      chinese: [...mockExistingItems],
      italian: [...mockExistingItems]
    })

    expect(
      reducer(state, {
        type: ADD_ITEMS,
        payload
      })
    ).toEqual({ ...state, mexican: [...mockFetchedItems] })
  })
})
