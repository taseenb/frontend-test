import React from 'react'

const mockRouter = {} // require('react-router-dom')

// Just render plain div with its children
mockRouter.BrowserRouter = ({ children }) => <div>{children}</div>

mockRouter.Route = ({ children, component, render }) =>
  component || (render ? render() : null) || children

mockRouter.Link = ({ children }) => <a href='#'>{children}</a>

module.exports = mockRouter
