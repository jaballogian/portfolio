import React from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import App from './App'

// MATERIAL UI
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

// STYLES
import './index.css'

// CONSTANTS
import customTheme from 'constants/customTheme'

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </ThemeProvider>,
  document.getElementById('root')
)