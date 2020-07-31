import React from 'react'
import { shallow, mount, render } from 'enzyme'

import List from './List'

describe('<List />', () => {
  it('renders <List />', () => {
    const wrapper = shallow(<List />)

    expect(wrapper.find('div.list')).toHaveLength(1)
  })
})
