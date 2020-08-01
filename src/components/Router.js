import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Detail from './Detail'
import List from './List'
import NotFound from './shared/NotFound'

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/restaurant/:restaurantId' component={Detail} />
        <Route exact path='/' component={List} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
