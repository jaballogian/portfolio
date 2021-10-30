import React from 'react'
import PropTypes from 'prop-types'

// CONSTANTS
import colors from 'constants/colors'

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

  const backgroundAndTextColor = () => {
    if(severity === 'info') {
      return { 
        backgroundColor: colors.blueNCS, 
        color: 'white',
      }
    }
    else if(severity === 'success') {
      return { 
        backgroundColor: colors.carribeanGreen, 
        color: 'black',
      }
    }
    else if(severity === 'error') {
      return { 
        backgroundColor: colors.paradisePink, 
        color: 'white',
      }
    }
    else if(severity === 'warning') {
      return { 
        backgroundColor: colors.orangeYellowCrayota, 
        color: 'black',
      }
    }
  }

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
        style={{ 
          backgroundColor: backgroundAndTextColor().backgroundColor,
          color: backgroundAndTextColor().color,
        }}
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
  severity: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
  message: PropTypes.string,
  vertical: PropTypes.oneOf(['top', 'bottom']),
  horizontal: PropTypes.oneOf(['left', 'center', 'right']),
}

export default Toast
