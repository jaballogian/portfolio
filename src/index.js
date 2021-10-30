import React from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import App from './App'

// CONTEXTS
import { AllPagesContextProvider } from 'contexts/AllPagesContext'

// MATERIAL UI
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

// STYLES
import './index.css'

// CONSTANTS
import customTheme from 'constants/customTheme'

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <StyledEngineProvider injectFirst>
      <AllPagesContextProvider>
        <App/>
      </AllPagesContextProvider>
    </StyledEngineProvider>
  </ThemeProvider>,
  document.getElementById('root')
)