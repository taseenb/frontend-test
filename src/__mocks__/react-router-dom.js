import React from 'react'

const mockRouter = require('react-router-dom')

// Just render plain div with its children
mockRouter.BrowserRouter = ({ children }) => <div>{children}</div>

module.exports = mockRouter
