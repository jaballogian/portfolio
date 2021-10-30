import React from 'react'
import PropTypes from 'prop-types'

// MATERIAL UI CORES
import MuiAlert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const Toast = (props) => {
  const {
    open,
    setToast,
    severity,
    message,
  } = props

  const handleToastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setToast(null)
  }

  return (
    <Snackbar 
      open={open} 
      autoHideDuration={6000} 
      onClose={handleToastClose}
    >
      <MuiAlert 
        elevation={6}
        variant='filled'
        onClose={handleToastClose}
        severity={severity}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

Toast.defaultProps = {
  open: false,
  severity: 'success',
  message: '',
}

Toast.propTypes = {
  open: PropTypes.bool,
  setToast: PropTypes.func.isRequired,
  severity: PropTypes.oneOf(['error', 'success']),
  message: PropTypes.string,
}

export default Toast
