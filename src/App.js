import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App