import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home/Home'
import BeingDeveloped from './pages/BeingDeveloped/BeingDeveloped'

function App() {
  const pageList = [
    // HOME PAGE
    {
      path: '/',
      exact: true,
      component: <Home/>,
    },
    // PROJECT DETAIL PAGE
    {
      path: '/project/:projectId',
      exact: true,
      component: <BeingDeveloped/>,
    },
  ]

  return (
    <Router>
      <Switch>
        {pageList.map((item, index) => (
          <Route 
            key={index} 
            path={item['path']} 
            exact={item['exact']}
          >
            {item['component']}
          </Route>
        ))}
      </Switch>
    </Router>
  )
}

export default App