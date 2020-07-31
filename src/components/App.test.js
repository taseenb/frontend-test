import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from './App'

describe('<App />', () => {
  it('renders <App />', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('div#frontend-test')).toHaveLength(1)
  })
})
