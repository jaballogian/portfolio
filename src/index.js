import React from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import App from './App'

// MATERIAL UI
import { ThemeProvider } from '@material-ui/core/styles'

// STYLES
import './index.css'

// UTILS
import fontConfig from './utils/fontConfig'

ReactDOM.render(
  <ThemeProvider theme={fontConfig}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)