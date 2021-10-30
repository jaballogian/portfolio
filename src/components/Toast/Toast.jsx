import React from 'react'
import PropTypes from 'prop-types'

// MATERIAL UI CORES
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const Toast = (props) => {
  const {
    open,
    setToast,
    severity,
    message,
    vertical,
    horizontal,
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
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert 
        elevation={6}
        variant='filled'
        onClose={handleToastClose}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

Toast.defaultProps = {
  open: false,
  severity: 'success',
  message: '',
  vertical: 'bottom',
  horizontal: 'left',
}

Toast.propTypes = {
  open: PropTypes.bool,
  setToast: PropTypes.func.isRequired,
  severity: PropTypes.oneOf(['error', 'success']),
  message: PropTypes.string,
  vertical: PropTypes.oneOf(['top', 'bottom']),
  horizontal: PropTypes.oneOf(['left', 'center', 'right']),
}

export default Toast
