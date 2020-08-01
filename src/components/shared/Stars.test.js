import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Stars from './Stars'

describe('<Stars />', () => {
  it('renders <Stars />', () => {
    const wrapper = shallow(<Stars rating={2.5} />)
    expect(wrapper.find('.stars')).toHaveLength(1)
  })

  it('renders the right number of stars and half stars', () => {
    const wrapper1 = shallow(<Stars rating={2.5} />)
    const wrapper2 = shallow(<Stars rating={4} />)
    const wrapper3 = shallow(<Stars rating={0} />)

    expect(wrapper1.text()).toEqual('●●◐○○')
    expect(wrapper2.text()).toEqual('●●●●○')
    expect(wrapper3.text()).toEqual('○○○○○')
  })
})
