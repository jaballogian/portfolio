import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// COMPONENTS
import Toast from 'components/Toast/Toast'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

// PAGES
import Home from './pages/Home/Home'
import BeingDeveloped from './pages/BeingDeveloped/BeingDeveloped'

function App() {
  const { 
    toast, 
    changeToast, 
  } = useContext(AllPagesContext)

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

  useEffect(() => {
    changeToast({
      open: true,
      message: 'Use laptop/desktop screen to get full experience', 
      severity: 'info',
      vertical: 'top',
      horizontal: 'center',
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* PAGES */}
      <Router>
        <Switch>
          {pageList.map((item, index) => (
            <Route 
              key={index} 
              path={item.path} 
              exact={item.exact}
            >
              {item.component}
            </Route>
          ))}
        </Switch>
      </Router>

      {/* TOAST */}
      {toast &&
      <Toast
        open={toast.open}
        setToast={changeToast}
        severity={toast.severity}
        message={toast.message}
        vertical={toast.vertical}
        horizontal={toast.horizontal}
      />}
    </>
  )
}

export default App