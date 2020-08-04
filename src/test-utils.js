import * as React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

// Get the store
import store from './redux/store'

export const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

const customRender = (ui, options) => {
  return render(ui, { wrapper: Providers, ...options })
}

export default customRender
