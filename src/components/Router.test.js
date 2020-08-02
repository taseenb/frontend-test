import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router'

import Router from './Router'
import List from './List'
import HttpError from './shared/HttpError'

describe('Router tests', () => {
  it('redirect to 404 when page not found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/inexistent-page']}>
        <Router />
      </MemoryRouter>
    )

    expect(wrapper.find(List)).toHaveLength(0)
    expect(wrapper.find(HttpError)).toHaveLength(1)
  })

  it('valid path does not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Router />
      </MemoryRouter>
    )

    expect(wrapper.find(List)).toHaveLength(1)
    expect(wrapper.find(HttpError)).toHaveLength(0)
  })
})
